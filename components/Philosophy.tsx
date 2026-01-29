'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Philosophy() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const copy = {
    title: {
      en: "My Philosophy",
      ar: "فلسفتي"
    },
    subtitle: {
      en: "Core principles that guide my practice and approach",
      ar: "المبادئ الأساسية التي توجه ممارستي ونهجي"
    },
    points: [
      {
        title: { en: "Evidence-Based Approach", ar: "النهج القائم على الأدلة" },
        description: { en: "Using data, research, and proven methodologies to guide career decisions.", ar: "استخدام البيانات والبحث والمنهجيات المثبتة لتوجيه القرارات المهنية." },
        number: "1",
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: { en: "Human-Centered Design", ar: "التصميم المتمحور حول الإنسان" },
        description: { en: "Putting people first, understanding that careers are personal journeys.", ar: "وضع الناس أولاً، وإدراك أن المسارات المهنية هي رحلات شخصية." },
        number: "2",
        color: "from-purple-500 to-pink-500"
      },
      {
        title: { en: "Strategic Thinking", ar: "التفكير الاستراتيجي" },
        description: { en: "Helping clients see the bigger picture and make informed choices.", ar: "مساعدة العملاء على رؤية الصورة الكبيرة واتخاذ قرارات مستنيرة." },
        number: "3",
        color: "from-green-500 to-emerald-500"
      },
      {
        title: { en: "Continuous Growth", ar: "النمو المستمر" },
        description: { en: "Learning and evolving alongside clients and industry changes.", ar: "التعلم والتطور جنباً إلى جنب مع العملاء وتغيرات الصناعة." },
        number: "4",
        color: "from-orange-500 to-amber-500"
      }
    ],
    ctaTitle: {
      en: "Let's Design Your Career Together",
      ar: "هيا نصمم مسارك المهني معاً"
    },
    ctaSubtitle: {
      en: "Ready to take the next step in your professional journey with intentional design and strategic guidance.",
      ar: "مستعد لاتخاذ الخطوة التالية في رحلتك المهنية مع التصميم المتعمد والإرشاد الاستراتيجي."
    },
    ctaPrimary: {
      en: "Book a Session",
      ar: "احجز جلسة"
    },
    ctaSecondary: {
      en: "Learn More",
      ar: "اعرف المزيد"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {copy.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group h-full"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                {/* Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${point.color} rounded-t-2xl`} />

                {/* Number */}
                <div className={`inline-flex items-center justify-center w-10 h-10 ${point.color} rounded-lg mb-4 text-white font-bold text-sm`}>
                  {point.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(point.title.en, point.title.ar)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(point.description.en, point.description.ar)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t(copy.ctaTitle.en, copy.ctaTitle.ar)}
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {t(copy.ctaSubtitle.en, copy.ctaSubtitle.ar)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                {t(copy.ctaPrimary.en, copy.ctaPrimary.ar)}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors"
              >
                {t(copy.ctaSecondary.en, copy.ctaSecondary.ar)}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
