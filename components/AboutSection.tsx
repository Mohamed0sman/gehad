'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations as translationsData } from '@/lib/translations'

export default function AboutSection() {
  const { language, isRTL } = useLanguage()
  const translations = translationsData[language] as any

  const hollandTypes = [
    { key: translations.about.assessment.investigative, iconChar: '🔬', color: 'from-blue-500 to-cyan-500' },
    { key: translations.about.assessment.artistic, iconChar: '🎨', color: 'from-purple-500 to-pink-500' },
    { key: translations.about.assessment.social, iconChar: '👥', color: 'from-green-500 to-emerald-500' },
    { key: translations.about.assessment.conventional, iconChar: '📊', color: 'from-orange-500 to-red-500' }
  ]

  const values = [
    { key: translations.about.values.growth, iconChar: '📈', color: 'text-green-500' },
    { key: translations.about.values.challenge, iconChar: '🎯', color: 'text-blue-500' },
    { key: translations.about.values.adventure, iconChar: '🌟', color: 'text-purple-500' },
    { key: translations.about.values.love, iconChar: '❤️', color: 'text-red-500' },
    { key: translations.about.values.trust, iconChar: '🤝', color: 'text-cyan-500' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {translations.about.title}
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-primary">
            {translations.about.subtitle}
          </p>
        </motion.div>

        {/* Vision 2026 Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">🏆</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">
                {translations.about.vision.title}
              </h3>
              <p className="text-primary-100 text-lg font-primary">
                {translations.about.vision.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed font-primary">
              {translations.about.vision.description}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-lg leading-relaxed mb-4 font-primary">
                <strong>{translations.about.vision.mission.split(' — ')[0]} —</strong> {translations.about.vision.mission.split(' — ')[1]}
              </p>
            </div>

            <p className="text-xl font-semibold text-lime-300 font-primary">
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
            className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📊</span>
              <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                {translations.about.assessment.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {hollandTypes.map((type: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r ${type.color} rounded-2xl p-4 text-white text-center hover:scale-105 transition-transform`}
                >
                  <div className="text-3xl mb-2">{type.iconChar}</div>
                  <div className="font-semibold font-primary">
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
            className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">❤️</span>
              <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                {translations.about.values.title}
              </h3>
            </div>

            <div className="space-y-4">
              {values.map((value: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors"
                >
                  <span className="text-2xl">{value.iconChar}</span>
                  <span className="text-lg font-semibold text-neutral-800 font-primary">
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
          className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-3xl p-8 md:p-12 text-white shadow-xl"
        >
          <div className="text-center mb-12">
            <span className="text-6xl mx-auto mb-6 block">🎓</span>
            <h3 className="text-3xl font-bold mb-4 font-heading">
              {translations.education.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300 font-primary">
                {translations.education.bachelor}
              </h4>
              <p className="text-gray-300 font-primary">
                {translations.education.bachelorDetails}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-2 text-lime-300 font-primary">
                {translations.education.master}
              </h4>
              <p className="text-gray-300 font-primary">
                {translations.education.toefl}
              </p>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {translations.education.certifications.map((cert: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="text-sm text-gray-300 font-primary">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 text-lg mt-8 text-yellow-300">
            <span className="text-2xl">✨</span>
            <span className="font-semibold font-primary">
              {translations.education.summary}
            </span>
            <span className="text-2xl">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}