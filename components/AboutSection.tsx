'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { 
  AcademicCapIcon, 
  TrophyIcon, 
  HeartIcon, 
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function AboutSection() {
  const { translations } = useTranslation()

  const hollandTypes = [
    { key: translations.about.assessment.investigative, icon: '🔬', color: 'from-blue-500 to-cyan-500' },
    { key: translations.about.assessment.artistic, icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { key: translations.about.assessment.social, icon: '👥', color: 'from-green-500 to-emerald-500' },
    { key: translations.about.assessment.conventional, icon: '📊', color: 'from-orange-500 to-red-500' }
  ]

  const values = [
    { key: translations.about.values.growth, icon: '📈', color: 'text-green-500' },
    { key: translations.about.values.challenge, icon: '🎯', color: 'text-blue-500' },
    { key: translations.about.values.adventure, icon: '🌟', color: 'text-purple-500' },
    { key: translations.about.values.love, icon: '❤️', color: 'text-red-500' },
    { key: translations.about.values.trust, icon: '🤝', color: 'text-cyan-500' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              {translations.about.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            {translations.about.subtitle}
          </p>
        </motion.div>

        {/* Vision 2026 Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 mb-16 text-white"
        >
          <div className="flex items-center gap-4 mb-6">
            <TrophyIcon className="w-12 h-12 text-yellow-400" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-playfair">
                {translations.about.vision.title}
              </h3>
              <p className="text-cyan-100 text-lg font-inter">
                {translations.about.vision.subtitle}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed font-inter">
              {translations.about.vision.description}
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg leading-relaxed mb-4 font-inter">
                <strong>{translations.about.vision.mission.split(' — ')[0]} —</strong> {translations.about.vision.mission.split(' — ')[1]}
              </p>
            </div>
            
            <p className="text-xl font-semibold text-lime-300 font-inter">
              {translations.about.vision.impact}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Holland Assessment */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <ChartBarIcon className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 font-playfair">
                {translations.about.assessment.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {hollandTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r ${type.color} rounded-2xl p-4 text-white text-center hover:scale-105 transition-transform`}
                >
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <div className="font-semibold font-inter">
                    {type.key}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <HeartIcon className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-800 font-playfair">
                {translations.about.values.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">{value.icon}</span>
                  <span className="text-lg font-semibold text-gray-800 font-inter">
                    {value.key}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <AcademicCapIcon className="w-16 h-16 text-lime-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 font-playfair">
              {translations.education.title}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300 font-inter">
                {translations.education.bachelor}
              </h4>
              <p className="text-gray-300 font-inter">
                {translations.education.bachelorDetails}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-2 text-lime-300 font-inter">
                {translations.education.master}
              </h4>
              <p className="text-gray-300 font-inter">
                {translations.education.toefl}
              </p>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {translations.education.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <StarIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-inter">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-4 text-lg mt-8">
            <SparklesIcon className="w-6 h-6 text-yellow-400" />
            <span className="font-semibold font-inter">
              {translations.education.summary}
            </span>
            <SparklesIcon className="w-6 h-6 text-yellow-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}