'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'

export default function BlogHero() {
  return (
    <section className="relative min-h-screen bg-neutral-900 overflow-hidden flex items-center justify-center py-20">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-900/40 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-900/30 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="px-4 py-2 rounded-full border border-primary-800 bg-primary-900/30 text-primary-300 text-sm font-medium tracking-wide">
            Blog & Articles
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display font-bold text-white mb-8 font-heading"
        >
          <span className="block text-primary-200">
            Articles & Tips
          </span>
          <span className="block text-white">
            For Your Career Success
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-h3 font-medium text-neutral-300 mb-12 font-heading max-w-3xl mx-auto"
        >
          Discover the latest tips and strategies for professional and personal development
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Helpful Articles" },
            { number: "10K+", label: "Monthly Readers" },
            { number: "8", label: "Categories" },
            { number: "5.0", label: "Reader Rating" }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary-300 mb-1">{stat.number}</div>
              <div className="text-sm text-neutral-400 font-primary">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Most Read Topics</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Choosing Your Major',
              'Resume Writing',
              'Interview Skills',
              'Career Development',
              'Time Management',
              'Building Confidence'
            ].map((topic, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-neutral-800 text-neutral-300 text-sm hover:bg-neutral-700 hover:text-white transition-colors cursor-default">
                {topic}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <Button href="#articles" variant="primary" size="lg">
            Read Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}