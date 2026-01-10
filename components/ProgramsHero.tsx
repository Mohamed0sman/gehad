'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
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
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const copy = {
    badge: {
      en: 'Programs & Trainings',
      ar: 'البرامج والتدريبات'
    },
    titleTop: {
      en: 'Programs designed',
      ar: 'برامج مصممة'
    },
    titleBottom: {
      en: 'for real career growth',
      ar: 'لنمو مهني حقيقي'
    },
    subtitle: {
      en: 'Practical, evidence-based programs for individuals and organizations.',
      ar: 'برامج عملية قائمة على الأدلة للأفراد والمؤسسات.'
    },
    subtitle2Line1: {
      en: 'Clear outcomes. Real tools.',
      ar: 'نتائج واضحة. أدوات عملية.'
    },
    subtitle2Line2: {
      en: 'Structured journeys that help you move forward with confidence.',
      ar: 'رحلات منظمة تساعدك تتقدم بثقة.'
    },
    stats: {
      designedPrograms: { en: 'Designed programs', ar: 'برامج مصممة' },
      students: { en: 'Learners', ar: 'متدربين' },
      satisfaction: { en: 'Satisfaction', ar: 'رضا العملاء' },
      support: { en: 'Support', ar: 'دعم' }
    },
    ctaView: {
      en: 'View programs',
      ar: 'شاهد البرامج'
    },
    ctaConsultation: {
      en: 'Book consultation',
      ar: 'احجز استشارة'
    },
    scrollDown: {
      en: 'Scroll down',
      ar: 'مرر للأسفل'
    }
  }

  return (
    <section className="relative min-h-screen brand-bg overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[rgba(var(--brand-cyan-500,6,182,212),0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgba(var(--brand-green-400),0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(var(--brand-blue-500),0.1)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating program icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {programIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              y: [null, -50, 50, -30],
              opacity: [0, 0.2, 0.4, 0.2, 0],
              scale: [0, 1, 1.2, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
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

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen container-professional">
        <div className="mx-auto max-w-5xl text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <SparklesIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
            <span className="text-[rgb(var(--brand-green-400))] font-semibold text-xl">{t(copy.badge.en, copy.badge.ar)}</span>
            <SparklesIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            <span className="text-white">
              {t(copy.titleTop.en, copy.titleTop.ar)}
            </span>
            <br />
            <span className="text-white">{t(copy.titleBottom.en, copy.titleBottom.ar)}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed text-white mb-6"
          >
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl leading-relaxed text-white mb-12"
          >
            <span className="text-[rgb(var(--brand-green-400))] font-semibold">{t(copy.subtitle2Line1.en, copy.subtitle2Line1.ar)}</span>
            <br />
            <span className="text-white">{t(copy.subtitle2Line2.en, copy.subtitle2Line2.ar)}</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { number: "5", label: t(copy.stats.designedPrograms.en, copy.stats.designedPrograms.ar), icon: "📚" },
              { number: "12500+", label: t(copy.stats.students.en, copy.stats.students.ar), icon: "🎓" },
              { number: "98%", label: t(copy.stats.satisfaction.en, copy.stats.satisfaction.ar), icon: "⭐" },
              { number: "24/7", label: t(copy.stats.support.en, copy.stats.support.ar), icon: "💬" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/20 backdrop-blur-md rounded-2xl p-5 border-2 border-white/40 hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-2 font-playfair">{stat.number}</div>
                <div className="text-white text-sm font-semibold font-inter">{stat.label}</div>
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
              <span>🚀 {t(copy.ctaView.en, copy.ctaView.ar)}</span>
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
              <span>💬 {t(copy.ctaConsultation.en, copy.ctaConsultation.ar)}</span>
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
              <div className="text-sm mb-2">{t(copy.scrollDown.en, copy.scrollDown.ar)}</div>
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
