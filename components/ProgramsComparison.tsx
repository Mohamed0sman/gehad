"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const ProgramsComparison: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    title: {
      en: "PROGRAMS",
      ar: "البرامج"
    },
    subtitle: {
      en: "Comprehensive programs designed to accelerate your professional growth",
      ar: "برامج شاملة مصممة لتسريع نموك المهني"
    },
    duration: {
      en: "Hours",
      ar: "ساعة"
    },
    ctaView: {
      en: "Learn More",
      ar: "اعرف المزيد"
    }
  };

  const t = (en: any, ar: any) => (language === "ar" ? ar : en);

  const programs = [
    {
      id: "self-leadership",
      title: {
        en: "Self-Leadership & Career Ownership",
        ar: "القيادة الذاتية وامتلاك المسار"
      },
      duration: 40,
      features: {
        en: ["Self-Awareness Framework", "Personal Branding", "Leadership Development", "Action Planning"],
        ar: ["إطار الوعي الذاتي", "بناء الشخصية المهنية", "تطوير القيادة", "تخطيط العمل"]
      },
      color: {
        bg: "from-purple-500 to-indigo-600",
        border: "border-purple-200",
        hover: "hover:border-purple-300"
      }
    },
    {
      id: "professional-effectiveness",
      title: {
        en: "Professional Effectiveness & Core Skills",
        ar: "الفعالية المهنية والمهارات الأساسية"
      },
      duration: 60,
      features: {
        en: ["Communication Skills", "Time Management", "Productivity Frameworks", "Team Collaboration"],
        ar: ["مهارات التواصل", "إدارة الوقت", "أطر الإنتاجية", "التعاون في الفريق"]
      },
      color: {
        bg: "from-blue-500 to-cyan-600",
        border: "border-blue-200",
        hover: "hover:border-blue-300"
      }
    },
    {
      id: "career-development",
      title: {
        en: "Career Development & Job Readiness",
        ar: "تطوير المسار والاستعداد للوظيفة"
      },
      duration: 35,
      features: {
        en: ["Resume Optimization", "Interview Preparation", "LinkedIn Profile", "Job Search Strategy"],
        ar: ["تحسين السيرة الذاتية", "التحضير للمقابلات", "الملف على لينكدإن", "استراتيجية البحث"]
      },
      color: {
        bg: "from-orange-500 to-amber-600",
        border: "border-orange-200",
        hover: "hover:border-orange-300"
      }
    },
    {
      id: "freelancing",
      title: {
        en: "Freelancing & Independent Career",
        ar: "العمل الحر والمسار المستقل"
      },
      duration: 40,
      features: {
        en: ["Business Setup Guide", "Marketing Strategies", "Client Management", "Financial Planning"],
        ar: ["دليل تأسيس الأعمال", "استراتيجيات التسويق", "إدارة العملاء", "التخطيط المالي"]
      },
      color: {
        bg: "from-green-500 to-emerald-600",
        border: "border-green-200",
        hover: "hover:border-green-300"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color.bg} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border-2 ${program.color.border} ${program.color.hover} transition-all duration-300 h-full`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${program.color.bg} rounded-xl text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${program.color.bg} text-white text-sm font-semibold`}>
                      {program.duration} {t(copy.duration.en, copy.duration.ar)}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(program.title.en, program.title.ar)}
                </h3>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {t(program.features.en, program.features.ar).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color.bg} flex-shrink-0`} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/programs#${program.id}`}
                  className={`inline-flex items-center justify-center w-full py-3 bg-gradient-to-r ${program.color.bg} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  {t(copy.ctaView.en, copy.ctaView.ar)}
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsComparison;
