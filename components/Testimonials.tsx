'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon, HeartIcon, SparklesIcon } from '@heroicons/react/20/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Marketing Manager',
      company: 'Tech Startup',
      content: 'Gehad helped me transition from a dead-end job to a career I\'m passionate about. Her evidence-based approach and strategic guidance were invaluable.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Mohamed Hassan',
      role: 'Software Developer',
      company: 'Multinational Company',
      content: 'The career clarity framework provided by Gehad transformed how I approach my professional development. I now have a clear path forward.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Nadia El-Sayed',
      role: 'HR Director',
      company: 'Engineering Firm',
      content: 'As an HR professional, I was impressed by Gehad\'s systematic approach to career development. She brought real value to our team.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Khalid Omar',
      role: 'Recent Graduate',
      company: 'University Graduate',
      content: 'Gehad\'s guidance helped me navigate the challenging job market with confidence. I landed my dream job within 3 months!',
      rating: 5,
      avatar: '🎓'
    },
    {
      name: 'Mariam Ali',
      role: 'Freelance Designer',
      company: 'Independent',
      content: 'The freelancing program gave me the tools and confidence to build a successful independent career. Highly recommended!',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Ahmed Kamel',
      role: 'Team Lead',
      company: 'Tech Company',
      content: 'Gehad\'s leadership coaching helped me transition from individual contributor to effective team leader. The results speak for themselves.',
      rating: 5,
      avatar: '👨‍💼'
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <HeartIcon className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <HeartIcon className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Real transformations from real people who took control of their careers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow h-full">
                
                {/* Avatar and Rating */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 font-playfair">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-inter">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 font-inter">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="relative mb-6">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed font-inter pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-gray-500 font-inter">
                      Verified Client
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
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
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg mb-8 font-inter max-w-2xl mx-auto">
              Join hundreds of professionals who have transformed their careers with evidence-based guidance and strategic planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking" 
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-inter"
              >
                <StarIcon className="w-5 h-5" />
                <span>Start Your Journey</span>
              </a>
              <a 
                href="/testimonials" 
                className="inline-flex items-center gap-3 border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors font-inter"
              >
                <span>Read More Stories</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
