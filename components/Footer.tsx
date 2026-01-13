'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/Button'

export default function Footer() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const navigation = {
    main: [
      { en: 'Home', ar: 'الرئيسية', href: '/' },
      { en: 'About', ar: 'من أنا', href: '/about' },
      { en: 'Programs', ar: 'البرامج', href: '/programs' },
      { en: 'Resources', ar: 'الموارد', href: '/resources' },
      { en: 'Blog', ar: 'المدونة', href: '/blog' },
      { en: 'Contact', ar: 'اتصل بي', href: '/contact' },
    ],
    services: [
      { en: 'Self-Leadership Program', ar: 'برنامج القيادة الذاتية', href: '/programs#selfLeadership' },
      { en: 'Professional Effectiveness', ar: 'الفاعلية المهنية', href: '/programs#professionalEffectiveness' },
      { en: 'Freelancing Program', ar: 'برنامج العمل الحر', href: '/programs#freelancing' },
      { en: 'Career Readiness', ar: 'الاستعداد المهني', href: '/programs#careerReadiness' },
    ],
    social: [
      { name: 'WhatsApp', href: 'https://wa.me/201015362414', label: 'WA' },
      { name: 'Facebook', href: 'https://facebook.com/gehad.ashraf', label: 'FB' },
      { name: 'Instagram', href: 'https://instagram.com/gehad.ashraf', label: 'IG' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/gehad-ashraf', label: 'LI' }
    ]
  }

  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Main Footer Content */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold font-heading text-white mb-1">{t('Gehad Ashraf', 'جهاد أشرف')}</h3>
              <p className="text-xs text-neutral-400 font-primary uppercase tracking-wider">{t('Career Development', 'تطوير المسارات المهنية')}</p>
            </div>

            <p className="text-neutral-400 leading-relaxed font-primary mb-8 text-sm">
              {t(
                'Helping you build a successful career path through tailored guidance and evidence-based programs.',
                'أساعدك في بناء مسار مهني ناجح من خلال استشارات مخصصة وبرامج تدريبية مبتكرة.'
              )}
            </p>

            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 border border-neutral-700 rounded-lg flex items-center justify-center text-xs font-bold text-neutral-400 hover:text-white hover:border-neutral-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 font-heading">{t('Quick Links', 'روابط سريعة')}</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-primary text-sm"
                  >
                    {t(item.en, item.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 font-heading">{t('Services', 'خدماتنا')}</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-primary text-sm"
                  >
                    {t(item.en, item.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 font-heading">{t('Contact', 'تواصل معي')}</h4>
            <div className="space-y-4 mb-8">
              <a href="mailto:gfeps@yahoo.com" className="block text-neutral-400 hover:text-white transition-colors text-sm font-primary">
                gfeps@yahoo.com
              </a>
              <a href="tel:+201015362414" className="block text-neutral-400 hover:text-white transition-colors text-sm font-primary">
                +20 10 15362414
              </a>
              <span className="block text-neutral-500 text-sm font-primary">
                {t('Cairo, Egypt', 'القاهرة، مصر')}
              </span>
            </div>

            <Button href="/booking" variant="primary" size="md">
              {t('Book a Consultation', 'احجز استشارة')}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 bg-neutral-950">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-500 text-xs font-primary">
              <span>{t('© 2024 Gehad Ashraf. All rights reserved.', '© 2024 جهاد أشرف. جميع الحقوق محفوظة.')}</span>
            </div>

            <div className="flex items-center gap-6 text-xs text-neutral-500 font-primary">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t('Privacy Policy', 'سياسة الخصوصية')}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t('Terms', 'الشروط والأحكام')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}