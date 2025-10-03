'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'الرئيسية', href: '/', icon: '🏠' },
  { name: 'من أنا', href: '/about', icon: '👩‍💼' },
  { name: 'البرامج', href: '/programs', icon: '📚' },
  { name: 'الموارد', href: '/resources', icon: '📄' },
  { name: 'المدونة', href: '/blog', icon: '✍️' },
  { name: 'اتصل بي', href: '/contact', icon: '📞' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-xl">ج</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center">
                <SparklesIcon className="w-2 h-2 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">جهاد أشرف</h1>
              <p className="text-sm text-gray-600 font-medium">التدريب والاستشارات المهنية</p>
            </div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="relative p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">فتح القائمة الرئيسية</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-lime-400 rounded-full"></div>
                )}
              </Link>
            )
          })}
        </div>
        
        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/booking"
            className="group relative bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              🚀 احجز جلسة مجانية
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
          </Link>
        </div>
      </nav>

      {/* Enhanced Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6 py-6 sm:max-w-sm border-l border-blue-200 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">ج</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">جهاد أشرف</h2>
                  <p className="text-sm text-gray-600">مدربة معتمدة</p>
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
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105' 
                        : 'text-gray-700 hover:bg-white hover:shadow-md hover:scale-105'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.name}</span>
                    {isActive && <div className="ml-auto w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>}
                  </Link>
                )
              })}
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Link
                href="/booking"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">🚀</span>
                <span>احجز جلستك المجانية</span>
              </Link>
              
              {/* Quick Contact */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-200">
                <p className="text-sm text-gray-600 text-center mb-2">تواصل سريع</p>
                <div className="flex justify-center gap-4">
                  <a href="https://wa.me/201234567890" className="flex items-center gap-2 text-green-600 font-semibold">
                    <span>💬</span>
                    <span>واتساب</span>
                  </a>
                  <a href="tel:+201234567890" className="flex items-center gap-2 text-blue-600 font-semibold">
                    <span>📞</span>
                    <span>اتصال</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-center text-sm text-gray-500">
                © 2024 جهاد أشرف - جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}