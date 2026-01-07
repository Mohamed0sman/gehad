'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { 
  SparklesIcon,
  AcademicCapIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const programIcons = [
  { icon: AcademicCapIcon, color: 'text-blue-500', delay: 0 },
  { icon: UserGroupIcon, color: 'text-blue-500', delay: 0.2 },
  { icon: LightBulbIcon, color: 'text-lime-500', delay: 0.4 },
  { icon: ChartBarIcon, color: 'text-green-500', delay: 0.6 },
  { icon: RocketLaunchIcon, color: 'text-cyan-500', delay: 0.8 }
]

export default function ProgramsHero() {
  const { translations } = useTranslation()
  return (
    <section className="relative min-h-screen brand-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[rgba(var(--brand-cyan-500,6,182,212),0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgba(var(--brand-green-400),0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(var(--brand-blue-500),0.1)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating program icons */}
      <div className="absolute inset-0 overflow-hidden">
        {programIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: [null, -50, 50, -30],
              opacity: [0, 0.3, 0.6, 0.3, 0],
              scale: [0, 1, 1.2, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + index * 15}%`,
              top: `${10 + index * 20}%`
            }}
          >
            <item.icon className="w-12 h-12" />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <SparklesIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
            <span className="text-[rgb(var(--brand-green-400))] font-semibold text-xl">{translations.programsPage.badge}</span>
            <SparklesIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            <span className="brand-gradient-text">
              {translations.programsPage.titleTop}
            </span>
            <br />
            <span className="text-white">{translations.programsPage.titleBottom}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed text-white/90 mb-6"
          >
            {translations.programsPage.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl leading-relaxed text-white/80 mb-12"
          >
            <span className="text-[rgb(var(--brand-green-400))]">{translations.programsPage.subtitle2Line1}</span>
            <br />
            {translations.programsPage.subtitle2Line2}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: "5", label: translations.programsPage.stats.designedPrograms, icon: "📚" },
              { number: "500+", label: translations.programsPage.stats.students, icon: "🎓" },
              { number: "98%", label: translations.programsPage.stats.satisfaction, icon: "⭐" },
              { number: "24/7", label: translations.programsPage.stats.support, icon: "💬" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-[rgb(var(--brand-green-400))] mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 brand-cta font-bold text-lg rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <span>🚀 {translations.programsPage.ctaView}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>💬 {translations.programsPage.ctaConsultation}</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📞
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 text-center"
            >
              <div className="text-sm mb-2">{translations.programsPage.scrollDown}</div>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
