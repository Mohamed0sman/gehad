'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Button from '@/components/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { language, isRTL } = useLanguage()

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
      en: 'Career Development',
      ar: 'تطوير المسارات المهنية'
    },
    cta: {
      en: 'Book Session',
      ar: 'احجز جلسة'
    },
    menu: {
      open: { en: 'Menu', ar: 'قائمة' },
      close: { en: 'Close', ar: 'إغلاق' }
    }
  }

  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const navigateTo = (href: string) => {
    setIsMenuOpen(false)
    router.push(href)
  }

  return (
    <header
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/98 backdrop-blur-xl shadow-sm border-b border-neutral-200'
        : 'bg-white/95 backdrop-blur-lg border-b border-transparent'
        }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">

          {/* Typographic Logo */}
          <Link
            href="/"
            className="group flex flex-col justify-center"
          >
            <h1 className="text-2xl font-bold font-heading text-neutral-900 group-hover:text-primary-600 transition-colors">
              {t(copy.name.en, copy.name.ar)}
            </h1>
            <p className="text-xs tracking-wider uppercase text-neutral-500 font-medium">
              {t(copy.role.en, copy.role.ar)}
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(item.href)
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
              >
                {t(item.en, item.ar)}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher variant="light" />
            <Button href="/booking" variant="primary" size="md">
              {t(copy.cta.en, copy.cta.ar)}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden px-4 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen
              ? t(copy.menu.close.en, copy.menu.close.ar)
              : t(copy.menu.open.en, copy.menu.open.ar)
            }
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-xl p-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigateTo(item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActive(item.href)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                >
                  {t(item.en, item.ar)}
                </button>
              ))}
              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-4">
                <Button href="/booking" variant="primary" className="w-full">
                  {t(copy.cta.en, copy.cta.ar)}
                </Button>
                <div className="flex justify-center">
                  <LanguageSwitcher variant="light" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}