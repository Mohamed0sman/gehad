'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ProfessionalIdentity() {
  const credentials = [
    {
      title: "Certified Career Service Provider",
      organization: "NCDA (National Career Development Association)",
      icon: "🏆",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "GCDF Credential Holder",
      organization: "NCDA (Global Career Development Facilitator)",
      icon: "🌍",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Learning & Development Designer",
      organization: "Specialized in evidence-based program design",
      icon: "🎓",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Career Facilitator",
      organization: "10+ years professional practice",
      icon: "💼",
      color: "from-orange-500 to-red-500"
    }
  ]

  const achievements = [
    {
      number: "10,400+",
      label: "Training Hours Delivered",
      icon: "⏰",
      description: "Across workshops, courses, and facilitation sessions"
    },
    {
      number: "1,000+",
      label: "One-to-One Career Sessions",
      icon: "👥",
      description: "Personalized coaching and guidance"
    },
    {
      number: "10+",
      label: "Years Professional Practice",
      icon: "📅",
      description: "Dedicated to career development excellence"
    },
    {
      number: "Thousands",
      label: "Professionals Trained",
      icon: "🌟",
      description: "Across the MENA region and beyond"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Professional Identity
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Evidence-based practice guided by empathy and focused on sustainable impact
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
                <div className="text-4xl mb-4">{credential.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 font-playfair">
                  {credential.title}
                </h3>
                <p className="text-sm text-gray-300 font-inter">
                  {credential.organization}
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
              My Practice Philosophy
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-3 font-playfair">
                Evidence-Based
              </h4>
              <p className="text-gray-300 font-inter">
                Grounded in research, data, and proven methodologies from NCDA frameworks and global best practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-3 font-playfair">
                Guided by Empathy
              </h4>
              <p className="text-gray-300 font-inter">
                Understanding that every career journey is unique and requires personalized, compassionate guidance
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-3 font-playfair">
                Sustainable Impact
              </h4>
              <p className="text-gray-300 font-inter">
                Focused on creating lasting change that empowers individuals to navigate their careers independently
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
          <h3 className="text-2xl md:text-3xl font-bold mb-12 font-playfair">
            Measurable Impact
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
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-playfair">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-white mb-3 font-inter">
                  {achievement.label}
                </div>
                <p className="text-sm text-gray-400 font-inter">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
