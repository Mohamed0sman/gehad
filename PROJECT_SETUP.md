# Gehad Ashraf | Career Development Professional Website

A modern, bilingual (English & Arabic) Next.js web application for a career development coach and facilitator. Built with cutting-edge tech for performance, accessibility, and user experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or 20.x (LTS recommended)
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd gehad

# Install dependencies
npm install

# Copy environment template
cp .env.local.example .env.local

# Fill in your configuration in .env.local
# See .env.local.example for all available options
```

### Development Server

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start

# Or deploy directly to Vercel
npm run deploy  # (if Vercel CLI installed)
```

## 📁 Project Structure

```
gehad/
├── app/                    # Next.js app router
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── programs/          # Programs listing
│   ├── booking/           # Booking page
│   ├── contact/           # Contact page
│   ├── resources/         # Resources page
│   ├── blog/              # Blog posts
│   ├── layout.tsx         # Root layout
│   └── api/               # API routes (contact form, webhooks)
├── components/            # Reusable React components
│   ├── Hero.tsx          # Homepage hero section
│   ├── SocialProof.tsx    # Metrics & social proof
│   ├── SignatureApproach.tsx # Service approach section
│   ├── BookingForm.tsx    # Booking form component
│   ├── BookingSteps.tsx   # Booking process steps
│   ├── ContactForm.tsx    # Contact form component
│   └── ...               # Other components
├── contexts/              # React context providers
│   ├── LanguageContext.tsx   # Language/RTL switching
│   └── LocaleContext.tsx     # Locale management
├── hooks/                 # Custom React hooks
│   └── useTranslation.ts  # Translation hook
├── lib/                   # Utility functions & configs
│   ├── translations.ts    # All text (EN + AR)
│   ├── i18n.ts           # i18n configuration
│   └── utils.ts          # Helper functions
├── public/                # Static assets
│   ├── lead-magnet.pdf    # Career Clarity Framework (PDF)
│   └── logos/             # Partner logos
├── styles/                # Global styles
├── .env.local            # Environment variables (create from .env.local.example)
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
└── package.json          # Dependencies & scripts
```

## 🌐 Features

### ✅ Bilingual Support (English & Arabic)
- Language switcher in header
- Full RTL support for Arabic
- All content translated
- Persistent language preference

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Framer Motion for animations
- Works on all devices (mobile, tablet, desktop)

### 🎯 Key Pages

1. **Homepage** (`/`)
   - Hero section with CTAs
   - Social proof & metrics
   - Signature approach (3-point value prop)
   - Featured programs
   - Testimonials

2. **About** (`/about`)
   - Hero section with personal branding
   - My Story (long-form narrative)
   - Professional background
   - Education & certifications
   - Values & philosophy

3. **Programs** (`/programs`)
   - Program cards (Self-Leadership, Professional Effectiveness, etc.)
   - Program comparison
   - Detailed descriptions

4. **Booking** (`/booking`)
   - Booking form
   - Process steps
   - Booking confirmation
   - Lead magnet download

5. **Contact** (`/contact`)
   - Contact form
   - Contact information
   - Social media links
   - WhatsApp integration

## ⚙️ Configuration

### Environment Variables

Create `.env.local` from `.env.local.example` and configure:

```bash
# Email provider (choose one)
SENDGRID_API_KEY=your-key
# or
SMTP_HOST=smtp.gmail.com
SMTP_PASSWORD=your-password

# Booking
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other settings...
```

See `.env.local.example` for complete list of options.

### Translations

Edit `lib/translations.ts` to update copy:

```typescript
export const translations = {
  en: {
    hero: {
      title: 'Your title here',
      // ...
    },
    // ...
  },
  ar: {
    // Arabic translations...
  }
}
```

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS Variables** - Brand colors defined in `app/globals.css`
- **Framer Motion** - Animations and transitions

## 📧 Contact Form Integration

### Option 1: SendGrid (Recommended)

```bash
npm install @sendgrid/mail
```

Set in `.env.local`:
```
SENDGRID_API_KEY=your-sendgrid-api-key
FORM_SUBMISSION_EMAIL=your-email@example.com
```

### Option 2: Gmail SMTP

Set in `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Option 3: Custom Webhook

Set in `.env.local`:
```
NEXT_PUBLIC_BOOKING_WEBHOOK=https://your-service.com/webhook
```

## 📚 Lead Magnet

The Career Clarity Framework PDF is available at `/public/lead-magnet.pdf`.

- **Current Status**: Placeholder (replace with actual PDF)
- **Location**: `/public/lead-magnet.pdf`
- **Download Link**: Added to homepage hero

To replace:
1. Create/export your PDF as `lead-magnet.pdf`
2. Place in `/public/` directory
3. Download link is already wired in `components/Hero.tsx`

## 📊 Analytics

### Google Analytics Setup

1. Create GA4 property at analytics.google.com
2. Get Measurement ID
3. Set in `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

Analytics script is auto-included in layout.

### Error Tracking (Sentry)

1. Create Sentry project
2. Get DSN
3. Set in `.env.local`:
   ```
   NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
   ```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Vercel Configuration**: Already configured in `vercel.json`

### Other Platforms

#### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

#### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing & QA

```bash
# Build check
npm run build

# Lint check
npm run lint

# Type check (if TypeScript is enabled)
npx tsc --noEmit
```

### Manual Testing Checklist

- [ ] Homepage loads and is responsive
- [ ] Language switcher toggles EN/AR
- [ ] Hero CTAs link correctly
- [ ] Booking form submits
- [ ] Contact form submits
- [ ] All images load
- [ ] Navigation works
- [ ] Footer links work
- [ ] Testimonials display
- [ ] Programs load

## 📦 Dependencies

Key packages:
- **Next.js** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Heroicons** - Icon library
- **next-intl** (optional) - i18n library

## 🔒 Security

- Environment variables never exposed to client (check `NEXT_PUBLIC_` prefix)
- Form data validated server-side
- CORS properly configured
- Content Security Policy headers (if using middleware)

## 📝 License

Your chosen license here.

## 👤 Author

Gehad Ashraf  
Career Development Professional | NCDA Certified  
[Website](https://gehad-ashraf.com)

---

## 🆘 Support & Troubleshooting

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Language switching not working?
- Check `LanguageContext.tsx` is in app layout
- Verify `useTranslation()` hook is properly imported
- Clear browser localStorage: `localStorage.clear()`

## 📞 Contact

For issues or questions:
- Email: gfeps@yahoo.com
- WhatsApp: +20 1234567890
- Website: https://gehad-ashraf.com
