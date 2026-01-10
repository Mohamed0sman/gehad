'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ProgramsSection() {
  const programs = [
    {
      title: "Self-Leadership & Career Ownership Program",
      duration: "40 Hours",
      icon: "👤",
      color: "from-blue-500 to-cyan-500",
      description: "Master self-leadership skills and take ownership of your career trajectory with confidence and clarity.",
      topics: [
        "Self-Awareness & Emotional Intelligence",
        "Personal Branding & Positioning",
        "Strategic Career Planning",
        "Leadership Presence & Influence"
      ]
    },
    {
      title: "Professional Effectiveness & Core Skills Program",
      duration: "60 Hours",
      icon: "💼",
      color: "from-purple-500 to-pink-500",
      description: "Develop essential professional skills that drive effectiveness and career advancement in today's competitive landscape.",
      topics: [
        "Communication & Interpersonal Skills",
        "Time Management & Productivity",
        "Problem-Solving & Decision Making",
        "Professional Ethics & Workplace Etiquette"
      ]
    },
    {
      title: "Freelancing & Independent Career Development Program",
      duration: "40 Hours",
      icon: "🚀",
      color: "from-green-500 to-emerald-500",
      description: "Build a successful independent career with comprehensive freelancing strategies and business development skills.",
      topics: [
        "Freelance Business Setup",
        "Client Acquisition & Retention",
        "Financial Management for Freelancers",
        "Personal Marketing & Branding"
      ]
    },
    {
      title: "Career Development & Job Readiness Program",
      duration: "35 Hours",
      icon: "🎯",
      color: "from-orange-500 to-red-500",
      description: "Prepare for career success with comprehensive job readiness skills and strategic career development planning.",
      topics: [
        "Resume Writing & Portfolio Development",
        "Interview Skills & Preparation",
        "Job Search Strategies",
        "Career Transition Management"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Comprehensive training programs designed for career excellence and professional growth
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow h-full">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${program.color} rounded-full`}>
                    <span className="text-2xl">{program.icon}</span>
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${program.color} text-white rounded-full text-sm font-semibold font-inter`}>
                    {program.duration}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  {program.description}
                </p>

                {/* Topics */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-4 font-inter uppercase tracking-wide">
                    Key Topics
                  </h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700 font-inter">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a 
                    href="/programs" 
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${program.color} text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-inter`}
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
              Transform Your Career Today
            </h3>
            <p className="text-lg mb-8 font-inter max-w-3xl mx-auto">
              Choose the program that aligns with your goals and start your journey toward career excellence and professional fulfillment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/booking" 
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-inter"
              >
                Get Program Guidance
              </a>
              <a 
                href="/programs" 
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors font-inter"
              >
                View All Programs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
