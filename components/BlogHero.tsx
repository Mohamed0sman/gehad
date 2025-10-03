'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon,
  BookOpenIcon,
  PencilSquareIcon,
  LightBulbIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function BlogHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-sky-900 to-cyan-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating blog icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[BookOpenIcon, PencilSquareIcon, LightBulbIcon].map((Icon, index) => (
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
              duration: 10,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + index * 25}%`,
              top: `${10 + index * 30}%`
            }}
          >
            <Icon className="w-16 h-16" />
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
            <BookOpenIcon className="w-8 h-8 text-fuchsia-400" />
            <span className="text-violet-400 font-semibold text-xl">المدونة</span>
            <BookOpenIcon className="w-8 h-8 text-fuchsia-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              مقالات ونصائح
            </span>
            <br />
            <span className="text-white">لنجاحك المهني 📚</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed text-white/90 mb-6"
          >
            اكتشف أحدث النصائح والاستراتيجيات للتطوير المهني والشخصي
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl leading-relaxed text-white/80 mb-12"
          >
            <span className="text-fuchsia-300">✨ مقالات جديدة كل أسبوع</span>
            <br />
            مكتوبة بحب وخبرة علشان تساعدك تحقق أحلامك
          </motion.p>

          {/* Blog stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: "50+", label: "مقال مفيد", icon: "📝" },
              { number: "10K+", label: "قارئ شهرياً", icon: "👥" },
              { number: "8", label: "فئات متنوعة", icon: "📂" },
              { number: "5⭐", label: "تقييم القراء", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-fuchsia-300 mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Popular topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <HeartIcon className="w-8 h-8 text-pink-400" />
              المواضيع الأكثر قراءة
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'اختيار التخصص الجامعي',
                'كتابة السيرة الذاتية',
                'مهارات المقابلات الشخصية',
                'التطوير المهني',
                'إدارة الوقت',
                'بناء الثقة بالنفس',
                'ريادة الأعمال',
                'التوازن بين العمل والحياة'
              ].map((topic, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium cursor-pointer hover:bg-white/30 transition-colors"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-fuchsia-500/25 transition-all duration-300 flex items-center gap-3"
            >
              <span>📚 اقرأ المقالات</span>
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 text-center"
            >
              <div className="text-sm">أو اشترك في النشرة</div>
              <div className="text-lg font-semibold">📧 لتصلك المقالات الجديدة</div>
            </motion.div>
          </motion.div>

          {/* Newsletter signup hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>مقالات أسبوعية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>نصائح حصرية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>بدون إزعاج</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}