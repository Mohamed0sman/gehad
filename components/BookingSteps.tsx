'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BookingSteps() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const steps = [
    {
      id: 1,
      titleEn: 'Send your details',
      titleAr: 'ابعت بياناتك',
      descriptionEn: 'Fill the form or send a WhatsApp message—whatever is easier for you.',
      descriptionAr: 'املأ الفورم أو ابعت رسالة واتساب—اللي أسهل ليك.',
      iconChar: '💬',
      color: 'from-blue-500 to-cyan-500',
      durationEn: '2–3 min',
      durationAr: '2–3 دقايق'
    },
    {
      id: 2,
      titleEn: 'Confirm the time',
      titleAr: 'نحدد الموعد',
      descriptionEn: 'We agree on the best day and time for your schedule.',
      descriptionAr: 'نتفق على أنسب يوم ووقت حسب ظروفك.',
      iconChar: '📅',
      color: 'from-green-500 to-emerald-500',
      durationEn: 'Same day',
      durationAr: 'نفس اليوم'
    },
    {
      id: 3,
      titleEn: 'Meet online',
      titleAr: 'نعمل سيشن أونلاين',
      descriptionEn: 'A focused video session with clear structure and next steps.',
      descriptionAr: 'سيشن فيديو منظمة ومركزة بخطوات واضحة.',
      iconChar: '💻',
      color: 'from-blue-500 to-cyan-500',
      durationEn: '45–60 min',
      durationAr: '45–60 دقيقة'
    },
    {
      id: 4,
      titleEn: 'Get your plan',
      titleAr: 'تاخد خطتك',
      descriptionEn: 'You leave with a clear plan and actionable next steps.',
      descriptionAr: 'تطلع بخطة واضحة وخطوات تنفيذ.',
      iconChar: '✅',
      color: 'from-yellow-500 to-orange-500',
      durationEn: 'Immediately',
      durationAr: 'فورًا'
    }
  ]

  const stories = [
    {
      name: t('Sara', 'سارة'),
      result: t('Changed her major with confidence', 'غيرت تخصصها بثقة'),
      time: t('In 2 weeks', 'في أسبوعين')
    },
    {
      name: t('Omar', 'عمر'),
      result: t('Got his first interview', 'جاب أول انترفيو'),
      time: t('In 10 days', 'في 10 أيام')
    },
    {
      name: t('Mona', 'منى'),
      result: t('Built a clear job search plan', 'عملت خطة بحث عن شغل'),
      time: t('In 1 week', 'في أسبوع')
    }
  ]

  const whatsappText = encodeURIComponent(t('Hi, I would like to book the free session.', 'مرحبا، عايز أحجز الجلسة المجانية'))
  const whatsappHref = `https://wa.me/201015362414?text=${whatsappText}`

  return (
    <section
      className="py-24 bg-gradient-to-br from-neutral-50 via-white to-primary-50 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-h2 font-bold text-neutral-900 mb-6 font-heading"
          >
            <span className="gradient-text">{t('How it works', 'إزاي الموضوع ماشي')}</span>
            <br />
            <span className="text-neutral-700">{t('in 4 simple steps', 'في 4 خطوات بسيطة')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-neutral-600 max-w-3xl mx-auto font-primary"
          >
            {t(
              'A simple, structured process to help you get clarity and take confident next steps.',
              'خطوات بسيطة ومنظمة تساعدك توصل للوضوح وتتحرك بخطوات ثابتة.'
            )}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 via-green-200 to-lime-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.id}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow text-4xl`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.iconChar}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors font-heading">
                  {language === 'ar' ? step.titleAr : step.titleEn}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-4 font-primary">
                  {language === 'ar' ? step.descriptionAr : step.descriptionEn}
                </p>

                {/* Duration */}
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${step.color} bg-opacity-10 rounded-full`}>
                  <span className="text-sm font-semibold text-neutral-700 font-primary">
                    ⏱️ {language === 'ar' ? step.durationAr : step.durationEn}
                  </span>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 max-w-4xl mx-auto shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-heading">
              {t('Ready to book your free session?', 'جاهز/ة تحجز جلستك المجانية؟')}
            </h3>
            <p className="text-lg text-neutral-600 mb-6 font-primary">
              {t(
                'Send a WhatsApp message or complete the form—either way, I’ll follow up quickly.',
                'ابعت رسالة واتساب أو املا الفورم—وفي الحالتين هرد عليك بسرعة.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={whatsappHref}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-primary"
              >
                <span>{t('💬 WhatsApp me', '💬 ابعتلي واتساب')}</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors font-primary"
              >
                {t('📝 Fill the form below', '📝 املا الفورم تحت')}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Success stories preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center border border-neutral-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg font-primary">
                {story.name.charAt(0)}
              </div>
              <h4 className="font-bold text-neutral-900 mb-2 font-heading">{story.name}</h4>
              <p className="text-sm text-neutral-600 mb-1 font-primary">{story.result}</p>
              <p className="text-xs text-green-600 font-semibold font-primary">{story.time}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
