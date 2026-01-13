'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/Button'

export default function AboutHero() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section className="relative min-h-screen bg-neutral-900 overflow-hidden flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="px-4 py-2 rounded-full border border-primary-800 bg-primary-900/30 text-primary-200 text-sm font-medium tracking-wide">
            {t('NCDA Certified Professional', 'مدرب معتمد من NCDA')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display font-bold mb-6 text-white font-heading"
        >
          <span className="block text-neutral-200">
            {t('About Gehad Ashraf', 'عن جهاد أشرف')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-h3 font-medium text-primary-200 mb-8 font-heading"
        >
          {t(
            'Empowering careers through evidence-based practice',
            'تمكين المسارات المهنية من خلال الممارسة القائمة على الأدلة'
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body-lg text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-primary font-light"
        >
          {t(
            'Discover my journey and how I help professionals and organizations design careers with intention and purpose.',
            'اكتشف رحلتي من الإحصاء إلى علم النفس، وكيف أساعد المحترفين والمؤسسات في تصميم مسارات مهنية بنية وهدف.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button href="/booking" variant="primary" size="lg">
            {t('Book a session', 'احجز جلسة')}
          </Button>

          <Button href="#story" variant="secondary" size="lg" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
            {t('My story', 'قصتي')}
          </Button>
        </motion.div>

        {/* Stats - Text Based */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-neutral-800 pt-12"
        >
          <div>
            <div className="text-3xl font-bold text-white mb-1 font-heading">NCDA</div>
            <div className="text-neutral-500 text-sm font-primary">{t('Certified', 'شهادة معتمدة')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1 font-heading">12k+</div>
            <div className="text-neutral-500 text-sm font-primary">{t('People supported', 'عميل تم مساعدته')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1 font-heading">10+</div>
            <div className="text-neutral-500 text-sm font-primary">{t('Years of experience', 'سنوات خبرة')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}