'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SocialProof() {
  const metrics = [
    {
      number: "10+",
      label: "years of professional practice",
      icon: "",
      description: "Dedicated to career development excellence"
    },
    {
      number: "10,400+",
      label: "training hours delivered",
      icon: "",
      description: "Across workshops, courses, and facilitation"
    },
    {
      number: "1,000+",
      label: "career coaching sessions",
      icon: "",
      description: "Personalized one-to-one guidance"
    },
    {
      number: "Thousands",
      label: "trained across MENA",
      icon: "",
      description: "Professionals across the region"
    }
  ]

  const partners = [
    { name: "IDITA", category: "Technology Institute" },
    { name: "NTI", category: "National Training Institute" },
    { name: "DEPI", category: "Digital Egypt Initiative" },
    { name: "Universities", category: "Higher Education" },
    { name: "NGOs", category: "Non-Profit Organizations" }
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
              Social Proof
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Numbers (Concrete & Credible) - Real metrics only
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300 group-hover:bg-gray-800/70">
                <div className="text-5xl mb-4">{metric.icon}</div>
                <div className="text-4xl font-bold text-cyan-400 mb-3 font-playfair">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2 font-inter">
                  {metric.label}
                </div>
                <p className="text-sm text-gray-400 font-inter">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 font-playfair">
            Trusted By
          </h3>
          <p className="text-lg text-gray-300 mb-12 font-inter">
            Universities, government initiatives, and international development programs
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition-colors"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-2 font-playfair">
                  {partner.name}
                </div>
                <p className="text-sm text-gray-400 font-inter">
                  {partner.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Option A - Download */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl mb-4">📥</div>
            <h4 className="text-lg font-bold mb-2 font-playfair">Download</h4>
            <p className="text-sm text-cyan-100 mb-4 font-inter">Lead Magnet</p>
            <p className="font-semibold mb-4 font-inter">Career Clarity Framework</p>
            <p className="text-sm text-cyan-100 mb-4 font-inter">Start designing your next step with structure.</p>
            <a 
              href="/lead-magnet.txt" 
              download 
              className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors font-inter"
            >
              Download Now
            </a>
          </motion.div>

          {/* Option B - Contact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl mb-4">🤝</div>
            <h4 className="text-lg font-bold mb-2 font-playfair">Contact</h4>
            <p className="text-sm text-purple-100 mb-4 font-inter">Collaboration</p>
            <p className="font-semibold mb-4 font-inter">Let's Work Together</p>
            <p className="text-sm text-purple-100 mb-4 font-inter">For organizations, partnerships, and collaboration.</p>
            <a 
              href="/contact" 
              className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors font-inter"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Option C - Booking */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-lg font-bold mb-2 font-playfair">Booking</h4>
            <p className="text-sm text-green-100 mb-4 font-inter">Personal Guidance</p>
            <p className="font-semibold mb-4 font-inter">Not sure where to start?</p>
            <p className="text-sm text-green-100 mb-4 font-inter">Book a discovery session.</p>
            <a 
              href="/booking" 
              className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors font-inter"
            >
              Book Session
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
