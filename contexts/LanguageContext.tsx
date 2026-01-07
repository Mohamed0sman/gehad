'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en') // Default to English

  useEffect(() => {
    const saved = (typeof window !== 'undefined') ? (localStorage.getItem('language') as Language | null) : null
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }
    try {
      localStorage.setItem('language', language)
    } catch (e) {}
  }, [language])

  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}