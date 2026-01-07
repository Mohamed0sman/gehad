'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon,
  DocumentArrowDownIcon,
  AcademicCapIcon,
  GiftIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'

export default function ResourcesHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating resource icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[DocumentArrowDownIcon, BookOpenIcon, AcademicCapIcon].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/20"
            initial={{ 
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: [null, -100, 100, -50],
              opacity: [0, 0.3, 0.6, 0.3, 0],
              scale: [0, 1, 1.2, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + index * 30}%`,
              top: `${10 + index * 25}%`
            }}
          >
            <Icon className="w-16 h-16" />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Free badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-green-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-2xl"
          >
            <GiftIcon className="w-6 h-6" />
            <span>100% Free Resources</span>
            <SparklesIcon className="w-6 h-6" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent">
              Educational Resources
            </span>
            <br />
            <span className="text-white">For Your Success 📚</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed text-white/90 mb-6"
          >
            Download PDF files, worksheets, and comprehensive guides to help you on your career journey
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl leading-relaxed text-white/80 mb-12"
          >
            <span className="text-lime-300">📥 Download for free</span> all the materials you need
            <br />
            to develop yourself and achieve your career goals
          </motion.p>

          {/* Resource stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: "25+", label: "PDF Files", icon: "📄" },
              { number: "15+", label: "Worksheets", icon: "📝" },
              { number: "10+", label: "Guides", icon: "📖" },
              { number: "5+", label: "Templates", icon: "📋" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-lime-300 mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Popular downloads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <DocumentArrowDownIcon className="w-8 h-8 text-lime-400" />
              Most Downloaded This Month
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "University Major Selection Guide", downloads: "2.5K", icon: "🎓" },
                { title: "Professional Resume Template", downloads: "1.8K", icon: "📄" },
                { title: "Goal Setting Worksheet", downloads: "1.2K", icon: "🎯" }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-2xl p-4 cursor-pointer hover:bg-white/15 transition-colors"
                >
                  <div className="text-3xl mb-2">{resource.icon}</div>
                  <h4 className="font-semibold text-white mb-2 text-sm">{resource.title}</h4>
                  <div className="text-lime-300 text-xs font-semibold">
                    📥 {resource.downloads} downloads
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 flex items-center gap-3"
            >
              <span>📚 View All Resources</span>
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 text-center"
            >
              <div className="text-sm">Or subscribe to our list</div>
              <div className="text-lg font-semibold">📧 to get new resources</div>
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Completely Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Updated Regularly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>High Quality</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}