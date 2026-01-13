import type { Metadata } from 'next'
import './globals.css'
import './design-system.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: {
    default: 'Gehad Ashraf - تطوير مهني محترف | NCDA Certified Career Development Professional',
    template: '%s | Gehad Ashraf'
  },
  description: 'NCDA Certified Career Development Professional specializing in evidence-based coaching, strategic design, and human-centered approach. أخصائية تطوير مهني معتمدة من NCDA متخصصة في التدريب القائم على الأدلة والتصميم الاستراتيجي.',
  keywords: [
    'Career Development',
    'تطوير مهني',
    'MENA',
    'NCDA',
    'GCDF',
    'Career Coaching',
    'تدريب مهني',
    'Professional Development',
    'Career Counseling',
    'استشارات مهنية',
    'FCD Instructor',
    'Learning & Development',
    'Coaching',
    'HR',
    'Facilitation',
    'Emotional Intelligence',
    'Personal Branding'
  ],
  authors: [{ name: 'Gehad Ashraf' }],
  creator: 'Gehad Ashraf',
  publisher: 'Gehad Ashraf',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gehadashraf.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: 'en_US',
    url: 'https://gehadashraf.com',
    title: 'Gehad Ashraf - تطوير مهني محترف | NCDA Certified',
    description: 'NCDA Certified Career Development Professional. أخصائية تطوير مهني معتمدة من NCDA.',
    siteName: 'Gehad Ashraf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gehad Ashraf - تطوير مهني محترف',
    description: 'NCDA Certified Career Development Professional',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cairo font for Arabic */}
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
