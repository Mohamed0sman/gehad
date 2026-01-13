'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function FeaturedPrograms() {
  const { language, isRTL } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const programs = [
    {
      key: 'selfLeadership',
      iconChar: '🎯',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      key: 'bestVersion',
      iconChar: '⭐',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      key: 'freelancingSkills',
      iconChar: '💼',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      key: 'strategies36',
      iconChar: '🧠',
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
          <h2 className={`text-h2 font-bold mb-6 font-heading`}>
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {t('programs.title')}
            </span>
          </h2>
          <p className={`text-xl text-neutral-600 max-w-3xl mx-auto font-primary`}>
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
              <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {program.iconChar}
              </div>

              <h3 className={`text-xl font-bold text-neutral-800 mb-3 font-heading`}>
                {t(`programs.${program.key}.title`)}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-neutral-500 text-lg">⏱️</span>
                <span className={`text-sm text-neutral-600 font-medium font-primary`}>
                  {t(`programs.${program.key}.duration`)}
                </span>
              </div>

              <p className={`text-neutral-600 mb-6 leading-relaxed font-primary`}>
                {t(`programs.${program.key}.description`)}
              </p>

              <Link
                href={`/programs#${program.key}`}
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent hover:scale-105 transition-transform font-primary`}
              >
                {t('common.learnMore')}
                <span className={`text-xl ${isRTL ? 'rotate-180' : ''}`}>→</span>
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
          className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-3xl p-8 md:p-12 text-white shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  🎯
                </div>
                <div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 font-heading`}>
                    {t('programs.careerSessions.title')}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lime-400 text-lg">👥</span>
                    <span className={`text-lime-300 font-primary`}>
                      {t('programs.careerSessions.subtitle')}
                    </span>
                  </div>
                </div>
              </div>

              <p className={`text-lg text-neutral-300 mb-6 leading-relaxed font-primary`}>
                {t('programs.careerSessions.description')}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <span className={`text-neutral-300 font-primary`}>
                  {t('programs.careerSessions.ratingText')}
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <Link
                href="/booking"
                className={`inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-primary`}
              >
                <span className="text-xl">🚀</span>
                {t('programs.careerSessions.cta')}
                <span className={`text-xl ${isRTL ? 'rotate-180' : ''}`}>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}