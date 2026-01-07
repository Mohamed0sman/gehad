'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon,
  LightBulbIcon,
  SparklesIcon,
  StarIcon,
  HandRaisedIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Philosophy() {
  const { translations } = useTranslation()
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const philosophyPoints = translations.philosophy.points.map((point, index) => {
    const icons = [SparklesIcon, HeartIcon, LightBulbIcon, StarIcon]
    const colors = ['from-purple-500 to-pink-500', 'from-red-500 to-pink-500', 'from-yellow-500 to-orange-500', 'from-blue-500 to-cyan-500']
    const emojis = ['✨', '❤️', '💡', '⭐']

    return {
      id: index + 1,
      ...point,
      icon: icons[index] || SparklesIcon,
      color: colors[index] || 'from-purple-500 to-pink-500',
      emoji: emojis[index] || '✨'
    }
  })

  const values = translations.philosophy.values.map((value, index) => {
    const emojis = ['🤝', '🙏', '🤗', '📈']
    const colors = ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-purple-100 text-purple-800', 'bg-pink-100 text-pink-800']

    return {
      ...value,
      emoji: emojis[index] || '✨',
      color: colors[index] || 'bg-gray-100 text-gray-800'
    }
  })

  return (
    <section className="py-24 sm:py-32 brand-bg relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[rgba(var(--brand-blue-500),0.15)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[rgba(var(--brand-green-400),0.15)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(var(--brand-cyan-500,6,182,212),0.1)] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
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
            <EyeIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
            <span className="text-[rgb(var(--brand-green-400))] font-semibold text-lg">{translations.philosophy.badge}</span>
            <EyeIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <span className="brand-gradient-text">
              {translations.philosophy.header.mainTitle}
            </span>
            <br />
            <span className="text-gray-300">{translations.philosophy.header.subTitle}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-300"
          >
            {translations.philosophy.header.description}
            <br />
            <span className="text-[rgb(var(--brand-green-400))] font-semibold">{translations.philosophy.header.highlight}</span>
          </motion.p>
        </div>

        {/* Philosophy Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${point.color} shadow-lg shrink-0`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <point.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">{point.emoji}</span>
                    <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <HandRaisedIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
              <span className="text-[rgb(var(--brand-green-400))] font-semibold text-lg">{translations.philosophy.valuesHeader.badge}</span>
              <HandRaisedIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="brand-gradient-text">
                {translations.philosophy.valuesHeader.title}
              </span> 💎
            </h3>
            <p className="text-lg text-gray-300">
              {translations.philosophy.valuesHeader.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? (index % 2 === 0 ? 30 : -30) : (index % 2 === 0 ? -30 : 30) }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${value.color} p-6 rounded-2xl transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{value.emoji}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                    <p className="text-sm opacity-90">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
