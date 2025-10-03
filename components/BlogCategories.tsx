'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  LightBulbIcon,
  HeartIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ClockIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const categories = [
  {
    id: 'all',
    name: 'جميع المقالات',
    icon: TrophyIcon,
    count: 48,
    color: 'from-purple-500 to-pink-500',
    description: 'كل المحتوى المتاح'
  },
  {
    id: 'career-guidance',
    name: 'التوجيه المهني',
    icon: AcademicCapIcon,
    count: 12,
    color: 'from-blue-500 to-cyan-500',
    description: 'اختيار المسار المهني المناسب'
  },
  {
    id: 'job-search',
    name: 'البحث عن وظيفة',
    icon: BriefcaseIcon,
    count: 8,
    color: 'from-green-500 to-emerald-500',
    description: 'نصائح للحصول على وظيفة'
  },
  {
    id: 'personal-development',
    name: 'التطوير الشخصي',
    icon: LightBulbIcon,
    count: 10,
    color: 'from-yellow-500 to-orange-500',
    description: 'تطوير المهارات والقدرات'
  },
  {
    id: 'mental-health',
    name: 'الصحة النفسية',
    icon: HeartIcon,
    count: 6,
    color: 'from-pink-500 to-rose-500',
    description: 'الدعم النفسي والعاطفي'
  },
  {
    id: 'entrepreneurship',
    name: 'ريادة الأعمال',
    icon: RocketLaunchIcon,
    count: 5,
    color: 'from-indigo-500 to-purple-500',
    description: 'بناء المشاريع الخاصة'
  },
  {
    id: 'soft-skills',
    name: 'المهارات الناعمة',
    icon: UserGroupIcon,
    count: 4,
    color: 'from-teal-500 to-cyan-500',
    description: 'التواصل والقيادة'
  },
  {
    id: 'time-management',
    name: 'إدارة الوقت',
    icon: ClockIcon,
    count: 3,
    color: 'from-violet-500 to-purple-500',
    description: 'تنظيم الوقت والأولويات'
  }
]

export default function BlogCategories() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
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
            <span className="gradient-text">اختار الموضوع</span>
            <span className="text-gray-700"> اللي يهمك 📂</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            مقالات متنوعة في كل المجالات اللي تهمك في رحلتك المهنية
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
              className={`group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
                selectedCategory === category.id 
                  ? 'border-purple-300 bg-purple-50' 
                  : 'border-transparent hover:border-purple-200'
              }`}
            >
              {/* Icon and count */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                    {category.count} مقال
                  </span>
                </div>
              </div>
              
              {/* Category info */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {category.description}
              </p>
              
              {/* Selection indicator */}
              {selectedCategory === category.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4 flex items-center gap-2 text-purple-600"
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm font-semibold">محدد</span>
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
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-purple-100">
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
                    <span>📝 {selected?.count} مقال متاح</span>
                    <span>•</span>
                    <span>🔄 يتم التحديث أسبوعياً</span>
                  </div>
                </>
              )
            })()}
          </div>
        </motion.div>

        {/* Quick filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <span className="text-gray-600 font-semibold">فلترة سريعة:</span>
          {['الأحدث', 'الأكثر قراءة', 'المقالات المميزة', 'للمبتدئين'].map((filter, index) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors"
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}