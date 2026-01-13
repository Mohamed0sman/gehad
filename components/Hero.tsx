"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function Hero() {
  const { language, isRTL } = useLanguage();

  const copy = {
    badge: {
      en: "NCDA Certified Professional",
      ar: "محترف معتمد من NCDA",
    },
    title: {
      en: "Gehad Ashraf",
      ar: "جهاد أشرف",
    },
    subtitle: {
      en: "Career Development Professional",
      ar: "أخصائية تطوير المسارات المهنية",
    },
    description: {
      en: "Helping professionals and organizations design careers that truly fit through evidence-based frameworks and strategic action.",
      ar: "أساعد المحترفين والمؤسسات في تصميم مسارات مهنية تناسبهم حقاً من خلال أطر عمل قائمة على الأدلة وإجراءات استراتيجية.",
    },
    primaryCta: {
      en: "Book Consultation",
      ar: "احجز استشارة",
    },
    secondaryCta: {
      en: "View Programs",
      ar: "عرض البرامج",
    },
  };

  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary-50 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary-100 text-brand-primary-700 text-sm font-semibold tracking-wide border border-brand-primary-200">
              {t(copy.badge.en, copy.badge.ar)}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-neutral-900 mb-4 tracking-tight"
          >
            {t(copy.title.en, copy.title.ar)}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-primary-600 font-semibold mb-8 tracking-wide"
          >
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed font-primary"
          >
            {t(copy.description.en, copy.description.ar)}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              href="/booking"
              variant="primary"
              size="lg"
              className="min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t(copy.primaryCta.en, copy.primaryCta.ar)}
            </Button>

            <Button
              href="#programs"
              variant="secondary"
              size="lg"
              className="min-w-[200px]"
            >
              {t(copy.secondaryCta.en, copy.secondaryCta.ar)}
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "12K+", label: t("Happy Clients", "عميل سعيد") },
              { number: "10+", label: t("Years Experience", "سنوات خبرة") },
              { number: "95%", label: t("Success Rate", "معدل نجاح") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl lg:text-5xl font-bold text-brand-primary-700 mb-2 font-heading group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-neutral-400">
          <span className="text-xs uppercase tracking-wider mb-2 font-semibold">
            {t("Scroll", "تمرير")}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
