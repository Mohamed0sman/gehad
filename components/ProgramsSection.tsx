"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function ProgramsSection() {
  const { language, isRTL } = useLanguage();
  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  const copy = {
    title: {
      en: "Professional Development Programs",
      ar: "برامج التطوير المهني",
    },
    subtitle: {
      en: "Evidence-based training programs designed to accelerate your career growth and professional effectiveness",
      ar: "برامج تدريبية قائمة على الأدلة مصممة لتسريع نموك المهني وفعاليتك المهنية",
    },
    programs: {
      en: [
        {
          title: "Self-Leadership & Career Ownership",
          duration: "40 Hours",
          level: "Advanced",
          description:
            "Master self-leadership skills and take ownership of your career trajectory with confidence and strategic clarity.",
          topics: [
            "Self-Awareness & Emotional Intelligence",
            "Personal Branding & Professional Positioning",
            "Strategic Career Planning & Goal Setting",
            "Leadership Presence & Influence Building",
          ],
          accent: "primary",
        },
        {
          title: "Professional Effectiveness & Core Skills",
          duration: "60 Hours",
          level: "Comprehensive",
          description:
            "Develop essential professional skills that drive effectiveness and career advancement in competitive markets.",
          topics: [
            "Advanced Communication & Interpersonal Skills",
            "Time Management & Productivity Systems",
            "Problem-Solving & Decision Making",
            "Professional Ethics & Workplace Excellence",
          ],
          accent: "emerald",
        },
        {
          title: "Freelancing & Independent Career Development",
          duration: "40 Hours",
          level: "Specialized",
          description:
            "Build a successful independent career with comprehensive freelancing strategies and business development.",
          topics: [
            "Freelance Business Setup & Legal Framework",
            "Client Acquisition & Retention Strategies",
            "Financial Management & Pricing Models",
            "Personal Marketing & Brand Development",
          ],
          accent: "cyan",
        },
        {
          title: "Career Development & Job Readiness",
          duration: "35 Hours",
          level: "Foundation",
          description:
            "Comprehensive job readiness preparation with strategic career development planning and market positioning.",
          topics: [
            "Resume Writing & Portfolio Development",
            "Interview Mastery & Negotiation Skills",
            "Job Search Strategies & Market Analysis",
            "Career Transition & Change Management",
          ],
          accent: "gold",
        },
      ],
      ar: [
        {
          title: "القيادة الذاتية وملكية المسار المهني",
          duration: "40 ساعة",
          level: "متقدم",
          description:
            "إتقان مهارات القيادة الذاتية وأخذ زمام المبادرة في مسارك المهني بثقة ووضوح استراتيجي.",
          topics: [
            "الوعي الذاتي والذكاء العاطفي",
            "العلامة الشخصية والموضع المهني",
            "التخطيط المهني الاستراتيجي ووضع الأهداف",
            "الحضور القيادي وبناء التأثير",
          ],
          accent: "primary",
        },
        {
          title: "الفعالية المهنية والمهارات الأساسية",
          duration: "60 ساعة",
          level: "شامل",
          description:
            "تطوير المهارات المهنية الأساسية التي تحفز الفعالية والتقدم المهني في الأسواق التنافسية.",
          topics: [
            "التواصل المتقدم والمهارات الشخصية",
            "إدارة الوقت وأنظمة الإنتاجية",
            "حل المشكلات واتخاذ القرارات",
            "الأخلاق المهنية والتميز في مكان العمل",
          ],
          accent: "emerald",
        },
        {
          title: "العمل الحر وتطوير المسار المستقل",
          duration: "40 ساعة",
          level: "متخصص",
          description:
            "بناء مسار مهني مستقل ناجح باستراتيجيات العمل الحر الشاملة وتطوير الأعمال.",
          topics: [
            "إنشاء أعمال العمل الحر والإطار القانوني",
            "استراتيجيات اكتساب العملاء والاحتفاظ بهم",
            "إدارة المالية ونماذج التسعير",
            "التسويق الشخصي وتطوير العلامة التجارية",
          ],
          accent: "cyan",
        },
        {
          title: "التطوير المهني والاستعداد الوظيفي",
          duration: "35 ساعة",
          level: "تأسيسي",
          description:
            "إعداد شامل للاستعداد الوظيفي مع تخطيط استراتيجي للتطوير المهني وتحديد الموقع في السوق.",
          topics: [
            "كتابة السيرة الذاتية وتطوير المحفظة",
            "إتقان المقابلات ومهارات التفاوض",
            "استراتيجيات البحث عن وظيفة وتحليل السوق",
            "الانتقال المهني وإدارة التغيير",
          ],
          accent: "gold",
        },
      ],
    },
    keyTopics: {
      en: "Key Topics",
      ar: "الموضوعات الرئيسية",
    },
    learnMore: {
      en: "Learn More",
      ar: "اعرف المزيد",
    },
    ctaTitle: {
      en: "Ready to Accelerate Your Career?",
      ar: "هل أنت مستعد لتسريع مسارك المهني؟",
    },
    ctaSubtitle: {
      en: "Choose the program that aligns with your goals and start your transformation journey with expert guidance.",
      ar: "اختر البرنامج الذي يتماشى مع أهدافك وابدأ رحلة التحول مع الإرشاد المتخصص.",
    },
    ctaPrimary: {
      en: "Get Program Guidance",
      ar: "احصل على إرشاد البرنامج",
    },
    ctaSecondary: {
      en: "View All Programs",
      ar: "عرض جميع البرامج",
    },
  };

  const programs = language === "ar" ? copy.programs.ar : copy.programs.en;

  const getAccentClasses = (accent: string) => {
    switch (accent) {
      case "primary":
        return {
          text: "text-primary-600",
          bg: "bg-primary-50",
          border: "border-primary-200",
          gradient: "from-primary-50 to-primary-100",
        };
      case "emerald":
        return {
          text: "text-emerald-600",
          bg: "bg-emerald-50",
          border: "border-emerald-200",
          gradient: "from-emerald-50 to-emerald-100",
        };
      case "cyan":
        return {
          text: "text-cyan-600",
          bg: "bg-cyan-50",
          border: "border-cyan-200",
          gradient: "from-cyan-50 to-cyan-100",
        };
      case "gold":
        return {
          text: "text-amber-600",
          bg: "bg-amber-50",
          border: "border-amber-200",
          gradient: "from-amber-50 to-amber-100",
        };
      default:
        return {
          text: "text-primary-600",
          bg: "bg-primary-50",
          border: "border-primary-200",
          gradient: "from-primary-50 to-primary-100",
        };
    }
  };

  return (
    <section
      id="programs"
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
          <h2 className="text-h2 font-bold mb-6 font-heading text-neutral-900">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-4xl mx-auto font-primary leading-relaxed">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {programs.map((program: any, index: number) => {
            const accentClasses = getAccentClasses(program.accent);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="card-elevated p-8 h-full flex flex-col hover:scale-[1.02] transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`inline-flex items-center px-3 py-1 ${accentClasses.bg} ${accentClasses.border} border rounded-full`}
                    >
                      <span
                        className={`text-xs font-semibold ${accentClasses.text} uppercase tracking-wider font-primary`}
                      >
                        {program.level}
                      </span>
                    </div>
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${accentClasses.gradient} ${accentClasses.text} rounded-full text-sm font-semibold font-primary border ${accentClasses.border}`}
                    >
                      {program.duration}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4 font-heading leading-tight">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 font-primary leading-relaxed flex-grow">
                    {program.description}
                  </p>

                  {/* Topics */}
                  <div className="border-t border-neutral-200 pt-6 mb-6">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-4 font-heading uppercase tracking-wide">
                      {t(copy.keyTopics.en, copy.keyTopics.ar)}
                    </h4>
                    <ul className="space-y-3">
                      {program.topics.map(
                        (topic: string, topicIndex: number) => (
                          <li
                            key={topicIndex}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`w-2 h-2 ${accentClasses.bg} ${accentClasses.border} border rounded-full flex-shrink-0 mt-2`}
                            ></div>
                            <span className="text-sm text-neutral-700 font-primary leading-relaxed">
                              {topic}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      href="/programs"
                      variant="secondary"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    >
                      {t(copy.learnMore.en, copy.learnMore.ar)}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-brand-primary-900 to-brand-primary-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-h3 font-bold mb-6 font-heading">
              {t(copy.ctaTitle.en, copy.ctaTitle.ar)}
            </h3>
            <p className="text-body-lg mb-8 font-primary max-w-3xl mx-auto leading-relaxed opacity-90">
              {t(copy.ctaSubtitle.en, copy.ctaSubtitle.ar)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/booking"
                variant="secondary"
                className="bg-white text-brand-primary-900 hover:bg-neutral-100 min-w-[200px]"
              >
                {t(copy.ctaPrimary.en, copy.ctaPrimary.ar)}
              </Button>
              <Button
                href="/programs"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10 min-w-[200px]"
              >
                {t(copy.ctaSecondary.en, copy.ctaSecondary.ar)}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
