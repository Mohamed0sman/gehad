'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  ClockIcon,
  UserGroupIcon,
  BriefcaseIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function ProfessionalStats() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const stats = [
    {
      icon: BriefcaseIcon,
      value: '10+',
      label: t('years of professional practice', 'سنوات من الممارسة المهنية'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ClockIcon,
      value: '10,400+',
      label: t('training hours delivered', 'ساعة تدريب مقدمة'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      value: '1,000+',
      label: t('career coaching sessions', 'جلسات استشارات مهنية'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GlobeAltIcon,
      value: t('Thousands', 'آلاف'),
      label: t('trained across MENA', 'مدربين في منطقة الشرق الأوسط وشمال أفريقيا'),
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('Professional Impact', 'التأثير المهني')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-inter"
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
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-playfair">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600 font-inter leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
