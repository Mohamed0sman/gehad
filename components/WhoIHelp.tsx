'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhoIHelp() {
  const { language, isRTL } = useLanguage()

  const copy = {
    title: {
      en: 'WHO I HELP',
      ar: 'من أساعد'
    },
    subtitle: {
      en: 'Tailored support for diverse career development needs',
      ar: 'دعم مخصص لاحتياجات تطوير المسارات المهنية المتنوعة'
    },
    ctaTitle: {
      en: 'Find Your Path Forward',
      ar: 'اعثر على طريقك الأمام'
    },
    ctaSubtitle: {
      en: "Whether you're an individual seeking clarity or an organization building talent — I have the expertise to support your journey.",
      ar: 'سواء كنت فردًا يبحث عن الوضوح أو مؤسسة تبني المواهب — لدي الخبرة لدعم رحلتك.'
    },
    ctaPrimary: {
      en: 'Start Your Journey',
      ar: 'ابدأ رحلتك'
    },
    ctaSecondary: {
      en: 'Explore Programs',
      ar: 'استكشف البرامج'
    }
  }

  const t = (en: any, ar: any) => (language === 'ar' ? ar : en)

  const audiences = [
    {
      title: {
        en: 'Individuals in Career Transition',
        ar: 'الأفراد في مرحلة الانتقال المهني'
      },
      description: {
        en: 'Professionals navigating career change, stagnation, or burnout — seeking clarity and confidence.',
        ar: 'المحترفون الذين يمرون بتغيير مهني أو ركود أو إرهاق — يبحثون عن الوضوح والثقة.'
      },
      features: {
        en: ['Career Change Guidance', 'Burnout Recovery', 'Direction & Clarity', 'Confidence Building'],
        ar: ['إرشاد تغيير المسار', 'التعافي من الإرهاق', 'التوجيه والوضوح', 'بناء الثقة']
      },
      color: {
        bg: 'from-blue-500 to-cyan-500',
        border: 'border-blue-200',
        accent: 'bg-blue-500'
      }
    },
    {
      title: {
        en: 'Organizations & Institutions',
        ar: 'المؤسسات والمنظمات'
      },
      description: {
        en: 'Universities, NGOs, and organizations building employability and career readiness.',
        ar: 'الجامعات والمنظمات غير الربحية التي تبني قابلية التوظيف والاستعداد المهني.'
      },
      features: {
        en: ['Employability Programs', 'Leadership Development', 'Career Readiness', 'Structured Learning'],
        ar: ['برامج قابلية التوظيف', 'تطوير القيادة', 'الاستعداد المهني', 'التعلم المنظم']
      },
      color: {
        bg: 'from-purple-500 to-pink-500',
        border: 'border-purple-200',
        accent: 'bg-purple-500'
      }
    },
    {
      title: {
        en: 'Professionals & Educators',
        ar: 'المحترفون والمعلمون'
      },
      description: {
        en: 'Career coaches and educators seeking evidence-based frameworks and professional development.',
        ar: 'مدربين المهنة والمعلمين الذين يبحثون عن أطر قائمة على الأدلة والتطوير المهني.'
      },
      features: {
        en: ['Evidence-Based Frameworks', 'NCDA Standards', 'Professional Development', 'Collaboration'],
        ar: ['أطر قائمة على الأدلة', 'معايير NCDA', 'التطوير المهني', 'التعاون']
      },
      color: {
        bg: 'from-green-500 to-emerald-500',
        border: 'border-green-200',
        accent: 'bg-green-500'
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border-2 ${audience.color.border} group-hover:${audience.color.border.replace('200', '300')} transition-all duration-300 h-full`}>
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.color.bg} rounded-t-3xl`} />

                {/* Number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${audience.color.bg} rounded-xl mb-6 text-white font-bold text-lg shadow-lg`}>
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(audience.title.en, audience.title.ar)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(audience.description.en, audience.description.ar)}
                </p>

                {/* Features */}
                <div className="border-t border-gray-100 pt-5">
                  <ul className="space-y-2">
                    {t(audience.features.en, audience.features.ar).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${audience.color.accent} rounded-full flex-shrink-0`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-16 translate-y-16"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t(copy.ctaTitle.en, copy.ctaTitle.ar)}
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                {t(copy.ctaSubtitle.en, copy.ctaSubtitle.ar)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {t(copy.ctaPrimary.en, copy.ctaPrimary.ar)}
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors"
                >
                  {t(copy.ctaSecondary.en, copy.ctaSecondary.ar)}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
