'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function ContactInfo() {
  const { language, isRTL } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const contactMethods = [
    {
      iconChar: '📞',
      title: t('contactInfo.methods.call.title'),
      info: '+20 10 15362414',
      description: t('contactInfo.methods.call.desc'),
      action: 'tel:+201015362414',
      color: 'from-green-500 to-emerald-500'
    },
    {
      iconChar: '💬',
      title: t('contactInfo.methods.whatsapp.title'),
      info: '+20 10 15362414',
      description: t('contactInfo.methods.whatsapp.desc'),
      action: 'https://wa.me/201015362414',
      color: 'from-green-600 to-green-700'
    },
    {
      iconChar: '✉️',
      title: t('contactInfo.methods.email.title'),
      info: 'gfeps@yahoo.com',
      description: t('contactInfo.methods.email.desc'),
      action: 'mailto:gfeps@yahoo.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      iconChar: '📍',
      title: t('contactInfo.methods.location.title'),
      info: t('contactInfo.methods.location.info'),
      description: t('contactInfo.methods.location.desc'),
      action: '#',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const workingHours = [
    { day: t('contactInfo.workingHours.weekdays.day'), hours: t('contactInfo.workingHours.weekdays.hours'), available: true },
    { day: t('contactInfo.workingHours.friday.day'), hours: t('contactInfo.workingHours.friday.hours'), available: true },
    { day: t('contactInfo.workingHours.whatsapp.day'), hours: t('contactInfo.workingHours.whatsapp.hours'), available: true }
  ]

  const socialLinks = [
    {
      name: t('social.facebook'),
      url: 'https://facebook.com/gehad.ashraf',
      iconChar: '📘',
      color: 'hover:text-blue-600'
    },
    {
      name: t('social.instagram'),
      url: 'https://instagram.com/gehad.ashraf',
      iconChar: '📷',
      color: 'hover:text-pink-600'
    },
    {
      name: t('social.linkedin'),
      url: 'https://linkedin.com/in/gehad-ashraf',
      iconChar: '💼',
      color: 'hover:text-blue-700'
    },
    {
      name: t('social.tiktok'),
      url: 'https://tiktok.com/@gehad.ashraf',
      iconChar: '🎵',
      color: 'hover:text-black'
    }
  ]

  const tips = [
    t('contactInfo.tips.items.0'),
    t('contactInfo.tips.items.1'),
    t('contactInfo.tips.items.2'),
    t('contactInfo.tips.items.3')
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center cursor-pointer ${isRTL ? 'font-cairo' : ''}`}
            >
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow text-3xl`}>
                {method.iconChar}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{method.title}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-3 font-primary">{method.info}</p>
              <p className="text-sm text-gray-600 leading-relaxed font-primary">{method.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Working Hours & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`bg-white rounded-3xl shadow-xl p-8 ${isRTL ? 'font-cairo' : ''}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">⏰</span>
              <h3 className="text-2xl font-bold text-gray-900 font-heading">{t('contactInfo.workingHours.title')}</h3>
            </div>

            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <span className="font-semibold text-gray-900 font-primary">{schedule.day}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-primary">{schedule.hours}</span>
                    {schedule.available && (
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <p className="text-sm text-green-800 font-semibold text-center font-primary">
                {t('contactInfo.workingHours.urgent')}
              </p>
            </div>
          </motion.div>

          {/* Social Media & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Social Media */}
            <div className={`bg-white rounded-3xl shadow-xl p-8 ${isRTL ? 'font-cairo' : ''}`}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">🌍</span>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">{t('contactInfo.social.title')}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${social.color}`}
                  >
                    <span className="text-2xl">{social.iconChar}</span>
                    <span className="font-semibold font-heading">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className={`bg-gradient-to-br from-blue-600 to-primary-600 rounded-3xl shadow-xl p-8 text-white ${isRTL ? 'font-cairo' : ''}`}>
              <h3 className="text-2xl font-bold mb-6 font-heading">{t('contactInfo.tips.title')}</h3>

              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-primary">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white/90 font-primary">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className={`bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200 max-w-2xl mx-auto ${isRTL ? 'font-cairo' : ''}`}>
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
              {t('contactInfo.emergency.title')}
            </h3>
            <p className="text-gray-600 mb-4 font-primary">
              {t('contactInfo.emergency.desc')}
            </p>
            <motion.a
              href={`https://wa.me/201015362414?text=${t('contactInfo.emergency.message')}`}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-primary"
            >
              <span>{t('contactInfo.emergency.cta')}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
