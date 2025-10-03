'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  SparklesIcon, 
  AcademicCapIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/solid'

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-sky-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 rounded-full border-2 border-yellow-300/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main image container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-8 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center">
                  <span className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">ج</span>
                </div>
                
                {/* Floating achievements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-full shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrophyIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-full shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -right-8 bg-cyan-500 p-3 rounded-full shadow-lg"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <HeartIcon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <SparklesIcon className="w-8 h-8 text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-xl">من أنا</span>
              <SparklesIcon className="w-8 h-8 text-yellow-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                جهاد أشرف
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-8"
            >
              🎯 مدربة التوجيه المهني المعتمدة
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="space-y-6 text-lg md:text-xl leading-relaxed mb-8"
            >
              <p>
                <strong className="text-yellow-300">مرحباً بيك! 👋</strong> أنا جهاد، وأنا هنا علشان أساعدك تكتشف شغفك الحقيقي وتحقق أحلامك المهنية.
              </p>
              
              <p>
                بعد ما شوفت كتير من الطلاب تايهين ومش عارفين يختاروا مسارهم المهني، قررت أتخصص في التوجيه النفسي والمهني علشان أكون السبب في تغيير حياة الناس للأحسن.
              </p>
              
              <p className="text-cyan-200">
                <strong>✨ رسالتي:</strong> إن كل شخص عنده موهبة وإمكانيات مميزة، وأنا هنا علشان أساعدك تكتشفها وتستغلها في بناء مستقبل مشرق.
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {[
                { number: "500+", label: "طالب نجح معايا", icon: "🎓" },
                { number: "3+", label: "سنوات خبرة", icon: "💼" },
                { number: "NCDA", label: "شهادة معتمدة", icon: "🏆" },
                { number: "98%", label: "معدل رضا", icon: "⭐" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-yellow-300">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                🚀 احجز جلستك المجانية
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                📞 تواصل معايا
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}