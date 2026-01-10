'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Vision2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
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
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Vision 2026 (FCD Instructor – NCDA)
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🏆</span>
            <p className="text-xl text-gray-600 font-inter">
              Becoming a Certified FCD Instructor (NCDA)
            </p>
            <span className="text-2xl">🏆</span>
          </div>
        </motion.div>

        {/* Main Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6">
                <span className="text-3xl">🎯</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-playfair text-gray-800">
              Becoming an NCDA Certified Facilitating Career Development Instructor is not a title I seek — 
              <span className="text-indigo-600"> it is a responsibility I am preparing for.</span>
            </h3>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed font-inter text-center">
                My vision is to expand access to globally grounded, culturally relevant career education across the MENA region, and to prepare the next generation of career coaches, facilitators, and educators to lead with clarity, ethics, and competence.
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-indigo-600 font-playfair italic">
                "This is not the next step."
                <br />
                <span className="text-purple-600">"It is the natural continuation of the work I have already committed my life to."</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: "🌍",
              title: "Global Standards",
              description: "Bringing NCDA's internationally recognized frameworks to the MENA region with cultural adaptation",
              color: "from-indigo-500 to-blue-500"
            },
            {
              icon: "👥",
              title: "Next Generation",
              description: "Empowering future career coaches and facilitators with evidence-based methodologies",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: "🎓",
              title: "Educational Excellence",
              description: "Elevating career education standards through certified, high-quality instruction",
              color: "from-cyan-500 to-teal-500"
            }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full mb-6`}>
                  <span className="text-2xl">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl mb-6">💫</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
              A Commitment to Excellence
            </h3>
            <p className="text-lg leading-relaxed font-inter mb-8">
              This vision represents more than professional advancement — it's a commitment to serving the career development ecosystem in the MENA region with the highest standards of ethics, competence, and cultural relevance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold">Clarity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                <span className="font-semibold">Ethics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">Competence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
