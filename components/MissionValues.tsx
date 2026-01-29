'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function MissionValues() {
  const mission = "To help individuals and institutions design careers intentionally, using evidence-based frameworks that integrate self-awareness, data, and strategic action — so that work becomes a source of growth, not exhaustion"

  const values = [
    {
      title: "Growth",
      description: "Learning as a lifelong responsibility",
      icon: "📈",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Challenge", 
      description: "Questioning default paths and limiting narratives",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Integrity",
      description: "Evidence before opinion",
      icon: "⚖️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Trust",
      description: "Careers are personal; guidance must be ethical",
      icon: "🤝",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Human-Centered Design",
      description: "People before systems, always",
      icon: "❤️",
      color: "from-red-500 to-rose-500"
    }
  ]

  const closingLines = [
    "Careers are not chosen once.",
    "They are designed — continuously, consciously, and with courage"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                {mission}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Core principles that guide every interaction and decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow h-full">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-full mb-6`}>
                    <span className="text-2xl">{value.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="max-w-3xl mx-auto">
              {closingLines.map((line, index) => (
                <p 
                  key={index}
                  className="text-xl md:text-2xl mb-4 last:mb-0"
                >
                  {index === 0 ? (
                    <span className="text-gray-300">{line}</span>
                  ) : (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 font-bold">
                      {line}
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
