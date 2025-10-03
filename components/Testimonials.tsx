'use client'

import { motion } from 'framer-motion'
import { StarIcon, HeartIcon, SparklesIcon } from '@heroicons/react/20/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    name: 'سارة أحمد',
    role: 'طالبة كلية التجارة',
    age: '21 سنة',
    content: 'كنت تايهة خالص ومش عارفة أعمل إيه بعد التخرج. جهاد ساعدتني أكتشف إني بحب التسويق الرقمي وحالياً بشتغل في شركة كبيرة والحمد لله! 🚀',
    rating: 5,
    image: '/testimonials/sarah.jpg',
    color: 'from-cyan-400 to-sky-400',
    emoji: '🌟',
    achievement: 'حصلت على وظيفة أحلامها'
  },
  {
    id: 2,
    name: 'محمد علي',
    role: 'خريج هندسة',
    age: '24 سنة', 
    content: 'البرنامج غير حياتي بجد! اتعلمت إزاي أحدد أهدافي وأعمل خطة واضحة. دلوقتي عندي مشروعي الخاص وبكسب كويس جداً. شكراً جهاد! 💪',
    rating: 5,
    image: '/testimonials/mohamed.jpg',
    color: 'from-blue-400 to-cyan-400',
    emoji: '🎯',
    achievement: 'أسس مشروعه الخاص'
  },
  {
    id: 3,
    name: 'فاطمة حسن',
    role: 'طالبة ثانوية عامة',
    age: '18 سنة',
    content: 'كنت خايفة من اختيار الكلية وحاسة إني مش هعرف أختار صح. جهاد وضحتلي كل حاجة وساعدتني أختار طب الأسنان وأنا مبسوطة جداً! 😍',
    rating: 5,
    image: '/testimonials/fatima.jpg',
    color: 'from-blue-400 to-cyan-400',
    emoji: '🎓',
    achievement: 'اختارت تخصصها بثقة'
  },
  {
    id: 4,
    name: 'أحمد محمود',
    role: 'طالب إعلام',
    age: '22 سنة',
    content: 'جلسات جهاد خلتني أفهم نفسي أكتر وأعرف نقاط قوتي. دلوقتي بشتغل مذيع في راديو مشهور وحققت حلمي اللي كان مستحيل! 🎤',
    rating: 5,
    image: '/testimonials/ahmed.jpg',
    color: 'from-green-400 to-emerald-400',
    emoji: '🎤',
    achievement: 'حقق حلمه في الإذاعة'
  },
  {
    id: 5,
    name: 'نورا سامي',
    role: 'خريجة حديثة',
    age: '23 سنة',
    content: 'كان عندي مشاكل في الثقة بالنفس وخوف من المقابلات. جهاد ساعدتني أتغلب على ده كله ودلوقتي شغالة في بنك كبير! 🏦',
    rating: 5,
    image: '/testimonials/nora.jpg',
    color: 'from-yellow-400 to-orange-400',
    emoji: '💼',
    achievement: 'تغلبت على الخوف ونجحت'
  },
  {
    id: 6,
    name: 'كريم أشرف',
    role: 'طالب حاسبات',
    age: '20 سنة',
    content: 'مكنتش عارف أركز في دراستي وكان عندي مشاكل في إدارة الوقت. بعد البرنامج بقيت من أوائل الدفعة! 📚',
    rating: 5,
    image: '/testimonials/karim.jpg',
    color: 'from-green-400 to-lime-400',
    emoji: '📚',
    achievement: 'أصبح من الأوائل'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HeartIcon className="w-8 h-8 text-red-500" />
            <span className="text-blue-600 font-semibold text-lg">آراء عملائنا</span>
            <HeartIcon className="w-8 h-8 text-red-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">قصص نجاح حقيقية</span>
            <br />
            <span className="text-gray-700">من طلابنا المميزين ✨</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            شوف بنفسك إزاي غيرنا حياة أكتر من 500 طالب وطالبة
            <br />
            <span className="text-blue-600 font-semibold">🎯 وإنت كمان تقدر تكون واحد منهم!</span>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Quote icon */}
              <div className="absolute top-4 left-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Achievement badge */}
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold"
                >
                  {testimonial.emoji} نجح معانا
                </motion.div>
              </div>
              
              <div className="relative p-8 pt-16">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                
                {/* Achievement */}
                <div className={`bg-gradient-to-r ${testimonial.color} bg-opacity-10 rounded-xl p-3 mb-6`}>
                  <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-blue-500" />
                    {testimonial.achievement}
                  </p>
                </div>
                
                {/* Profile */}
                <div className="flex items-center">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </motion.div>
                  <div className="mr-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 font-semibold">{testimonial.age}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "طالب نجح معانا", icon: "🎓" },
                { number: "98%", label: "معدل رضا العملاء", icon: "⭐" },
                { number: "24/7", label: "دعم مستمر", icon: "💬" },
                { number: "100%", label: "ضمان النتائج", icon: "🎯" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-4">
                <strong>🔥 عرض خاص:</strong> احجز جلستك الأولى مجاناً واكتشف إمكانياتك الحقيقية!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300">
                  احجز جلستك المجانية الآن 🚀
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}