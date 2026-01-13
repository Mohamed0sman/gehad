'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const certifications = [
  {
    id: 1,
    titleEn: 'NCDA Certified Career Counselor',
    titleAr: 'NCDA Certified Career Counselor',
    organizationEn: 'National Career Development Association',
    organizationAr: 'National Career Development Association',
    year: '2021',
    descriptionEn: 'Internationally recognized certification in career guidance and career counseling.',
    descriptionAr: 'شهادة معتمدة دولياً في التوجيه المهني والاستشارات المهنية',
    levelEn: 'Internationally certified',
    levelAr: 'معتمد دولياً',
    color: 'from-purple-500 to-indigo-500',
    emoji: '🏆',
    credentialId: 'NCDA-2021-EG-1247',
    gradeEn: undefined,
    gradeAr: undefined,
    durationEn: undefined,
    durationAr: undefined,
    hoursEn: undefined,
    hoursAr: undefined
  },
  {
    id: 2,
    titleEn: 'MSc in Applied Psychology',
    titleAr: 'ماجستير علم النفس التطبيقي',
    organizationEn: 'Cairo University',
    organizationAr: 'جامعة القاهرة',
    year: '2020',
    descriptionEn: 'Specialization in applied psychology with a focus on psychological and career counseling.',
    descriptionAr: 'تخصص في علم النفس التطبيقي مع التركيز على الإرشاد النفسي والمهني',
    levelEn: "Master's",
    levelAr: 'ماجستير',
    color: 'from-blue-500 to-cyan-500',
    emoji: '🎓',
    gradeEn: 'Excellent with honors',
    gradeAr: 'امتياز مع مرتبة الشرف',
    credentialId: undefined,
    durationEn: undefined,
    durationAr: undefined,
    hoursEn: undefined,
    hoursAr: undefined
  },
  {
    id: 3,
    titleEn: 'Professional Training Diploma',
    titleAr: 'دبلوم التدريب المهني',
    organizationEn: 'Arab Training Institute',
    organizationAr: 'المعهد العربي للتدريب',
    year: '2019',
    descriptionEn: 'Specialized diploma in designing and delivering effective training programs.',
    descriptionAr: 'دبلوم متخصص في تصميم وتنفيذ البرامج التدريبية الفعالة',
    levelEn: 'Advanced diploma',
    levelAr: 'دبلوم متقدم',
    color: 'from-green-500 to-emerald-500',
    emoji: '📜',
    durationEn: '6 months',
    durationAr: '6 أشهر',
    credentialId: undefined,
    gradeEn: undefined,
    gradeAr: undefined,
    hoursEn: undefined,
    hoursAr: undefined
  },
  {
    id: 4,
    titleEn: 'Cognitive Behavioral Therapy (CBT) Certificate',
    titleAr: 'شهادة العلاج النفسي المعرفي',
    organizationEn: 'Egyptian Association for Psychotherapy',
    organizationAr: 'الجمعية المصرية للعلاج النفسي',
    year: '2019',
    descriptionEn: 'Specialized training in cognitive behavioral therapy techniques.',
    descriptionAr: 'تدريب متخصص في تقنيات العلاج النفسي المعرفي السلوكي',
    levelEn: 'Specialization certificate',
    levelAr: 'شهادة تخصص',
    color: 'from-pink-500 to-rose-500',
    emoji: '💙',
    hoursEn: '120 training hours',
    hoursAr: '120 ساعة تدريبية',
    credentialId: undefined,
    gradeEn: undefined,
    gradeAr: undefined,
    durationEn: undefined,
    durationAr: undefined
  }
]

const achievements = [
  {
    titleEn: 'Best Trainer Award 2023',
    titleAr: 'جائزة أفضل مدرب لعام 2023',
    organizationEn: 'Egyptian Trainers Union',
    organizationAr: 'اتحاد المدربين المصريين',
    descriptionEn: 'Recognition for outstanding effort in training and professional development.',
    descriptionAr: 'تقديراً للجهود المتميزة في مجال التدريب والتطوير',
    emoji: '🏆',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    titleEn: 'Recognition Certificate from the Ministry of Education',
    titleAr: 'شهادة تقدير من وزارة التعليم',
    organizationEn: 'Ministry of Education',
    organizationAr: 'وزارة التربية والتعليم',
    descriptionEn: 'For contributions to improving students’ career guidance programs.',
    descriptionAr: 'لمساهمتي في تطوير برامج التوجيه المهني للطلاب',
    emoji: '🎖️',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    titleEn: 'Membership — International Association of Counselors',
    titleAr: 'عضوية الجمعية الدولية للمرشدين',
    organizationEn: 'International Association of Counselors',
    organizationAr: 'International Association of Counselors',
    descriptionEn: 'Active membership in the international association of professional counselors.',
    descriptionAr: 'عضوية فعالة في الجمعية الدولية للمرشدين النفسيين',
    emoji: '🌍',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function Certifications() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section
      className="py-24 sm:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-3xl text-yellow-500">🏆</span>
            <span className="text-purple-600 font-semibold text-lg font-heading">
              {t('Certifications & achievements', 'الشهادات والإنجازات')}
            </span>
            <span className="text-3xl text-yellow-500">🏆</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-h2 font-bold text-neutral-900 mb-6 font-heading"
          >
            <span className="gradient-text">{t('My academic', 'مؤهلاتي العلمية')}</span>
            <br />
            <span className="text-neutral-700">{t('and professional background 🎓', 'والمهنية 🎓')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-neutral-600 font-primary"
          >
            {t(
              'International and local certifications that reflect professional standards and continuous learning.',
              'شهادات معتمدة دولياً ومحلياً تضمن لك الحصول على أفضل خدمة'
            )}
            <br />
            <span className="text-purple-600 font-semibold">
              {t('✨ Continuous learning is a key part of my work.', '✨ التعلم المستمر هو سر نجاحي معاكم')}
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${cert.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                    >
                      <span className="text-3xl text-white">{cert.emoji}</span>
                    </motion.div>
                    <div>
                      <div className="text-3xl mb-1">{cert.emoji}</div>
                      <div className="text-white/90 font-semibold font-heading">
                        {language === 'ar' ? cert.levelAr : cert.levelEn}
                      </div>
                    </div>
                  </div>
                  <div className={isRTL ? 'text-left' : 'text-right'}>
                    <div className="text-white font-bold text-lg font-heading">{cert.year}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 font-heading">
                  {language === 'ar' ? cert.titleAr : cert.titleEn}
                </h3>
                <p className="text-purple-600 font-semibold mb-4 font-primary">
                  {language === 'ar' ? cert.organizationAr : cert.organizationEn}
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4 font-primary">
                  {language === 'ar' ? cert.descriptionAr : cert.descriptionEn}
                </p>

                {/* Additional info */}
                <div className="space-y-2 font-primary">
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-purple-500">✨</span>
                      <span>{t('Credential ID:', 'رقم الاعتماد:')} {cert.credentialId}</span>
                    </div>
                  )}
                  {cert.gradeEn && (
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-yellow-500">⭐</span>
                      <span>
                        {t('Grade:', 'التقدير:')} {language === 'ar' ? cert.gradeAr : cert.gradeEn}
                      </span>
                    </div>
                  )}
                  {cert.durationEn && (
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-blue-500">⏱️</span>
                      <span>
                        {t('Duration:', 'المدة:')} {language === 'ar' ? cert.durationAr : cert.durationEn}
                      </span>
                    </div>
                  )}
                  {cert.hoursEn && (
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-green-500">⏳</span>
                      <span>
                        {t('Hours:', 'عدد الساعات:')} {language === 'ar' ? cert.hoursAr : cert.hoursEn}
                      </span>
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
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">
              <span className="gradient-text">{t('Awards & recognition', 'الجوائز والتقديرات')}</span> 🏆
            </h3>
            <p className="text-lg text-neutral-600 font-primary">
              {t(
                'Recognitions received from different institutions for my contributions and impact.',
                'تقديرات حصلت عليها من مؤسسات مختلفة لجهودي في المجال'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${achievement.color} rounded-2xl p-6 text-white overflow-hidden group`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>

                <div className="relative">
                  <div className="text-4xl mb-4">{achievement.emoji}</div>
                  <h4 className="font-bold text-lg mb-2 font-heading">
                    {language === 'ar' ? achievement.titleAr : achievement.titleEn}
                  </h4>
                  <p className="text-white/90 text-sm mb-3 font-heading">
                    {language === 'ar' ? achievement.organizationAr : achievement.organizationEn}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed font-primary">
                    {language === 'ar' ? achievement.descriptionAr : achievement.descriptionEn}
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
              <h4 className="text-2xl font-bold text-neutral-900 mb-4 font-heading">
                {t('🎯 Ready to help you reach your goals', '🎯 جاهزة أساعدك تحقق أهدافك')}
              </h4>
              <p className="text-neutral-600 mb-6 font-primary">
                {t(
                  'With this background and experience, I can support you in finding clarity and taking confident next steps.',
                  'مع كل الخبرة والشهادات دي، أنا واثقة إني هقدر أساعدك تلاقي طريقك الصح'
                )}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 font-heading"
              >
                {t('Start your journey now 🚀', 'ابدأ رحلتك معايا الآن 🚀')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}