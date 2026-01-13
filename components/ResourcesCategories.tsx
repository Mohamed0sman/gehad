'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'all',
    nameEn: 'All Resources',
    nameAr: 'جميع الموارد',
    iconChar: '✨',
    count: 55,
    color: 'from-slate-700 to-slate-500',
    descriptionEn: 'All available materials',
    descriptionAr: 'كل المواد المتاحة'
  },
  {
    id: 'career-guidance',
    nameEn: 'Career Guidance',
    nameAr: 'التوجيه المهني',
    iconChar: '🎓',
    count: 15,
    color: 'from-slate-700 to-slate-500',
    descriptionEn: 'Guides for choosing career paths',
    descriptionAr: 'دلائل اختيار المسار المهني'
  },
  {
    id: 'cv-templates',
    nameEn: 'CV Templates',
    nameAr: 'قوالب السيرة الذاتية',
    iconChar: '📄',
    count: 8,
    color: 'from-slate-700 to-slate-500',
    descriptionEn: 'Professional editable CV templates',
    descriptionAr: 'قوالب CV احترافية'
  },
  {
    id: 'job-search',
    nameEn: 'Job Search',
    nameAr: 'البحث عن وظيفة',
    iconChar: '💼',
    count: 12,
    color: 'from-slate-700 to-slate-500',
    descriptionEn: 'Job search strategies',
    descriptionAr: 'استراتيجيات البحث عن عمل'
  },
  {
    id: 'personal-development',
    nameEn: 'Personal Development',
    nameAr: 'التطوير الشخصي',
    iconChar: '💡',
    count: 10,
    color: 'from-slate-700 to-slate-500',
    descriptionEn: 'Self-development worksheets',
    descriptionAr: 'أوراق عمل تطوير الذات'
  },
  {
    id: 'skills-assessment',
    nameEn: 'Skills Assessment',
    nameAr: 'تقييم المهارات',
    iconChar: '📊',
    count: 6,
    color: 'from-slate-700 to-slate-500',
    descriptionEn: 'Ability and skills tests',
    descriptionAr: 'اختبارات تقييم القدرات'
  },
  {
    id: 'soft-skills',
    nameEn: 'Soft Skills',
    nameAr: 'المهارات الناعمة',
    iconChar: '👥',
    count: 4,
    color: 'from-slate-700 to-slate-500',
    descriptionEn: 'Communication skills development',
    descriptionAr: 'تطوير مهارات التواصل'
  }
]

export default function ResourcesCategories() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { language } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading"
          >
            <span className="gradient-text">{language === 'ar' ? 'اختار نوع المورد' : 'Choose a resource type'}</span>
            <span className="text-neutral-700"> {language === 'ar' ? 'اللي محتاجه 📂' : "you're looking for 📂"}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 font-primary"
          >
            {language === 'ar' ? 'موارد متنوعة في كل المجالات اللي تهمك في رحلتك المهنية' : 'A variety of resources across topics that matter for your career journey'}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border-2 ${selectedCategory === category.id
                  ? 'border-emerald-300 bg-emerald-50'
                  : 'border-transparent hover:border-emerald-200'
                }`}
            >
              {/* Icon and count */}
              <div className="text-center mb-3">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow text-2xl`}>
                  {category.iconChar}
                </div>

                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white font-primary`}>
                  {category.count} {language === 'ar' ? 'مورد' : 'items'}
                </span>
              </div>

              {/* Category info */}
              <h3 className="text-sm font-bold text-neutral-900 mb-1 group-hover:text-emerald-600 transition-colors text-center font-heading">
                {language === 'ar' ? (category as any).nameAr : (category as any).nameEn}
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed text-center font-primary">
                {language === 'ar' ? (category as any).descriptionAr : (category as any).descriptionEn}
              </p>

              {/* Selection indicator */}
              {selectedCategory === category.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-3 flex items-center justify-center gap-1 text-emerald-600"
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-xs font-semibold font-primary">{language === 'ar' ? 'محدد' : 'Selected'}</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Selected category info */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-emerald-100">
            {(() => {
              const selected = categories.find(cat => cat.id === selectedCategory)
              return (
                <>
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${selected?.color} rounded-full flex items-center justify-center shadow-lg text-3xl`}>
                    {selected?.iconChar}
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-heading">
                    {language === 'ar' ? (selected as any)?.nameAr : (selected as any)?.nameEn}
                  </h3>

                  <p className="text-neutral-600 mb-4 font-primary">
                    {language === 'ar' ? (selected as any)?.descriptionAr : (selected as any)?.descriptionEn}
                  </p>

                  <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 font-primary">
                    <span>📄 {selected?.count} {language === 'ar' ? 'مورد متاح' : 'items available'}</span>
                    <span>•</span>
                    <span>🆓 {language === 'ar' ? 'مجاني تماماً' : 'Completely free'}</span>
                    <span>•</span>
                    <span>📥 {language === 'ar' ? 'تحميل فوري' : 'Instant download'}</span>
                  </div>
                </>
              )
            })()}
          </div>
        </motion.div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <span className="text-neutral-600 font-semibold font-primary">{language === 'ar' ? 'إجراءات سريعة:' : 'Quick actions:'}</span>
          {(language === 'ar'
            ? ['الأحدث', 'الأكثر تحميلاً', 'المواد المميزة', 'للمبتدئين']
            : ['Newest', 'Most Downloaded', 'Featured', 'For Beginners']
          ).map((action, index) => (
            <motion.button
              key={action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-neutral-100 hover:bg-emerald-100 text-neutral-700 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors font-primary"
            >
              {action}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}