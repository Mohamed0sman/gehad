'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  SparklesIcon, 
  AcademicCapIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/solid'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutHero() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
      </div>

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
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
            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-8 py-4 mb-10 shadow-2xl hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-emerald-400 text-2xl">✨</span>
            <span className="text-white font-bold font-inter text-base md:text-lg">
              {t('NCDA Certified Career Development Professional', 'مدرب معتمد من NCDA في تطوير المسارات المهنية')}
            </span>
            <span className="text-emerald-400 text-2xl">🏆</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-playfair text-white"
          >
            <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t('About Gehad Ashraf', 'عن جهاد أشرف')}
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="text-emerald-400 text-2xl">🎓</span>
            <p className="text-xl md:text-2xl text-cyan-100 font-semibold font-inter">
              {t(
                'Empowering careers through evidence-based practice',
                'تمكين المسارات المهنية من خلال الممارسة القائمة على الأدلة'
              )}
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-cyan-100 max-w-4xl mx-auto mb-12 leading-relaxed font-inter"
          >
            {t(
              'Discover my journey and how I help professionals and organizations design careers with intention and purpose.',
              'اكتشف رحلتي من الإحصاء إلى علم النفس، وكيف أساعد المحترفين والمؤسسات في تصميم مسارات مهنية بنية وهدف.'
            )}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a
              href="/booking"
              className="group relative bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold px-10 py-5 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-inter text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                {t('Book a session', 'احجز جلسة')}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  {isRTL ? '←' : '→'}
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            <a
              href="#story"
              className="group bg-white/15 backdrop-blur-md border-2 border-white/30 text-white font-bold px-10 py-5 rounded-3xl hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 font-inter text-lg"
            >
              <span className="flex items-center gap-2">
                {t('My story', 'قصتي')}
                <span className="text-lg">↓</span>
              </span>
            </a>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <AcademicCapIcon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">NCDA</div>
              <div className="text-cyan-100 font-inter">{t('Certified', 'شهادة معتمدة')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <TrophyIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-cyan-100 font-inter">{t('People supported', 'عميل تم مساعدته')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <StarIcon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">3+</div>
              <div className="text-cyan-100 font-inter">{t('Years of experience', 'سنوات خبرة')}</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-cyan-200">
          <span className="text-sm font-inter">
            {t('Scroll to learn more', 'مرر للتعرف على المزيد')}
          </span>
          <div className="w-6 h-10 border-2 border-cyan-300/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
