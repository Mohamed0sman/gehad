'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const categories = [
  {
    id: 'all',
    name: 'جميع الموارد',
    icon: SparklesIcon,
    count: 55,
    color: 'from-blue-500 to-cyan-500',
    description: 'كل المواد المتاحة'
  },
  {
    id: 'career-guidance',
    name: 'التوجيه المهني',
    icon: AcademicCapIcon,
    count: 15,
    color: 'from-blue-500 to-cyan-500',
    description: 'دلائل اختيار المسار المهني'
  },
  {
    id: 'cv-templates',
    name: 'قوالب السيرة الذاتية',
    icon: DocumentTextIcon,
    count: 8,
    color: 'from-green-500 to-emerald-500',
    description: 'قوالب CV احترافية'
  },
  {
    id: 'job-search',
    name: 'البحث عن وظيفة',
    icon: BriefcaseIcon,
    count: 12,
    color: 'from-yellow-500 to-orange-500',
    description: 'استراتيجيات البحث عن عمل'
  },
  {
    id: 'personal-development',
    name: 'التطوير الشخصي',
    icon: LightBulbIcon,
    count: 10,
    color: 'from-cyan-500 to-sky-500',
    description: 'أوراق عمل تطوير الذات'
  },
  {
    id: 'skills-assessment',
    name: 'تقييم المهارات',
    icon: ChartBarIcon,
    count: 6,
    color: 'from-green-500 to-lime-500',
    description: 'اختبارات تقييم القدرات'
  },
  {
    id: 'soft-skills',
    name: 'المهارات الناعمة',
    icon: UserGroupIcon,
    count: 4,
    color: 'from-teal-500 to-cyan-500',
    description: 'تطوير مهارات التواصل'
  }
]

export default function ResourcesCategories() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="gradient-text">اختار نوع المورد</span>
            <span className="text-gray-700"> اللي محتاجه 📂</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            موارد متنوعة في كل المجالات اللي تهمك في رحلتك المهنية
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
              className={`group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border-2 ${
                selectedCategory === category.id 
                  ? 'border-emerald-300 bg-emerald-50' 
                  : 'border-transparent hover:border-emerald-200'
              }`}
            >
              {/* Icon and count */}
              <div className="text-center mb-3">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                  {category.count} مورد
                </span>
              </div>
              
              {/* Category info */}
              <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors text-center">
                {category.name}
              </h3>
              
              <p className="text-xs text-gray-600 leading-relaxed text-center">
                {category.description}
              </p>
              
              {/* Selection indicator */}
              {selectedCategory === category.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-3 flex items-center justify-center gap-1 text-emerald-600"
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-xs font-semibold">محدد</span>
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
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${selected?.color} rounded-full flex items-center justify-center shadow-lg`}>
                    {selected?.icon && <selected.icon className="w-8 h-8 text-white" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selected?.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {selected?.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <span>📄 {selected?.count} مورد متاح</span>
                    <span>•</span>
                    <span>🆓 مجاني تماماً</span>
                    <span>•</span>
                    <span>📥 تحميل فوري</span>
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
          <span className="text-gray-600 font-semibold">إجراءات سريعة:</span>
          {['الأحدث', 'الأكثر تحميلاً', 'المواد المميزة', 'للمبتدئين'].map((action, index) => (
            <motion.button
              key={action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors"
            >
              {action}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}