'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  ChartBarIcon,
  SparklesIcon,
  FireIcon,
  HeartIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const programs = [
  {
    id: 1,
    title: 'التوجيه المهني الشخصي',
    subtitle: 'اكتشف شغفك الحقيقي',
    description: 'جلسات فردية مخصصة لاكتشاف مواهبك وتحديد مسارك المهني المناسب مع خطة عمل واضحة',
    icon: AcademicCapIcon,
    duration: '4 جلسات',
    price: '800 جنيه',
    originalPrice: '1200 جنيه',
    features: ['تقييم شخصي شامل', 'خطة مهنية مخصصة', 'متابعة لمدة شهر', 'جلسة مجانية إضافية'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    popular: true,
    emoji: '🎯'
  },
  {
    id: 2,
    title: 'ورش العمل الجماعية',
    subtitle: 'تعلم مع أصدقائك',
    description: 'ورش تفاعلية لتطوير المهارات الشخصية والمهنية في بيئة جماعية محفزة ومليانة طاقة إيجابية',
    icon: UserGroupIcon,
    duration: '6 ساعات',
    price: '300 جنيه',
    originalPrice: '500 جنيه',
    features: ['مجموعات صغيرة (8 أشخاص)', 'أنشطة تفاعلية ممتعة', 'شهادة حضور معتمدة', 'مواد تدريبية مجانية'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    popular: false,
    emoji: '👥'
  },
  {
    id: 3,
    title: 'برنامج اكتشاف الذات',
    subtitle: 'رحلة التغيير الحقيقي',
    description: 'رحلة شاملة لفهم شخصيتك وقدراتك وتحديد أهدافك الحياتية والمهنية مع تطوير خطة عمل متكاملة',
    icon: LightBulbIcon,
    duration: '8 أسابيع',
    price: '1200 جنيه',
    originalPrice: '1800 جنيه',
    features: ['تقييمات متخصصة متعددة', 'خطة عمل شخصية مفصلة', 'جلسات متابعة أسبوعية', 'مجتمع داعم من المتدربين'],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    popular: false,
    emoji: '💡'
  },
  {
    id: 4,
    title: 'استشارات الأداء الأكاديمي',
    subtitle: 'تفوق في دراستك',
    description: 'دعم الطلاب في تحسين أدائهم الأكاديمي وتطوير استراتيجيات الدراسة الفعالة والتغلب على صعوبات التعلم',
    icon: ChartBarIcon,
    duration: '3 جلسات',
    price: '600 جنيه',
    originalPrice: '900 جنيه',
    features: ['تحليل نمط التعلم الشخصي', 'خطة دراسية مخصصة', 'تقنيات إدارة الوقت', 'استراتيجيات مواجهة الامتحانات'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    popular: false,
    emoji: '📚'
  }
]

export default function FeaturedPrograms() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
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
            <SparklesIcon className="w-8 h-8 text-blue-500" />
            <span className="text-blue-600 font-semibold text-lg">البرامج المميزة</span>
            <SparklesIcon className="w-8 h-8 text-blue-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">برامج مصممة خصيصاً</span>
            <br />
            <span className="text-gray-700">لتحقيق أحلامك 🚀</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            اختار البرنامج اللي يناسبك وابدأ رحلتك نحو مستقبل أفضل
            <br />
            <span className="text-blue-600 font-semibold">✨ كل برنامج مصمم بعناية لضمان نجاحك</span>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${program.bgColor} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
            >
              {/* Popular badge */}
              {program.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                  >
                    <FireIcon className="w-4 h-4" />
                    الأكثر طلباً
                  </motion.div>
                </div>
              )}

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${program.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <program.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-3xl mb-1">{program.emoji}</div>
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-sm text-blue-600 font-semibold">{program.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full ml-3"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">{program.price}</span>
                        <span className="text-sm text-gray-500 line-through">{program.originalPrice}</span>
                      </div>
                      <div className="text-sm text-gray-500">{program.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/programs/${program.id}`}
                        className="px-4 py-2 border-2 border-blue-200 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm"
                      >
                        التفاصيل
                      </Link>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/booking"
                        className={`px-6 py-2 bg-gradient-to-r ${program.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm flex items-center gap-2`}
                      >
                        <HeartIcon className="w-4 h-4" />
                        احجز الآن
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg">
            <TrophyIcon className="w-8 h-8 text-yellow-500" />
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">مش لاقي البرنامج المناسب؟</p>
              <p className="text-gray-600">تواصل معانا وهنصمملك برنامج خاص بيك</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                تواصل معانا 💬
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}