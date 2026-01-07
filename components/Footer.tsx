'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const { translations } = useTranslation()

  const navigation = {
    main: [
      { name: translations.nav.home, href: '/', icon: '🏠' },
      { name: translations.nav.about, href: '/about', icon: '👩‍💼' },
      { name: translations.nav.programs, href: '/programs', icon: '📚' },
      { name: translations.nav.resources, href: '/resources', icon: '📄' },
      { name: translations.nav.blog, href: '/blog', icon: '✍️' },
      { name: translations.nav.contact, href: '/contact', icon: '📞' },
    ],
    services: [
      { name: translations.programs.selfLeadership.title, href: '/programs#selfLeadership' },
      { name: translations.programs.bestVersion.title, href: '/programs#bestVersion' },
      { name: translations.programs.freelancingSkills.title, href: '/programs#freelancingSkills' },
      { name: translations.programs.strategies36.title, href: '/programs#strategies36' },
    ],
    social: [
      {
        name: translations.social.whatsapp,
        href: 'https://wa.me/201234567890',
        icon: '💬',
        color: 'hover:text-green-400'
      },
      {
        name: translations.social.facebook,
        href: 'https://facebook.com/gehad.ashraf',
        icon: '📘',
        color: 'hover:text-blue-400'
      },
      {
        name: translations.social.instagram,
        href: 'https://instagram.com/gehad.ashraf',
        icon: '📷',
        color: 'hover:text-pink-400'
      },
      {
        name: translations.social.linkedin,
        href: 'https://linkedin.com/in/gehad-ashraf',
        icon: '💼',
        color: 'hover:text-blue-500'
      },
      {
        name: translations.social.tiktok,
        href: 'https://tiktok.com/@gehad.ashraf',
        icon: '🎵',
        color: 'hover:text-purple-400'
      },
      {
        name: translations.social.youtube,
        href: 'https://youtube.com/@gehad-ashraf',
        icon: '📺',
        color: 'hover:text-red-400'
      }
    ]
  }

  const stats = [
    { number: '500+', label: translations.footer.stats.students, icon: '🎓' },
    { number: '98%', label: translations.footer.stats.satisfaction, icon: '⭐' },
    { number: '3+', label: translations.footer.stats.experience, icon: '💼' },
    { number: '24/7', label: translations.footer.stats.support, icon: '💬' }
  ]

  return (
    <footer className="relative brand-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[rgba(var(--brand-blue-500),0.2)] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[rgba(var(--brand-green-400),0.2)] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(var(--brand-cyan-500,6,182,212),0.15)] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        
        {/* Top section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
            <div className="text-4xl sm:text-6xl mb-4">🚀</div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-playfair">
              {translations.footer.cta.title}
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-inter">
              {translations.footer.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 brand-cta font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 font-inter"
              >
                <RocketLaunchIcon className="w-6 h-6" />
                <span>{translations.footer.cta.button1}</span>
              </Link>
              
              <Link
                href="https://wa.me/201234567890"
                target="_blank"
                className="inline-flex items-center gap-3 border-2 border-green-400/50 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-green-400/10 transition-all duration-300 font-inter"
              >
                <span className="text-2xl">💬</span>
                <span>{translations.footer.cta.button2}</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1 font-playfair">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 brand-btn rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-playfair">
                  {translations.common.brandName}
                </h3>
                <p className="text-[rgb(var(--brand-green-400))] font-semibold font-inter">
                  {translations.footer.title}
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 font-inter">
              {translations.footer.description}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:info@gehad-ashraf.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <EnvelopeIcon className="w-5 h-5 text-[rgb(var(--brand-green-400))]" />
                <span className="text-sm font-inter">
                  info@gehad-ashraf.com
                </span>
              </a>
              
              <a
                href="tel:+201234567890"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <PhoneIcon className="w-5 h-5 text-[rgb(var(--brand-green-400))]" />
                <span className="text-sm font-inter">
                  +20 123 456 7890
                </span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-[rgb(var(--brand-green-400))]" />
                <span className="text-sm font-inter">
                  Cairo, Egypt
                </span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-inter">
              <SparklesIcon className="w-5 h-5 text-[rgb(var(--brand-green-400))]" />
              {translations.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-inter">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-inter">
              <HeartIcon className="w-5 h-5 text-[rgb(var(--brand-green-400))]" />
              {translations.footer.services}
            </h3>
            <ul className="space-y-3 mb-8">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors block font-inter"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social media */}
            <h4 className="text-white font-semibold mb-4 font-inter">
              {translations.footer.social}
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 ${item.color} group`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs text-gray-400 group-hover:text-white font-inter">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-inter">
              <span>{translations.footer.copyright}</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                {translations.footer.privacy}
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                {translations.footer.terms}
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400 font-inter">
              <span>{translations.footer.madeWith}</span>
              <HeartIcon className="w-4 h-4 text-red-400" />
              <span>{translations.footer.inEgypt}</span>
              <span className="text-lg">🇪🇬</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
