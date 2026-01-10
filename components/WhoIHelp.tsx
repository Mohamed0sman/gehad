'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function WhoIHelp() {
  const audiences = [
    {
      icon: '🔄',
      title: 'Individuals in Career Transition',
      description: 'Professionals navigating career change, stagnation, or burnout — seeking clarity, direction, and confidence in their next move.',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Career Change Guidance',
        'Burnout Recovery',
        'Direction & Clarity',
        'Confidence Building'
      ]
    },
    {
      icon: '🏢',
      title: 'Organizations & Institutions',
      description: 'Universities, NGOs, and organizations aiming to build employability, leadership capacity, and career readiness through structured, measurable learning.',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Employability Programs',
        'Leadership Development',
        'Career Readiness',
        'Structured Learning'
      ]
    },
    {
      icon: '👨‍🏫',
      title: 'Professionals & Educators',
      description: 'Career coaches, counselors, and learning designers seeking evidence-based frameworks, collaboration, and professional development aligned with NCDA standards.',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Evidence-Based Frameworks',
        'NCDA Standards Alignment',
        'Professional Development',
        'Collaboration Opportunities'
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
              WHO I HELP
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Tailored support for diverse career development needs
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${audience.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow h-full">
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${audience.color} rounded-full mb-6`}>
                  <span className="text-3xl">{audience.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  {audience.description}
                </p>

                {/* Features */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-4 font-inter uppercase tracking-wide">
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-2">
                    {audience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${audience.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700 font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
              Find Your Path Forward
            </h3>
            <p className="text-lg mb-8 font-inter max-w-3xl mx-auto">
              Whether you're an individual seeking clarity, an organization building talent, 
              or a professional advancing your practice — I have the expertise and framework to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/booking" 
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-inter"
              >
                Start Your Journey
              </a>
              <a 
                href="/programs" 
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors font-inter"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
