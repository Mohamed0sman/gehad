'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'
import Button from '@/components/Button'

export default function ContactHero() {
  const { language, isRTL } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <section className="relative min-h-screen bg-neutral-900 overflow-hidden flex items-center justify-center py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-900/40 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="px-4 py-2 rounded-full border border-emerald-800 bg-emerald-900/30 text-emerald-300 text-sm font-medium tracking-wide">
            {t('contactHero.badge')}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-display font-bold text-white mb-8 font-heading ${isRTL ? 'font-cairo' : ''}`}
        >
          <span className="block text-white">
            {t('contactHero.title.line1')}
          </span>
          <span className="block text-neutral-400">
            {t('contactHero.title.line2')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className={`text-h3 font-medium text-emerald-300 mb-6 font-heading ${isRTL ? 'font-cairo' : ''}`}>
            {t('contactHero.subtitle1')}
          </p>
          <p className={`text-body-lg text-neutral-400 font-light leading-relaxed ${isRTL ? 'font-cairo' : ''}`}>
            <span className="text-emerald-400 font-medium block mb-2">{t('contactHero.subtitle2.line1')}</span>
            {t('contactHero.subtitle2.line2')}
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {[
            { key: 'call', action: "tel:+201015362414", label: "Phone" },
            { key: 'whatsapp', action: "https://wa.me/201015362414", label: "WhatsApp" },
            { key: 'email', action: "mailto:gfeps@yahoo.com", label: "Email" }
          ].map((contact, i) => (
            <a
              key={i}
              href={contact.action}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors block h-full text-left"
            >
              <div className="text-sm text-emerald-400 font-bold uppercase tracking-wider mb-3">{contact.label}</div>
              <h3 className={`text-xl font-bold text-white mb-2 ${isRTL ? 'font-cairo' : ''}`}>
                {t(`contactHero.methods.${contact.key}.title`)}
              </h3>
              <p className={`text-neutral-400 text-sm ${isRTL ? 'font-cairo' : ''}`}>
                {t(`contactHero.methods.${contact.key}.desc`)}
              </p>
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <Button href="https://wa.me/201015362414" variant="primary" size="lg">
            {t('contactHero.cta.whatsapp')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
