'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function ContactHero() {
  const { language, isRTL } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <section className="relative min-h-screen brand-bg overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[rgba(var(--brand-cyan-500,6,182,212),0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgba(var(--brand-green-400),0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(var(--brand-blue-500),0.1)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating contact icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/20"
            initial={{ 
              x: Math.random() * 1200,
              y: Math.random() * 800,
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
              duration: 8,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + index * 25}%`
            }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <HeartIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
            <span className={`text-[rgb(var(--brand-green-400))] font-semibold text-xl ${isRTL ? 'font-cairo' : ''}`}>
              {t('contactHero.badge')}
            </span>
            <HeartIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl md:text-7xl font-bold text-white mb-8 ${isRTL ? 'font-cairo' : ''}`}
          >
            <span className="text-white">
              {t('contactHero.title.line1')}
            </span>
            <br />
            <span className="text-white">{t('contactHero.title.line2')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl leading-relaxed text-white mb-6 ${isRTL ? 'font-cairo' : ''}`}
          >
            {t('contactHero.subtitle1')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg md:text-xl leading-relaxed text-white mb-12 ${isRTL ? 'font-cairo' : ''}`}
          >
            <span className="text-[rgb(var(--brand-green-400))] font-semibold">{t('contactHero.subtitle2.line1')}</span>
            <br />
            <span className="text-white">{t('contactHero.subtitle2.line2')}</span>
          </motion.p>

          {/* Quick contact options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { 
                icon: PhoneIcon, 
                key: 'call',
                color: "from-green-400 to-emerald-400",
                action: "tel:+201234567890"
              },
              { 
                icon: ChatBubbleLeftRightIcon, 
                key: 'whatsapp',
                color: "from-green-500 to-green-600", 
                action: "https://wa.me/201234567890"
              },
              { 
                icon: EnvelopeIcon, 
                key: 'email',
                color: "from-[rgb(var(--brand-green-500))] to-[rgb(var(--brand-green-400))]",
                action: "mailto:info@gehad-ashraf.com"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                target={contact.action.startsWith('http') ? '_blank' : '_self'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-2 ${isRTL ? 'font-cairo' : ''}`}>
                  {t(`contactHero.methods.${contact.key}.title`)}
                </h3>
                <p className={`text-white/80 ${isRTL ? 'font-cairo' : ''}`}>
                  {t(`contactHero.methods.${contact.key}.desc`)}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Location info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <MapPinIcon className="w-8 h-8 text-[rgb(var(--brand-green-400))]" />
              <h3 className={`text-2xl font-bold text-white ${isRTL ? 'font-cairo' : ''}`}>
                {t('contactHero.locations.title')}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className={`text-lg font-semibold text-white mb-2 ${isRTL ? 'font-cairo' : ''}`}>
                  {t('contactHero.locations.online.title')}
                </h4>
                <p className={`text-white/80 text-sm ${isRTL ? 'font-cairo' : ''}`}>
                  {t('contactHero.locations.online.desc')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <h4 className={`text-lg font-semibold text-white mb-2 ${isRTL ? 'font-cairo' : ''}`}>
                  {t('contactHero.locations.inPerson.title')}
                </h4>
                <p className={`text-white/80 text-sm ${isRTL ? 'font-cairo' : ''}`}>
                  {t('contactHero.locations.inPerson.desc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="https://wa.me/201234567890"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-10 py-5 brand-cta font-bold text-xl rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3 ${isRTL ? 'font-cairo' : ''}`}
            >
              <span>{t('contactHero.cta.whatsapp')}</span>
              <motion.span
                animate={{ x: isRTL ? [0, -5, 0] : [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {isRTL ? '←' : '→'}
              </motion.span>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 text-center"
            >
              <div className={`text-sm ${isRTL ? 'font-cairo' : ''}`}>{t('contactHero.cta.form.line1')}</div>
              <div className={`text-lg font-semibold ${isRTL ? 'font-cairo' : ''}`}>{t('contactHero.cta.form.line2')}</div>
            </motion.div>
          </motion.div>

          {/* Response time */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className={isRTL ? 'font-cairo' : ''}>{t('contactHero.features.response')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className={isRTL ? 'font-cairo' : ''}>{t('contactHero.features.availability')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className={isRTL ? 'font-cairo' : ''}>{t('contactHero.features.consultation')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
