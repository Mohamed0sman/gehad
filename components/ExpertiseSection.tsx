'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations as translationsData } from '@/lib/translations'

export default function ExpertiseSection() {
  const { language } = useLanguage()
  const translations = translationsData[language] as any
  const keywords = translations.keywords.list

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
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">✨</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {translations.keywords.title}
              </span>
            </h2>
            <span className="text-3xl">✨</span>
          </div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-primary">
            {translations.keywords.description}
          </p>
        </motion.div>

        {/* Keywords Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
        >
          {keywords.map((keyword, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-neutral-700 font-medium hover:from-blue-100 hover:to-cyan-100 hover:border-blue-300 transition-all duration-300 cursor-default font-primary shadow-sm"
            >
              {keyword}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
