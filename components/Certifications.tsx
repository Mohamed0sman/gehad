'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon,
  TrophyIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const certifications = [
  {
    id: 1,
    title: 'NCDA Certified Career Counselor',
    organization: 'National Career Development Association',
    year: '2021',
    description: 'شهادة معتمدة دولياً في التوجيه المهني والاستشارات المهنية',
    level: 'معتمد دولياً',
    color: 'from-purple-500 to-indigo-500',
    icon: AcademicCapIcon,
    emoji: '🏆',
    credentialId: 'NCDA-2021-EG-1247'
  },
  {
    id: 2,
    title: 'ماجستير علم النفس التطبيقي',
    organization: 'جامعة القاهرة',
    year: '2020',
    description: 'تخصص في علم النفس التطبيقي مع التركيز على الإرشاد النفسي والمهني',
    level: 'ماجستير',
    color: 'from-blue-500 to-cyan-500',
    icon: AcademicCapIcon,
    emoji: '🎓',
    grade: 'امتياز مع مرتبة الشرف'
  },
  {
    id: 3,
    title: 'دبلوم التدريب المهني',
    organization: 'المعهد العربي للتدريب',
    year: '2019',
    description: 'دبلوم متخصص في تصميم وتنفيذ البرامج التدريبية الفعالة',
    level: 'دبلوم متقدم',
    color: 'from-green-500 to-emerald-500',
    icon: TrophyIcon,
    emoji: '📜',
    duration: '6 أشهر'
  },
  {
    id: 4,
    title: 'شهادة العلاج النفسي المعرفي',
    organization: 'الجمعية المصرية للعلاج النفسي',
    year: '2019',
    description: 'تدريب متخصص في تقنيات العلاج النفسي المعرفي السلوكي',
    level: 'شهادة تخصص',
    color: 'from-pink-500 to-rose-500',
    icon: ShieldCheckIcon,
    emoji: '💙',
    hours: '120 ساعة تدريبية'
  }
]

const achievements = [
  {
    title: 'جائزة أفضل مدرب لعام 2023',
    organization: 'اتحاد المدربين المصريين',
    description: 'تقديراً للجهود المتميزة في مجال التدريب والتطوير',
    emoji: '🏆',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'شهادة تقدير من وزارة التعليم',
    organization: 'وزارة التربية والتعليم',
    description: 'لمساهمتي في تطوير برامج التوجيه المهني للطلاب',
    emoji: '🎖️',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'عضوية الجمعية الدولية للمرشدين',
    organization: 'International Association of Counselors',
    description: 'عضوية فعالة في الجمعية الدولية للمرشدين النفسيين',
    emoji: '🌍',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function Certifications() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
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
            <TrophyIcon className="w-8 h-8 text-yellow-500" />
            <span className="text-purple-600 font-semibold text-lg">الشهادات والإنجازات</span>
            <TrophyIcon className="w-8 h-8 text-yellow-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">مؤهلاتي العلمية</span>
            <br />
            <span className="text-gray-700">والمهنية 🎓</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            شهادات معتمدة دولياً ومحلياً تضمن لك الحصول على أفضل خدمة
            <br />
            <span className="text-purple-600 font-semibold">✨ التعلم المستمر هو سر نجاحي معاكم</span>
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
                      <cert.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-3xl mb-1">{cert.emoji}</div>
                      <div className="text-white/90 font-semibold">{cert.level}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">{cert.year}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-purple-600 font-semibold mb-4">{cert.organization}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{cert.description}</p>
                
                {/* Additional info */}
                <div className="space-y-2">
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <SparklesIcon className="w-4 h-4 text-purple-500" />
                      <span>رقم الاعتماد: {cert.credentialId}</span>
                    </div>
                  )}
                  {cert.grade && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <StarIcon className="w-4 h-4 text-yellow-500" />
                      <span>التقدير: {cert.grade}</span>
                    </div>
                  )}
                  {cert.duration && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <SparklesIcon className="w-4 h-4 text-blue-500" />
                      <span>المدة: {cert.duration}</span>
                    </div>
                  )}
                  {cert.hours && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <SparklesIcon className="w-4 h-4 text-green-500" />
                      <span>عدد الساعات: {cert.hours}</span>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">الجوائز والتقديرات</span> 🏆
            </h3>
            <p className="text-lg text-gray-600">
              تقديرات حصلت عليها من مؤسسات مختلفة لجهودي في المجال
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
                  <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-white/90 text-sm mb-3">{achievement.organization}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{achievement.description}</p>
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
                🎯 جاهزة أساعدك تحقق أهدافك
              </h4>
              <p className="text-gray-600 mb-6">
                مع كل الخبرة والشهادات دي، أنا واثقة إني هقدر أساعدك تلاقي طريقك الصح
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                ابدأ رحلتك معايا الآن 🚀
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}