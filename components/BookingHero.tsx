"use client"

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  SparklesIcon,
  CalendarDaysIcon,
  ClockIcon,
  GiftIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function BookingHero() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating calendar icons */}
      <div className="absolute inset-0 overflow-hidden">
        {(() => {
          // safe access to window during SSR: provide fallback sizes
          const safeInnerWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 1200)
          const safeInnerHeight = () => (typeof window !== 'undefined' ? window.innerHeight : 800)
          return [...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute text-white/20"
              initial={{ 
                x: Math.random() * safeInnerWidth(),
                y: Math.random() * safeInnerHeight(),
                opacity: 0,
                scale: 0
              }}
            animate={{ 
              y: [null, -100, 100, -50],
              opacity: [0, 0.3, 0.6, 0.3, 0],
              scale: [0, 1, 1.2, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
              style={{
                left: `${10 + index * 10}%`,
                top: `${5 + index * 12}%`
              }}
            >
              <CalendarDaysIcon className="w-8 h-8" />
            </motion.div>
          ))
        })()}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Free badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-2xl"
          >
            <GiftIcon className="w-6 h-6" />
            <span>{t('FREE session', 'جلسة مجانية')}</span>
            <SparklesIcon className="w-6 h-6" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            <span className="bg-gradient-to-r from-yellow-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">
              {t('Book your', 'احجز')}
            </span>
            <br />
            <span className="text-white">{t('free session', 'جلستك المجانية')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed text-white/90 mb-6"
          >
            {t(
              'A 1:1 session to clarify your direction, set priorities, and build a realistic next-step plan.',
              'جلسة فردية تساعدك تحدد اتجاهك، ترتّب أولوياتك، وتطلع بخطة واضحة للخطوة اللي جاية.'
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl leading-relaxed text-white/80 mb-12"
          >
            <span className="text-yellow-300">{t('No commitment.', 'بدون أي التزام.')}</span>
            <br />
            {t('Fast follow-up and a clear structure from day one.', 'متابعة سريعة وتنظيم واضح من أول يوم.')}
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { 
                icon: "🎯", 
                titleEn: 'Goal clarity',
                titleAr: 'تحديد الأهداف',
                descEn: 'We’ll clarify your goals and priorities.',
                descAr: 'هنحدد أهدافك المهنية بوضوح'
              },
              { 
                icon: "💡", 
                titleEn: 'Strengths discovery',
                titleAr: 'اكتشاف المواهب',
                descEn: 'We’ll uncover strengths you can build on.',
                descAr: 'هنكتشف مواهبك وقدراتك الخفية'
              },
              { 
                icon: "📋", 
                titleEn: 'Action plan',
                titleAr: 'خطة عمل',
                descEn: 'You’ll leave with a clear next-step plan.',
                descAr: 'هتحصل على خطة واضحة للبداية'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {language === 'ar' ? benefit.titleAr : benefit.titleEn}
                </h3>
                <p className="text-white/80 text-sm">
                  {language === 'ar' ? benefit.descAr : benefit.descEn}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Session details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <HeartIcon className="w-8 h-8 text-red-400" />
              {t('Session details', 'تفاصيل الجلسة')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-white font-semibold">{t('Duration', 'المدة')}</div>
                  <div className="text-white/80">{t('45–60 minutes', '45–60 دقيقة')}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <CalendarDaysIcon className="w-6 h-6 text-white" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-white font-semibold">{t('Availability', 'المواعيد')}</div>
                  <div className="text-white/80">{t('Flexible scheduling', 'مواعيد مرنة')}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">💻</span>
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-white font-semibold">{t('Location', 'المكان')}</div>
                  <div className="text-white/80">{t('Online (video call)', 'أونلاين (مكالمة فيديو)')}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <GiftIcon className="w-6 h-6 text-white" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-white font-semibold">{t('Price', 'السعر')}</div>
                  <div className="text-white/80">{t('Free', 'مجاني')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-3"
            >
              <span>🚀 {t('Book now', 'احجز دلوقتي')}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 text-center"
            >
              <div className="text-sm">{t('Or contact:', 'أو تواصل على:')}</div>
              <div className="text-lg font-semibold">📱 01015362414</div>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>{t('No commitment', 'بدون التزام')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>{t('Free session', 'جلسة مجانية')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>{t('Confidential', 'سرية تامة')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
