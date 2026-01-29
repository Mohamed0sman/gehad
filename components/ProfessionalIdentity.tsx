'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProfessionalIdentity() {
  const { language } = useLanguage();

  const copy = {
    title: {
      en: "Professional Identity",
      ar: "الهوية المهنية"
    },
    subtitle: {
      en: "Evidence-based practice guided by empathy and focused on sustainable impact",
      ar: "ممارسة قائمة على الأدلة موجهة بالتركيز على الأثر المستدام"
    },
    philosophy: {
      title: {
        en: "My Practice Philosophy",
        ar: "فلسفتي في الممارسة"
      },
      evidence: {
        title: {
          en: "Evidence-Based",
          ar: "قائم على الأدلة"
        },
        desc: {
          en: "Grounded in research, data, and proven methodologies from NCDA frameworks and global best practices",
          ar: "متجذر في البحث والبيانات والمنهجيات المثبتة من أطر NCDA وأفضل الممارسات العالمية"
        }
      },
      empathy: {
        title: {
          en: "Guided by Empathy",
          ar: "موجه بالتعاطف"
        },
        desc: {
          en: "Understanding that every career journey is unique and requires personalized, compassionate guidance",
          ar: "إدراك أن كل رحلة مهنية فريدة وتتطلب إرشادًا شخصيًا ورحيمًا"
        }
      },
      impact: {
        title: {
          en: "Sustainable Impact",
          ar: "أثر مستدام"
        },
        desc: {
          en: "Focused on creating lasting change that empowers individuals to navigate their careers independently",
          ar: "التركيز على خلق تغيير دائم يمكّن الأفراد من التنقل في مسيرتهم المهنية بشكل مستقل"
        }
      }
    },
    achievements: {
      title: {
        en: "Measurable Impact",
        ar: "الأثر القابل للقياس"
      }
    }
  }

  const t = (en: any, ar: any) => (language === "ar" ? ar : en);

  const credentials = [
    {
      title: {
        en: "Certified Career Service Provider",
        ar: "مزود خدمة مهنية معتمد"
      },
      organization: {
        en: "NCDA (National Career Development Association)",
        ar: "جمعية التنمية المهنية الوطنية"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: {
        en: "GCDF Credential Holder",
        ar: "حامل اعتماد GCDF"
      },
      organization: {
        en: "NCDA (Global Career Development Facilitator)",
        ar: "ميسر التنمية المهنية العالمي"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      title: {
        en: "Learning & Development Designer",
        ar: "مصمم التعلم والتطوير"
      },
      organization: {
        en: "Specialized in evidence-based program design",
        ar: "متخصص في تصميم البرامج القائمة على الأدلة"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      title: {
        en: "Career Facilitator",
        ar: "ميسر المسار المهني"
      },
      organization: {
        en: "10+ years professional practice",
        ar: "أكثر من 10 سنوات من الممارسة المهنية"
      },
      color: "from-orange-500 to-red-500"
    }
  ]

  const achievements = [
    {
      number: "10,400+",
      label: {
        en: "Training Hours Delivered",
        ar: "ساعة تدريب تم تقديمها"
      },
      description: {
        en: "Across workshops, courses, and facilitation sessions",
        ar: "عبر ورش العمل والدورات وجلسات التيسير"
      }
    },
    {
      number: "1,000+",
      label: {
        en: "One-to-One Career Sessions",
        ar: "جلسات مهنية فردية"
      },
      description: {
        en: "Personalized coaching and guidance",
        ar: "التدريب والإرشاد الشخصي"
      }
    },
    {
      number: "10+",
      label: {
        en: "Years Professional Practice",
        ar: "سنوات الممارسة المهنية"
      },
      description: {
        en: "Dedicated to career development excellence",
        ar: "مكرس لتميز تطوير المسارات المهنية"
      }
    },
    {
      number: "Thousands",
      label: {
        en: "Professionals Trained",
        ar: "محترفون تم تدريبهم"
      },
      description: {
        en: "Across the MENA region and beyond",
        ar: "عبر منطقة الشرق الأوسط وشمال أفريقيا وما بعدها"
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t(copy.title.en, copy.title.ar)}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(copy.subtitle.en, copy.subtitle.ar)}
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${credential.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${credential.color} rounded-xl mb-4 text-white font-bold text-lg`}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(credential.title.en, credential.title.ar)}
                </h3>
                <p className="text-sm text-gray-300">
                  {t(credential.organization.en, credential.organization.ar)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Practice Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-800 to-cyan-800 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t(copy.philosophy.title.en, copy.philosophy.title.ar)}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 text-white font-bold text-xl`}>
                1
              </div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                {t(copy.philosophy.evidence.title.en, copy.philosophy.evidence.title.ar)}
              </h4>
              <p className="text-gray-300">
                {t(copy.philosophy.evidence.desc.en, copy.philosophy.evidence.desc.ar)}
              </p>
            </div>
            
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 text-white font-bold text-xl`}>
                2
              </div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                {t(copy.philosophy.empathy.title.en, copy.philosophy.empathy.title.ar)}
              </h4>
              <p className="text-gray-300">
                {t(copy.philosophy.empathy.desc.en, copy.philosophy.empathy.desc.ar)}
              </p>
            </div>
            
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 text-white font-bold text-xl`}>
                3
              </div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                {t(copy.philosophy.impact.title.en, copy.philosophy.impact.title.ar)}
              </h4>
              <p className="text-gray-300">
                {t(copy.philosophy.impact.desc.en, copy.philosophy.impact.desc.ar)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12">
            {t(copy.achievements.title.en, copy.achievements.title.ar)}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition-colors"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-3">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-white mb-3">
                  {t(achievement.label.en, achievement.label.ar)}
                </div>
                <p className="text-sm text-gray-400">
                  {t(achievement.description.en, achievement.description.ar)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
