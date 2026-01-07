'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { 
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  VideoCameraIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const iconMap = {
  chat: ChatBubbleLeftRightIcon,
  calendar: CalendarDaysIcon,
  video: VideoCameraIcon,
  check: CheckCircleIcon
} as const

export default function BookingSteps() {
  const { translations } = useTranslation()
  const steps = [
    {
      id: 1,
      title: translations.bookingSteps[0].title,
      description: translations.bookingSteps[0].description,
      icon: iconMap.chat,
      color: 'from-blue-500 to-cyan-500',
      duration: translations.bookingSteps[0].duration
    },
    {
      id: 2,
      title: translations.bookingSteps[1].title,
      description: translations.bookingSteps[1].description,
      icon: iconMap.calendar,
      color: 'from-green-500 to-emerald-500',
      duration: translations.bookingSteps[1].duration
    },
    {
      id: 3,
      title: translations.bookingSteps[2].title,
      description: translations.bookingSteps[2].description,
      icon: iconMap.video,
      color: 'from-blue-500 to-cyan-500',
      duration: translations.bookingSteps[2].duration
    },
    {
      id: 4,
      title: translations.bookingSteps[3].title,
      description: translations.bookingSteps[3].description,
      icon: iconMap.check,
      color: 'from-yellow-500 to-orange-500',
      duration: translations.bookingSteps[3].duration
    }
  ]
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">{translations.bookingPage.stepsHeader.titlePart1}</span>
            <br />
            <span className="text-gray-700">{translations.bookingPage.stepsHeader.titlePart2}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            {translations.bookingPage.stepsHeader.description}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 via-green-200 to-lime-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.id}
                  </div>
                </div>

                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Duration */}
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${step.color} bg-opacity-10 rounded-full`}>
                  <span className="text-sm font-semibold text-gray-700">
                    ⏱️ {step.duration}
                  </span>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 max-w-4xl mx-auto">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.bookingPage.stepsCTA.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {translations.bookingPage.stepsCTA.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/201234567890?text=مرحبا، عايز أحجز الجلسة المجانية"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{translations.bookingPage.stepsCTA.whatsapp}</span>
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
              >
                {translations.bookingPage.stepsCTA.form}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Success stories preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {translations.bookingPage.successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{story.name.charAt(0)}</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{story.name}</h4>
              <p className="text-sm text-gray-600 mb-1">{story.result}</p>
              <p className="text-xs text-green-600 font-semibold">{story.time}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
