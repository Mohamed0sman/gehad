'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { translations } = useTranslation()
  const pathname = usePathname()

  const navigation = [
    { name: translations.nav.home, href: '/', icon: '🏠' },
    { name: translations.nav.about, href: '/about', icon: '👩‍💼' },
    { name: translations.nav.programs, href: '/programs', icon: '📚' },
    { name: translations.nav.blog, href: '/blog', icon: '✍️' },
    { name: translations.nav.contact, href: '/contact', icon: '📞' },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [mobileMenuOpen])

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'
    setLanguage(newLanguage)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="w-12 h-12 brand-btn rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(var(--brand-green-400))] rounded-full flex items-center justify-center">
                <SparklesIcon className="w-2 h-2 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold brand-gradient-text font-playfair">
                {translations.common.brandName}
              </h1>
              <p className="text-sm text-gray-600 font-medium font-inter">
                {translations.footer.title}
              </p>
            </div>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 group font-inter ${
                  isActive 
                    ? 'brand-btn text-white shadow-lg' 
                    : 'text-gray-700 hover:text-slate-800 hover:bg-slate-50'
                }`}>
              <span className="flex items-center gap-2">
                <span className="text-base">{item.icon}</span>
                {item.name}
              </span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[rgb(var(--brand-green-400))] rounded-full"></div>
                )}
              </Link>
            )
          })}
        </div>
        
        {/* Language Switcher & CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 group font-inter"
            aria-label="Switch Language"
          >
            <GlobeAltIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">
              {language === 'en' ? 'العربية' : 'English'}
            </span>
          </button>

          {/* CTA Button */}
          <Link
            href="/booking"
            className="group relative brand-cta px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
          >
            <span className="flex items-center gap-2">
              🚀 {translations.nav.booking}
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300"
            aria-label="Switch Language"
          >
            <GlobeAltIcon className="w-4 h-4" />
            <span className="text-xs font-medium font-inter">
              {language === 'en' ? 'AR' : 'EN'}
            </span>
          </button>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((s) => !s)}
            className="relative p-3 rounded-xl brand-cta text-white transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open main menu'}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[rgb(var(--brand-green-400))] rounded-full animate-pulse"></div>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          {/* Backdrop */}
          <div 
            role="button"
            tabIndex={0}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            onKeyDown={(e) => { if (e.key === 'Escape') setMobileMenuOpen(false) }}
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6 py-6 sm:max-w-sm border-l border-blue-200 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-12 h-12 brand-cta rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-playfair">
                    {translations.common.brandName}
                  </h2>
                  <p className="text-sm text-gray-600 font-inter">
                    {translations.footer.title}
                  </p>
                </div>
              </Link>
              
              <button
                type="button"
                className="p-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3 mb-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 font-inter ${
                      isActive 
                        ? 'brand-cta text-white shadow-lg transform scale-105' 
                          : 'text-gray-700 hover:bg-white hover:shadow-md hover:scale-105'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.name}</span>
                    {isActive && <div className="ml-auto w-2 h-2 bg-[rgb(var(--brand-green-400))] rounded-full animate-pulse"></div>}
                  </Link>
                )
              })}
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Link
                href="/booking"
                className="flex items-center justify-center gap-3 brand-cta font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">🚀</span>
                <span>{translations.nav.booking}</span>
              </Link>
              
              {/* Language Switcher Mobile */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 text-gray-700 font-semibold px-6 py-4 rounded-2xl hover:bg-white transition-all duration-300 font-inter"
              >
                <GlobeAltIcon className="w-5 h-5" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              
              {/* Quick Contact */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-200">
                <p className="text-sm text-gray-600 text-center mb-2 font-inter">
                  {translations.common.quickContact}
                </p>
                <div className="flex justify-center gap-4">
                  <a href="https://wa.me/201234567890" className="flex items-center gap-2 text-green-600 font-semibold font-inter">
                    <span>💬</span>
                    <span>{translations.social.whatsapp}</span>
                  </a>
                  <a href="tel:+201234567890" className="flex items-center gap-2 text-blue-600 font-semibold font-inter">
                    <span>📞</span>
                    <span>{translations.common.call}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-center text-sm text-gray-500 font-inter">
                {translations.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
