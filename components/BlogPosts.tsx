'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const blogPosts = [
  {
    id: 1,
    titleEn: 'How to Choose the Right University Major for You',
    titleAr: 'إزاي تختار التخصص الجامعي المناسب ليك؟',
    excerptEn: 'A practical guide to help you choose a major that fits your personality and career goals, with real-world tips from coaching and training experience.',
    excerptAr: 'دليل شامل لمساعدتك في اختيار التخصص الجامعي اللي يناسب شخصيتك وأهدافك المهنية مع نصائح عملية من خبرتي في التدريب',
    categoryEn: 'Career Guidance',
    categoryAr: 'التوجيه المهني',
    readTimeEn: '8 min read',
    readTimeAr: '8 دقائق',
    publishDateEn: 'Nov 15, 2024',
    publishDateAr: '15 نوفمبر 2024',
    views: 2340,
    likes: 156,
    image: '/blog/university-choice.jpg',
    featured: true,
    tagsEn: ['University', 'Major', 'Future'],
    tagsAr: ['جامعة', 'تخصص', 'مستقبل'],
    authorEn: 'Gehad Ashraf',
    authorAr: 'جهاد أشرف',
    iconChar: '🎓'
  },
  {
    id: 2,
    titleEn: 'CV Writing Secrets That Get You Noticed',
    titleAr: 'أسرار كتابة السيرة الذاتية اللي تخليك تتقبل فوراً',
    excerptEn: 'Learn how to write a modern, high-impact CV that stands out and increases your chances of landing interviews.',
    excerptAr: 'تعلم إزاي تكتب CV احترافي يلفت انتباه أصحاب العمل ويزود فرصك في الحصول على الوظيفة اللي بتحلم بيها',
    categoryEn: 'Job Search',
    categoryAr: 'البحث عن وظيفة',
    readTimeEn: '12 min read',
    readTimeAr: '12 دقيقة',
    publishDateEn: 'Nov 10, 2024',
    publishDateAr: '10 نوفمبر 2024',
    views: 1890,
    likes: 203,
    image: '/blog/cv-writing.jpg',
    featured: true,
    tagsEn: ['CV', 'Job', 'Skills'],
    tagsAr: ['سيرة ذاتية', 'وظيفة', 'مهارات'],
    authorEn: 'Gehad Ashraf',
    authorAr: 'جهاد أشرف',
    iconChar: '📝'
  },
  {
    id: 3,
    titleEn: '10 Practical Ways to Build Self-Confidence',
    titleAr: '10 طرق لبناء الثقة بالنفس وتطوير شخصيتك',
    excerptEn: 'Proven, actionable steps to strengthen confidence and grow personally so you can achieve goals with more clarity and calm.',
    excerptAr: 'اكتشف الطرق العملية والمجربة لبناء ثقتك بنفسك وتطوير شخصيتك علشان تقدر تحقق أهدافك بسهولة أكبر',
    categoryEn: 'Personal Development',
    categoryAr: 'التطوير الشخصي',
    readTimeEn: '6 min read',
    readTimeAr: '6 دقائق',
    publishDateEn: 'Nov 5, 2024',
    publishDateAr: '5 نوفمبر 2024',
    views: 3120,
    likes: 287,
    image: '/blog/self-confidence.jpg',
    featured: false,
    tagsEn: ['Confidence', 'Growth', 'Mindset'],
    tagsAr: ['ثقة', 'تطوير', 'شخصية'],
    authorEn: 'Gehad Ashraf',
    authorAr: 'جهاد أشرف',
    iconChar: '✨'
  },
  {
    id: 4,
    titleEn: 'Time Management for Students: Organize Your Schedule & Excel',
    titleAr: 'إدارة الوقت للطلاب: إزاي تنظم وقتك وتتفوق في دراستك',
    excerptEn: 'Practical techniques to plan your week, focus better, and balance studying with life without burning out.',
    excerptAr: 'نصائح عملية ومجربة لإدارة الوقت بفعالية، تنظيم الجدول الدراسي، والموازنة بين الدراسة والأنشطة الأخرى',
    categoryEn: 'Time Management',
    categoryAr: 'إدارة الوقت',
    readTimeEn: '10 min read',
    readTimeAr: '10 دقائق',
    publishDateEn: 'Nov 1, 2024',
    publishDateAr: '1 نوفمبر 2024',
    views: 1567,
    likes: 134,
    image: '/blog/time-management.jpg',
    featured: false,
    tagsEn: ['Time', 'Study', 'Productivity'],
    tagsAr: ['وقت', 'دراسة', 'تنظيم'],
    authorEn: 'Gehad Ashraf',
    authorAr: 'جهاد أشرف',
    iconChar: '⏳'
  },
  {
    id: 5,
    titleEn: 'Dealing with Exam Stress & Study Anxiety',
    titleAr: 'التعامل مع ضغط الامتحانات والقلق الدراسي',
    excerptEn: 'Evidence-based tools to manage anxiety before exams and keep your focus when pressure is high.',
    excerptAr: 'تقنيات فعالة للتعامل مع التوتر والقلق قبل الامتحانات، وإزاي تحافظ على هدوئك وتركيزك في أصعب الأوقات',
    categoryEn: 'Mental Wellbeing',
    categoryAr: 'الصحة النفسية',
    readTimeEn: '7 min read',
    readTimeAr: '7 دقائق',
    publishDateEn: 'Oct 28, 2024',
    publishDateAr: '28 أكتوبر 2024',
    views: 2890,
    likes: 245,
    image: '/blog/exam-stress.jpg',
    featured: false,
    tagsEn: ['Exams', 'Anxiety', 'Wellbeing'],
    tagsAr: ['امتحانات', 'قلق', 'صحة نفسية'],
    authorEn: 'Gehad Ashraf',
    authorAr: 'جهاد أشرف',
    iconChar: '🧘'
  },
  {
    id: 6,
    titleEn: 'Starting Your Own Project: From Idea to Execution',
    titleAr: 'بداية مشروعك الخاص: من الفكرة للتنفيذ',
    excerptEn: 'A structured overview of turning an idea into a plan, validating it, and taking the first steps toward launching.',
    excerptAr: 'دليل شامل لبداية مشروعك الخاص، من تطوير الفكرة وعمل دراسة الجدوى لحد التنفيذ والتسويق بنجاح',
    categoryEn: 'Entrepreneurship',
    categoryAr: 'ريادة الأعمال',
    readTimeEn: '15 min read',
    readTimeAr: '15 دقيقة',
    publishDateEn: 'Oct 25, 2024',
    publishDateAr: '25 أكتوبر 2024',
    views: 1234,
    likes: 98,
    image: '/blog/entrepreneurship.jpg',
    featured: true,
    tagsEn: ['Project', 'Business', 'Startup'],
    tagsAr: ['مشروع', 'ريادة', 'أعمال'],
    authorEn: 'Gehad Ashraf',
    authorAr: 'جهاد أشرف',
    iconChar: '🚀'
  }
]

export default function BlogPosts() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="py-24 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
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
              <span className="text-primary-600 font-semibold text-lg">{t('Featured articles', 'المقالات المميزة')}</span>
            </div>

            <h2 className="text-h2 font-bold text-neutral-900 mb-4 font-heading">
              <span className="text-neutral-900">{t('Most read', 'الأكثر قراءة')}</span>
              <span className="text-neutral-500">{t(' this month 🔥', ' هذا الشهر 🔥')}</span>
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
                className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100"
              >
                {/* Featured badge */}
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10`}>
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    {t('⭐ Featured', '⭐ مميز')}
                  </span>
                </div>

                {/* Image placeholder */}
                <div className="relative h-48 bg-neutral-100 flex items-center justify-center">
                  <div className="text-6xl">{post.iconChar}</div>
                </div>

                <div className="p-8">
                  {/* Category and meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {language === 'ar' ? post.categoryAr : post.categoryEn}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-1">
                        <span>👁️ {post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>❤️ {post.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 font-heading">
                    {language === 'ar' ? post.titleAr : post.titleEn}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3 font-primary">
                    {language === 'ar' ? post.excerptAr : post.excerptEn}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span>📅 {language === 'ar' ? post.publishDateAr : post.publishDateEn}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>🕒 {language === 'ar' ? post.readTimeAr : post.readTimeEn}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read more button */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group font-primary"
                  >
                    <span>{t('Read full article', 'اقرأ المقال كاملاً')}</span>
                    <span className={`transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>{isRTL ? '←' : '→'}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              <span className="text-primary-600">{t('All articles', 'جميع المقالات')}</span> 📖
            </h2>
            <p className="text-lg text-neutral-600 font-primary">
              {t('Explore more helpful articles across different topics.', 'اكتشف المزيد من المقالات المفيدة في مختلف المجالات')}
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
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-neutral-100"
              >
                {/* Image placeholder */}
                <div className="relative h-40 bg-neutral-50 flex items-center justify-center">
                  <div className="text-4xl">{post.iconChar}</div>
                </div>

                <div className="p-6">
                  {/* Category */}
                  <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded-lg text-xs font-semibold mb-3 inline-block">
                    {language === 'ar' ? post.categoryAr : post.categoryEn}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 font-heading">
                    {language === 'ar' ? post.titleAr : post.titleEn}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed line-clamp-3 font-primary">
                    {language === 'ar' ? post.excerptAr : post.excerptEn}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span>🕒 {language === 'ar' ? post.readTimeAr : post.readTimeEn}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👁️ {post.views}</span>
                      </div>
                    </div>
                    <span>{language === 'ar' ? post.publishDateAr : post.publishDateEn}</span>
                  </div>

                  {/* Read more */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors flex items-center gap-1 group font-primary"
                  >
                    <span>{t('Read more', 'اقرأ أكثر')}</span>
                    <span className={`transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>{isRTL ? '←' : '→'}</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}