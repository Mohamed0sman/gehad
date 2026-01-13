"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProfessionalStats() {
  const { language, isRTL } = useLanguage();
  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  const copy = {
    title: {
      en: "Making an Impact",
      ar: "إحداث تأثير",
    },
    subtitle: {
      en: "Years of dedication to empowering careers and transforming professional lives across the region",
      ar: "سنوات من التفاني في تمكين المسارات المهنية وتحويل الحياة المهنية في جميع أنحاء المنطقة",
    },
    achievement: {
      en: "Vision 2026: Becoming NCDA Certified Instructor",
      ar: "رؤية 2026: أن أصبح مدربة معتمدة من NCDA",
    },
  };

  const stats = [
    {
      value: "10+",
      label: t("Years", "سنوات"),
      description: t("Professional Experience", "خبرة مهنية"),
      color: "from-blue-500 to-blue-600",
    },
    {
      value: "10,400+",
      label: t("Hours", "ساعة"),
      description: t("Training Delivered", "تدريب مُقدم"),
      color: "from-emerald-500 to-emerald-600",
    },
    {
      value: "1,000+",
      label: t("Sessions", "جلسة"),
      description: t("Career Coaching", "توجيه مهني"),
      color: "from-purple-500 to-purple-600",
    },
    {
      value: "12K+",
      label: t("Professionals", "محترف"),
      description: t("Lives Transformed", "حياة تم تحويلها"),
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-primary-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-6">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-primary leading-relaxed">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 group-hover:border-brand-primary-200 overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Decorative line */}
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-6 group-hover:w-20 transition-all duration-300`}
                  ></div>

                  {/* Number */}
                  <div
                    className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 font-heading group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-bold text-neutral-900 mb-2 font-heading">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 font-primary text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Hover effect circle */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-primary-100 to-brand-primary-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center">
            <div className="bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 text-white rounded-2xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-default">
              {/* Badge content */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-left rtl:text-right">
                  <div className="text-lg font-bold">
                    {t(copy.achievement.en, copy.achievement.ar)}
                  </div>
                  <div className="text-sm opacity-90 mt-1">
                    {t(
                      "Advancing career development education in the MENA region",
                      "تطوير تعليم التطوير المهني في منطقة الشرق الأوسط وشمال أفريقيا",
                    )}
                  </div>
                </div>
              </div>

              {/* Subtle animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-brand-primary-400 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
