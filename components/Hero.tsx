'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { language, isRTL } = useLanguage()

  const copy = {
    badge: {
      en: 'Vision 2026: NCDA Certified Instructor',
      ar: 'رؤية 2026: مدرب معتمد من NCDA'
    },
    title1: {
      en: 'I help professionals, organizations, and educators',
      ar: 'أساعد المحترفين والمؤسسات والمعلمين'
    },
    title2: {
      en: 'design careers that truly fit',
      ar: 'في تصميم مسارات مهنية ناجحة'
    },
    subtitle: {
      en: 'Using evidence-based frameworks and strategic action, we turn career challenges into real opportunities for growth and impact.',
      ar: 'باستخدام أطر عمل قائمة على الأدلة واستراتيجيات مبتكرة، نحول التحديات المهنية إلى فرص حقيقية للنمو والتميز'
    },
    primaryCta: {
      en: 'Start your journey',
      ar: 'ابدأ رحلتك المهنية'
    },
    secondaryCta: {
      en: 'Explore programs',
      ar: 'استكشف البرامج'
    },
    stats: {
      clients: { en: 'Happy clients', ar: 'عميل سعيد' },
      years: { en: 'Years experience', ar: 'سنوات خبرة' },
      success: { en: 'Success rate', ar: 'معدل نجاح' }
    },
    features: {
      en: [
        'Evidence-based career counseling',
        'Leadership & soft skills development',
        'Corporate training programs',
        'Advanced academic guidance'
      ],
      ar: [
        'استشارات مهنية قائمة على الأدلة',
        'تطوير مهارات القيادة',
        'برامج مخصصة للشركات',
        'توجيه أكاديمي متقدم'
      ]
    },
    scroll: {
      en: 'Scroll',
      ar: 'مرر للأسفل'
    }
  }

  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-10 shadow-2xl hover:bg-white/15 transition-all duration-300"
          >
            <span className="text-emerald-400 text-2xl">🎯</span>
            <span className="text-white font-bold font-inter text-base md:text-lg">
              {t(copy.badge.en, copy.badge.ar)}
            </span>
            <span className="text-emerald-400 text-2xl">🏆</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight font-playfair text-white"
          >
            <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t(copy.title1.en, copy.title1.ar)}
            </span>
            <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mt-4">
              {t(copy.title2.en, copy.title2.ar)}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-12 leading-relaxed font-inter"
          >
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href="/booking"
              className="group relative bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold px-10 py-5 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-inter text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <SparklesIcon className="w-6 h-6" />
                {t(copy.primaryCta.en, copy.primaryCta.ar)}
                <ArrowRightIcon className={`w-5 h-5 transform transition-transform ${isRTL ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>

            <Link
              href="#programs"
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold px-10 py-5 rounded-3xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 font-inter text-lg"
            >
              <span className="flex items-center gap-2">
                {t(copy.secondaryCta.en, copy.secondaryCta.ar)}
                <StarIcon className="w-5 h-5" />
              </span>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">12500+</div>
              <div className="text-cyan-100 font-inter">{t(copy.stats.clients.en, copy.stats.clients.ar)}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-cyan-100 font-inter">{t(copy.stats.years.en, copy.stats.years.ar)}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-cyan-100 font-inter">{t(copy.stats.success.en, copy.stats.success.ar)}</div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {(language === 'ar' ? copy.features.ar : copy.features.en).map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
              >
                <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                <span className="text-cyan-100 font-inter text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-cyan-200">
          <span className="text-sm font-inter">{t(copy.scroll.en, copy.scroll.ar)}</span>
          <div className="w-6 h-10 border-2 border-cyan-300/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
