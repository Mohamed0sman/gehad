'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/Button'

export default function Hero() {
  const { language, isRTL } = useLanguage()

  const copy = {
    badge: {
      en: 'Vision 2026: NCDA Certified Instructor',
      ar: 'رؤية 2026: مدرب معتمد من NCDA'
    },
    title1: {
      en: 'Helping professionals & organizations',
      ar: 'نساعد المحترفين والمؤسسات'
    },
    title2: {
      en: 'design careers that truly fit',
      ar: 'في تصميم مسارات مهنية ناجحة'
    },
    subtitle: {
      en: 'Using evidence-based frameworks and strategic action to turn career challenges into real opportunities for growth.',
      ar: 'باستخدام أطر عمل قائمة على الأدلة واستراتيجيات مبتكرة، نحول التحديات المهنية إلى فرص حقيقية للنمو والتميز'
    },
    primaryCta: {
      en: 'Start your journey',
      ar: 'ابدأ رحلتك المهنية'
    },
    secondaryCta: {
      en: 'Explore programs',
      ar: 'استكشف البرامج'
    },
    stats: {
      clients: { en: 'Happy Clients', ar: 'عميل سعيد' },
      years: { en: 'Years Experience', ar: 'سنوات خبرة' },
      success: { en: 'Success Rate', ar: 'معدل نجاح' }
    },
    features: {
      en: [
        'Evidence-based career counseling',
        'Leadership & soft skills development',
        'Corporate training programs',
        'Advanced academic guidance'
      ],
      ar: [
        'استشارات مهنية قائمة على الأدلة',
        'تطوير مهارات القيادة',
        'برامج مخصصة للشركات',
        'توجيه أكاديمي متقدم'
      ]
    }
  }

  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Abstract Background - Typography focused, less visual noise */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl rounded-bl-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span className="px-4 py-2 rounded-full border border-primary-800 bg-primary-900/30 text-primary-200 text-sm font-medium tracking-wide">
              {t(copy.badge.en, copy.badge.ar)}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display font-bold mb-8 leading-tight font-heading text-white tracking-tight"
          >
            <span className="block text-neutral-200">
              {t(copy.title1.en, copy.title1.ar)}
            </span>
            <span className="block text-primary-400 mt-2">
              {t(copy.title2.en, copy.title2.ar)}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-primary font-light"
          >
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button href="/booking" variant="primary" size="lg" className="min-w-[200px]">
              {t(copy.primaryCta.en, copy.primaryCta.ar)}
            </Button>

            <Button href="#programs" variant="secondary" size="lg" className="min-w-[200px] border-neutral-700 text-neutral-300 hover:bg-neutral-800">
              {t(copy.secondaryCta.en, copy.secondaryCta.ar)}
            </Button>
          </motion.div>

          {/* Social Proof - Text based */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-neutral-800"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1 font-heading">12k+</div>
              <div className="text-neutral-500 text-sm uppercase tracking-wider">{t(copy.stats.clients.en, copy.stats.clients.ar)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1 font-heading">10+</div>
              <div className="text-neutral-500 text-sm uppercase tracking-wider">{t(copy.stats.years.en, copy.stats.years.ar)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1 font-heading">95%</div>
              <div className="text-neutral-500 text-sm uppercase tracking-wider">{t(copy.stats.success.en, copy.stats.success.ar)}</div>
            </div>
          </motion.div>

          {/* Key Features - Simple text pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {(language === 'ar' ? copy.features.ar : copy.features.en).map((feature, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 bg-neutral-800/50 rounded-lg text-neutral-300 text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}