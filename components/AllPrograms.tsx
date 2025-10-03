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
  TrophyIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const allPrograms = [
  {
    id: 1,
    title: 'التوجيه المهني الشخصي',
    subtitle: 'اكتشف شغفك الحقيقي',
    description: 'جلسات فردية مخصصة لاكتشاف مواهبك وتحديد مسارك المهني المناسب مع خطة عمل واضحة ومتابعة شخصية',
    icon: AcademicCapIcon,
    duration: '4 جلسات',
    price: '800 جنيه',
    originalPrice: '1200 جنيه',
    sessions: 4,
    level: 'مبتدئ - متقدم',
    features: [
      'تقييم شخصي شامل للمهارات والميول',
      'خطة مهنية مخصصة لمدة 6 أشهر',
      'متابعة شخصية لمدة شهر كامل',
      'جلسة مجانية إضافية للمراجعة',
      'مواد تدريبية وأدوات تقييم',
      'شهادة إتمام معتمدة'
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    popular: true,
    emoji: '🎯',
    category: 'فردي',
    rating: 4.9,
    studentsCount: 150
  },
  {
    id: 2,
    title: 'ورش العمل الجماعية',
    subtitle: 'تعلم مع أصدقائك',
    description: 'ورش تفاعلية لتطوير المهارات الشخصية والمهنية في بيئة جماعية محفزة ومليانة طاقة إيجابية وتفاعل',
    icon: UserGroupIcon,
    duration: '6 ساعات',
    price: '300 جنيه',
    originalPrice: '500 جنيه',
    sessions: 2,
    level: 'جميع المستويات',
    features: [
      'مجموعات صغيرة (8 أشخاص فقط)',
      'أنشطة تفاعلية وألعاب تعليمية',
      'شهادة حضور معتمدة',
      'مواد تدريبية مجانية',
      'شبكة تواصل مع المشاركين',
      'جلسة متابعة جماعية مجانية'
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    popular: false,
    emoji: '👥',
    category: 'جماعي',
    rating: 4.8,
    studentsCount: 200
  },
  {
    id: 3,
    title: 'برنامج اكتشاف الذات',
    subtitle: 'رحلة التغيير الحقيقي',
    description: 'رحلة شاملة لفهم شخصيتك وقدراتك وتحديد أهدافك الحياتية والمهنية مع تطوير خطة عمل متكاملة للنجاح',
    icon: LightBulbIcon,
    duration: '8 أسابيع',
    price: '1200 جنيه',
    originalPrice: '1800 جنيه',
    sessions: 8,
    level: 'متوسط - متقدم',
    features: [
      'تقييمات متخصصة متعددة الأبعاد',
      'خطة عمل شخصية مفصلة',
      'جلسات متابعة أسبوعية',
      'مجتمع داعم من المتدربين',
      'كتاب إلكتروني حصري',
      'ضمان استرداد المال خلال أسبوع'
    ],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    popular: false,
    emoji: '💡',
    category: 'شامل',
    rating: 4.9,
    studentsCount: 80
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
    sessions: 3,
    level: 'طلاب',
    features: [
      'تحليل نمط التعلم الشخصي',
      'خطة دراسية مخصصة ومرنة',
      'تقنيات إدارة الوقت المتقدمة',
      'استراتيجيات مواجهة الامتحانات',
      'تقنيات التركيز والذاكرة',
      'متابعة الأداء الأكاديمي'
    ],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    popular: false,
    emoji: '📚',
    category: 'أكاديمي',
    rating: 4.7,
    studentsCount: 120
  },
  {
    id: 5,
    title: 'برنامج ريادة الأعمال للشباب',
    subtitle: 'ابدأ مشروعك الخاص',
    description: 'برنامج شامل لتعليم أساسيات ريادة الأعمال وتطوير الأفكار التجارية وتحويلها إلى مشاريع ناجحة ومربحة',
    icon: TrophyIcon,
    duration: '6 أسابيع',
    price: '1000 جنيه',
    originalPrice: '1500 جنيه',
    sessions: 6,
    level: 'متوسط',
    features: [
      'تطوير فكرة المشروع من الصفر',
      'دراسة جدوى مبسطة',
      'خطة عمل تفصيلية',
      'استراتيجيات التسويق الرقمي',
      'إدارة الأموال والميزانية',
      'شبكة رواد أعمال للتواصل'
    ],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
    popular: true,
    emoji: '🚀',
    category: 'ريادة',
    rating: 4.8,
    studentsCount: 60
  },
  {
    id: 6,
    title: 'تطوير المهارات الشخصية',
    subtitle: 'كن النسخة الأفضل من نفسك',
    description: 'برنامج متكامل لتطوير المهارات الشخصية والاجتماعية مثل التواصل والقيادة وإدارة الوقت والثقة بالنفس',
    icon: HeartIcon,
    duration: '4 أسابيع',
    price: '700 جنيه',
    originalPrice: '1000 جنيه',
    sessions: 4,
    level: 'جميع المستويات',
    features: [
      'تطوير مهارات التواصل الفعال',
      'بناء الثقة بالنفس',
      'مهارات القيادة والتأثير',
      'إدارة الوقت والأولويات',
      'التعامل مع الضغوط',
      'تقنيات العرض والتقديم'
    ],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    popular: false,
    emoji: '💪',
    category: 'مهارات',
    rating: 4.6,
    studentsCount: 90
  }
]

const categories = ['الكل', 'فردي', 'جماعي', 'شامل', 'أكاديمي', 'ريادة', 'مهارات']

export default function AllPrograms() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
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
            <SparklesIcon className="w-8 h-8 text-purple-500" />
            <span className="text-purple-600 font-semibold text-lg">جميع البرامج</span>
            <SparklesIcon className="w-8 h-8 text-purple-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">اختار البرنامج</span>
            <br />
            <span className="text-gray-700">اللي يناسبك 🎯</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            برامج متنوعة تناسب كل الاحتياجات والمستويات
            <br />
            <span className="text-purple-600 font-semibold">✨ كل برنامج مصمم بعناية لضمان نجاحك</span>
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {allPrograms.map((program, index) => (
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

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`bg-gradient-to-r ${program.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {program.category}
                </span>
              </div>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${program.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <program.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-2xl mb-1">{program.emoji}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{program.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{program.studentsCount} طالب</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{program.title}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">{program.subtitle}</p>
                
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{program.description}</p>
                
                {/* Program details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <ClockIcon className="w-4 h-4 text-purple-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <AcademicCapIcon className="w-4 h-4 text-blue-500" />
                    <span>{program.sessions} جلسات</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <TrophyIcon className="w-4 h-4 text-yellow-500" />
                    <span>{program.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    <span>شهادة معتمدة</span>
                  </div>
                </div>
                
                {/* Features - show first 3 */}
                <ul className="space-y-2 mb-6">
                  {program.features.slice(0, 3).map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-xs text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${program.color} rounded-full ml-2`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                  {program.features.length > 3 && (
                    <li className="text-xs text-purple-600 font-semibold">
                      +{program.features.length - 3} مميزات أخرى
                    </li>
                  )}
                </ul>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{program.price}</span>
                      <span className="text-sm text-gray-500 line-through">{program.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-600 font-semibold">
                      وفر {parseInt(program.originalPrice) - parseInt(program.price)} جنيه
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/programs/${program.id}`}
                        className="px-3 py-2 border border-purple-200 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-xs"
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
                        className={`px-4 py-2 bg-gradient-to-r ${program.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-xs flex items-center gap-1`}
                      >
                        <HeartIcon className="w-3 h-3" />
                        احجز
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
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🤔 محتار تختار إيه؟
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              احجز استشارة مجانية معايا وهساعدك تختار البرنامج المناسب ليك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300"
                >
                  استشارة مجانية 💬
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://wa.me/201234567890"
                  target="_blank"
                  className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-colors"
                >
                  واتساب مباشر 📱
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}