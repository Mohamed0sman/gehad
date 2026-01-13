"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function Vision2026() {
  const { language, isRTL } = useLanguage();
  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  const copy = {
    title: {
      en: "Vision 2026: NCDA Certified Instructor",
      ar: "رؤية 2026: مدرب معتمد من NCDA",
    },
    subtitle: {
      en: "Becoming a Certified FCD Instructor (NCDA)",
      ar: "أن أصبح مدرب معتمد لتطوير المسارات المهنية من NCDA",
    },
    mainStatement: {
      en: "Becoming an NCDA Certified Facilitating Career Development Instructor is not a title I seek —",
      ar: "أن أصبح مدرب معتمد لتطوير المسارات المهنية من NCDA ليس مجرد لقب أسعى إليه —",
    },
    mainStatementHighlight: {
      en: "it is a responsibility I am preparing for.",
      ar: "إنها مسؤولية أستعد لها.",
    },
    visionDescription: {
      en: "My vision is to expand access to globally grounded, culturally relevant career education across the MENA region, and to prepare the next generation of career coaches, facilitators, and educators to lead with clarity, ethics, and competence.",
      ar: "رؤيتي هي توسيع الوصول إلى التعليم المهني المؤسس عالمياً والملائم ثقافياً في منطقة الشرق الأوسط وشمال أفريقيا، وإعداد الجيل القادم من مدربي المسار المهني والميسرين والمعلمين للقيادة بوضوح وأخلاق وكفاءة.",
    },
    quote1: {
      en: "This is not the next step.",
      ar: "هذه ليست الخطوة التالية.",
    },
    quote2: {
      en: "It is the natural continuation of the work I have already committed my life to.",
      ar: "إنها الاستمرارية الطبيعية للعمل الذي التزمت بالفعل بحياتي له.",
    },
    pillars: {
      en: [
        {
          title: "Global Standards",
          description:
            "Bringing internationally recognized career development frameworks to the MENA region with cultural sensitivity and local relevance.",
        },
        {
          title: "Educational Excellence",
          description:
            "Training the next generation of career development professionals with evidence-based methodologies and ethical practices.",
        },
        {
          title: "Regional Impact",
          description:
            "Creating sustainable career development ecosystems that address the unique challenges and opportunities in our region.",
        },
      ],
      ar: [
        {
          title: "المعايير العالمية",
          description:
            "جلب أطر تطوير المسارات المهنية المعترف بها دولياً إلى منطقة الشرق الأوسط وشمال أفريقيا مع الحساسية الثقافية والصلة المحلية.",
        },
        {
          title: "التميز التعليمي",
          description:
            "تدريب الجيل القادم من محترفي تطوير المسارات المهنية بمنهجيات قائمة على الأدلة وممارسات أخلاقية.",
        },
        {
          title: "التأثير الإقليمي",
          description:
            "إنشاء أنظمة بيئية مستدامة لتطوير المسارات المهنية تعالج التحديات والفرص الفريدة في منطقتنا.",
        },
      ],
    },
    journey: {
      title: {
        en: "The Journey Ahead",
        ar: "الرحلة القادمة",
      },
      steps: {
        en: [
          {
            year: "2024",
            milestone: "NCDA Certification Preparation",
            description:
              "Completing advanced training and meeting all certification requirements",
          },
          {
            year: "2025",
            milestone: "FCD Instructor Application",
            description: "Formal application and assessment process with NCDA",
          },
          {
            year: "2026",
            milestone: "Regional Training Launch",
            description: "Begin delivering FCD programs across the MENA region",
          },
        ],
        ar: [
          {
            year: "2024",
            milestone: "التحضير لشهادة NCDA",
            description: "إكمال التدريب المتقدم واستيفاء جميع متطلبات الشهادة",
          },
          {
            year: "2025",
            milestone: "تقديم طلب مدرب FCD",
            description: "عملية التقديم والتقييم الرسمية مع NCDA",
          },
          {
            year: "2026",
            milestone: "إطلاق التدريب الإقليمي",
            description:
              "بدء تقديم برامج FCD عبر منطقة الشرق الأوسط وشمال أفريقيا",
          },
        ],
      },
    },
    cta: {
      title: {
        en: "Join Me on This Journey",
        ar: "انضم إلي في هذه الرحلة",
      },
      description: {
        en: "Be part of the transformation of career development in our region. Together, we can build a future where every professional has access to world-class career guidance.",
        ar: "كن جزءاً من تحول تطوير المسارات المهنية في منطقتنا. معاً، يمكننا بناء مستقبل حيث يتمتع كل محترف بالوصول إلى إرشاد مهني على مستوى عالمي.",
      },
      button: {
        en: "Partner with Me",
        ar: "شارك معي",
      },
    },
  };

  const pillars = language === "ar" ? copy.pillars.ar : copy.pillars.en;
  const journeySteps =
    language === "ar" ? copy.journey.steps.ar : copy.journey.steps.en;

  return (
    <section
      className="py-20 bg-gradient-to-b from-primary-50 to-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4 font-heading text-neutral-900">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-body-lg text-primary-600 font-primary font-semibold">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Main Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="card-elevated p-8 md:p-12">
            {/* Decorative Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mx-auto mb-8"></div>

            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 font-heading text-neutral-900 leading-relaxed">
              {t(copy.mainStatement.en, copy.mainStatement.ar)}
              <span className="text-primary-600 block mt-2">
                {t(
                  copy.mainStatementHighlight.en,
                  copy.mainStatementHighlight.ar,
                )}
              </span>
            </h3>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 mb-8 border border-primary-200">
              <p className="text-body-lg text-neutral-700 leading-relaxed font-primary text-center">
                {t(copy.visionDescription.en, copy.visionDescription.ar)}
              </p>
            </div>

            <div className="text-center">
              <blockquote className="text-lg font-semibold text-primary-700 font-heading italic">
                "{t(copy.quote1.en, copy.quote1.ar)}"
                <br />
                <span className="text-primary-800 mt-2 block">
                  "{t(copy.quote2.en, copy.quote2.ar)}"
                </span>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Vision Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {pillars.map((pillar: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="card p-6 hover:scale-105 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  {index + 1}
                </div>

                <h4 className="text-lg font-bold text-neutral-900 mb-3 font-heading">
                  {pillar.title}
                </h4>

                <p className="text-neutral-600 font-primary leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-h3 font-bold text-center mb-12 font-heading text-neutral-900">
            {t(copy.journey.title.en, copy.journey.title.ar)}
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {journeySteps.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.year}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-neutral-900 mb-2 font-heading">
                      {step.milestone}
                    </h4>
                    <p className="text-neutral-600 font-primary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-brand-primary-900 to-brand-primary-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-h3 font-bold mb-6 font-heading">
              {t(copy.cta.title.en, copy.cta.title.ar)}
            </h3>
            <p className="text-body-lg mb-8 text-neutral-200 max-w-2xl mx-auto leading-relaxed">
              {t(copy.cta.description.en, copy.cta.description.ar)}
            </p>
            <Button
              href="/contact"
              variant="secondary"
              className="bg-white text-brand-primary-900 hover:bg-neutral-100"
              size="lg"
            >
              {t(copy.cta.button.en, copy.cta.button.ar)}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
