'use client'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function Hero() {
  const { translations } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden brand-bg">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[rgba(var(--brand-cyan-500,6,182,212),0.2)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[rgba(var(--brand-green-400),0.2)] rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <span className="text-[rgb(var(--brand-green-400))]">✨</span>
              <span className="text-[rgb(var(--brand-blue-600))] font-semibold font-inter">
                {translations.hero.vision2026}
              </span>
              <span className="text-[rgb(var(--brand-green-400))]">🏆</span>
            </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-playfair">
            <span className="brand-gradient-text">
              {translations.hero.titlePart1}
            </span>
            <br />
            <span className="brand-accent">
              {translations.hero.titlePart2}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-[rgb(var(--brand-blue-600))] text-2xl">🎓</span>
            <p className="text-xl md:text-2xl brand-accent font-semibold font-inter">
              {translations.hero.subtitle}
            </p>
          </div>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed font-inter">
            {translations.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/booking"
              className="group relative brand-cta font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-inter"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                {translations.hero.cta}
                <span className="text-lg">→</span>
              </span>
            </Link>

            <Link
              href="/about"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-[rgb(var(--brand-blue-600))] font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 font-inter"
            >
              <span className="flex items-center gap-2">
                {translations.hero.secondaryCta}
                <span className="text-lg">→</span>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-white mb-1 font-playfair">
                {translations.hero.stats.ncda}
              </div>
              <div className="text-[rgb(var(--brand-cyan-400,34,211,238))] text-sm font-inter">
                {translations.hero.stats.certified}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-bold text-white mb-1 font-playfair">
                {translations.hero.stats.certsCount}
              </div>
              <div className="text-[rgb(var(--brand-cyan-400,34,211,238))] text-sm font-inter">
                {translations.hero.stats.certsLabel}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-2xl font-bold text-white mb-1 font-playfair">
                {translations.hero.stats.mena}
              </div>
              <div className="text-[rgb(var(--brand-cyan-400,34,211,238))] text-sm font-inter">
                {translations.hero.stats.region}
              </div>
            </div>
          </div>
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
