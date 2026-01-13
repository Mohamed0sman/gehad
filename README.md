# 🚀 Gehad Ashraf - Professional Website

A modern, responsive, and bilingual (English/Arabic) website for career development professional Gehad Ashraf. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎨 Design & UI
- **Clean, Professional Design**: Modern typography-focused design without unnecessary icons
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Bilingual Support**: Complete Arabic/English language switching with RTL support
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 🏗️ Technical Stack
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Headless UI**: Accessible UI components

### 📱 Core Functionality
- **Hero Section**: Compelling introduction with key metrics
- **Program Showcase**: Detailed training programs with interactive cards
- **Testimonials**: Client success stories with ratings
- **Contact Forms**: Professional contact and booking forms
- **Social Proof**: Trust indicators and partner logos
- **Vision 2026**: Professional goals and roadmap

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gehad
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
gehad/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── design-system.css  # Design tokens and component styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Footer.tsx        # Site footer
│   └── ...               # Other components
├── contexts/             # React contexts
│   └── LanguageContext.tsx # Internationalization
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🎨 Design System

The website uses a comprehensive design system with:

### Color Palette
- **Primary**: Executive blue theme (#0A2540)
- **Accent**: Emerald, Cyan, and Gold variants
- **Neutral**: Carefully crafted grayscale

### Typography
- **Primary Font**: Inter (system font)
- **Heading Font**: Playfair Display (serif)
- **Arabic Font**: Cairo

### Components
- **Buttons**: 4 variants (primary, secondary, accent, ghost) in 3 sizes
- **Cards**: Interactive cards with hover effects
- **Forms**: Accessible form components
- **Navigation**: Responsive navigation with mobile menu

## 🌍 Internationalization

Complete bilingual support including:
- **Language Toggle**: Smooth switching between English and Arabic
- **RTL Support**: Proper right-to-left layout for Arabic
- **Contextual Content**: All text, including UI elements, fully translated
- **Cultural Adaptation**: Appropriate formatting and conventions

## 📊 Performance Features

- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Loading**: Optimized bundle sizes and lazy loading

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Export static site
npm run export
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments from the main branch.

### Environment Variables
Create a `.env.local` file for local development:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Gehad Ashraf.

## 👤 Contact

**Gehad Ashraf**
- Email: gfeps@yahoo.com
- Phone: +20 10 15362414
- LinkedIn: [gehad-ashraf](https://linkedin.com/in/gehad-ashraf)

## 🎯 Project Goals

This website serves as a professional platform for:
- Showcasing career development expertise
- Providing program information
- Facilitating client bookings
- Building trust through testimonials
- Supporting the Vision 2026 initiative

---

**Built with ❤️ for professional career development**