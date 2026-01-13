'use client'

import { motion } from 'framer-motion'
// Icons removed

export default function ResourcesHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 overflow-hidden flex items-center justify-center py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating resource icons */}
      <div className="absolute inset-0 overflow-hidden">
        {['📄', '📖', '🎓', '📝', '📊', '📥'].map((iconChar, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10 text-4xl"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
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
              left: `${15 + index * 15}%`,
              top: `${10 + index * 12}%`
            }}
          >
            {iconChar}
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 flex items-center flex-col justify-center text-center">

        {/* Free badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-green-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-2xl"
        >
          <span className="text-2xl">🎁</span>
          <span>100% Free Resources</span>
          <span className="text-2xl">✨</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display font-bold text-white mb-8 font-heading"
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
          className="text-h3 font-medium text-white/90 mb-6 font-heading max-w-4xl mx-auto"
        >
          Download PDF files, worksheets, and comprehensive guides to help you on your career journey
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body-lg text-white/80 mb-12 font-primary max-w-3xl mx-auto"
        >
          <span className="text-lime-300 font-semibold">📥 Download for free</span> all the materials you need
          <br />
          to develop yourself and achieve your career goals
        </motion.p>

        {/* Resource stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-5xl"
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
              <div className="text-2xl font-bold text-lime-300 mb-1 font-heading">{stat.number}</div>
              <div className="text-white/80 text-sm font-primary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Popular downloads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12 w-full max-w-5xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2 font-heading">
            <span className="text-3xl">⬇️</span>
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
                className="bg-white/10 rounded-2xl p-4 cursor-pointer hover:bg-white/15 transition-colors border border-white/5"
              >
                <div className="text-3xl mb-2">{resource.icon}</div>
                <h4 className="font-semibold text-white mb-2 text-sm font-heading">{resource.title}</h4>
                <div className="text-lime-300 text-xs font-semibold font-primary">
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
            className="group relative px-10 py-5 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 flex items-center gap-3 font-heading"
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
            className="text-white/80 text-center font-primary"
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
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60 font-primary"
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
    </section>
  )
}