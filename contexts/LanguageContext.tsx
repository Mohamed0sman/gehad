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
  const [language, setLanguageState] = useState<Language>('en') // Default to English

  useEffect(() => {
    // Always default to English; ignore saved Arabic preference
    const saved = (typeof window !== 'undefined') ? (localStorage.getItem('language') as Language | null) : null
    if (saved === 'en') {
      setLanguageState('en')
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }
    try {
      // persist English preference only
      localStorage.setItem('language', 'en')
    } catch (e) {}
  }, [language])

  // Expose a no-op/guarded setter to prevent switching away from English
  const setLanguage = (lang: Language) => {
    // enforce English only
    if (lang === 'en') setLanguageState('en')
    else setLanguageState('en')
  }

  const isRTL = false

  return (
    <LanguageContext.Provider value={{ language: 'en', setLanguage, isRTL }}>
      <div className="ltr" dir="ltr">
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