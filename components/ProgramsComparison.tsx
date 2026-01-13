'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations as translationsData } from '@/lib/translations'

type ProgramKey = 'individual' | 'group' | 'comprehensive' | 'academic'

export default function ProgramsComparison() {
  const { language, isRTL } = useLanguage()
  const translations = translationsData[language] as any

  const format = (template: string, replacements: Record<string, string | number>) => {
    return Object.keys(replacements).reduce((acc, key) => {
      return acc.replace(`{${key}}`, String(replacements[key]))
    }, template)
  }

  const programs: { name: string; key: ProgramKey; color: string; popular: boolean; emoji: string }[] = [
    {
      name: translations.programsComparison.programs.individual,
      key: 'individual',
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      emoji: '🎯'
    },
    {
      name: translations.programsComparison.programs.group,
      key: 'group',
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      emoji: '👥'
    },
    {
      name: translations.programsComparison.programs.comprehensive,
      key: 'comprehensive',
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      emoji: '💡'
    },
    {
      name: translations.programsComparison.programs.academic,
      key: 'academic',
      color: 'from-green-500 to-emerald-500',
      popular: false,
      emoji: '📚'
    }
  ]

  const comparisonData: Array<
    { feature: string } & Record<ProgramKey, boolean | string>
  > = [
      {
        feature: translations.programsComparison.features.sessions,
        individual: format(translations.programsComparison.values.sessions, { count: 4 }),
        group: format(translations.programsComparison.values.sessions, { count: 2 }),
        comprehensive: format(translations.programsComparison.values.sessions, { count: 8 }),
        academic: format(translations.programsComparison.values.sessions, { count: 3 })
      },
      {
        feature: translations.programsComparison.features.duration,
        individual: format(translations.programsComparison.values.weeks, { count: 4 }),
        group: format(translations.programsComparison.values.hours, { count: 6 }),
        comprehensive: format(translations.programsComparison.values.weeks, { count: 8 }),
        academic: format(translations.programsComparison.values.weeks, { count: 3 })
      },
      {
        feature: translations.programsComparison.features.assessment,
        individual: true,
        group: false,
        comprehensive: true,
        academic: true
      },
      {
        feature: translations.programsComparison.features.plan,
        individual: true,
        group: false,
        comprehensive: true,
        academic: true
      },
      {
        feature: translations.programsComparison.features.followup,
        individual: true,
        group: false,
        comprehensive: true,
        academic: true
      },
      {
        feature: translations.programsComparison.features.activities,
        individual: false,
        group: true,
        comprehensive: false,
        academic: false
      },
      {
        feature: translations.programsComparison.features.certificate,
        individual: true,
        group: true,
        comprehensive: true,
        academic: true
      },
      {
        feature: translations.programsComparison.features.materials,
        individual: true,
        group: true,
        comprehensive: true,
        academic: true
      },
      {
        feature: translations.programsComparison.features.support,
        individual: format(translations.programsComparison.values.month, { count: 1 }),
        group: format(translations.programsComparison.values.weeks, { count: 2 }),
        comprehensive: format(translations.programsComparison.values.months, { count: 3 }),
        academic: format(translations.programsComparison.values.month, { count: 1 })
      },
      // Price row intentionally removed (site displays no prices)
    ]


  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-3xl">🏆</span>
            <span className="text-blue-600 font-semibold text-lg font-primary">
              {translations.programsComparison.header.badge}
            </span>
            <span className="text-3xl">🏆</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-heading"
          >
            <span className="gradient-text">
              {translations.programsComparison.header.titleTop}
            </span>
            <br />
            <span className="text-neutral-700">
              {translations.programsComparison.header.titleBottom}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-neutral-600 font-primary"
          >
            {translations.programsComparison.header.subtitle}
            <br />
            <span className="text-blue-600 font-semibold">
              {translations.programsComparison.header.highlight}
            </span>
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
            <div className="grid grid-cols-5 gap-4">
              <div className="text-white font-bold text-lg font-heading">
                {translations.programsComparison.table.features}
              </div>
              {programs.map((program, index) => (
                <motion.div
                  key={program.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {program.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"
                      >
                        {translations.programsComparison.table.popular}
                      </motion.div>
                    </div>
                  )}
                  <div className="text-3xl mb-2">{program.emoji}</div>
                  <div className="text-white font-semibold text-sm font-heading">{program.name}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="p-6">
            {comparisonData.map((row, rowIndex) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.05 }}
                viewport={{ once: true }}
                className={`grid grid-cols-5 gap-4 py-4 border-b border-gray-100 last:border-b-0 ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } rounded-lg mb-2`}
              >
                <div className="font-semibold text-neutral-900 flex items-center font-primary">
                  {row.feature}
                </div>

                {programs.map((program) => (
                  <div key={program.key} className="text-center flex items-center justify-center">
                    {typeof row[program.key as keyof typeof row] === 'boolean' ? (
                      row[program.key as keyof typeof row] ? (
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <span className="text-white text-xs">✓</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                        >
                          <span className="text-white text-xs">✕</span>
                        </motion.div>
                      )
                    ) : (
                      <span className="text-neutral-700 font-medium text-sm font-primary">
                        {row[program.key as keyof typeof row]}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-heading">
                🎯 {translations.programsComparison.cta.title}
              </h3>
              <p className="text-neutral-600 font-primary">
                {translations.programsComparison.cta.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {programs.map((program, index) => (
                <motion.div
                  key={program.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative bg-gradient-to-br ${program.color} rounded-2xl p-6 text-white text-center cursor-pointer group overflow-hidden ring-1 ring-black/5 shadow-lg`}
                >
                  {program.popular && (
                    <div className="absolute top-2 right-2">
                      <span className="text-yellow-300">✨</span>
                    </div>
                  )}

                  <div className="text-3xl mb-2">{program.emoji}</div>
                  <div className="font-bold text-lg mb-3 tracking-tight font-heading">{program.name}</div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    className="w-full bg-white text-blue-700 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all font-heading"
                  >
                    {translations.common.bookNow}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-neutral-900 mb-4 font-heading">
              {translations.programsComparison.help.title}
            </h4>
            <p className="text-neutral-600 mb-6 font-primary">
              {translations.programsComparison.help.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-heading"
            >
              {translations.programsComparison.help.button}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
