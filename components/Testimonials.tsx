'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Marketing Manager',
      company: 'Tech Startup',
      content: 'Gehad helped me transition from a dead-end job to a career I\'m passionate about. Her evidence-based approach and strategic guidance were invaluable.',
      rating: 5,
      avatar: 'SA' // Typographic avatar
    },
    {
      name: 'Mohamed Hassan',
      role: 'Software Developer',
      company: 'Multinational Company',
      content: 'The career clarity framework provided by Gehad transformed how I approach my professional development. I now have a clear path forward.',
      rating: 5,
      avatar: 'MH'
    },
    {
      name: 'Nadia El-Sayed',
      role: 'HR Director',
      company: 'Engineering Firm',
      content: 'As an HR professional, I was impressed by Gehad\'s systematic approach to career development. She brought real value to our team.',
      rating: 5,
      avatar: 'NE'
    },
    {
      name: 'Khalid Omar',
      role: 'Recent Graduate',
      company: 'University Graduate',
      content: 'Gehad\'s guidance helped me navigate the challenging job market with confidence. I landed my dream job within 3 months!',
      rating: 5,
      avatar: 'KO'
    },
    {
      name: 'Mariam Ali',
      role: 'Freelance Designer',
      company: 'Independent',
      content: 'The freelancing program gave me the tools and confidence to build a successful independent career. Highly recommended!',
      rating: 5,
      avatar: 'MA'
    },
    {
      name: 'Ahmed Kamel',
      role: 'Team Lead',
      company: 'Tech Company',
      content: 'Gehad\'s leadership coaching helped me transition from individual contributor to effective team leader. The results speak for themselves.',
      rating: 5,
      avatar: 'AK'
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-h2 font-heading font-bold text-neutral-900">
              Client Success Stories
            </h2>
          </div>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto font-primary">
            Real transformations from real people who took control of their careers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="card h-full p-8 bg-neutral-50/50 hover:bg-white border border-neutral-100 hover:border-primary-100 transition-colors duration-300">

                {/* Header: Avatar & Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold tracking-wider">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 font-heading">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-primary uppercase tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6 relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-primary-200 font-serif opacity-50">“</span>
                  <p className="text-body text-neutral-600 leading-relaxed font-primary relative z-10 px-2 italic">
                    {testimonial.content}
                  </p>
                  <span className="absolute -bottom-6 right-0 text-4xl text-primary-200 font-serif opacity-50">”</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-auto pt-4 border-t border-neutral-100/50">
                  <div className="flex text-yellow-500 text-sm">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-xs text-neutral-400 font-medium">
                    Verified Client
                  </span>
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
          <div className="bg-neutral-900 rounded-3xl p-10 md:p-12 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-h3 font-heading font-bold mb-4 text-white">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-body-lg mb-8 text-neutral-300 max-w-2xl mx-auto font-light">
                Join hundreds of professionals who have transformed their careers with evidence-based guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/booking" variant="primary">
                  Start Your Journey
                </Button>
                <Button href="/testimonials" variant="secondary" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                  Read More Stories
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}