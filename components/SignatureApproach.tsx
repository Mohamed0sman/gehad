"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const SignatureApproach: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const copy = {
    badge: {
      en: "Signature Approach",
      ar: "نهجي المميز"
    },
    title: {
      en: "Where data meets human potential",
      ar: "حيث يلتقي البيانات بالإمكانات البشرية"
    },
    subtitle: {
      en: "Three evidence-based pillars that transform career development",
      ar: "ثلاث ركائز قائمة على الأدلة تحول تطوير المسارات المهنية"
    },
    cta: {
      primary: {
        en: "Experience This Approach",
        ar: "جرب هذا النهج"
      },
      secondary: {
        en: "View Programs",
        ar: "عرض البرامج"
      }
    }
  };

  const t = (en: any, ar: any) => (language === "ar" ? ar : en);

  const approaches = [
    {
      title: "Data-Driven Coaching",
      subtitle: "Analytics-Powered",
      description: "Career decisions guided by analytics, assessments, and structured frameworks — not guesswork",
      features: ["Assessment-Based Insights", "Analytics Frameworks", "Structured Decision Models", "Evidence-Based Strategies"],
      color: {
        bg: "from-orange-500 to-amber-500",
        border: "border-orange-200",
        accent: "bg-orange-500"
      }
    },
    {
      title: "Psychology + Decision Science",
      subtitle: "Human-Centered",
      description: "Integrating emotional intelligence, mindset, and cognitive science for sustainable choices",
      features: ["Emotional Intelligence", "Cognitive Science", "Behavioral Psychology", "Sustainable Growth"],
      color: {
        bg: "from-blue-500 to-cyan-500",
        border: "border-blue-200",
        accent: "bg-blue-500"
      }
    },
    {
      title: "Evidence-Based Career Development",
      subtitle: "Globally Grounded",
      description: "Grounded in NCDA frameworks, global best practices, and measurable outcomes",
      features: ["NCDA Frameworks", "Global Best Practices", "Measurable Outcomes", "Research-Backed Methods"],
      color: {
        bg: "from-purple-500 to-pink-500",
        border: "border-purple-200",
        accent: "bg-purple-500"
      }
    }
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-600 font-medium text-sm mb-6">
            {t(copy.badge.en, copy.badge.ar)}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Approach Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border-2 ${approach.color.border} transition-all duration-300 h-full`}>
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${approach.color.bg} rounded-t-3xl`} />

                {/* Number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${approach.color.bg} rounded-xl mb-6 text-white font-bold text-lg shadow-lg`}>
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {approach.title}
                </h3>

                {/* Subtitle */}
                <p className={`text-sm font-semibold bg-gradient-to-r ${approach.color.bg} bg-clip-text text-transparent mb-4`}>
                  {approach.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {approach.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {approach.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 ${approach.color.accent} rounded-full flex-shrink-0`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t(copy.title.en, copy.title.ar)}
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'كل قرار مهني مدعوم بالأدلة، وكل استراتيجية يتم قياسها للتأثير.'
                : 'Every career decision is supported by evidence, every strategy is measured for impact.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t(copy.cta.primary.en, copy.cta.primary.ar)}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 transition-all duration-300"
              >
                {t(copy.cta.secondary.en, copy.cta.secondary.ar)}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureApproach;
