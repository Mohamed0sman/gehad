"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutHero() {
  const { language, isRTL } = useLanguage();

  const copy = {
    badge: {
      en: "NCDA Certified Professional",
      ar: "محترف معتمد من NCDA"
    },
    title: {
      en: "About Gehad Ashraf",
      ar: "عن جهاد أشرف"
    },
    subtitle: {
      en: "Empowering Careers Through Evidence-Based Practice",
      ar: "تمكين المسارات المهنية من خلال الممارسة القائمة على الأدلة"
    },
    description: {
      en: "Discover my journey from statistics to psychology, and how I help professionals and organizations design careers with intention, purpose, and strategic clarity. With over a decade of experience, I've transformed thousands of career paths through evidence-based methodologies and personalized guidance.",
      ar: "اكتشف رحلتي من الإحصاء إلى علم النفس، وكيف أساعد المحترفين والمؤسسات على تصميم مساراتهم المهنية بوضوح واستراتيجية. مع أكثر من عقد من الخبرة، حولت آلاف المسارات المهنية من خلال المنهجيات القائمة على الأدلة والإرشاد الشخصي."
    },
    ctaPrimary: {
      en: "Book a Session",
      ar: "احجز جلسة"
    },
    ctaSecondary: {
      en: "Read My Story",
      ar: "اقرأ قصتي"
    },
    stats: {
      ncda: {
        labelEn: "NCDA",
        labelAr: "NCDA",
        valueEn: "Certified Professional",
        valueAr: "محترف معتمد"
      },
      trained: {
        value: "12K+",
        labelEn: "Professionals Trained",
        labelAr: "محترف تم تدريبه"
      },
      experience: {
        value: "10+",
        labelEn: "Years of Experience",
        labelAr: "سنوات من الخبرة"
      }
    }
  };

  const t = (en: any, ar: any) => (language === "ar" ? ar : en);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
            <span className="text-blue-200 font-semibold text-sm tracking-wide">
              {t(copy.badge.en, copy.badge.ar)}
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
        >
          {t(copy.title.en, copy.title.ar)}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-blue-200 mb-8 leading-relaxed"
        >
          {t(copy.subtitle.en, copy.subtitle.ar)}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          {t(copy.description.en, copy.description.ar)}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {t(copy.ctaPrimary.en, copy.ctaPrimary.ar)}
              <span className="ml-2">→</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#story"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              {t(copy.ctaSecondary.en, copy.ctaSecondary.ar)}
            </Link>
          </motion.div>
        </motion.div>

        {/* Professional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">
              {t(copy.stats.ncda.labelEn, copy.stats.ncda.labelAr)}
            </div>
            <div className="text-gray-300 text-sm">
              {t(copy.stats.ncda.valueEn, copy.stats.ncda.valueAr)}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">
              {copy.stats.trained.value}
            </div>
            <div className="text-gray-300 text-sm">
              {t(copy.stats.trained.labelEn, copy.stats.trained.labelAr)}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">
              {copy.stats.experience.value}
            </div>
            <div className="text-gray-300 text-sm">
              {t(copy.stats.experience.labelEn, copy.stats.experience.labelAr)}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
