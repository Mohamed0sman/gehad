"use client"

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BookingHero() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section
      className="relative min-h-screen bg-neutral-900 overflow-hidden flex items-center justify-center py-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Safe Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {(() => {
          // We can't access window directly in SSR safety, but we can do a fixed number
          return [...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute text-white/10 text-2xl"
              initial={{
                x: Math.random() * 100, // randomized percentage instead of pixels for SSR safety
                y: Math.random() * 100,
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
              📅
            </motion.div>
          ))
        })()}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 flex items-center flex-col justify-center text-center">

        {/* Free badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-2xl"
        >
          <span className="text-2xl">🎁</span>
          <span>{t('FREE session', 'جلسة مجانية')}</span>
          <span className="text-2xl">✨</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display font-bold text-white mb-8 font-heading"
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
          className="text-h3 font-medium text-white/90 mb-6 max-w-4xl mx-auto font-heading"
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
          className="text-body-lg text-white/80 mb-12 max-w-3xl mx-auto font-primary"
        >
          <span className="text-yellow-300 font-bold">{t('No commitment.', 'بدون أي التزام.')}</span>
          <br />
          {t('Fast follow-up and a clear structure from day one.', 'متابعة سريعة وتنظيم واضح من أول يوم.')}
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl"
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
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                {language === 'ar' ? benefit.titleAr : benefit.titleEn}
              </h3>
              <p className="text-white/80 text-sm font-primary">
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
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12 w-full max-w-4xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2 font-heading">
            <span className="text-2xl">❤️</span>
            {t('Session details', 'تفاصيل الجلسة')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-xl">
                🕒
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-white font-semibold font-primary">{t('Duration', 'المدة')}</div>
                <div className="text-white/80 font-primary">{t('45–60 minutes', '45–60 دقيقة')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-xl">
                📅
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-white font-semibold font-primary">{t('Availability', 'المواعيد')}</div>
                <div className="text-white/80 font-primary">{t('Flexible scheduling', 'مواعيد مرنة')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xl">
                💻
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-white font-semibold font-primary">{t('Location', 'المكان')}</div>
                <div className="text-white/80 font-primary">{t('Online (video call)', 'أونلاين (مكالمة فيديو)')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xl">
                🎁
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-white font-semibold font-primary">{t('Price', 'السعر')}</div>
                <div className="text-white/80 font-primary">{t('Free', 'مجاني')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
