import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo'
})

export const metadata: Metadata = {
  title: 'جهاد أشرف - التدريب والاستشارات النفسية والمهنية',
  description: 'مدربة معتمدة NCDA متخصصة في التوجيه النفسي والمهني للطلاب',
  keywords: 'تدريب, استشارات نفسية, توجيه مهني, NCDA, جهاد أشرف',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  )
}