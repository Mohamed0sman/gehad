'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function ContactForm() {
  const { language, isRTL } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'whatsapp',
    sessionType: 'consultation'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl text-white"
            >
              ✅
            </motion.div>

            <h2 className={`text-4xl font-bold text-neutral-900 mb-4 font-heading`}>
              {t('contactForm.success.title')}
            </h2>

            <p className={`text-xl text-neutral-600 mb-8 font-primary`}>
              {t('contactForm.success.message')}
              <br />
              <span className="text-green-600 font-semibold">{t('contactForm.success.note')}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/201015362414"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-primary`}
              >
                {t('contactForm.success.whatsapp')}
              </motion.a>

              <motion.button
                onClick={() => setIsSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`border-2 border-green-200 text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors font-primary`}
              >
                {t('contactForm.success.another')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-blue-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-blue-500 text-3xl">✨</span>
            <span className={`text-blue-600 font-semibold text-lg font-heading`}>{t('contactForm.header.badge')}</span>
            <span className="text-blue-500 text-3xl">✨</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-h2 font-bold text-neutral-900 mb-6 font-heading`}
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">{t('contactForm.header.title')}</span>
            <br />
            <span className="text-neutral-700">{t('contactForm.header.subtitle')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-xl leading-8 text-neutral-600 font-primary`}
          >
            {t('contactForm.header.desc')}
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-semibold text-neutral-900 mb-2 font-heading`}>
                  {t('contactForm.form.name.label')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors font-primary`}
                  placeholder={t('contactForm.form.name.placeholder')}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold text-neutral-900 mb-2 font-heading`}>
                  {t('contactForm.form.phone.label')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors font-primary`}
                  placeholder={t('contactForm.form.phone.placeholder')}
                  dir="ltr"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm font-semibold text-neutral-900 mb-2 font-heading`}>
                {t('contactForm.form.email.label')}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors font-primary`}
                placeholder={t('contactForm.form.email.placeholder')}
                dir="ltr"
              />
            </div>

            {/* Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-semibold text-neutral-900 mb-2 font-heading`}>
                  {t('contactForm.form.preferred.label')}
                </label>
                <select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors font-primary`}
                >
                  <option value="whatsapp">{t('contactForm.form.preferred.whatsapp')}</option>
                  <option value="phone">{t('contactForm.form.preferred.phone')}</option>
                  <option value="email">{t('contactForm.form.preferred.email')}</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-semibold text-neutral-900 mb-2 font-heading`}>
                  {t('contactForm.form.serviceType.label')}
                </label>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors font-primary`}
                >
                  <option value="consultation">{t('contactForm.form.serviceType.options.consultation')}</option>
                  <option value="individual">{t('contactForm.form.serviceType.options.individual')}</option>
                  <option value="group">{t('contactForm.form.serviceType.options.group')}</option>
                  <option value="program">{t('contactForm.form.serviceType.options.program')}</option>
                  <option value="other">{t('contactForm.form.serviceType.options.other')}</option>
                </select>
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold text-neutral-900 mb-2 font-heading`}>
                {t('contactForm.form.subject.label')}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors font-primary`}
                placeholder={t('contactForm.form.subject.placeholder')}
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold text-neutral-900 mb-2 font-heading`}>
                {t('contactForm.form.message.label')}
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none font-primary`}
                placeholder={t('contactForm.form.message.placeholder')}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`relative px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-blue-500/25'
                  } font-heading`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>{t('contactForm.form.submit.sending')}</span>
                  </>
                ) : (
                  <>
                    <span className={`text-xl ${isRTL ? 'rotate-180' : ''}`}>🚀</span>
                    <span>{t('contactForm.form.submit.default')}</span>
                  </>
                )}
              </motion.button>

              <p className={`text-sm text-neutral-500 mt-4 font-primary`}>
                {t('contactForm.form.note')}
              </p>
            </div>
          </form>
        </motion.div>

        {/* Quick contact reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <span className="text-4xl block mb-4">❤️</span>
            <h3 className={`text-xl font-bold text-neutral-900 mb-2 font-heading`}>
              {t('contactForm.quickContact.title')}
            </h3>
            <p className={`text-neutral-600 mb-4 font-primary`}>
              {t('contactForm.quickContact.desc')}
            </p>
            <motion.a
              href="https://wa.me/201015362414"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-primary`}
            >
              <span>{t('contactForm.quickContact.cta')}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
