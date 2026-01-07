'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, ClockIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'

export default function FeaturedPrograms() {
  const { t, isRTL } = useTranslation()

  const programs = [
    {
      key: 'selfLeadership',
      icon: '🎯',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      key: 'bestVersion',
      icon: '⭐',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      key: 'freelancingSkills',
      icon: '💼',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      key: 'strategies36',
      icon: '🧠',
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isRTL ? 'font-cairo' : 'font-playfair'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('programs.title')}
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {t('programs.subtitle')}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${program.bgColor} ${program.borderColor} border-2 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                {program.icon}
              </div>
              
              <h3 className={`text-xl font-bold text-gray-800 mb-3 ${
                isRTL ? 'font-cairo' : 'font-playfair'
              }`}>
                {t(`programs.${program.key}.title`)}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <ClockIcon className="w-5 h-5 text-gray-500" />
                <span className={`text-sm text-gray-600 font-medium ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}>
                  {t(`programs.${program.key}.duration`)}
                </span>
              </div>
              
              <p className={`text-gray-600 mb-6 leading-relaxed ${
                isRTL ? 'font-cairo' : 'font-inter'
              }`}>
                {t(`programs.${program.key}.description`)}
              </p>
              
              <Link
                href={`/programs#${program.key}`}
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent hover:scale-105 transition-transform ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}
              >
                {t('common.learnMore')}
                <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Career Sessions Special Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl flex items-center justify-center text-3xl">
                  🎯
                </div>
                <div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                    isRTL ? 'font-cairo' : 'font-playfair'
                  }`}>
                    {t('programs.careerSessions.title')}
                  </h3>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-5 h-5 text-lime-400" />
                    <span className={`text-lime-300 ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}>
                      {t('programs.careerSessions.subtitle')}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className={`text-lg text-gray-300 mb-6 leading-relaxed ${
                isRTL ? 'font-cairo' : 'font-inter'
              }`}>
                {t('programs.careerSessions.description')}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className={`text-gray-300 ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}>
                  {t('programs.careerSessions.ratingText')}
                </span>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Link
                href="/booking"
                className={`inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}
              >
                <span className="text-xl">🚀</span>
                {t('programs.careerSessions.cta')}
                <ArrowRightIcon className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}