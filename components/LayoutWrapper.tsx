'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { language, isRTL } = useLanguage()

  useEffect(() => {
    // Update document attributes when language changes
    document.documentElement.lang = language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    
    // Update body classes for font switching
    if (language === 'ar') {
      document.body.className = 'font-cairo antialiased'
    } else {
      document.body.className = 'font-inter antialiased'
    }
  }, [language, isRTL])

  return <>{children}</>
}