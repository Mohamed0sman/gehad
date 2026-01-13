'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 group ${variant === 'dark'
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
        }`}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <span className="text-sm group-hover:scale-110 transition-transform">🌐</span>
      <span className="text-sm font-medium font-primary">
        {language === 'en' ? 'Arabic' : 'English'}
      </span>
    </button>
  )
}