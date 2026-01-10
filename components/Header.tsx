'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { en: 'Home', ar: 'الرئيسية', href: '/' },
    { en: 'About', ar: 'من أنا', href: '/about' },
    { en: 'Programs', ar: 'البرامج', href: '/programs' },
    { en: 'Blog', ar: 'المدونة', href: '/blog' },
    { en: 'Contact', ar: 'اتصل بي', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  const copy = {
    name: {
      en: 'Gehad Ashraf',
      ar: 'جهاد أشرف'
    },
    role: {
      en: 'Career Development Professional',
      ar: 'خبير تطوير المسارات المهنية'
    },
    cta: {
      en: 'Book Session',
      ar: 'احجز جلسة'
    }
  }

  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const navigateTo = (href: string) => {
    setIsMenuOpen(false)
    router.push(href)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transform transition-all duration-300 hover:scale-105"
          >
            <div className={`w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:rotate-3`}>
              <span className="text-white font-bold text-xl">GA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-300 font-playfair">
                {t(copy.name.en, copy.name.ar)}
              </h1>
              <p className="text-sm text-gray-600 font-inter">
                {t(copy.role.en, copy.role.ar)}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => navigateTo(item.href)}
                className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 font-inter rounded-xl ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50 shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                {t(item.en, item.ar)}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher variant="light" />
            <Link
              href="/booking"
              className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-inter overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5" />
                {t(copy.cta.en, copy.cta.ar)}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl rounded-b-3xl mx-4 mb-4 overflow-hidden">
            <div className="px-6 py-6 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => navigateTo(item.href)}
                  className={`block w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 font-inter ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {t(item.en, item.ar)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
 }
