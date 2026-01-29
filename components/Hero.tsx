"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const copy = {
    title: {
      en: "Empowering people to design sustainable careers through self-awareness, science, and strategic action.",
      ar: "أساعد المحترفين والمؤسسات والمعلمين على اتخاذ قرارات مهنية مستنيرة باستخدام التدريب القائم على الأدلة وتصميم التعلم"
    },
    mission: {
      en: "I help professionals, organizations, and educators make informed career decisions using evidence-based coaching and learning design",
      ar: "تمكين الناس من تصميم مسارات مهنية مستدامة من خلال الوعي الذاتي والعلم والعمل الاستراتيجي."
    },
    cta: {
      primary: {
        en: "Book a Career Session",
        ar: "احجز جلسة مهنية"
      },
      secondary: {
        en: "Explore Programs",
        ar: "استكشف البرامج"
      }
    }
  };

  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide">
                NCDA Certified Career Development Professional
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              {t(copy.title.en, copy.title.ar)}
            </motion.h1>

            {/* One-Liner Mission */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium"
            >
              {t(copy.mission.en, copy.mission.ar)}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-6 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {t(copy.cta.primary.en, copy.cta.primary.ar)}
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {t(copy.cta.secondary.en, copy.cta.secondary.ar)}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Professional Photo Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl">
                      <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                          GA
                        </div>
                        <div className="text-sm text-blue-100 font-medium">
                          NCDA Certified
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Details Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Gehad Ashraf
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        Career Development Professional
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
