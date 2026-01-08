'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

export default function Hero() {
  const { translations } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden brand-bg">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[rgba(var(--brand-cyan-500,6,182,212),0.25)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[rgba(var(--brand-green-400),0.25)] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(var(--brand-blue-500),0.15)] rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 section-padding">
        <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-[rgb(var(--brand-green-400))] text-lg">✨</span>
              <span className="text-white font-semibold font-inter text-sm md:text-base">
                {translations.hero.vision2026}
              </span>
              <span className="text-[rgb(var(--brand-green-400))] text-lg">🏆</span>
            </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-playfair text-white"
          >
            <span className="text-white">
              {translations.hero.titlePart1}
            </span>
            <br />
            <span className="text-white">
              {translations.hero.titlePart2}
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="text-[rgb(var(--brand-green-400))] text-2xl">🎓</span>
            <p className="text-xl md:text-2xl text-white font-semibold font-inter">
              {translations.hero.subtitle}
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed font-inter"
          >
            {translations.hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/booking"
              className="group relative brand-cta font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-inter text-white"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                {translations.hero.cta}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </span>
            </Link>

            <Link
              href="/about"
              className="group bg-white/15 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 font-inter"
            >
              <span className="flex items-center gap-2">
                {translations.hero.secondaryCta}
                <span className="text-lg">→</span>
              </span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: '🎯', number: translations.hero.stats.ncda, label: translations.hero.stats.certified },
              { icon: '📚', number: translations.hero.stats.certsCount, label: translations.hero.stats.certsLabel },
              { icon: '🌍', number: translations.hero.stats.mena, label: translations.hero.stats.region }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="professional-card rounded-3xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-[rgb(var(--brand-blue-600))] mb-2 font-playfair">
                  {stat.number}
                </div>
                <div className="text-[rgb(var(--brand-green-500))] text-sm font-semibold font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-inter">
            {translations.common.learnMore}
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
