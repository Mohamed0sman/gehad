# Deployment Guide | Gehad Ashraf Website

Complete guide for deploying the career development website to production.

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured in `.env.local`
- [ ] Email sending setup (SendGrid, SMTP, or webhook)
- [ ] Analytics (Google Analytics) configured
- [ ] Lead magnet PDF in place at `/public/lead-magnet.pdf`
- [ ] Contact email configured to receive form submissions
- [ ] Booking system configured (Calendly URL or custom webhook)
- [ ] All images optimized and in `/public` folder
- [ ] Social media links updated
- [ ] Phone numbers and contact info verified
- [ ] WhatsApp Business number configured
- [ ] SEO metadata reviewed and updated
- [ ] Build tested locally: `npm run build`
- [ ] No console errors or warnings

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the official Next.js hosting platform and provides the best integration.

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Career development website"

# Create repository on github.com
# Then push:
git remote add origin https://github.com/yourusername/gehad-ashraf.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

Or:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Vercel auto-detects Next.js configuration
5. Add environment variables:
   - Copy all from `.env.local`
   - Paste in Vercel dashboard under Settings → Environment Variables
6. Click "Deploy"

#### Step 3: Configure Domain

```bash
# Link custom domain
vercel domains add gehad-ashraf.com

# Update DNS records at domain provider:
# Name: gehad-ashraf.com
# Type: CNAME
# Value: cname.vercel-dns.com.
```

Or do this in Vercel dashboard:
1. Settings → Domains
2. Add `gehad-ashraf.com`
3. Vercel shows DNS records to add at your registrar

#### Step 4: Enable HTTPS

Vercel auto-provisions SSL certificates. Just wait a few minutes after domain is verified.

---

### Option 2: Netlify

Alternative serverless hosting platform.

#### Step 1: Connect GitHub

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Authorize GitHub
4. Select `gehad-ashraf` repository

#### Step 2: Configure Build

Netlify auto-detects Next.js. Settings should be:
- **Build command**: `npm run build`
- **Publish directory**: `.next`

#### Step 3: Add Environment Variables

1. Go to Site Settings → Build & Deploy → Environment
2. Add all variables from `.env.local`
3. Trigger new deploy

#### Step 4: Configure Domain

1. Domain Settings → Custom domains
2. Add `gehad-ashraf.com`
3. Update DNS at registrar with Netlify nameservers

---

### Option 3: Self-Hosted (VPS/Dedicated Server)

For AWS, DigitalOcean, Linode, or your own server.

#### Prerequisites

- Linux server (Ubuntu 20.04+ recommended)
- Node.js 18+ installed
- Nginx or Apache reverse proxy
- SSL certificate (Let's Encrypt)
- PM2 or systemd for process management

#### Step 1: Setup Server

```bash
# SSH into server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs

# Install PM2
npm i -g pm2

# Install Git
apt install -y git

# Create app directory
mkdir -p /var/www/gehad-ashraf
cd /var/www/gehad-ashraf
```

#### Step 2: Clone Repository

```bash
# Clone your repo (use your GitHub URL)
git clone https://github.com/yourusername/gehad-ashraf.git .

# Install dependencies
npm install --production

# Create .env.local with production values
nano .env.local
# Paste your environment variables
```

#### Step 3: Build for Production

```bash
# Build the Next.js app
npm run build

# Start with PM2
pm2 start npm --name "gehad-ashraf" -- start
pm2 save
pm2 startup
```

#### Step 4: Setup Nginx Reverse Proxy

```bash
# Install Nginx
apt install -y nginx

# Create config file
sudo nano /etc/nginx/sites-available/gehad-ashraf

# Paste this configuration:
```

```nginx
server {
    listen 80;
    server_name gehad-ashraf.com www.gehad-ashraf.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name gehad-ashraf.com www.gehad-ashraf.com;

    # SSL certificates (from Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/gehad-ashraf.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/gehad-ashraf.com/privkey.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location /_next/static {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Step 5: Enable SSL Certificate

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot certonly --nginx -d gehad-ashraf.com -d www.gehad-ashraf.com

# Enable Nginx config
ln -s /etc/nginx/sites-available/gehad-ashraf /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

#### Step 6: Auto-Renew SSL

```bash
# Certbot auto-renewal
systemctl enable certbot.timer
systemctl start certbot.timer
```

---

### Option 4: Docker Deployment

Deploy using Docker containers.

#### Step 1: Create Dockerfile

Already created in project root if needed. If not:

```dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
```

#### Step 2: Build Image

```bash
docker build -t gehad-ashraf:latest .
```

#### Step 3: Run Container

```bash
docker run -d \
  --name gehad-ashraf \
  -p 3000:3000 \
  -e SENDGRID_API_KEY=your-key \
  -e FORM_SUBMISSION_EMAIL=your-email \
  gehad-ashraf:latest
```

#### Step 4: Use Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      SENDGRID_API_KEY: ${SENDGRID_API_KEY}
      FORM_SUBMISSION_EMAIL: ${FORM_SUBMISSION_EMAIL}
      NEXT_PUBLIC_CALENDLY_URL: ${NEXT_PUBLIC_CALENDLY_URL}
    restart: always
```

Then run:

```bash
docker-compose up -d
```

---

## 🔧 Post-Deployment Configuration

### 1. Verify Deployment

```bash
# Check if site is live
curl https://gehad-ashraf.com

# Check homepage renders
# Visit: https://gehad-ashraf.com
```

### 2. Setup Email

#### SendGrid

```bash
# Create SendGrid account
# Get API key from Settings → API Keys

# Add to environment variables (Vercel/deployment)
SENDGRID_API_KEY=SG.xxx

# Test sending
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header "Authorization: Bearer $SENDGRID_API_KEY" \
  --header 'Content-Type: application/json'
```

#### Gmail SMTP

```bash
# Enable 2-factor authentication on Gmail
# Create app password: myaccount.google.com → Security → App passwords

# Add to environment variables
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### 3. Setup Analytics

```bash
# Google Analytics 4
# 1. Create property at analytics.google.com
# 2. Get Measurement ID (G-XXXXXXXXXX)
# 3. Add to environment variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4. Monitor Performance

#### Vercel Analytics

1. Vercel Dashboard → Insights
2. Monitor Web Vitals, Performance, Errors
3. Set up alerts for errors

#### Sentry (Error Tracking)

```bash
# Create account at sentry.io
# Create project for Next.js
# Get DSN

# Add to environment variables
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx

# Monitor errors at sentry.io
```

### 5. Setup Backups

**If self-hosted:**

```bash
# Setup daily backups
crontab -e

# Add this line to backup database/files daily
0 2 * * * /usr/local/bin/backup.sh
```

**If Vercel:**

Use GitHub as backup (automatic)

```bash
# GitHub Actions will auto-deploy on push
# Check Settings → Secrets for env vars
```

---

## 📊 Monitoring & Maintenance

### Daily Checks

- [ ] Website loads without errors
- [ ] Contact forms send properly
- [ ] Booking form works
- [ ] All links function
- [ ] Images load

### Weekly Tasks

- [ ] Check analytics for traffic
- [ ] Review error logs (Sentry)
- [ ] Check form submissions
- [ ] Test WhatsApp integration

### Monthly Tasks

- [ ] Update content if needed
- [ ] Review SEO performance
- [ ] Check uptime monitoring
- [ ] Update dependencies: `npm update`

### Security Checks

```bash
# Audit dependencies for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Check SSL certificate expiration (if self-hosted)
certbot certificates
```

---

## 🚨 Troubleshooting

### Site Not Loading

1. Check if deployment succeeded
   - Vercel: Check "Deployments" tab
   - Netlify: Check "Deploy" log

2. Check environment variables
   - All required vars set?
   - Typos in variable names?

3. Check logs
   - Browser console (F12)
   - Server logs: `pm2 logs gehad-ashraf`
   - Vercel dashboard error logs

### Contact Form Not Sending

1. Verify email credentials
   ```bash
   # Test SendGrid API
   curl https://api.sendgrid.com/v3/mail/send \
     -H "Authorization: Bearer $SENDGRID_API_KEY"
   ```

2. Check form submission endpoint
   - Logs: `POST /api/contact`
   - Check `app/api/contact/route.ts`

3. Review error in Sentry or console

### SSL Certificate Issues

```bash
# Verify certificate
openssl s_client -connect gehad-ashraf.com:443

# Renew if expired
certbot renew
```

### High Memory Usage

```bash
# Kill and restart Node process
pm2 restart gehad-ashraf

# Check memory limits
pm2 monit
```

---

## 📈 Performance Optimization

### Vercel Speed Insights

1. Dashboard → Insights → Web Vitals
2. Monitor Core Web Vitals:
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

### Optimize Images

```bash
# Already using Next.js Image component
# Images auto-optimized for different devices

# Add new images optimized:
# 1. Convert to WebP
# 2. Use Image component from Next.js
# 3. Add width/height props
```

### Cache Strategy

Already configured in Next.js:
- Static pages: 30 days cache
- Dynamic pages: No cache
- Images: Long-term caching

---

## 🎯 Deployment Success Checklist

After deployment, verify:

- [ ] Site loads on desktop, tablet, mobile
- [ ] Language switcher works (EN/AR)
- [ ] Hero CTAs link correctly
- [ ] Contact form submits and receives email
- [ ] Booking form submits
- [ ] Lead magnet downloads
- [ ] Images all load
- [ ] Videos (if any) play
- [ ] Footer links work
- [ ] Analytics tracking works
- [ ] SEO meta tags present
- [ ] Site is mobile responsive
- [ ] Navigation works
- [ ] Search (if implemented) works
- [ ] SSL certificate valid and secure

---

## 📞 Support

For deployment issues:
- Check logs in your hosting provider dashboard
- Review error messages in browser console
- Contact hosting support

Good luck! 🚀
