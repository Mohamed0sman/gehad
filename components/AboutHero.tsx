'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  SparklesIcon, 
  AcademicCapIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/solid'
import { useTranslation } from '@/hooks/useTranslation'

export default function AboutHero() {
  const { t, isRTL, translations } = useTranslation()

  return (
    <section className="relative min-h-screen brand-bg overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[rgba(var(--brand-blue-500),0.12)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgba(var(--brand-green-400),0.12)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(var(--brand-blue-500),0.06)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 rounded-full border-2 border-[rgba(var(--brand-green-400),0.3)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main image container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-8 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center">
                  <span className="text-8xl font-bold brand-gradient-text">G</span>
                </div>
                
                {/* Floating achievements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[rgb(var(--brand-green-400))] p-3 rounded-full shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrophyIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[rgb(var(--brand-blue-500))] p-3 rounded-full shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -right-8 bg-[rgb(var(--brand-blue-600))] p-3 rounded-full shadow-lg"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <HeartIcon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <SparklesIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
              <span className={`text-[rgb(var(--brand-green-400))] font-semibold text-xl ${isRTL ? 'font-cairo' : ''}`}>
                {t('aboutHero.badge')}
              </span>
              <SparklesIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={`text-5xl md:text-6xl font-bold mb-6 ${isRTL ? 'font-cairo' : ''}`}
            >
              <span className="brand-gradient-text">
                {t('aboutHero.title')}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className={`text-2xl md:text-3xl text-[rgb(var(--brand-blue-600))] font-semibold mb-8 ${isRTL ? 'font-cairo' : ''}`}
            >
              {t('aboutHero.subtitle')}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className={`space-y-6 text-lg md:text-xl leading-relaxed mb-8 ${isRTL ? 'font-cairo' : ''}`}
            >
              <p>
                <strong className="text-[rgb(var(--brand-green-400))]">{t('aboutHero.intro.welcome')}</strong> {t('aboutHero.intro.p1')}
              </p>
              
              <p>
                {t('aboutHero.intro.p2')}
              </p>
              
              <p className="text-[rgb(var(--brand-cyan-400,34,211,238))]">
                <strong>{t('aboutHero.intro.missionTitle')}</strong> {t('aboutHero.intro.missionDesc')}
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {translations.aboutHero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className={`text-2xl font-bold text-[rgb(var(--brand-green-400))] ${isRTL ? 'font-cairo' : ''}`}>{stat.number}</div>
                  <div className={`text-sm text-white/80 ${isRTL ? 'font-cairo' : ''}`}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`brand-cta font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 ${isRTL ? 'font-cairo' : ''}`}
              >
                {t('aboutHero.cta.book')}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 ${isRTL ? 'font-cairo' : ''}`}
              >
                {t('aboutHero.cta.contact')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
