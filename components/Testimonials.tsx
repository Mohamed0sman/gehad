'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon, HeartIcon, SparklesIcon } from '@heroicons/react/20/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Testimonials() {
  const { translations } = useTranslation()
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const colors = [
    'from-cyan-400 to-sky-400',
    'from-blue-400 to-cyan-400',
    'from-blue-400 to-cyan-400',
    'from-green-400 to-emerald-400',
    'from-yellow-400 to-orange-400',
    'from-green-400 to-lime-400'
  ]

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[rgba(var(--brand-cyan-500,6,182,212),0.2)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HeartIcon className="w-8 h-8 text-red-500" />
            <span className="text-blue-600 font-semibold text-lg font-inter">
              {translations.testimonials.headerLabel}
            </span>
            <HeartIcon className="w-8 h-8 text-red-500" />
          </motion.div>
        
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair"
          >
            <span className="brand-gradient-text">
              {translations.testimonials.title}
            </span>
            <br />
            <span className="text-gray-700">{translations.testimonials.subtitle}</span>
          </motion.h2>
        
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600 font-inter"
          >
            {translations.testimonials.intro}
            <br />
            <span className="text-blue-600 font-semibold">🎯 {translations.testimonials.highlight}</span>
          </motion.p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[index] || colors[0]} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Quote icon */}
              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`w-12 h-12 bg-gradient-to-br ${colors[index] || colors[0]} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Achievement badge */}
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold font-inter"
                >
                  {testimonial.emoji} {translations.testimonials.achievementBadge}
                </motion.div>
              </div>
            
              <div className="relative p-8 pt-16">
                {/* Stars */}
                <div className={`flex items-center mb-4 ${isRTL ? 'justify-end' : ''}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed font-inter">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                
                {/* Achievement */}
                <div className={`bg-gradient-to-r ${colors[index] || colors[0]} bg-opacity-10 rounded-xl p-3 mb-6`}>
                  <p className="text-sm font-semibold text-gray-800 flex items-center gap-2 font-inter">
                    <SparklesIcon className="w-4 h-4 text-blue-500" />
                    {testimonial.achievement}
                  </p>
                </div>
                
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${colors[index] || colors[0]} rounded-full flex items-center justify-center shadow-lg text-2xl text-white font-bold`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  
                  <div>
                    <div className="font-bold text-gray-900 font-playfair">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 font-inter">{testimonial.role}</div>
                    <div className="text-xs text-gray-400 font-inter">{testimonial.age}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: translations.testimonials.stats.students, icon: "🎓" },
                { number: "98%", label: translations.testimonials.stats.satisfaction, icon: "⭐" },
                { number: "24/7", label: translations.testimonials.stats.support, icon: "💬" },
                { number: "100%", label: translations.testimonials.stats.guarantee, icon: "🎯" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1 font-playfair">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-4 font-inter">
                <strong>{translations.testimonials.offer.prefix}</strong> {translations.testimonials.offer.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="brand-cta px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 font-inter">
                  {translations.testimonials.offer.button}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
