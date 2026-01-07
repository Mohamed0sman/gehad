import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Gehad Ashraf - Career Development Professional | NCDA Certified',
  description: 'NCDA Certified Career Development Professional specializing in evidence-based coaching, strategic design, and human-centered approach. Preparing to become an FCD Instructor.',
  keywords: 'Career Development, FCD Instructor, GCDF, NCDA, Learning & Development, Coaching, HR, Facilitation, Emotional Intelligence, Personal Branding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}