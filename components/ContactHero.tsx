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

export default function ContactHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
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
            <HeartIcon className="w-8 h-8 text-pink-400" />
            <span className="text-cyan-400 font-semibold text-xl">تواصل معايا</span>
            <HeartIcon className="w-8 h-8 text-pink-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              خلاص قررت؟
            </span>
            <br />
            <span className="text-white">يلا نبدأ سوا! 🚀</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed text-white/90 mb-6"
          >
            أنا هنا علشان أساعدك في كل خطوة في رحلتك المهنية
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl leading-relaxed text-white/80 mb-12"
          >
            <span className="text-cyan-300">💬 كلمني بأي طريقة تريحك</span>
            <br />
            وهنشوف إزاي نقدر نحقق أحلامك مع بعض
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
                title: "اتصل بيا", 
                desc: "01234567890",
                color: "from-green-400 to-emerald-400",
                action: "tel:+201234567890"
              },
              { 
                icon: ChatBubbleLeftRightIcon, 
                title: "واتساب", 
                desc: "رد فوري 24/7",
                color: "from-green-500 to-green-600", 
                action: "https://wa.me/201234567890"
              },
              { 
                icon: EnvelopeIcon, 
                title: "إيميل", 
                desc: "info@gehad-ashraf.com",
                color: "from-blue-400 to-cyan-400",
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
                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-white/80">{contact.desc}</p>
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
              <MapPinIcon className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">مكان الجلسات</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="text-lg font-semibold text-white mb-2">أونلاين</h4>
                <p className="text-white/80 text-sm">جلسات عبر Zoom أو Google Meet</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <h4 className="text-lg font-semibold text-white mb-2">حضوري</h4>
                <p className="text-white/80 text-sm">القاهرة - مصر الجديدة</p>
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
              className="group relative px-10 py-5 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center gap-3"
            >
              <span>💬 كلمني على واتساب</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 text-center"
            >
              <div className="text-sm">أو املأ الفورم تحت</div>
              <div className="text-lg font-semibold">📝 وهرد عليك في أقرب وقت</div>
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
              <span>رد سريع خلال ساعة</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>متاحة 7 أيام في الأسبوع</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>استشارة أولية مجانية</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}