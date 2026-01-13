'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const resources = [
  {
    id: 1,
    titleEn: 'Comprehensive University Major Selection Guide',
    titleAr: 'دليل اختيار التخصص الجامعي الشامل',
    descriptionEn: 'A detailed guide to help choose the right university major for your personality and career goals, with assessment tests.',
    descriptionAr: 'دليل مفصل يساعدك في اختيار التخصص الجامعي المناسب لشخصيتك وأهدافك المهنية مع اختبارات تقييم',
    categoryEn: 'Career Guidance',
    categoryAr: 'التوجيه المهني',
    type: 'PDF',
    pages: 45,
    downloads: 2540,
    rating: 4.9,
    size: '2.3 MB',
    featured: true,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '🎓'
  },
  {
    id: 2,
    titleEn: 'Professional CV Template',
    titleAr: 'قالب السيرة الذاتية الاحترافي',
    descriptionEn: 'Editable professional CV template with a step-by-step guide and practical examples.',
    descriptionAr: 'قالب CV احترافي قابل للتعديل مع دليل كتابة السيرة الذاتية خطوة بخطوة وأمثلة عملية',
    categoryEn: 'CV Templates',
    categoryAr: 'قوالب السيرة الذاتية',
    type: 'Word + PDF',
    pages: 12,
    downloads: 1890,
    rating: 4.8,
    size: '1.8 MB',
    featured: true,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '📄'
  },
  {
    id: 3,
    titleEn: 'Career Goal Setting Worksheet',
    titleAr: 'ورقة عمل تحديد الأهداف المهنية',
    descriptionEn: 'Interactive worksheet to set short- and long-term career goals with a clear action plan.',
    descriptionAr: 'ورقة عمل تفاعلية تساعدك في تحديد أهدافك المهنية قصيرة وطويلة المدى مع خطة عمل واضحة',
    categoryEn: 'Personal Development',
    categoryAr: 'التطوير الشخصي',
    type: 'PDF',
    pages: 8,
    downloads: 1234,
    rating: 4.7,
    size: '1.2 MB',
    featured: false,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '🎯'
  },
  {
    id: 4,
    titleEn: 'Successful Job Interview Guide',
    titleAr: 'دليل المقابلات الشخصية الناجحة',
    descriptionEn: 'A comprehensive preparation guide with common questions, model answers, and practical tips.',
    descriptionAr: 'دليل شامل للتحضير للمقابلات الشخصية مع أسئلة شائعة وإجابات نموذجية ونصائح عملية',
    categoryEn: 'Job Search',
    categoryAr: 'البحث عن وظيفة',
    type: 'PDF',
    pages: 32,
    downloads: 987,
    rating: 4.6,
    size: '2.1 MB',
    featured: false,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '💼'
  },
  {
    id: 5,
    titleEn: 'Personal Skills Assessment',
    titleAr: 'اختبار تقييم المهارات الشخصية',
    descriptionEn: 'Comprehensive test to assess personal and professional skills with detailed report and development tips.',
    descriptionAr: 'اختبار شامل لتقييم مهاراتك الشخصية والمهنية مع تقرير مفصل ونصائح للتطوير',
    categoryEn: 'Skills Assessment',
    categoryAr: 'تقييم المهارات',
    typeEn: 'Interactive PDF',
    typeAr: 'PDF تفاعلي',
    pages: 15,
    downloads: 756,
    rating: 4.8,
    size: '1.5 MB',
    featured: true,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '📊'
  },
  {
    id: 6,
    titleEn: 'Personal Professional Development Plan',
    titleAr: 'خطة التطوير المهني الشخصية',
    descriptionEn: 'Customizable professional development plan template with timeline and success indicators.',
    descriptionAr: 'قالب خطة تطوير مهني شخصية قابل للتخصيص مع جدول زمني ومؤشرات قياس النجاح',
    categoryEn: 'Personal Development',
    categoryAr: 'التطوير الشخصي',
    type: 'Excel + PDF',
    pages: 20,
    downloads: 654,
    rating: 4.5,
    size: '1.9 MB',
    featured: false,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '📈'
  },
  {
    id: 7,
    titleEn: 'Effective Communication Skills Guide',
    titleAr: 'دليل مهارات التواصل الفعال',
    descriptionEn: 'Practical guide to develop communication, presentation, and public speaking skills with exercises.',
    descriptionAr: 'دليل عملي لتطوير مهارات التواصل والعرض والتقديم مع تمارين تطبيقية',
    categoryEn: 'Soft Skills',
    categoryAr: 'المهارات الناعمة',
    type: 'PDF',
    pages: 28,
    downloads: 543,
    rating: 4.7,
    size: '2.0 MB',
    featured: false,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '🗣️'
  },
  {
    id: 8,
    titleEn: 'Time Management Worksheet for Students',
    titleAr: 'ورقة عمل إدارة الوقت للطلاب',
    descriptionEn: 'Practical worksheet to learn effective time management with schedules and proven techniques.',
    descriptionAr: 'ورقة عمل عملية لتعلم إدارة الوقت بفعالية مع جداول وتقنيات مجربة',
    categoryEn: 'Personal Development',
    categoryAr: 'التطوير الشخصي',
    type: 'PDF',
    pages: 10,
    downloads: 432,
    rating: 4.4,
    size: '1.1 MB',
    featured: false,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '⏰'
  },
  {
    id: 9,
    titleEn: 'Professional Networking Guide',
    titleAr: 'دليل بناء الشبكة المهنية',
    descriptionEn: 'Practical strategies to build a strong professional network and leverage it for career growth.',
    descriptionAr: 'استراتيجيات عملية لبناء شبكة مهنية قوية والاستفادة منها في تطوير المسار المهني',
    categoryEn: 'Job Search',
    categoryAr: 'البحث عن وظيفة',
    type: 'PDF',
    pages: 18,
    downloads: 321,
    rating: 4.6,
    size: '1.4 MB',
    featured: false,
    free: true,
    color: 'from-slate-700 to-slate-500',
    iconChar: '🤝'
  }
]

export default function ResourcesGrid() {
  const { language } = useLanguage()
  const featuredResources = resources.filter(resource => resource.featured)
  const regularResources = resources.filter(resource => !resource.featured)

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 via-emerald-50 to-teal-50 relative overflow-hidden">
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
              <span className="text-3xl text-yellow-500">⭐</span>
              <span className="text-emerald-600 font-semibold text-lg font-heading">Featured Resources</span>
              <span className="text-3xl text-yellow-500">⭐</span>
            </div>

            <h2 className="text-h2 font-bold text-neutral-900 mb-4 font-heading">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Most Downloaded</span>
              <span className="text-neutral-700"> This Month 🔥</span>
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
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 font-primary">
                    ⭐ Featured
                  </span>
                </div>

                {/* Free badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold font-primary">
                    🆓 Free
                  </span>
                </div>

                {/* Header with icon */}
                <div className={`relative h-32 bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                  <div className="text-6xl">{resource.iconChar}</div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>

                <div className="p-8">
                  {/* Category and meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold font-primary">
                      {language === 'ar' ? (resource.categoryAr ?? resource.category) : (resource.categoryEn ?? resource.category)}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-neutral-500 font-primary">
                      <div className="flex items-center gap-1">
                        <span className="text-lg">👁️</span>
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-lg text-yellow-400">⭐</span>
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors font-heading">
                    {language === 'ar' ? (resource.titleAr ?? resource.titleEn ?? resource.title) : (resource.titleEn ?? resource.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed font-primary">
                    {language === 'ar' ? (resource.descriptionAr ?? resource.descriptionEn ?? resource.description) : (resource.descriptionEn ?? resource.description)}
                  </p>

                  {/* Resource details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-neutral-600 font-primary">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">⬇️</span>
                      <span>{language === 'ar' ? (resource.typeAr ?? resource.type) : (resource.typeEn ?? resource.type)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">⏱️</span>
                      <span>{resource.pages} {language === 'ar' ? 'صفحات' : 'pages'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{resource.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">❤️</span>
                      <span>{language === 'ar' ? 'جودة عالية' : 'High quality'}</span>
                    </div>
                  </div>

                  {/* Download button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${resource.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-heading`}
                  >
                    <span className="text-xl">📥</span>
                    <span>{language === 'ar' ? 'تحميل مجاني الآن' : 'Download Free Now'}</span>
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
            <h2 className="text-h2 font-bold text-neutral-900 mb-4 font-heading">
              <span className="gradient-text">All Resources</span> 📚
            </h2>
            <p className="text-lg text-neutral-600 font-primary">
              Explore more useful resources across different topics
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
                  <div className="text-3xl">{resource.iconChar}</div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white/20 text-white px-2 py-1 rounded-lg text-xs font-semibold font-primary">
                      {language === 'ar' ? '🆓 مجاني' : '🆓 Free'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category */}
                  <span className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-lg text-xs font-semibold mb-3 inline-block font-primary">
                    {resource.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 font-heading">
                    {language === 'ar' ? (resource.titleAr ?? resource.titleEn ?? resource.title) : (resource.titleEn ?? resource.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed line-clamp-3 font-primary">
                    {language === 'ar' ? (resource.descriptionAr ?? resource.descriptionEn ?? resource.description) : (resource.descriptionEn ?? resource.description)}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-4 font-primary">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-xs">⬇️</span>
                        <span>{language === 'ar' ? (resource.typeAr ?? resource.type) : (resource.typeEn ?? resource.type)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">👁️</span>
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-yellow-400">⭐</span>
                      <span>{resource.rating}</span>
                    </div>
                  </div>

                  {/* Download button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${resource.color} text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-heading`}
                  >
                    <span className="text-lg">📥</span>
                    <span>{language === 'ar' ? 'تحميل الآن' : 'Download Now'}</span>
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
            <h3 className="text-3xl font-bold mb-4 font-heading">
              {language === 'ar' ? 'هل تريد تحديثات عن الموارد الجديدة؟' : 'Want updates on new resources?'}
            </h3>
            <p className="text-xl mb-8 text-white/90 font-primary">
              {language === 'ar' ? 'اشترك في النشرة البريدية ليصلك جديد الموارد' : 'Subscribe to our newsletter and get new resources delivered to your inbox'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white font-primary"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-neutral-100 transition-colors font-heading">
                {language === 'ar' ? 'اشترك الآن 🚀' : 'Subscribe Now 🚀'}
              </button>
            </div>

            <p className="text-sm text-white/80 mt-4 font-primary">
              {language === 'ar' ? 'مجاني تماما • بدون رسائل مزعجة • إلغاء الاشتراك في أي وقت' : 'Completely free • No spam • Unsubscribe anytime'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}