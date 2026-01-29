'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { language } = useLanguage();

  const copy = {
    title: {
      en: "SERVICES",
      ar: "الخدمات"
    },
    subtitle: {
      en: "Comprehensive career development solutions for organizations and individuals",
      ar: "حلول شاملة لتطوير المسارات المهنية للمنظمات والأفراد"
    },
    consulting: {
      title: {
        en: "Career Development Consulting For Business",
        ar: "استشارات تطوير المسار المهني للشركات"
      },
      subtitle: {
        en: "What This Service Is",
        ar: "ما هي هذه الخدمة"
      },
      description: {
        en: "I partner with organizations to design and deliver career development, employability, and learning solutions that align human potential with organizational goals.",
        ar: "أعمل مع الشركات لتصميم وتقديم حلول تطوير المسار المهني وقابلية التوظيف والتعلم التي توافق بين الإمكانات البشرية وأهداف المؤسسات."
      },
      valueProp: {
        en: "This service supports institutions seeking sustainable performance, reduced burnout, and future-ready talent",
        ar: "تدعم هذه الخدمة المؤسسات التي تسعى إلى أداء مستدام وتقليل الإرعداد والاستعداد للمستقبل"
      },
      whoFor: {
        en: "Who It's For",
        ar: "لمن هذه الخدمة"
      },
      audience: {
        en: [
          "Universities and educational institutions",
          "Government initiatives and NGOs", 
          "HR & L&D departments",
          "Startups and growing organizations"
        ],
        ar: [
          "الجامعات والمؤسسات التعليمية",
          "المبادرات الحكومية والمنظمات غير الربحية",
          "إدارة الموارد البشرية والتعلم",
          "الشركات الناشئة والمؤسسات النامية"
        ]
      },
      cta: {
        en: "Let's Build Career-Ready Talent",
        ar: "هيا نبني مهارات جاهزة للوظيفة"
      },
      ctaSubtext: {
        en: "Contact for partnerships and consulting",
        ar: "اتصل بنا للشراكات والاستشارات"
      }
    },
    counseling: {
      title: {
        en: "Career Counseling For Individuals",
        ar: "التوجيه المهني للأفراد"
      },
      subtitle: {
        en: "What This Service Is",
        ar: "ما هي هذه الخدمة"
      },
      description: {
        en: "Career counseling is a structured, evidence-based process designed to help individuals gain clarity, direction, and confidence in their career decisions.",
        ar: "التوجيه المهني هو عملية منظمة وقائمة على الأدلة مصممة لمساعدة الأفراد على اكتساب الوضوح والتوجيه والثقة في قراراتهم المهنية."
      },
      valueProp: {
        en: "It is not advice-giving. It is career design.",
        ar: "إنها ليست إعطاء نصائح. إنها تصميم المسار المهني."
      },
      whoFor: {
        en: "Who It's For",
        ar: "لمن هذه الخدمة"
      },
      audience: {
        en: [
          "Young professionals at career entry or transition",
          "Mid-career professionals experiencing stagnation or burnout",
          "Freelancers seeking direction and stability",
          "Individuals preparing for strategic career shifts"
        ],
        ar: [
          "المحترفون الشباب في بداية المسار المهني أو الانتقال",
          "محترفو منتصف المسار المهني الذين يختبرون الركود أو الإرهاق",
          "العمال الحرون الذين يبحثون عن التوجيه والاستقرار",
          "الأفراد الذين يستعدون للتحولات الاستراتيجية في مسيرتهم المهنية"
        ]
      },
      cta: {
        en: "Book a Career Counseling Session",
        ar: "احجز جلسة توجيه مهني"
      },
      ctaSubtext: {
        en: "Start designing your next step",
        ar: "ابدأ بتصميم خطوتك التالية"
      }
    }
  }

  const t = (en: any, ar: any) => (language === "ar" ? ar : en);

  const consultingFeatures = {
    en: ["Custom Program Design", "Employability Framework Development", "Leadership Capacity Building", "Learning & Development Strategy", "Talent Pipeline Optimization", "Performance Enhancement Systems"],
    ar: ["تصميم البرامج المخصصة", "تطوير إطار قابلية التوظيف", "بناء القدرات القيادية", "استراتيجية التعلم والتطوير", "تحسين خط المواهب", "أنظمة تحسين الأداء"]
  };

  const counselingFeatures = {
    en: ["Career Assessment & Analysis", "Strategic Career Planning", "Skill Gap Identification", "Market Positioning Strategy", "Transition Management", "Personal Brand Development"],
    ar: ["التقييم والتحليل المهني", "التخطيط الاستراتيجي للمسار المهني", "تحديد فجوات المهارات", "استراتيجية التموضع في السوق", "إدارة الانتقال", "تطوير الشخصية المهنية"]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Consulting Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 text-white font-bold text-xl`}>
                1
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t(copy.consulting.title.en, copy.consulting.title.ar)}
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h4 className="text-lg font-semibold text-blue-600 mb-3">
                {t(copy.consulting.subtitle.en, copy.consulting.subtitle.ar)}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t(copy.consulting.description.en, copy.consulting.description.ar)}
              </p>
              <p className="text-lg font-semibold text-blue-600 italic">
                {t(copy.consulting.valueProp.en, copy.consulting.valueProp.ar)}
              </p>
            </div>

            {/* Who It's For */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {t(copy.consulting.whoFor.en, copy.consulting.whoFor.ar)}
              </h4>
              <ul className="space-y-2">
                {t(copy.consulting.audience.en, copy.consulting.audience.ar).map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {t(consultingFeatures.en, counselingFeatures.ar).map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>{t(copy.consulting.cta.en, copy.consulting.cta.ar)}</span>
                <span>→</span>
              </Link>
              <p className="text-sm text-gray-500 mt-3">
                {t(copy.consulting.ctaSubtext.en, copy.consulting.ctaSubtext.ar)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Counseling Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 text-white font-bold text-xl`}>
                2
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t(copy.counseling.title.en, copy.counseling.title.ar)}
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h4 className="text-lg font-semibold text-purple-600 mb-3">
                {t(copy.counseling.subtitle.en, copy.counseling.subtitle.ar)}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t(copy.counseling.description.en, copy.counseling.description.ar)}
              </p>
              <p className="text-lg font-semibold text-purple-600 italic">
                {t(copy.counseling.valueProp.en, copy.counseling.valueProp.ar)}
              </p>
            </div>

            {/* Who It's For */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {t(copy.counseling.whoFor.en, copy.counseling.whoFor.ar)}
              </h4>
              <ul className="space-y-2">
                {t(copy.counseling.audience.en, copy.counseling.audience.ar).map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {t(counselingFeatures.en, counselingFeatures.ar).map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/70 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>{t(copy.counseling.cta.en, copy.counseling.cta.ar)}</span>
                <span>→</span>
              </Link>
              <p className="text-sm text-gray-500 mt-3">
                {t(copy.counseling.ctaSubtext.en, copy.counseling.ctaSubtext.ar)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
