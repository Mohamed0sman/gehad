"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function SocialProof() {
  const { language, isRTL } = useLanguage();

  const copy = {
    title: {
      en: "SOCIAL PROOF",
      ar: "أرقام تتحدث عن نفسها"
    },
    subtitle: {
      en: "Evidence-based career development with measurable impact across the MENA region",
      ar: "تطوير مهني قائم على الأدلة مع تأثير حقيقي عبر المنطقة"
    },
    metrics: {
      en: [
        {
          number: "10+",
          label: "Years of Experience",
          description: "Professional practice in career development"
        },
        {
          number: "10,400+",
          label: "Training Hours",
          description: "Workshops and development sessions"
        },
        {
          number: "1,000+",
          label: "Coaching Sessions",
          description: "One-on-one career guidance"
        },
        {
          number: "Thousands",
          label: "Professionals Trained",
          description: "Across MENA region"
        }
      ],
      ar: [
        {
          number: "10+",
          label: "سنوات الخبرة",
          description: "ممارسة مهنية في تطوير المسارات"
        },
        {
          number: "10,400+",
          label: "ساعة تدريبية",
          description: "ورش عمل وجلسات تطوير"
        },
        {
          number: "1,000+",
          label: "جلسة إرشاد",
          description: "توجيه مهني فردي"
        },
        {
          number: "آلاف",
          label: "محترف تم تدريبه",
          description: "عبر منطقة الشرق الأوسط"
        }
      ]
    },
    partnersTitle: {
      en: "Trusted Partners",
      ar: "شركاء النجاح"
    },
    partnersSubtitle: {
      en: "Partnering with leading organizations across the region",
      ar: "نتعاون مع المؤسسات الرائدة في المنطقة"
    },
    partners: {
      en: [
        { name: "AUC", logo: "/logs /AUC 100 YEARS LOGO.jpg", alt: "American University in Cairo" },
        { name: "GCDF", logo: "/logs /GCDFLogo1.jfif", alt: "Global Career Development Facilitator" },
        { name: "IBCT", logo: "/logs /IBCT_Logo_Final_with_White_Ring_500x500.png", alt: "International Board of Career Testing" },
        { name: "NCDA", logo: "/logs /NCDA-1024x283.png", alt: "National Career Development Association" },
        { name: "256", logo: "/logs /256x256bb-removebg-preview (1).png", alt: "256 Certification" }
      ],
      ar: [
        { name: "AUC", logo: "/logs /AUC 100 YEARS LOGO.jpg", alt: "الجامعة الأمريكية بالقاهرة" },
        { name: "GCDF", logo: "/logs /GCDFLogo1.jfif", alt: "شعار GCDF" },
        { name: "IBCT", logo: "/logs /IBCT_Logo_Final_with_White_Ring_500x500.png", alt: "شعار IBCT" },
        { name: "NCDA", logo: "/logs /NCDA-1024x283.png", alt: "شعار NCDA" },
        { name: "256", logo: "/logs /256x256bb-removebg-preview (1).png", alt: "شعار 256" }
      ]
    },
    cta: {
      title: {
        en: "Ready to Start?",
        ar: "مستعد لتغيير مسارك المهني؟"
      },
      subtitle: {
        en: "Book a discovery session and take the first step",
        ar: "احجز جلسة استكشافية واتخذ第一步"
      },
      button: {
        en: "Book Now",
        ar: "احجز الآن"
      }
    }
  };

  const t = (en: any, ar: any) => (language === "ar" ? ar : en);

  const metrics = t(copy.metrics.en, copy.metrics.ar);
  const partners = t(copy.partners.en, copy.partners.ar);

  return (
    <section
      className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Metrics - Modern Floating Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {/* Gradient Accent */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                index === 0 ? 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20' :
                index === 1 ? 'bg-gradient-to-br from-purple-400/20 to-pink-400/20' :
                index === 2 ? 'bg-gradient-to-br from-orange-400/20 to-amber-400/20' :
                'bg-gradient-to-br from-green-400/20 to-emerald-400/20'
              }`} />

              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl border border-gray-100/50 transition-all duration-300 h-full">
                {/* Number with gradient */}
                <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${
                  index === 0 ? 'from-blue-600 to-cyan-600' :
                  index === 1 ? 'from-purple-600 to-pink-600' :
                  index === 2 ? 'from-orange-600 to-amber-600' :
                  'from-green-600 to-emerald-600'
                } bg-clip-text text-transparent`}>
                  {metric.number}
                </div>

                {/* Label */}
                <div className="text-lg font-bold text-gray-800 mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {metric.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                  index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                  index === 2 ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                  'bg-gradient-to-r from-green-500 to-emerald-500'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t(copy.partnersTitle.en, copy.partnersTitle.ar)}
            </h3>
            <p className="text-gray-600">
              {t(copy.partnersSubtitle.en, copy.partnersSubtitle.ar)}
            </p>
          </div>

          {/* Partner Logos - Clean inline display */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <div className="relative group">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-10 md:p-14 text-white shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                {t(copy.cta.title.en, copy.cta.title.ar)}
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto">
                {t(copy.cta.subtitle.en, copy.cta.subtitle.ar)}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t(copy.cta.button.en, copy.cta.button.ar)}
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold">
              {t("NCDA Certified Professional", "محترف معتمد من NCDA")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
