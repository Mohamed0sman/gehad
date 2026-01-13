'use client'

import { motion } from 'framer-motion'

export default function Philosophy() {
  const philosophyPoints = [
    {
      title: 'Evidence-Based Approach',
      description: 'Using data, research, and proven methodologies to guide career decisions.',
      iconChar: '💡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Human-Centered Design',
      description: 'Putting people first, understanding that careers are personal journeys.',
      iconChar: '❤️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Strategic Thinking',
      description: 'Helping clients see the bigger picture and make informed choices.',
      iconChar: '👁️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Continuous Growth',
      description: 'Learning and evolving alongside clients and industry changes.',
      iconChar: '✨',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              My Philosophy
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-primary">
            Core principles that guide my practice and approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow h-full">

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${point.color} rounded-xl mb-4 text-2xl shadow-md`}>
                  {point.iconChar}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 mb-3 font-heading">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed font-primary text-sm">
                  {point.description}
                </p>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full"></div>

            <div className="text-5xl mx-auto mb-6">🙌</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
              Let's Design Your Career Together
            </h3>
            <p className="text-lg mb-8 font-primary max-w-2xl mx-auto text-primary-50">
              Ready to take the next step in your professional journey with intentional design and strategic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-600 font-bold px-8 py-4 rounded-2xl hover:bg-neutral-50 transition-colors font-primary shadow-lg"
              >
                <span>⭐ Book a Session</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors font-primary"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
