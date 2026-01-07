'use client'

import { motion } from 'framer-motion'
import { 
  BriefcaseIcon,
  HeartIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Experience() {
  const { translations } = useTranslation()
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const experiences = translations.experience.roles.map((role, index) => {
    const icons = [BriefcaseIcon, HeartIcon, LightBulbIcon]
    const colors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-yellow-500 to-orange-500']
    const emojis = ['🎯', '💙', '💡']

    return {
      id: index + 1,
      ...role,
      icon: icons[index] || BriefcaseIcon,
      color: colors[index] || 'from-blue-500 to-cyan-500',
      emoji: emojis[index] || '✨'
    }
  })

  const skillsData = [
    { key: 'careerGuidance', level: 95, color: 'bg-blue-500' },
    { key: 'psychCounseling', level: 90, color: 'bg-purple-500' },
    { key: 'programDev', level: 88, color: 'bg-green-500' },
    { key: 'communication', level: 92, color: 'bg-cyan-500' },
    { key: 'problemSolving', level: 89, color: 'bg-lime-500' },
    { key: 'leadership', level: 85, color: 'bg-indigo-500' }
  ]

  const skills = skillsData.map(s => ({
    name: translations.experience.skills[s.key as keyof typeof translations.experience.skills],
    level: s.level,
    color: s.color
  }))

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
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
            <span className="text-blue-600 font-semibold text-lg">{translations.experience.badge}</span>
            <BriefcaseIcon className="w-8 h-8 text-blue-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">{translations.experience.header.mainTitle}</span>
            <br />
            <span className="text-gray-700">{translations.experience.header.subTitle}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            {translations.experience.header.description}
            <br />
            <span className="text-blue-600 font-semibold">{translations.experience.header.highlight}</span>
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isRTL ? (index % 2 === 0 ? 50 : -50) : (index % 2 === 0 ? -50 : 50) }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 w-full">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <exp.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                      {translations.experience.achievementsLabel}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <motion.div 
                            className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}
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
              <span className="gradient-text">{translations.experience.skillsTitle}</span> 💪
            </h3>
            <p className="text-lg text-gray-600">
              {translations.experience.skillsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden" dir="ltr">
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
