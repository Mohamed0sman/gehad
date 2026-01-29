'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Certifications() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const copy = {
    title: {
      en: "My academic and professional background",
      ar: "مؤهلاتي العلمية والمهنية"
    },
    subtitle: {
      en: "International and local certifications that reflect professional standards and continuous learning.",
      ar: "شهادات معتمدة دولياً ومحلياً تعكس المعايير المهنية والتعلم المستمر."
    },
    learning: {
      en: "Continuous learning is a key part of my work.",
      ar: "التعلم المستمر هو جزء أساسي من عملي."
    },
    achievementsTitle: {
      en: "Awards & recognition",
      ar: "الجوائز والتقديرات"
    },
    achievementsSubtitle: {
      en: "Recognitions received from different institutions for my contributions and impact.",
      ar: "تقديرات حصلت عليها من مؤسسات مختلفة لجهودي في المجال."
    },
    ctaTitle: {
      en: "Ready to help you reach your goals",
      ar: "مستعد لمساعدتك لتحقيق أهدافك"
    },
    ctaSubtitle: {
      en: "With this background and experience, I can support you in finding clarity and taking confident next steps.",
      ar: "مع هذا الخلفية والخبرة، يمكنني دعمك في إيجاد الوثوق واتخاذ خطوات واثقة."
    },
    ctaButton: {
      en: "Start your journey now",
      ar: "ابدأ رحلتك الآن"
    }
  }

  const certifications = [
    {
      id: 1,
      title: { en: 'NCDA Certified Career Counselor', ar: 'مستشار مهني معتمد من NCDA' },
      organization: { en: 'National Career Development Association', ar: 'جمعية التنمية المهنية الوطنية' },
      year: '2021',
      description: { en: 'Internationally recognized certification in career guidance and career counseling.', ar: 'شهادة معتمدة دولياً في التوجيه المهني والاستشارات المهنية.' },
      level: { en: 'Internationally certified', ar: 'معتمد دولياً' },
      color: 'from-purple-500 to-indigo-500',
      credentialId: 'NCDA-2021-EG-1247'
    },
    {
      id: 2,
      title: { en: 'MSc in Applied Psychology', ar: 'ماجستير علم النفس التطبيقي' },
      organization: { en: 'Cairo University', ar: 'جامعة القاهرة' },
      year: '2020',
      description: { en: 'Specialization in applied psychology with a focus on psychological and career counseling.', ar: 'تخصص في علم النفس التطبيقي مع التركيز على الإرشاد النفسي والمهني.' },
      level: { en: "Master's", ar: 'ماجستير' },
      color: 'from-blue-500 to-cyan-500',
      grade: { en: 'Excellent with honors', ar: 'امتياز مع مرتبة الشرف' }
    },
    {
      id: 3,
      title: { en: 'Professional Training Diploma', ar: 'دبلوم التدريب المهني' },
      organization: { en: 'Arab Training Institute', ar: 'المعهد العربي للتدريب' },
      year: '2019',
      description: { en: 'Specialized diploma in designing and delivering effective training programs.', ar: 'دبلوم متخصص في تصميم وتنفيذ البرامج التدريبية الفعالة.' },
      level: { en: 'Advanced diploma', ar: 'دبلوم متقدم' },
      color: 'from-green-500 to-emerald-500',
      duration: { en: '6 months', ar: '6 أشهر' }
    },
    {
      id: 4,
      title: { en: 'Cognitive Behavioral Therapy (CBT) Certificate', ar: 'شهادة العلاج المعرفي السلوكي' },
      organization: { en: 'Egyptian Association for Psychotherapy', ar: 'الجمعية المصرية للعلاج النفسي' },
      year: '2019',
      description: { en: 'Specialized training in cognitive behavioral therapy techniques.', ar: 'تدريب متخصص في تقنيات العلاج النفسي المعرفي السلوكي.' },
      level: { en: 'Specialization certificate', ar: 'شهادة تخصص' },
      color: 'from-pink-500 to-rose-500',
      hours: { en: '120 training hours', ar: '120 ساعة تدريبية' }
    }
  ]

  const achievements = [
    {
      title: { en: 'Best Trainer Award 2023', ar: 'جائزة أفضل مدرب لعام 2023' },
      organization: { en: 'Egyptian Trainers Union', ar: 'اتحاد المدربين المصريين' },
      description: { en: 'Recognition for outstanding effort in training and professional development.', ar: 'تقديراً للجهود المتميزة في مجال التدريب والتطوير.' },
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: { en: 'Recognition Certificate from the Ministry of Education', ar: 'شهادة تقدير من وزارة التعليم' },
      organization: { en: 'Ministry of Education', ar: 'وزارة التربية والتعليم' },
      description: { en: "For contributions to improving students career guidance programs.", ar: "لمساهمتي في تطوير برامج التوجيه المهني للطلاب." },
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: { en: 'Membership — International Association of Counselors', ar: 'عضوية الجمعية الدولية للمرشدين' },
      organization: { en: 'International Association of Counselors', ar: 'الجمعية الدولية للمرشدين' },
      description: { en: 'Active membership in the international association of professional counselors.', ar: 'عضوية فعالة في الجمعية الدولية للمرشدين النفسيين.' },
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-purple-600 font-semibold text-lg">
              {t('Certifications & achievements', 'الشهادات والإنجازات')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            {t(copy.title.en, copy.title.ar)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t(copy.subtitle.en, copy.subtitle.ar)}
            <br />
            <span className="text-purple-600 font-semibold">
              {t(copy.learning.en, copy.learning.ar)}
            </span>
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${cert.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl text-white font-bold text-lg`}>
                      {index + 1}
                    </div>
                    <div className="text-white/90 font-semibold">
                      {t(cert.level.en, cert.level.ar)}
                    </div>
                  </div>
                  <div className="text-white font-bold text-lg">{cert.year}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(cert.title.en, cert.title.ar)}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {t(cert.organization.en, cert.organization.ar)}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t(cert.description.en, cert.description.ar)}
                </p>

                {/* Additional info */}
                <div className="space-y-2 text-sm text-gray-500">
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">◆</span>
                      <span>{t('Credential ID:', 'رقم الاعتماد:')} {cert.credentialId}</span>
                    </div>
                  )}
                  {cert.grade && (
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">◆</span>
                      <span>{t('Grade:', 'التقدير:')} {t(cert.grade.en, cert.grade.ar)}</span>
                    </div>
                  )}
                  {cert.duration && (
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">◆</span>
                      <span>{t('Duration:', 'المدة:')} {t(cert.duration.en, cert.duration.ar)}</span>
                    </div>
                  )}
                  {cert.hours && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">◆</span>
                      <span>{t('Hours:', 'الساعات:')} {t(cert.hours.en, cert.hours.ar)}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t(copy.achievementsTitle.en, copy.achievementsTitle.ar)}
            </h3>
            <p className="text-lg text-gray-600">
              {t(copy.achievementsSubtitle.en, copy.achievementsSubtitle.ar)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${achievement.color} rounded-2xl p-6 text-white overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-4 text-white font-bold`}>
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    {t(achievement.title.en, achievement.title.ar)}
                  </h4>
                  <p className="text-white/90 text-sm mb-2">
                    {t(achievement.organization.en, achievement.organization.ar)}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {t(achievement.description.en, achievement.description.ar)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {t(copy.ctaTitle.en, copy.ctaTitle.ar)}
              </h4>
              <p className="text-gray-600 mb-6">
                {t(copy.ctaSubtitle.en, copy.ctaSubtitle.ar)}
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                {t(copy.ctaButton.en, copy.ctaButton.ar)}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
