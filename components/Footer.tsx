'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const navigation = {
    main: [
      { en: 'Home', ar: 'الرئيسية', href: '/', icon: '🏠' },
      { en: 'About', ar: 'من أنا', href: '/about', icon: '👩‍💼' },
      { en: 'Programs', ar: 'البرامج', href: '/programs', icon: '📚' },
      { en: 'Resources', ar: 'الموارد', href: '/resources', icon: '📄' },
      { en: 'Blog', ar: 'المدونة', href: '/blog', icon: '✍️' },
      { en: 'Contact', ar: 'اتصل بي', href: '/contact', icon: '📞' },
    ],
    services: [
      { en: 'Self-Leadership Program', ar: 'برنامج القيادة الذاتية', href: '/programs#selfLeadership' },
      { en: 'Professional Effectiveness', ar: 'الفاعلية المهنية', href: '/programs#professionalEffectiveness' },
      { en: 'Freelancing Program', ar: 'برنامج العمل الحر', href: '/programs#freelancing' },
      { en: 'Career Readiness', ar: 'الاستعداد المهني', href: '/programs#careerReadiness' },
    ],
    social: [
      {
        name: 'WhatsApp',
        href: 'https://wa.me/201015362414',
        icon: '💬',
        color: 'hover:text-green-400'
      },
      {
        name: 'Facebook',
        href: 'https://facebook.com/gehad.ashraf',
        icon: '📘',
        color: 'hover:text-blue-400'
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com/gehad.ashraf',
        icon: '📷',
        color: 'hover:text-pink-400'
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/gehad-ashraf',
        icon: '💼',
        color: 'hover:text-blue-600'
      }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">{t('Gehad Ashraf', 'جهاد أشرف')}</h3>
                <p className="text-sm text-gray-300 font-inter">{t('Career Development Professional', 'خبير تطوير المسارات المهنية')}</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed font-inter mb-6">
              {t(
                'I help you build a successful career path through tailored guidance and evidence-based programs.',
                'أساعدك في بناء مسار مهني ناجح من خلال استشارات مخصصة وبرامج تدريبية مبتكرة قائمة على الأدلة والبحث العلمي.'
              )}
            </p>
            
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 ${item.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{item.icon}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 font-playfair">{t('Quick Links', 'روابط سريعة')}</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-inter group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="group-hover:translate-x-2 transition-transform">{t(item.en, item.ar)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 font-playfair">{t('Services', 'خدماتنا')}</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-inter block hover:translate-x-2 transform"
                  >
                    {t(item.en, item.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 font-playfair">{t('Contact', 'تواصل معي')}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 font-inter">
                <EnvelopeIcon className="w-5 h-5 text-cyan-400" />
                <a href="mailto:gfeps@yahoo.com" className="hover:text-cyan-400 transition-colors">
                  gfeps@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-inter">
                <PhoneIcon className="w-5 h-5 text-cyan-400" />
                <a href="tel:+201015362414" className="hover:text-cyan-400 transition-colors">
                  +20 10 15362414
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-inter">
                <MapPinIcon className="w-5 h-5 text-cyan-400" />
                <span className="hover:text-cyan-400 transition-colors">
                  {t('Cairo, Egypt', 'القاهرة، مصر')}
                </span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <RocketLaunchIcon className="w-5 h-5" />
                {t('Book a Consultation', 'احجز استشارة')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 font-inter"
            >
              <span>{t('© 2024 Gehad Ashraf. All rights reserved.', '© 2024 جهاد أشرف. جميع الحقوق محفوظة.')}</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>{t('Made with ❤️ in Egypt', 'صُنع بـ ❤️ في مصر')}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm text-gray-400 font-inter"
            >
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                {t('Privacy Policy', 'سياسة الخصوصية')}
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                {t('Terms', 'الشروط والأحكام')}
              </Link>
              <Link href="/sitemap" className="hover:text-cyan-400 transition-colors">
                {t('Sitemap', 'خريطة الموقع')}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
