'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProfessionalStats() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const stats = [
    {
      iconChar: '💼',
      value: '10+',
      label: t('years of professional practice', 'سنوات من الممارسة المهنية'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      iconChar: '⏱️',
      value: '10,400+',
      label: t('training hours delivered', 'ساعة تدريب مقدمة'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      iconChar: '👥',
      value: '1,000+',
      label: t('career coaching sessions', 'جلسات استشارات مهنية'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      iconChar: '🌍',
      value: t('Thousands', 'آلاف'),
      label: t('trained across MENA', 'مدربين في منطقة الشرق الأوسط وشمال أفريقيا'),
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white section-standard" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2 font-bold text-neutral-900 mb-6 font-heading"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {t('Professional Impact', 'التأثير المهني')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto font-primary"
          >
            {t(
              'Numbers that reflect years of dedication to empowering careers and transforming lives.',
              'أرقام تعكس سنوات من التفاني في تمكين المسارات المهنية وتغيير الحياة.'
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-xl hover-lift text-4xl text-white`}>
                {stat.iconChar}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3 font-heading">
                {stat.value}
              </div>
              <div className="text-lg text-neutral-600 font-primary leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}