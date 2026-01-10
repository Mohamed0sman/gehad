'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 group ${
        variant === 'dark'
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
      }`}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <GlobeAltIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'Arabic' : 'English'}
      </span>
    </button>
  )
}