"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function Testimonials() {
  const { language, isRTL } = useLanguage();
  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  const copy = {
    title: {
      en: "What People Say",
      ar: "ماذا يقول العملاء",
    },
    subtitle: {
      en: "Real transformations from professionals who invested in their career development journey",
      ar: "تحولات حقيقية من المحترفين الذين استثمروا في رحلة تطوير مسارهم المهني",
    },
    verifiedClient: {
      en: "Verified Client",
      ar: "عميل محقق",
    },
    ctaTitle: {
      en: "Ready to Write Your Success Story?",
      ar: "هل أنت مستعد لكتابة قصة نجاحك؟",
    },
    ctaSubtitle: {
      en: "Join hundreds of professionals who have transformed their careers with evidence-based guidance.",
      ar: "انضم إلى مئات المحترفين الذين حولوا مسارهم المهني بإرشاد قائم على الأدلة.",
    },
    ctaPrimary: {
      en: "Book Consultation",
      ar: "احجز استشارة",
    },
    ctaSecondary: {
      en: "View All Programs",
      ar: "عرض جميع البرامج",
    },
  };

  const testimonials = [
    {
      name: t("Sarah Ahmed", "سارة أحمد"),
      role: t("Marketing Manager", "مديرة تسويق"),
      company: t("Tech Startup", "شركة تقنية ناشئة"),
      content: t(
        "Gehad helped me transition from a dead-end job to a career I'm passionate about. Her evidence-based approach and strategic guidance were invaluable.",
        "ساعدتني جهاد في الانتقال من وظيفة مسدودة إلى مسار مهني أشعر بالشغف تجاهه. نهجها القائم على الأدلة والإرشاد الاستراتيجي كان لا يقدر بثمن.",
      ),
      rating: 5,
      avatar: "SA",
    },
    {
      name: t("Mohamed Hassan", "محمد حسن"),
      role: t("Software Developer", "مطور برمجيات"),
      company: t("Multinational Company", "شركة متعددة الجنسيات"),
      content: t(
        "The career clarity framework provided by Gehad transformed how I approach my professional development. I now have a clear path forward.",
        "إطار العمل الذي قدمته جهاد لوضوح المسار المهني غير طريقة تعاملي مع تطويري المهني. أصبح لدي الآن مسار واضح للأمام.",
      ),
      rating: 5,
      avatar: "MH",
    },
    {
      name: t("Nadia El-Sayed", "نادية السيد"),
      role: t("HR Director", "مديرة موارد بشرية"),
      company: t("Engineering Firm", "شركة هندسية"),
      content: t(
        "As an HR professional, I was impressed by Gehad's systematic approach to career development. She brought real value to our team.",
        "كمتخصصة في الموارد البشرية، أعجبت بالنهج المنتظم لجهاد في تطوير المسارات المهنية. لقد أضافت قيمة حقيقية لفريقنا.",
      ),
      rating: 5,
      avatar: "NE",
    },
    {
      name: t("Khalid Omar", "خالد عمر"),
      role: t("Recent Graduate", "خريج حديث"),
      company: t("University Graduate", "خريج جامعي"),
      content: t(
        "Gehad's guidance helped me navigate the challenging job market with confidence. I landed my dream job within 3 months!",
        "إرشاد جهاد ساعدني في التنقل بثقة في سوق العمل الصعب. حصلت على وظيفة أحلامي في غضون 3 أشهر!",
      ),
      rating: 5,
      avatar: "KO",
    },
    {
      name: t("Mariam Ali", "مريم علي"),
      role: t("Freelance Designer", "مصممة مستقلة"),
      company: t("Independent", "مستقلة"),
      content: t(
        "The freelancing program gave me the tools and confidence to build a successful independent career. Highly recommended!",
        "برنامج العمل الحر أعطاني الأدوات والثقة لبناء مسار مهني مستقل ناجح. أنصح به بشدة!",
      ),
      rating: 5,
      avatar: "MA",
    },
    {
      name: t("Ahmed Kamel", "أحمد كامل"),
      role: t("Team Lead", "قائد فريق"),
      company: t("Tech Company", "شركة تقنية"),
      content: t(
        "Gehad's leadership coaching helped me transition from individual contributor to effective team leader. The results speak for themselves.",
        "التدريب القيادي من جهاد ساعدني في الانتقال من مساهم فردي إلى قائد فريق فعال. النتائج تتحدث عن نفسها.",
      ),
      rating: 5,
      avatar: "AK",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-primary-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-6">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-primary leading-relaxed">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 group hover:-translate-y-2 h-full flex flex-col">
                {/* Quote mark */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary-100 to-brand-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-brand-primary-600">"</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow mb-6">
                  <p className="text-lg text-neutral-700 leading-relaxed font-primary italic">
                    {testimonial.content}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  <div className="flex text-amber-400 text-lg">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 font-heading">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-neutral-600 font-primary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-brand-primary-600 font-semibold px-3 py-1 bg-brand-primary-50 rounded-full">
                    {t(copy.verifiedClient.en, copy.verifiedClient.ar)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 rounded-3xl p-12 md:p-16 text-white overflow-hidden relative shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                {t(copy.ctaTitle.en, copy.ctaTitle.ar)}
              </h3>
              <p className="text-xl mb-10 text-white/90 font-primary leading-relaxed">
                {t(copy.ctaSubtitle.en, copy.ctaSubtitle.ar)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/booking"
                  variant="secondary"
                  className="bg-white text-brand-primary-700 hover:bg-neutral-50 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  {t(copy.ctaPrimary.en, copy.ctaPrimary.ar)}
                </Button>
                <Button
                  href="/programs"
                  variant="ghost"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  size="lg"
                >
                  {t(copy.ctaSecondary.en, copy.ctaSecondary.ar)}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
