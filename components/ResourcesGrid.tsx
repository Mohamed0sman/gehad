'use client'

import { motion } from 'framer-motion'
import { 
  DocumentArrowDownIcon,
  EyeIcon,
  HeartIcon,
  StarIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const resources = [
  {
    id: 1,
    title: 'دليل اختيار التخصص الجامعي الشامل',
    description: 'دليل مفصل يساعدك في اختيار التخصص الجامعي المناسب لشخصيتك وأهدافك المهنية مع اختبارات تقييم',
    category: 'التوجيه المهني',
    type: 'PDF',
    pages: 45,
    downloads: 2540,
    rating: 4.9,
    size: '2.3 MB',
    featured: true,
    free: true,
    color: 'from-blue-500 to-cyan-500',
    icon: '🎓'
  },
  {
    id: 2,
    title: 'قالب السيرة الذاتية الاحترافي',
    description: 'قالب CV احترافي قابل للتعديل مع دليل كتابة السيرة الذاتية خطوة بخطوة وأمثلة عملية',
    category: 'قوالب السيرة الذاتية',
    type: 'Word + PDF',
    pages: 12,
    downloads: 1890,
    rating: 4.8,
    size: '1.8 MB',
    featured: true,
    free: true,
    color: 'from-green-500 to-emerald-500',
    icon: '📄'
  },
  {
    id: 3,
    title: 'ورقة عمل تحديد الأهداف المهنية',
    description: 'ورقة عمل تفاعلية تساعدك في تحديد أهدافك المهنية قصيرة وطويلة المدى مع خطة عمل واضحة',
    category: 'التطوير الشخصي',
    type: 'PDF',
    pages: 8,
    downloads: 1234,
    rating: 4.7,
    size: '1.2 MB',
    featured: false,
    free: true,
    color: 'from-blue-500 to-cyan-500',
    icon: '🎯'
  },
  {
    id: 4,
    title: 'دليل المقابلات الشخصية الناجحة',
    description: 'دليل شامل للتحضير للمقابلات الشخصية مع أسئلة شائعة وإجابات نموذجية ونصائح عملية',
    category: 'البحث عن وظيفة',
    type: 'PDF',
    pages: 32,
    downloads: 987,
    rating: 4.6,
    size: '2.1 MB',
    featured: false,
    free: true,
    color: 'from-yellow-500 to-orange-500',
    icon: '💼'
  },
  {
    id: 5,
    title: 'اختبار تقييم المهارات الشخصية',
    description: 'اختبار شامل لتقييم مهاراتك الشخصية والمهنية مع تقرير مفصل ونصائح للتطوير',
    category: 'تقييم المهارات',
    type: 'PDF تفاعلي',
    pages: 15,
    downloads: 756,
    rating: 4.8,
    size: '1.5 MB',
    featured: true,
    free: true,
    color: 'from-sky-500 to-blue-500',
    icon: '📊'
  },
  {
    id: 6,
    title: 'خطة التطوير المهني الشخصية',
    description: 'قالب خطة تطوير مهني شخصية قابل للتخصيص مع جدول زمني ومؤشرات قياس النجاح',
    category: 'التطوير الشخصي',
    type: 'Excel + PDF',
    pages: 20,
    downloads: 654,
    rating: 4.5,
    size: '1.9 MB',
    featured: false,
    free: true,
    color: 'from-teal-500 to-cyan-500',
    icon: '📈'
  },
  {
    id: 7,
    title: 'دليل مهارات التواصل الفعال',
    description: 'دليل عملي لتطوير مهارات التواصل والعرض والتقديم مع تمارين تطبيقية',
    category: 'المهارات الناعمة',
    type: 'PDF',
    pages: 28,
    downloads: 543,
    rating: 4.7,
    size: '2.0 MB',
    featured: false,
    free: true,
    color: 'from-cyan-500 to-sky-500',
    icon: '🗣️'
  },
  {
    id: 8,
    title: 'ورقة عمل إدارة الوقت للطلاب',
    description: 'ورقة عمل عملية لتعلم إدارة الوقت بفعالية مع جداول وتقنيات مجربة',
    category: 'التطوير الشخصي',
    type: 'PDF',
    pages: 10,
    downloads: 432,
    rating: 4.4,
    size: '1.1 MB',
    featured: false,
    free: true,
    color: 'from-green-500 to-lime-500',
    icon: '⏰'
  },
  {
    id: 9,
    title: 'دليل بناء الشبكة المهنية',
    description: 'استراتيجيات عملية لبناء شبكة مهنية قوية والاستفادة منها في تطوير المسار المهني',
    category: 'البحث عن وظيفة',
    type: 'PDF',
    pages: 18,
    downloads: 321,
    rating: 4.6,
    size: '1.4 MB',
    featured: false,
    free: true,
    color: 'from-blue-500 to-indigo-500',
    icon: '🤝'
  }
]

export default function ResourcesGrid() {
  const featuredResources = resources.filter(resource => resource.featured)
  const regularResources = resources.filter(resource => !resource.featured)

  return (
    <section className="py-24 bg-gradient-to-br from-white via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Featured Resources */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <StarIcon className="w-8 h-8 text-yellow-500" />
              <span className="text-emerald-600 font-semibold text-lg">الموارد المميزة</span>
              <StarIcon className="w-8 h-8 text-yellow-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">الأكثر تحميلاً</span>
              <span className="text-gray-700"> هذا الشهر 🔥</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift"
              >
                {/* Featured badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    ⭐ مميز
                  </span>
                </div>

                {/* Free badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🆓 مجاني
                  </span>
                </div>

                {/* Header with icon */}
                <div className={`relative h-32 bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                  <div className="text-6xl">{resource.icon}</div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>

                <div className="p-8">
                  {/* Category and meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {resource.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Resource details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <DocumentArrowDownIcon className="w-4 h-4 text-emerald-500" />
                      <span>{resource.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-blue-500" />
                      <span>{resource.pages} صفحة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>{resource.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HeartIcon className="w-4 h-4 text-red-500" />
                      <span>جودة عالية</span>
                    </div>
                  </div>

                  {/* Download button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${resource.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <DocumentArrowDownIcon className="w-5 h-5" />
                    <span>حمل مجاناً الآن</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regular Resources */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">جميع الموارد</span> 📚
            </h2>
            <p className="text-lg text-gray-600">
              اكتشف المزيد من الموارد المفيدة في مختلف المجالات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift"
              >
                {/* Header */}
                <div className={`relative h-24 bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                  <div className="text-3xl">{resource.icon}</div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white/20 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      🆓 مجاني
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category */}
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-semibold mb-3 inline-block">
                    {resource.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {resource.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <DocumentArrowDownIcon className="w-3 h-3" />
                        <span>{resource.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-3 h-3" />
                        <span>{resource.downloads}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>

                  {/* Download button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${resource.color} text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <DocumentArrowDownIcon className="w-4 h-4" />
                    <span>حمل الآن</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-3xl font-bold mb-4">
              عايز تعرف بالموارد الجديدة؟
            </h3>
            <p className="text-xl mb-8 text-white/90">
              اشترك في القائمة البريدية وهنبعتلك كل مورد جديد أول بأول
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل إيميلك هنا"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                اشترك الآن 🚀
              </button>
            </div>
            
            <p className="text-sm text-white/80 mt-4">
              مجاني تماماً • بدون إزعاج • يمكنك إلغاء الاشتراك في أي وقت
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}