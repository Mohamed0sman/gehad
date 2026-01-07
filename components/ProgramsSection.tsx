'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, ClockIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'

export default function ProgramsSection() {
  const { translations } = useTranslation()
  const programs = [
    {
      key: 'selfLeadership',
      title: translations.programs.selfLeadership.title,
      duration: translations.programs.selfLeadership.duration,
      description: translations.programs.selfLeadership.description,
      icon: '🎯',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: translations.programs.selfLeadership.features
    },
    {
      key: 'bestVersion',
      title: translations.programs.bestVersion.title,
      duration: translations.programs.bestVersion.duration,
      description: translations.programs.bestVersion.description,
      icon: '⭐',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: translations.programs.bestVersion.features
    },
    {
      key: 'freelancingSkills',
      title: translations.programs.freelancingSkills.title,
      duration: translations.programs.freelancingSkills.duration,
      description: translations.programs.freelancingSkills.description,
      icon: '💼',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: translations.programs.freelancingSkills.features
    },
    {
      key: 'strategies36',
      title: translations.programs.strategies36.title,
      duration: translations.programs.strategies36.duration,
      description: translations.programs.strategies36.description,
      icon: '🧠',
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: translations.programs.strategies36.features
    }
  ]

  return (
    <section className="py-20 bg-white">
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
            <span className="brand-gradient-text">
              {translations.programs.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            {translations.programs.subtitle}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${program.bgColor} ${program.borderColor} border-2 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                {program.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">
                {program.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <ClockIcon className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium font-inter">
                  {program.duration}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed font-inter">
                {program.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-inter">
                    <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/programs#${program.key}`}
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent hover:scale-105 transition-transform font-inter`}
              >
                {translations.common.learnMore}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Career Sessions Special Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 brand-btn rounded-2xl flex items-center justify-center text-3xl">
                  🎯
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 font-playfair">
                    {translations.programs.careerSessions.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-5 h-5 text-[rgb(var(--brand-green-400))]" />
                    <span className="text-[rgb(var(--brand-green-400))] font-inter">
                      {translations.programs.careerSessions.subtitle}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-inter">
                {translations.programs.careerSessions.description}
              </p>

              <div className="space-y-3 mb-6">
                {(translations.programs.careerSessions.features || []).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 font-inter">
                    <StarIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300 font-inter">
                  {translations.programs.careerSessions.ratingText}
                </span>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 brand-cta font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <span className="text-xl">🚀</span>
                {translations.hero.cta}
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              
              <p className="text-gray-400 text-sm mt-4 font-inter">
                {translations.programs.careerSessions.freeNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
