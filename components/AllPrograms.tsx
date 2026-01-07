'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  ChartBarIcon,
  TrophyIcon,
  HeartIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  FireIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AllPrograms() {
  const { translations } = useTranslation()
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const programs = translations.allPrograms.items.map((program: any, index: number) => {
    // Static configuration mapping based on index or ID
    const icons = [AcademicCapIcon, UserGroupIcon, LightBulbIcon, ChartBarIcon, TrophyIcon, HeartIcon]
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-yellow-500 to-orange-500',
      'from-green-500 to-emerald-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-rose-500'
    ]
    const bgColors = [
      'bg-gradient-to-br from-purple-50 to-pink-50',
      'bg-gradient-to-br from-blue-50 to-cyan-50',
      'bg-gradient-to-br from-yellow-50 to-orange-50',
      'bg-gradient-to-br from-green-50 to-emerald-50',
      'bg-gradient-to-br from-indigo-50 to-purple-50',
      'bg-gradient-to-br from-pink-50 to-rose-50'
    ]
    const emojis = ['🎯', '👥', '💡', '📚', '🚀', '💪']
    // Simulated ratings and counts (could be dynamic later)
    const ratings = [4.9, 4.8, 4.9, 4.7, 4.8, 4.6]
    const studentsCounts = [150, 200, 80, 120, 60, 90]
    const popularStatus = [true, false, false, false, true, false]

    return {
      ...program,
      icon: icons[index] || AcademicCapIcon,
      color: colors[index] || 'from-gray-500 to-gray-600',
      bgColor: bgColors[index] || 'bg-gray-50',
      emoji: emojis[index] || '✨',
      rating: ratings[index] || 5.0,
      studentsCount: studentsCounts[index] || 0,
      popular: popularStatus[index] || false
    }
  })

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgba(var(--brand-blue-500),0.1)] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgba(var(--brand-green-400),0.1)] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(var(--brand-cyan-500,6,182,212),0.05)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <SparklesIcon className="w-8 h-8 text-purple-500" />
            <span className="text-purple-600 font-semibold text-lg">{translations.allPrograms.title}</span>
            <SparklesIcon className="w-8 h-8 text-purple-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="brand-gradient-text">{translations.allPrograms.subtitle}</span>
            <br />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            {translations.allPrograms.description}
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program: any, index: number) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${program.bgColor} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
            >
              {/* Popular badge */}
              {program.popular && (
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10`}>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                  >
                    <FireIcon className="w-4 h-4" />
                    {translations.allPrograms.popular}
                  </motion.div>
                </div>
              )}

              {/* Category badge */}
              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} z-10`}>
                <span className={`bg-gradient-to-r ${program.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {program.category}
                </span>
              </div>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${program.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <program.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-2xl mb-1">{program.emoji}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className={`text-${isRTL ? 'left' : 'right'}`}>
                    <div className="flex items-center gap-1 mb-1 justify-end">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{program.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{program.studentsCount} {translations.allPrograms.students}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{program.title}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">{program.subtitle}</p>
                
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{program.description}</p>
                
                {/* Program details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <ClockIcon className="w-4 h-4 text-purple-500" />
                      <span>{program.duration}</span>
                    </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <AcademicCapIcon className="w-4 h-4 text-blue-500" />
                    {/* Assuming sessions count is consistent with array index or hardcoded, 
                        but it was part of static data. 
                        Let's extract it from duration string if possible or just use static map */}
                    <span>{program.duration.includes('جلسات') || program.duration.includes('sessions') ? program.duration : ''}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <TrophyIcon className="w-4 h-4 text-yellow-500" />
                    <span>{program.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    <span>{isRTL ? 'شهادة معتمدة' : 'Accredited certificate'}</span>
                  </div>
                </div>
                
                {/* Features - show first 3 */}
                <ul className="space-y-2 mb-6">
                  {program.features.slice(0, 3).map((feature: any, idx: number) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-xs text-gray-600"
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${program.color} rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                  {program.features.length > 3 && (
                    <li className="text-xs text-purple-600 font-semibold">
                      +{program.features.length - 3} {isRTL ? 'مميزات أخرى' : 'more features'}
                    </li>
                  )}
                </ul>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className={`text-${isRTL ? 'right' : 'left'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 font-inter">{translations.allPrograms.currency}</span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-extrabold text-[rgb(var(--brand-emphasis-rgb))]">{program.price}</span>
                        {program.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{program.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/programs/${program.id}`}
                        className="px-3 py-2 border border-purple-200 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-xs"
                      >
                        {isRTL ? 'التفاصيل' : 'Details'}
                      </Link>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/booking"
                        className={`px-4 py-2 bg-gradient-to-r ${program.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-xs flex items-center gap-1`}>
                        <HeartIcon className="w-3 h-3" />
                        {translations.allPrograms.bookNow}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {isRTL ? '🤔 محتار تختار إيه؟' : '🤔 Unsure which program to choose?'}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {isRTL ? 'احجز استشارة مجانية معايا وهساعدك تختار البرنامج المناسب ليك' : "Book a free consultation and I'll help you pick the right program."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  <Link
                    href="/contact"
                    className="brand-cta px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                  >
                  {isRTL ? 'استشارة مجانية 💬' : 'Free Consultation 💬'}
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://wa.me/201234567890"
                  target="_blank"
                  className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-colors"
                >
                  {isRTL ? 'واتساب مباشر 📱' : 'WhatsApp Chat 📱'}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
