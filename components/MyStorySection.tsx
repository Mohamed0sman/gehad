'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function MyStory() {
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
              My Story
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            The journey that shaped my purpose
          </p>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            
            {/* Opening Statement */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-playfair">
                My journey did not begin with a career plan.
                <br />
                <span className="text-blue-600">It began with a decision.</span>
              </h3>
            </div>

            {/* Story Sections */}
            <div className="space-y-8">
              {/* Early Stage */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  The Early Decision
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  At a very early stage, I was surrounded by expectations — expectations about what success should look like, which paths were "prestigious," and which choices were considered safe. I followed one of those paths briefly, not because it aligned with who I was, but because it was expected of me.
                </p>
                <p className="text-gray-600 leading-relaxed font-inter mt-3">
                  Within weeks, I made my first defining decision: to step away and choose consciously.
                  <br />
                  <span className="text-blue-600 font-semibold">That moment shaped everything that followed.</span>
                </p>
              </motion.div>

              {/* Academic Journey */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-l-4 border-cyan-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  The Academic Awakening
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  I moved into the Faculty of Economics and Political Science, where I encountered a new world — one that valued critical thinking, responsibility, and awareness. There, a deeper question emerged and never left me:
                </p>
                <blockquote className="text-lg text-blue-600 font-semibold italic mt-4 mb-4 font-playfair">
                  "Why are some people trusted to make decisions that shape societies, while others spend their lives executing decisions they do not fully understand?"
                </blockquote>
                <p className="text-gray-600 leading-relaxed font-inter">
                  This question led me to statistics — not as numbers, but as a language of truth, evidence, and informed choice. I came to understand something fundamental:
                  <br />
                  <span className="text-cyan-600 font-semibold">decisions are born in the heart, but their success depends on the mind.</span>
                </p>
              </motion.div>

              {/* Beyond Data */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="border-l-4 border-green-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  Beyond Data: The Human Element
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  Yet data alone was not enough. As my academic journey progressed into optimization and quality systems, I realized that even the most rational decisions fail when human emotions, identity, and fear are ignored. This realization pulled me toward psychology, emotional intelligence, and the science of behavior.
                </p>
              </motion.div>

              {/* Teaching Turning Point */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="border-l-4 border-purple-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  The Teaching Turning Point
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  Teaching at the American University in Cairo marked a turning point. I loved learning. I loved structure. But something was missing.
                </p>
                <p className="text-gray-600 leading-relaxed font-inter mt-3">
                  I did not want to teach information.
                  <br />
                  <span className="text-purple-600 font-semibold">I wanted to change how people see themselves.</span>
                </p>
                <p className="text-gray-600 leading-relaxed font-inter mt-3">
                  A single sentence from a mentor shifted my direction completely:
                  <br />
                  <span className="text-purple-600 font-semibold italic">"You don't just explain concepts — you transform understanding."</span>
                </p>
                <p className="text-gray-600 leading-relaxed font-inter mt-3">
                  That was the moment I stepped into facilitation and training.
                </p>
              </motion.div>

              {/* Professional Growth */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="border-l-4 border-orange-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  From Local Impact to Regional Reach
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  From my first workshop — delivered to senior engineers — to advanced international programs with organizations such as UNESCO and United Nations–affiliated initiatives, I learned one essential lesson: <span className="text-orange-600 font-semibold">quality is not accidental; it is designed.</span>
                </p>
                <p className="text-gray-600 leading-relaxed font-inter mt-3">
                  My path was not linear. At one stage, a life-altering accident forced me into stillness — a year in a wheelchair. What appeared to be a pause became a profound expansion. During that period, I entered the world of freelancing, regional markets, and digital learning, eventually training thousands of professionals across the MENA region.
                </p>
              </motion.div>

              {/* The Core Question */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="border-l-4 border-red-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  The Unchanging Core Question
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  Parallel to this, I served as an HR leader in a multinational engineering firm, worked with government initiatives, universities, and women's empowerment programs — and continued to ask the same core question:
                </p>
                <blockquote className="text-lg text-red-600 font-semibold italic mt-4 mb-4 font-playfair">
                  "Why do capable people feel lost, exhausted, or misaligned in their careers?"
                </blockquote>
                <p className="text-gray-600 leading-relaxed font-inter">
                  Since 2018, my work expanded beyond students and early professionals to include mid-career leaders, managers, entrepreneurs, and organizations. The questions changed slightly, but the core remained the same:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 font-inter">
                  <li>"Am I in the right place?"</li>
                  <li>"What comes next?"</li>
                  <li>"Why does success feel so heavy?"</li>
                </ul>
              </motion.div>

              {/* The Answer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="border-l-4 border-indigo-500 pl-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-r-2xl p-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  Today, I know the answer.
                </h4>
                <p className="text-gray-700 leading-relaxed font-inter text-lg">
                  <span className="text-indigo-600 font-semibold">We were never taught how to design careers.</span>
                  <br />
                  We were taught how to follow paths.
                </p>
                <p className="text-gray-700 leading-relaxed font-inter text-lg mt-4">
                  <span className="text-indigo-600 font-bold">My work exists to change that.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
