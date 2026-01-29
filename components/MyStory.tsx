"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function MyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
            My Story
          </h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl leading-relaxed">
              My journey did not begin with a career plan. It began with a decision.
            </p>
            <p>
              At a very early stage, I was surrounded by expectations — expectations about what success should look like, which paths were "prestigious," and which choices were considered safe. I followed one of those paths briefly, not because it aligned with who I was, but because it was expected of me.
            </p>
            <p>
              Within weeks, I made my first defining decision: to step away and choose consciously.
            </p>
            <p>
              That moment shaped everything that followed.
            </p>
            <p>
              I moved into the Faculty of Economics and Political Science, where I encountered a new world — one that valued critical thinking, responsibility, and awareness. There, a deeper question emerged and never left me:
            </p>
            <p className="text-xl font-semibold text-gray-900 italic">
              Why are some people trusted to make decisions that shape societies, while others spend their lives executing decisions they do not fully understand?
            </p>
            <p>
              This question led me to statistics — not as numbers, but as a language of truth, evidence, and informed choice. I came to understand something fundamental: decisions are born in the heart, but their success depends on the mind.
            </p>
            <p>
              Yet data alone was not enough.
            </p>
            <p>
              As my academic journey progressed into optimization and quality systems, I realized that even the most rational decisions fail when human emotions, identity, and fear are ignored. This realization pulled me toward psychology, emotional intelligence, and the science of behavior.
            </p>
            <p>
              Teaching at the American University in Cairo marked a turning point. I loved learning. I loved structure. But something was missing.
            </p>
            <p>
              I did not want to teach information. I wanted to change how people see themselves.
            </p>
            <p>
              A single sentence from a mentor shifted my direction completely: "You don't just explain concepts — you transform understanding."
            </p>
            <p>
              That was the moment I stepped into facilitation and training.
            </p>
            <p>
              From my first workshop — delivered to senior engineers — to advanced international programs with organizations such as UNESCO and United Nations–affiliated initiatives, I learned one essential lesson: quality is not accidental; it is designed.
            </p>
            <p>
              My path was not linear. At one stage, a life-altering accident forced me into stillness — a year in a wheelchair. What appeared to be a pause became a profound expansion. During that period, I entered the world of freelancing, regional markets, and digital learning, eventually training thousands of professionals across the MENA region.
            </p>
            <p>
              Parallel to this, I served as an HR leader in a multinational engineering firm, worked with government initiatives, universities, and women's empowerment programs — and continued to ask the same core question:
            </p>
            <p className="text-xl font-semibold text-gray-900 italic">
              Why do capable people feel lost, exhausted, or misaligned in their careers?
            </p>
            <p>
              Since 2018, my work expanded beyond students and early professionals to include mid-career leaders, managers, entrepreneurs, and organizations. The questions changed slightly, but the core remained the same:
            </p>
            <p className="text-xl font-semibold text-gray-900 italic">
              "Am I in the right place?" "What comes next?" "Why does success feel so heavy?"
            </p>
            <p>
              Today, I know the answer.
            </p>
            <p className="text-xl font-bold text-gray-900">
              We were never taught how to design careers. We were taught how to follow paths.
            </p>
            <p>
              My work exists to change that.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
