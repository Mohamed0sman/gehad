"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const ProgramsComparison: React.FC = () => {
  const programs = [
    {
      id: "self-leadership",
      title: "Self-Leadership",
      focus: "Self-Awareness & Branding",
      improvements: [
        "سعر: متاح عند الطلب",
        "مدة: 40 ساعة",
        "شهادة معتمدة",
        "CTA: ابدأ الآن"
      ],
      features: [
        "Self-Awareness Framework",
        "Personal Branding Strategy",
        "Leadership Development",
        "Action Planning"
      ],
      cta: "ابدأ الآن",
      ctaLink: "/programs/self-leadership",
      colorClasses: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-600",
        button: "from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
      }
    },
    {
      id: "professional-effectiveness",
      title: "Professional Effectiveness",
      focus: "Communication & Time Management",
      improvements: [
        "4 bullets واضحة",
        "Infographic تفاعلي",
        "سعر: متاح عند الطلب",
        "مدة: 32 ساعة"
      ],
      features: [
        "Effective Communication Skills",
        "Time Management Systems",
        "Productivity Frameworks",
        "Team Collaboration"
      ],
      cta: "تعرف أكثر",
      ctaLink: "/programs/professional-effectiveness",
      colorClasses: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        button: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
      }
    },
    {
      id: "freelancing",
      title: "Freelancing Skills",
      focus: "Business Setup & Marketing",
      improvements: [
        "ربط بـ case study: Mariam Ali",
        "سعر: متاح عند الطلب",
        "مدة: 36 ساعة",
        "شهادة + دعم مستمر"
      ],
      features: [
        "Business Setup Guide",
        "Marketing Strategies",
        "Client Management",
        "Financial Planning"
      ],
      cta: "اقرأ قصة نجاح",
      ctaLink: "/testimonials#mariam-ali",
      colorClasses: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        icon: "text-teal-600",
        button: "from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
      }
    },
    {
      id: "career-development",
      title: "Career Development",
      focus: "Resume & Interviews",
      improvements: [
        "Free webinar signup",
        "سعر: متاح عند الطلب",
        "مدة: 24 ساعة",
        "مواد إضافية مجانية"
      ],
      features: [
        "Resume Optimization",
        "Interview Preparation",
        "LinkedIn Profile",
        "Job Search Strategy"
      ],
      cta: "سجل في الويبينار المجاني",
      ctaLink: "/webinar",
      colorClasses: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "text-orange-600",
        button: "from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            البرامج والخدمات
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            برامج شاملة مصممة لتسريع نموك المهني
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${program.colorClasses.bg} rounded-2xl p-8 border-2 ${program.colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {program.focus}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 ${program.colorClasses.icon} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Improvements */}
              <div className="bg-white/50 rounded-xl p-4 mb-6 border border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  التحسينات الجديدة:
                </p>
                <ul className="space-y-1">
                  {program.improvements.map((improvement, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href={program.ctaLink}
                className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${program.colorClasses.button} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
              >
                {program.cta}
                <ArrowRight className="w-5 h-5 mr-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsComparison;
