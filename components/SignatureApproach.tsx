'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SignatureApproach() {
  const approaches = [
    {
      icon: '📊',
      title: 'Data-Driven Coaching',
      description: 'Career decisions guided by analytics, assessments, and structured frameworks — not guesswork.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Assessment-Based Insights', 'Analytics Frameworks', 'Structured Decision Models']
    },
    {
      icon: '🧠',
      title: 'Psychology + Decision Science',
      description: 'Integrating emotional intelligence, mindset, and cognitive science to support sustainable choices.',
      color: 'from-purple-500 to-pink-500',
      features: ['Emotional Intelligence', 'Cognitive Science', 'Behavioral Psychology']
    },
    {
      icon: '🔬',
      title: 'Evidence-Based Career Development',
      description: 'Grounded in NCDA frameworks, global best practices, and measurable outcomes.',
      color: 'from-green-500 to-emerald-500',
      features: ['NCDA Frameworks', 'Global Best Practices', 'Measurable Outcomes']
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
              Signature Approach
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">📊</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 font-playfair">
              Where data meets human potential.
            </h3>
            <span className="text-3xl">🧠</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Supporting Points (3 bullets only)
          </p>
        </motion.div>

        {/* Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${approach.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow h-full">
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${approach.color} rounded-full mb-6`}>
                  <span className="text-3xl">{approach.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">
                  {approach.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  {approach.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {approach.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${approach.color} rounded-full`}></div>
                      <span className="text-sm text-gray-700 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
              The Science of Career Success
            </h3>
            <p className="text-lg mb-8 font-inter max-w-3xl mx-auto">
              My approach combines rigorous methodology with deep human understanding, 
              creating a pathway to career clarity that's both evidence-based and personally meaningful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                <span className="font-semibold">Measurable Results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold">Strategic Frameworks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="font-semibold">Human-Centered Design</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
