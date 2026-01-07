'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <GlobeAltIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  )
}