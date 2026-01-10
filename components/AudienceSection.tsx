'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations as translationsData } from '@/lib/translations'
import { 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  GlobeAltIcon, 
  AcademicCapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function AudienceSection() {
  const { language, isRTL } = useLanguage()
  const translations = translationsData[language] as any
  
  const audienceTypes = [
    {
      key: 'type1',
      title: translations.audience.type1.title,
      icon: UserGroupIcon,
      emoji: '👥',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      profile: translations.audience.type1.profile,
      needs: translations.audience.type1.needs,
      service: translations.audience.type1.service
    },
    {
      key: 'type2',
      title: translations.audience.type2.title,
      icon: BuildingOfficeIcon,
      emoji: '🏢',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      profile: translations.audience.type2.profile,
      needs: translations.audience.type2.needs,
      service: translations.audience.type2.service,
      message: translations.audience.type2.message
    },
    {
      key: 'type3',
      title: translations.audience.type3.title,
      icon: GlobeAltIcon,
      emoji: '🌍',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      profile: translations.audience.type3.profile,
      needs: translations.audience.type3.needs,
      service: translations.audience.type3.service,
      message: translations.audience.type3.message
    },
    {
      key: 'type4',
      title: translations.audience.type4.title,
      icon: AcademicCapIcon,
      emoji: '🎓',
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      profile: translations.audience.type4.profile,
      needs: translations.audience.type4.needs,
      message: translations.audience.type4.message
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {translations.audience.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            {translations.audience.subtitle}
          </p>
        </motion.div>

        {/* Audience Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audienceTypes.map((audience, index) => (
            <motion.div
              key={audience.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${audience.bgColor} ${audience.borderColor} border-2 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${audience.color} rounded-2xl flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform`}>
                  {audience.emoji}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-playfair">
                    {audience.title}
                  </h3>
                </div>
              </div>

              {/* Profile */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3 font-inter">
                  {translations.audience.labels.profile}
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  {audience.profile}
                </p>
              </div>

              {/* Needs */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3 font-inter">
                  {translations.audience.labels.needs}
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  {audience.needs}
                </p>
              </div>

              {/* Service */}
              {audience.service && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3 font-inter">
                    {translations.audience.labels.service}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {audience.service}
                  </p>
                </div>
              )}

              {/* Core Message (if exists) */}
              {audience.message && (
                <div className={`bg-gradient-to-r ${audience.color} rounded-2xl p-4 text-white`}>
                  <p className="font-semibold italic font-inter">
                    "{audience.message}"
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-playfair">
              {translations.cta.title}
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto font-inter">
              {translations.cta.subtitle}
            </p>
            <p className="text-lg text-cyan-100 mb-8 max-w-4xl mx-auto leading-relaxed font-inter">
              {translations.cta.description}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto font-inter">
              <p className="text-xl font-semibold text-lime-300 italic">
                🌟 {translations.cta.quote}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-inter"
              >
                <span className="text-xl">💬</span>
                {translations.cta.button}
                <ArrowRightIcon className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
