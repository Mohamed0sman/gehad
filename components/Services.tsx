'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Services() {
  const consultingService = {
    title: "Career Development Consulting For Business",
    subtitle: "What This Service Is",
    description: "I partner with organizations to design and deliver career development, employability, and learning solutions that align human potential with organizational goals.",
    valueProp: "This service supports institutions seeking sustainable performance, reduced burnout, and future-ready talent",
    targetAudience: [
      "Universities and educational institutions",
      "Government initiatives and NGOs", 
      "HR & L&D departments",
      "Startups and growing organizations"
    ],
    features: [
      "Custom Program Design",
      "Employability Framework Development",
      "Leadership Capacity Building",
      "Learning & Development Strategy",
      "Talent Pipeline Optimization",
      "Performance Enhancement Systems"
    ],
    cta: "Let's Build Career-Ready Talent",
    ctaSubtext: "Contact for partnerships and consulting"
  }

  const counselingService = {
    title: "Career Counseling For Individuals",
    subtitle: "What This Service Is",
    description: "Career counseling is a structured, evidence-based process designed to help individuals gain clarity, direction, and confidence in their career decisions.",
    valueProp: "It is not advice-giving. It is career design.",
    targetAudience: [
      "Young professionals at career entry or transition",
      "Mid-career professionals experiencing stagnation or burnout",
      "Freelancers seeking direction and stability",
      "Individuals preparing for strategic career shifts"
    ],
    features: [
      "Career Assessment & Analysis",
      "Strategic Career Planning",
      "Skill Gap Identification",
      "Market Positioning Strategy",
      "Transition Management",
      "Personal Brand Development"
    ],
    cta: "Book a Career Counseling Session",
    ctaSubtext: "Start designing your next step"
  }

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
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Comprehensive career development solutions for organizations and individuals
          </p>
        </motion.div>

        {/* Consulting Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-playfair">
                {consultingService.title}
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h4 className="text-lg font-semibold text-blue-600 mb-3 font-playfair">
                {consultingService.subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed font-inter mb-4">
                {consultingService.description}
              </p>
              <p className="text-lg font-semibold text-blue-600 font-playfair italic">
                {consultingService.valueProp}
              </p>
            </div>

            {/* Who It's For */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 font-playfair">
                Who It's For
              </h4>
              <ul className="space-y-2">
                {consultingService.targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {consultingService.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-inter">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-inter"
              >
                <span>{consultingService.cta}</span>
                <span>→</span>
              </a>
              <p className="text-sm text-gray-500 mt-3 font-inter">
                {consultingService.ctaSubtext}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Counseling Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-playfair">
                {counselingService.title}
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h4 className="text-lg font-semibold text-purple-600 mb-3 font-playfair">
                {counselingService.subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed font-inter mb-4">
                {counselingService.description}
              </p>
              <p className="text-lg font-semibold text-purple-600 font-playfair italic">
                {counselingService.valueProp}
              </p>
            </div>

            {/* Who It's For */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 font-playfair">
                Who It's For
              </h4>
              <ul className="space-y-2">
                {counselingService.targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {counselingService.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/70 rounded-xl">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-inter">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href="/booking" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-inter"
              >
                <span>{counselingService.cta}</span>
                <span>→</span>
              </a>
              <p className="text-sm text-gray-500 mt-3 font-inter">
                {counselingService.ctaSubtext}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
