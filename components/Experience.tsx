'use client'

import { motion } from 'framer-motion'
import { 
  BriefcaseIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChartBarIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const experiences = [
  {
    id: 1,
    title: 'مدربة التوجيه المهني',
    company: 'مركز التطوير المهني',
    period: '2021 - حتى الآن',
    description: 'تدريب أكثر من 500 طالب وطالبة على اكتشاف مواهبهم وتحديد مسارهم المهني المناسب',
    achievements: [
      'نجح 98% من المتدربين في تحديد مسارهم المهني',
      'تطوير برامج تدريبية مبتكرة للطلاب',
      'إقامة أكثر من 50 ورشة عمل جماعية',
      'حصول على جائزة أفضل مدرب لعام 2023'
    ],
    icon: BriefcaseIcon,
    color: 'from-blue-500 to-cyan-500',
    emoji: '🎯'
  },
  {
    id: 2,
    title: 'استشارية نفسية',
    company: 'عيادة الصحة النفسية',
    period: '2020 - 2021',
    description: 'تقديم الاستشارات النفسية للطلاب والشباب لمساعدتهم في التغلب على التحديات النفسية',
    achievements: [
      'علاج أكثر من 200 حالة بنجاح',
      'تطوير برامج العلاج النفسي للمراهقين',
      'التخصص في علاج القلق والاكتئاب',
      'تدريب فريق من المتخصصين الجدد'
    ],
    icon: HeartIcon,
    color: 'from-blue-500 to-cyan-500',
    emoji: '💙'
  },
  {
    id: 3,
    title: 'مطورة برامج تعليمية',
    company: 'شركة التعليم الذكي',
    period: '2019 - 2020',
    description: 'تصميم وتطوير برامج تعليمية تفاعلية لمساعدة الطلاب في تحسين أدائهم الأكاديمي',
    achievements: [
      'تطوير 15 برنامج تعليمي تفاعلي',
      'زيادة معدل نجاح الطلاب بنسبة 40%',
      'حصول على براءة اختراع لبرنامج تعليمي',
      'تدريب أكثر من 100 معلم على البرامج الجديدة'
    ],
    icon: LightBulbIcon,
    color: 'from-yellow-500 to-orange-500',
    emoji: '💡'
  }
]

const skills = [
  { name: 'التوجيه المهني', level: 95, color: 'bg-blue-500' },
  { name: 'الاستشارات النفسية', level: 90, color: 'bg-blue-500' },
  { name: 'تطوير البرامج التدريبية', level: 88, color: 'bg-green-500' },
  { name: 'التواصل والإقناع', level: 92, color: 'bg-cyan-500' },
  { name: 'حل المشكلات', level: 89, color: 'bg-lime-500' },
  { name: 'القيادة والإدارة', level: 85, color: 'bg-indigo-500' }
]

export default function Experience() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
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
            <BriefcaseIcon className="w-8 h-8 text-blue-500" />
            <span className="text-blue-600 font-semibold text-lg">خبراتي المهنية</span>
            <BriefcaseIcon className="w-8 h-8 text-blue-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">رحلتي المهنية</span>
            <br />
            <span className="text-gray-700">في خدمة أحلامكم 🚀</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            أكثر من 3 سنوات من الخبرة في مساعدة الشباب على تحقيق أهدافهم
            <br />
            <span className="text-blue-600 font-semibold">✨ كل يوم أتعلم حاجة جديدة علشان أقدملكم الأفضل</span>
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <exp.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{exp.emoji}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      </div>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <SparklesIcon className="w-5 h-5 text-blue-500" />
                      أهم الإنجازات:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <motion.div 
                            className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full ml-3`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline connector */}
                <div className="hidden lg:block">
                  <motion.div 
                    className={`w-4 h-4 bg-gradient-to-br ${exp.color} rounded-full shadow-lg`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">مهاراتي الأساسية</span> 💪
            </h3>
            <p className="text-lg text-gray-600">
              المهارات اللي بستخدمها علشان أساعدك تحقق أهدافك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}