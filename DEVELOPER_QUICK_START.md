# 🚀 Developer Quick Start Guide

Welcome to Gehad Ashraf's professional website project! This guide will help you get up and running quickly.

## 📋 Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm or yarn** package manager
- **Git** for version control
- **VS Code** (recommended IDE with extensions below)

### Recommended VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 🎯 Quick Setup

### 1. Clone & Install
```bash
# Clone the repository
git clone <repository-url>
cd gehad

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Architecture

### File Structure
```
gehad/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles & utilities
│   ├── design-system.css  # Design tokens & components
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx          # Homepage composition
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Landing section
│   ├── Footer.tsx        # Site footer
│   └── [Component].tsx   # Feature components
├── contexts/             # React contexts
│   └── LanguageContext.tsx # i18n state management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── types/                # TypeScript definitions
```

## 🎨 Design System

### Color Palette
```css
/* Executive Blue Theme */
--brand-primary-900: #0A2540;    /* Primary brand color */
--color-primary-600: #0284c7;    /* Interactive elements */
--color-neutral-50: #fafafa;     /* Background */
--color-neutral-900: #18181b;    /* Text */
```

### Typography Scale
```css
/* Responsive Typography */
--text-display: 4rem;      /* Hero titles */
--text-h1: 3rem;           /* Page titles */
--text-h2: 2.25rem;        /* Section titles */
--text-body: 1rem;         /* Body text */
```

### Component Classes
```css
/* Ready-to-use Components */
.btn                 /* Base button styles */
.btn-primary         /* Primary action button */
.btn-secondary       /* Secondary button */
.card                /* Base card component */
.card-elevated       /* Enhanced card with shadow */
```

## 🌍 Internationalization

### Language Support
- **English**: Default language
- **Arabic**: RTL layout support
- **Context**: `useLanguage()` hook

### Usage Example
```typescript
import { useLanguage } from '@/contexts/LanguageContext'

function MyComponent() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => language === 'ar' ? ar : en
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <h1>{t('Welcome', 'مرحباً')}</h1>
    </div>
  )
}
```

## 🧩 Common Components

### Button Component
```typescript
import Button from '@/components/Button'

<Button 
  href="/contact" 
  variant="primary" 
  size="lg"
>
  Contact Me
</Button>
```

### Card Layout
```typescript
<div className="card p-6 hover:scale-105 transition-transform">
  <h3 className="font-heading text-xl mb-4">Title</h3>
  <p className="font-primary text-neutral-600">Content</p>
</div>
```

### Responsive Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <div key={index} className="card">
      {/* Card content */}
    </div>
  ))}
</div>
```

## 🎭 Animation Patterns

### Framer Motion Setup
```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2>Animated Content</h2>
</motion.div>
```

### Stagger Animation
```typescript
<div className="space-y-4">
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {item.content}
    </motion.div>
  ))}
</div>
```

## 📱 Responsive Design

### Breakpoint System
```css
/* Tailwind Breakpoints */
sm: 640px     /* Small tablets */
md: 768px     /* Tablets */
lg: 1024px    /* Small laptops */
xl: 1280px    /* Laptops */
2xl: 1536px   /* Large screens */
```

### Mobile-First Approach
```typescript
<div className="
  text-base          /* Mobile: 16px */
  md:text-lg        /* Tablet: 18px */
  lg:text-xl        /* Desktop: 20px */
  px-4              /* Mobile: 16px padding */
  md:px-6           /* Tablet: 24px padding */
  lg:px-8           /* Desktop: 32px padding */
">
  Content
</div>
```

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm test             # Run tests
npm run type-check   # TypeScript checking

# Utilities
npm run clean        # Clean build files
npm run analyze      # Bundle analyzer
```

## 🎯 Adding New Components

### 1. Create Component File
```typescript
// components/NewComponent.tsx
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NewComponent() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => language === 'ar' ? ar : en
  
  return (
    <section className="py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-heading font-bold text-center mb-12"
        >
          {t('Section Title', 'عنوان القسم')}
        </motion.h2>
        
        {/* Component content */}
      </div>
    </section>
  )
}
```

### 2. Add to Page
```typescript
// app/page.tsx
import NewComponent from '@/components/NewComponent'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Hero />
        <NewComponent />  {/* Add here */}
        <Footer />
      </div>
    </main>
  )
}
```

## 🐛 Debugging Tips

### Common Issues & Solutions

**1. Hydration Mismatch**
```typescript
// Solution: Use useEffect for client-only code
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```

**2. RTL Layout Issues**
```css
/* Use logical properties */
margin-inline-start: 1rem;  /* Instead of margin-left */
padding-inline: 1rem;       /* Instead of padding-left/right */
```

**3. Animation Performance**
```css
/* Add will-change for better performance */
.animated-element {
  will-change: transform, opacity;
}
```

## 🚀 Performance Tips

### Optimization Best Practices
1. **Use Next.js Image component** for all images
2. **Lazy load components** below the fold
3. **Minimize bundle size** with dynamic imports
4. **Optimize fonts** with next/font
5. **Use CSS custom properties** for theming

### Performance Monitoring
```typescript
// Add to layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 📝 Code Standards

### TypeScript
- Use **strict mode**
- Define **interfaces** for all props
- Use **proper typing** for events and refs

### CSS
- Follow **BEM methodology** for custom classes
- Use **Tailwind utilities** primarily
- Keep **custom CSS minimal**

### Components
- Use **PascalCase** for component names
- Keep components **focused and small**
- Use **composition over inheritance**

## 🎉 Ready to Code!

You're all set! The project follows modern React/Next.js best practices with:

✅ **Type Safety** with TypeScript
✅ **Modern Styling** with Tailwind CSS
✅ **Smooth Animations** with Framer Motion
✅ **Internationalization** with custom context
✅ **Professional Design** with custom design system
✅ **Performance Optimized** with Next.js 14
✅ **Accessibility Compliant** with ARIA standards

### Need Help?
- Check existing components for patterns
- Use browser dev tools for debugging
- Test on multiple devices and browsers
- Follow the established code patterns

**Happy coding! 🚀**