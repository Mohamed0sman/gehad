"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SocialProof() {
  const { language, isRTL } = useLanguage();

  const copy = {
    title: {
      en: "Professional Excellence",
      ar: "التميز المهني",
    },
    subtitle: {
      en: "Evidence-based career development with measurable impact across the MENA region",
      ar: "تطوير مهني قائم على الأدلة مع تأثير قابل للقياس عبر منطقة الشرق الأوسط وشمال أفريقيا",
    },
    metrics: {
      en: [
        {
          number: "10+",
          label: "Years Experience",
          description: "Dedicated professional practice in career development",
        },
        {
          number: "10,400+",
          label: "Training Hours",
          description: "Comprehensive workshops and development sessions",
        },
        {
          number: "1,000+",
          label: "Coaching Sessions",
          description: "One-on-one career guidance and mentoring",
        },
        {
          number: "12,000+",
          label: "Professionals Trained",
          description: "Career transformations across multiple industries",
        },
      ],
      ar: [
        {
          number: "10+",
          label: "سنوات خبرة",
          description: "ممارسة مهنية مخصصة في تطوير المسارات المهنية",
        },
        {
          number: "10,400+",
          label: "ساعة تدريب",
          description: "ورش عمل شاملة وجلسات تطوير مهني",
        },
        {
          number: "1,000+",
          label: "جلسة توجيه",
          description: "إرشاد مهني فردي وتوجيه شخصي",
        },
        {
          number: "12,000+",
          label: "محترف مدرب",
          description: "تحولات مهنية عبر صناعات متعددة",
        },
      ],
    },
    partners: {
      title: {
        en: "Trusted by Leading Organizations",
        ar: "موثوق من قبل المؤسسات الرائدة",
      },
      subtitle: {
        en: "Collaborating with universities, government initiatives, and international development programs",
        ar: "التعاون مع الجامعات والمبادرات الحكومية وبرامج التنمية الدولية",
      },
      list: {
        en: [
          { name: "IDITA", category: "Technology Institute" },
          { name: "NTI", category: "National Training Institute" },
          { name: "DEPI", category: "Digital Egypt Initiative" },
          { name: "Universities", category: "Higher Education" },
          { name: "NGOs", category: "Development Organizations" },
        ],
        ar: [
          { name: "معهد إديتا", category: "معهد التكنولوجيا" },
          { name: "معهد التدريب القومي", category: "التدريب الحكومي" },
          { name: "مبادرة مصر الرقمية", category: "المبادرات الحكومية" },
          { name: "الجامعات", category: "التعليم العالي" },
          { name: "المنظمات غير الربحية", category: "منظمات التنمية" },
        ],
      },
    },
  };

  const t = (en: any, ar: any) => (language === "ar" ? ar : en);

  const metrics = t(copy.metrics.en, copy.metrics.ar);
  const partners = t(copy.partners.list.en, copy.partners.list.ar);

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-neutral-50"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-neutral-900">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-primary leading-relaxed">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {metrics.map((metric: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-neutral-100 group-hover:border-brand-primary-200 group-hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-brand-primary-600 mb-4 font-heading group-hover:scale-110 transition-transform duration-300">
                  {metric.number}
                </div>
                <div className="text-lg font-bold text-neutral-900 mb-3 font-heading">
                  {metric.label}
                </div>
                <p className="text-sm text-neutral-600 font-primary leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-neutral-50 to-brand-primary-50 rounded-3xl p-12 border border-neutral-100">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-neutral-900">
              {t(copy.partners.title.en, copy.partners.title.ar)}
            </h3>
            <p className="text-lg text-neutral-600 mb-12 font-primary max-w-3xl mx-auto leading-relaxed">
              {t(copy.partners.subtitle.en, copy.partners.subtitle.ar)}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 group-hover:border-brand-primary-300 group-hover:-translate-y-1">
                    <div className="text-lg font-bold text-brand-primary-700 mb-2 font-heading">
                      {partner.name}
                    </div>
                    <p className="text-xs text-neutral-500 font-primary uppercase tracking-wider">
                      {partner.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Certification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 text-white rounded-2xl shadow-xl">
            <div className="text-center">
              <div className="text-lg font-bold mb-1">
                {t("NCDA Certified Professional", "محترف معتمد من NCDA")}
              </div>
              <div className="text-sm opacity-90">
                {t(
                  "Global Career Development Facilitator",
                  "ميسر تطوير مسارات مهنية عالمي",
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Elegant Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="flex justify-center items-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-brand-primary-300"></div>
            <div className="w-3 h-3 rounded-full bg-brand-primary-400 mx-6 shadow-lg"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-brand-primary-300 to-brand-primary-500"></div>
            <div className="w-3 h-3 rounded-full bg-brand-primary-400 mx-6 shadow-lg"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-brand-primary-500 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
