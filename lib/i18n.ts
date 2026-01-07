export type Locale = 'en' | 'ar'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'ar']

export const localeNames = {
  en: 'English',
  ar: 'العربية'
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ar' : 'en'
}