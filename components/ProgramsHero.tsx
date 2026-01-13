'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/Button'

export default function ProgramsHero() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section className="relative min-h-screen bg-neutral-900 overflow-hidden flex items-center justify-center py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-900/40 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="px-4 py-2 rounded-full border border-emerald-800 bg-emerald-900/30 text-emerald-300 text-sm font-medium tracking-wide">
            {t('Programs & Trainings', 'البرامج والتدريبات')}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display font-bold text-white mb-8 font-heading"
        >
          <span className="block text-neutral-200">
            {t('Programs designed', 'برامج مصممة')}
          </span>
          <span className="block text-white">
            {t('for real career growth', 'لنمو مهني حقيقي')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-h3 font-medium text-emerald-300 mb-4 font-heading">
            {t('Practical, evidence-based programs.', 'برامج عملية قائمة على الأدلة.')}
          </p>
          <p className="text-body-lg text-neutral-400 font-light leading-relaxed">
            {t(
              'Structured journeys that help you move forward with confidence. Clear outcomes. Real tools.',
              'رحلات منظمة تساعدك تتقدم بثقة. نتائج واضحة وأدوات عملية.'
            )}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {[
            { val: "5", label: t('Designed programs', 'برامج مصممة') },
            { val: "12500+", label: t('Learners', 'متدربين') },
            { val: "98%", label: t('Satisfaction', 'رضا العملاء') },
            { val: "24/7", label: t('Support', 'دعم') }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-3xl font-bold text-white mb-2 font-heading">{stat.val}</div>
              <div className="text-xs text-neutral-400 font-primary uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#programs" variant="primary" size="lg">
            {t('View programs', 'شاهد البرامج')}
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
            {t('Book consultation', 'احجز استشارة')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
