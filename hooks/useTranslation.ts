'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations, getTranslation } from '@/lib/translations'

export function useTranslation() {
  const { language, isRTL } = useLanguage()

  const t = (key: string): string => {
    return getTranslation(language, key)
  }

  return {
    t,
    language,
    isRTL,
    translations: translations[language]
  }
}