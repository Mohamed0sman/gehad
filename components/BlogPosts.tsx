'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CalendarDaysIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const blogPosts = [
  {
    id: 1,
    title: 'إزاي تختار التخصص الجامعي المناسب ليك؟',
    excerpt: 'دليل شامل لمساعدتك في اختيار التخصص الجامعي اللي يناسب شخصيتك وأهدافك المهنية مع نصائح عملية من خبرتي في التدريب',
    category: 'التوجيه المهني',
    readTime: '8 دقائق',
    publishDate: '15 نوفمبر 2024',
    views: 2340,
    likes: 156,
    image: '/blog/university-choice.jpg',
    featured: true,
    tags: ['جامعة', 'تخصص', 'مستقبل'],
    author: 'جهاد أشرف'
  },
  {
    id: 2,
    title: 'أسرار كتابة السيرة الذاتية اللي تخليك تتقبل فوراً',
    excerpt: 'تعلم إزاي تكتب CV احترافي يلفت انتباه أصحاب العمل ويزود فرصك في الحصول على الوظيفة اللي بتحلم بيها',
    category: 'البحث عن وظيفة',
    readTime: '12 دقيقة',
    publishDate: '10 نوفمبر 2024',
    views: 1890,
    likes: 203,
    image: '/blog/cv-writing.jpg',
    featured: true,
    tags: ['سيرة ذاتية', 'وظيفة', 'مهارات'],
    author: 'جهاد أشرف'
  },
  {
    id: 3,
    title: '10 طرق لبناء الثقة بالنفس وتطوير شخصيتك',
    excerpt: 'اكتشف الطرق العملية والمجربة لبناء ثقتك بنفسك وتطوير شخصيتك علشان تقدر تحقق أهدافك بسهولة أكبر',
    category: 'التطوير الشخصي',
    readTime: '6 دقائق',
    publishDate: '5 نوفمبر 2024',
    views: 3120,
    likes: 287,
    image: '/blog/self-confidence.jpg',
    featured: false,
    tags: ['ثقة', 'تطوير', 'شخصية'],
    author: 'جهاد أشرف'
  },
  {
    id: 4,
    title: 'إدارة الوقت للطلاب: إزاي تنظم وقتك وتتفوق في دراستك',
    excerpt: 'نصائح عملية ومجربة لإدارة الوقت بفعالية، تنظيم الجدول الدراسي، والموازنة بين الدراسة والأنشطة الأخرى',
    category: 'إدارة الوقت',
    readTime: '10 دقائق',
    publishDate: '1 نوفمبر 2024',
    views: 1567,
    likes: 134,
    image: '/blog/time-management.jpg',
    featured: false,
    tags: ['وقت', 'دراسة', 'تنظيم'],
    author: 'جهاد أشرف'
  },
  {
    id: 5,
    title: 'التعامل مع ضغط الامتحانات والقلق الدراسي',
    excerpt: 'تقنيات فعالة للتعامل مع التوتر والقلق قبل الامتحانات، وإزاي تحافظ على هدوئك وتركيزك في أصعب الأوقات',
    category: 'الصحة النفسية',
    readTime: '7 دقائق',
    publishDate: '28 أكتوبر 2024',
    views: 2890,
    likes: 245,
    image: '/blog/exam-stress.jpg',
    featured: false,
    tags: ['امتحانات', 'قلق', 'صحة نفسية'],
    author: 'جهاد أشرف'
  },
  {
    id: 6,
    title: 'بداية مشروعك الخاص: من الفكرة للتنفيذ',
    excerpt: 'دليل شامل لبداية مشروعك الخاص، من تطوير الفكرة وعمل دراسة الجدوى لحد التنفيذ والتسويق بنجاح',
    category: 'ريادة الأعمال',
    readTime: '15 دقيقة',
    publishDate: '25 أكتوبر 2024',
    views: 1234,
    likes: 98,
    image: '/blog/entrepreneurship.jpg',
    featured: true,
    tags: ['مشروع', 'ريادة', 'أعمال'],
    author: 'جهاد أشرف'
  }
]

export default function BlogPosts() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Featured Posts Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <SparklesIcon className="w-8 h-8 text-lime-500" />
              <span className="text-blue-600 font-semibold text-lg">المقالات المميزة</span>
              <SparklesIcon className="w-8 h-8 text-lime-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">الأكثر قراءة</span>
              <span className="text-gray-700"> هذا الشهر 🔥</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <motion.article
                key={post.id}
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

                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <div className="text-6xl">📚</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>

                <div className="p-8">
                  {/* Category and meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HeartIcon className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <CalendarDaysIcon className="w-4 h-4" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read more button */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    <span>اقرأ المقال كاملاً</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Regular Posts Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">جميع المقالات</span> 📖
            </h2>
            <p className="text-lg text-gray-600">
              اكتشف المزيد من المقالات المفيدة في مختلف المجالات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift"
              >
                {/* Image placeholder */}
                <div className="relative h-40 bg-gradient-to-br from-cyan-400 to-sky-400 flex items-center justify-center">
                  <div className="text-4xl">📝</div>
                </div>

                <div className="p-6">
                  {/* Category */}
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-semibold mb-3 inline-block">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <span>{post.publishDate}</span>
                  </div>

                  {/* Read more */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center gap-1 group"
                  >
                    <span>اقرأ أكثر</span>
                    <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            📚 شوف مقالات أكتر
          </button>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-3xl font-bold mb-4">
              اشترك في النشرة الإخبارية
            </h3>
            <p className="text-xl mb-8 text-white/90">
              وصلك أحدث المقالات والنصائح المهنية مباشرة على إيميلك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل إيميلك هنا"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
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