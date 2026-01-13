'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'all',
    nameEn: 'All articles',
    nameAr: 'جميع المقالات',
    iconChar: '🏆',
    count: 48,
    color: 'from-purple-500 to-pink-500',
    descriptionEn: 'All available content',
    descriptionAr: 'كل المحتوى المتاح'
  },
  {
    id: 'career-guidance',
    nameEn: 'Career guidance',
    nameAr: 'التوجيه المهني',
    iconChar: '🎓',
    count: 12,
    color: 'from-blue-500 to-cyan-500',
    descriptionEn: 'Choosing the right career direction',
    descriptionAr: 'اختيار المسار المهني المناسب'
  },
  {
    id: 'job-search',
    nameEn: 'Job search',
    nameAr: 'البحث عن وظيفة',
    iconChar: '💼',
    count: 8,
    color: 'from-green-500 to-emerald-500',
    descriptionEn: 'Practical tips to land a job',
    descriptionAr: 'نصائح للحصول على وظيفة'
  },
  {
    id: 'personal-development',
    nameEn: 'Personal development',
    nameAr: 'التطوير الشخصي',
    iconChar: '💡',
    count: 10,
    color: 'from-yellow-500 to-orange-500',
    descriptionEn: 'Building skills and mindset',
    descriptionAr: 'تطوير المهارات والقدرات'
  },
  {
    id: 'mental-health',
    nameEn: 'Mental wellbeing',
    nameAr: 'الصحة النفسية',
    iconChar: '❤️',
    count: 6,
    color: 'from-pink-500 to-rose-500',
    descriptionEn: 'Emotional and mental support',
    descriptionAr: 'الدعم النفسي والعاطفي'
  },
  {
    id: 'entrepreneurship',
    nameEn: 'Entrepreneurship',
    nameAr: 'ريادة الأعمال',
    iconChar: '🚀',
    count: 5,
    color: 'from-indigo-500 to-purple-500',
    descriptionEn: 'Building and launching projects',
    descriptionAr: 'بناء المشاريع الخاصة'
  },
  {
    id: 'soft-skills',
    nameEn: 'Soft skills',
    nameAr: 'المهارات الناعمة',
    iconChar: '👥',
    count: 4,
    color: 'from-teal-500 to-cyan-500',
    descriptionEn: 'Communication and leadership',
    descriptionAr: 'التواصل والقيادة'
  },
  {
    id: 'time-management',
    nameEn: 'Time management',
    nameAr: 'إدارة الوقت',
    iconChar: '⏰',
    count: 3,
    color: 'from-violet-500 to-purple-500',
    descriptionEn: 'Priorities and scheduling',
    descriptionAr: 'تنظيم الوقت والأولويات'
  }
]

export default function BlogCategories() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section
      className="py-16 bg-neutral-50 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-h2 font-bold text-neutral-900 mb-4 font-heading"
          >
            <span className="text-primary-600">{t('Choose a topic', 'اختار الموضوع')}</span>
            <span className="text-neutral-700"> {t('that matters to you 📂', 'اللي يهمك 📂')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-body-lg text-neutral-600 font-primary"
          >
            {t(
              'Explore articles across topics that support your career journey and personal growth.',
              'مقالات متنوعة في كل المجالات اللي تهمك في رحلتك المهنية'
            )}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border-2 ${selectedCategory === category.id
                  ? 'border-primary-300 bg-primary-50'
                  : 'border-transparent hover:border-primary-200'
                }`}
            >
              {/* Icon and count */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-md text-2xl`}>
                  {category.iconChar}
                </div>

                <div className={isRTL ? 'text-left' : 'text-right'}>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                    {category.count} {t('articles', 'مقال')}
                  </span>
                </div>
              </div>

              {/* Category info */}
              <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors font-heading">
                {language === 'ar' ? category.nameAr : category.nameEn}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed font-primary">
                {language === 'ar' ? category.descriptionAr : category.descriptionEn}
              </p>

              {/* Selection indicator */}
              {selectedCategory === category.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4 flex items-center gap-2 text-primary-600"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-sm font-semibold">{t('Selected', 'محدد')}</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}