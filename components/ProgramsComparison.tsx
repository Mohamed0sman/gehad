'use client'

import { motion } from 'framer-motion'
import { 
  CheckIcon,
  XMarkIcon,
  SparklesIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const comparisonData = [
  {
    feature: 'عدد الجلسات',
    individual: '4 جلسات',
    group: '2 جلسات',
    comprehensive: '8 جلسات',
    academic: '3 جلسات'
  },
  {
    feature: 'المدة الزمنية',
    individual: '4 أسابيع',
    group: '6 ساعات',
    comprehensive: '8 أسابيع',
    academic: '3 أسابيع'
  },
  {
    feature: 'تقييم شخصي شامل',
    individual: true,
    group: false,
    comprehensive: true,
    academic: true
  },
  {
    feature: 'خطة عمل مخصصة',
    individual: true,
    group: false,
    comprehensive: true,
    academic: true
  },
  {
    feature: 'متابعة شخصية',
    individual: true,
    group: false,
    comprehensive: true,
    academic: true
  },
  {
    feature: 'أنشطة جماعية',
    individual: false,
    group: true,
    comprehensive: false,
    academic: false
  },
  {
    feature: 'شهادة معتمدة',
    individual: true,
    group: true,
    comprehensive: true,
    academic: true
  },
  {
    feature: 'مواد تدريبية',
    individual: true,
    group: true,
    comprehensive: true,
    academic: true
  },
  {
    feature: 'دعم بعد البرنامج',
    individual: '1 شهر',
    group: '2 أسابيع',
    comprehensive: '3 أشهر',
    academic: '1 شهر'
  },
  {
    feature: 'السعر',
    individual: '800 جنيه',
    group: '300 جنيه',
    comprehensive: '1200 جنيه',
    academic: '600 جنيه'
  }
]

const programs = [
  {
    name: 'التوجيه الشخصي',
    key: 'individual',
    color: 'from-blue-500 to-cyan-500',
    popular: true,
    emoji: '🎯'
  },
  {
    name: 'ورش جماعية',
    key: 'group',
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    emoji: '👥'
  },
  {
    name: 'اكتشاف الذات',
    key: 'comprehensive',
    color: 'from-yellow-500 to-orange-500',
    popular: false,
    emoji: '💡'
  },
  {
    name: 'الأداء الأكاديمي',
    key: 'academic',
    color: 'from-green-500 to-emerald-500',
    popular: false,
    emoji: '📚'
  }
]

export default function ProgramsComparison() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
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
            <TrophyIcon className="w-8 h-8 text-lime-500" />
            <span className="text-blue-600 font-semibold text-lg">مقارنة البرامج</span>
            <TrophyIcon className="w-8 h-8 text-lime-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">قارن واختار</span>
            <br />
            <span className="text-gray-700">الأنسب ليك 🤔</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            مقارنة سريعة بين البرامج الأساسية علشان تختار اللي يناسبك
            <br />
            <span className="text-blue-600 font-semibold">✨ كل برنامج له مميزاته الخاصة</span>
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
            <div className="grid grid-cols-5 gap-4">
              <div className="text-white font-bold text-lg">المميزات</div>
              {programs.map((program, index) => (
                <motion.div
                  key={program.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {program.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"
                      >
                        الأشهر
                      </motion.div>
                    </div>
                  )}
                  <div className="text-3xl mb-2">{program.emoji}</div>
                  <div className="text-white font-semibold text-sm">{program.name}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="p-6">
            {comparisonData.map((row, rowIndex) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.05 }}
                viewport={{ once: true }}
                className={`grid grid-cols-5 gap-4 py-4 border-b border-gray-100 last:border-b-0 ${
                  rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } rounded-lg mb-2`}
              >
                <div className="font-semibold text-gray-900 flex items-center">
                  {row.feature}
                </div>
                
                {programs.map((program) => (
                  <div key={program.key} className="text-center flex items-center justify-center">
                    {typeof row[program.key as keyof typeof row] === 'boolean' ? (
                      row[program.key as keyof typeof row] ? (
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <CheckIcon className="w-4 h-4 text-white" />
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                        >
                          <XMarkIcon className="w-4 h-4 text-white" />
                        </motion.div>
                      )
                    ) : (
                      <span className="text-gray-700 font-medium text-sm">
                        {row[program.key as keyof typeof row]}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🎯 جاهز تبدأ رحلتك؟
              </h3>
              <p className="text-gray-600">
                اختار البرنامج اللي شايف إنه مناسب ليك واحجز مكانك دلوقتي
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {programs.map((program, index) => (
                <motion.div
                  key={program.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative bg-gradient-to-br ${program.color} rounded-2xl p-4 text-white text-center cursor-pointer group overflow-hidden`}
                >
                  {program.popular && (
                    <div className="absolute top-2 right-2">
                      <SparklesIcon className="w-5 h-5 text-yellow-300" />
                    </div>
                  )}
                  
                  <div className="text-3xl mb-2">{program.emoji}</div>
                  <div className="font-bold text-sm mb-2">{program.name}</div>
                  <div className="text-xs opacity-90 mb-3">
                    {comparisonData.find(row => row.feature === 'السعر')?.[program.key as keyof typeof comparisonData[0]]}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors"
                  >
                    احجز الآن
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              محتاج مساعدة في الاختيار؟
            </h4>
            <p className="text-gray-600 mb-6">
              لو مش متأكد من البرنامج المناسب ليك، تقدر تتكلم معايا مجاناً وهساعدك تختار
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              كلمني دلوقتي 📞
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}