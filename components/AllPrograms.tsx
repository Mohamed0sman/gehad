'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations as translationsData } from '@/lib/translations'
import Button from '@/components/Button'

export default function AllPrograms() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const translations = translationsData[language] as any

  const programs = [
    {
      id: 'career-counseling',
      title: language === 'ar' ? 'استشارات مهنية' : 'Career Counseling',
      subtitle: language === 'ar' ? 'توجيه مهني فردي' : 'Individual Career Guidance',
      description: language === 'ar' ? 'جلسات فردية شاملة لتوضيح مسارك المهني وتحديد أهدافك.' : 'Comprehensive one-on-one sessions to clarify your career path and set goals.',
      duration: language === 'ar' ? '4 جلسات' : '4 sessions',
      level: language === 'ar' ? 'مبتدئ' : 'Beginner',
      category: language === 'ar' ? 'تطوير شخصي' : 'Personal Development',
      features: [
        language === 'ar' ? 'تقييم شخصي متكامل' : 'Comprehensive personality assessment',
        language === 'ar' ? 'خطة عمل مهنية' : 'Career action plan',
        language === 'ar' ? 'متابعة شهرية' : 'Monthly follow-up',
        language === 'ar' ? 'دعم مستمر' : 'Ongoing support'
      ],
      iconChar: '🎯',
      color: 'bg-primary-50 text-primary-600 border-primary-100',
    },
    {
      id: 'skill-development',
      title: language === 'ar' ? 'تطوير المهارات' : 'Skill Development',
      subtitle: language === 'ar' ? 'مهارات القرن 21' : '21st Century Skills',
      description: language === 'ar' ? 'ورش عمل لتطوير المهارات الناعمة والأساسية المطلوبة في سوق العمل.' : 'Workshops to develop soft and essential skills required in the job market.',
      duration: language === 'ar' ? '6 أسابيع' : '6 weeks',
      level: language === 'ar' ? 'متوسط' : 'Intermediate',
      category: language === 'ar' ? 'تدريب' : 'Training',
      features: [
        language === 'ar' ? 'تواصل فعال' : 'Effective communication',
        language === 'ar' ? 'قيادة فرق' : 'Team leadership',
        language === 'ar' ? 'حل المشكلات' : 'Problem solving',
        language === 'ar' ? 'شهادة معتمدة' : 'Certified certificate'
      ],
      iconChar: '🛠️',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 'academic-guidance',
      title: language === 'ar' ? 'التوجيه الأكاديمي' : 'Academic Guidance',
      subtitle: language === 'ar' ? 'اختيار التخصص المناسب' : 'Choosing the Right Major',
      description: language === 'ar' ? 'مساعدة الطلاب في اختيار التخصص الجامعي والمسار المهني المناسب.' : 'Helping students choose the right university major and career path.',
      duration: language === 'ar' ? '3 جلسات' : '3 sessions',
      level: language === 'ar' ? 'مبتدئ' : 'Beginner',
      category: language === 'ar' ? 'تعليم' : 'Education',
      features: [
        language === 'ar' ? 'اختبار اهتمامات هولاند' : 'Holland Interest Test',
        language === 'ar' ? 'تحليل شخصي' : 'Personality analysis',
        language === 'ar' ? 'خطة دراسية' : 'Study plan',
        language === 'ar' ? 'مقابلة توجيه' : 'Guidance interview'
      ],
      iconChar: '🎓',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
    {
      id: 'corporate-programs',
      title: language === 'ar' ? 'برامج الشركات' : 'Corporate Programs',
      subtitle: language === 'ar' ? 'تدريب للمؤسسات' : 'Training for Organizations',
      description: language === 'ar' ? 'برامج تدريبية مصممة خصيصًا للشركات والمؤسسات لتطوير فرق العمل.' : 'Custom-designed training programs for companies and organizations to develop teams.',
      duration: language === 'ar' ? 'حسب الطلب' : 'Custom',
      level: language === 'ar' ? 'جميع المستويات' : 'All Levels',
      category: language === 'ar' ? 'تدريب مؤسسي' : 'Corporate Training',
      features: [
        language === 'ar' ? 'تقييم احتياجات' : 'Needs assessment',
        language === 'ar' ? 'برنامج مخصص' : 'Custom program',
        language === 'ar' ? 'تدريب عملي' : 'Hands-on training',
        language === 'ar' ? 'تقرير نتائج' : 'Results report'
      ],
      iconChar: '🏢',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 'leadership-program',
      title: language === 'ar' ? 'برنامج القيادة' : 'Leadership Program',
      subtitle: language === 'ar' ? 'صناعة القادة' : 'Building Leaders',
      description: language === 'ar' ? 'برنامج متكامل لتطوير مهارات القيادة والإدارة للمديرين والمشرفين.' : 'Comprehensive program to develop leadership and management skills for managers and supervisors.',
      duration: language === 'ar' ? '8 أسابيع' : '8 weeks',
      level: language === 'ar' ? 'متقدم' : 'Advanced',
      category: language === 'ar' ? 'قيادة' : 'Leadership',
      features: [
        language === 'ar' ? 'أسس القيادة' : 'Leadership fundamentals',
        language === 'ar' ? 'اتخاذ القرار' : 'Decision making',
        language === 'ar' ? 'إدارة التغيير' : 'Change management',
        language === 'ar' ? 'مشروع تخرج' : 'Graduation project'
      ],
      iconChar: '⚖️',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      id: 'freelancing-career',
      title: language === 'ar' ? 'مسيرة الحرية' : 'Freelancing Career',
      subtitle: language === 'ar' ? 'احتراف العمل الحر' : 'Professional Freelancing',
      description: language === 'ar' ? 'دليل شامل للنجاح في عالم العمل الحر من البداية للاحتراف.' : 'Complete guide to succeed in the freelancing world from beginner to pro.',
      duration: language === 'ar' ? '5 أسابيع' : '5 weeks',
      level: language === 'ar' ? 'مبتدئ' : 'Beginner',
      category: language === 'ar' ? 'عمل حر' : 'Freelancing',
      features: [
        language === 'ar' ? 'بناء معرض أعمال' : 'Portfolio building',
        language === 'ar' ? 'جذب العملاء' : 'Client acquisition',
        language === 'ar' ? 'تسعير الخدمات' : 'Service pricing',
        language === 'ar' ? 'إدارة المشاريع' : 'Project management'
      ],
      iconChar: '💻',
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    }
  ]

  return (
    <section className="py-24 sm:py-32 bg-neutral-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
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
            <span className="text-primary-600 font-semibold text-lg">{translations.allPrograms.title}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-h2 font-bold text-neutral-900 mb-6 font-heading"
          >
            {translations.allPrograms.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-body-lg text-neutral-600 font-primary"
          >
            {translations.allPrograms.description}
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl border border-neutral-100 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Category */}
              <div className="absolute top-6 right-6 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${program.color.replace('bg-', 'bg-opacity-20 ')}`}>
                  {program.category}
                </span>
              </div>

              <div className="p-8 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${program.color} bg-opacity-20`}>
                    {program.iconChar}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 font-heading">{program.title}</h3>
                <p className="text-sm text-primary-600 font-medium mb-4 font-primary">{program.subtitle}</p>
                <p className="text-body text-neutral-600 mb-6 font-primary line-clamp-3">{program.description}</p>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-neutral-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 font-medium uppercase font-primary">{isRTL ? 'المدة' : 'Duration'}</span>
                    <span className="text-sm font-semibold text-neutral-700 font-primary">{program.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 font-medium uppercase font-primary">{isRTL ? 'المستوى' : 'Level'}</span>
                    <span className="text-sm font-semibold text-neutral-700 font-primary">{program.level}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-2 flex-grow">
                  {program.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600 font-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <div className="mt-auto">
                  <Button href={`/programs/${program.id}`} variant="primary" className="w-full justify-center">
                    {isRTL ? 'عرض التفاصيل' : 'View Details'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-neutral-900 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-900/50 rounded-bl-full opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                {isRTL ? '🤔 محتار تختار إيه؟' : '🤔 Unsure which program to choose?'}
              </h3>
              <p className="text-lg text-neutral-300 mb-8 font-primary">
                {isRTL ? 'احجز استشارة مجانية وهساعدك تختار البرنامج المناسب ليك' : "Book a free consultation and I'll help you pick the right program."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  {isRTL ? 'استشارة مجانية' : 'Free Consultation'}
                </Button>
                <Button href="https://wa.me/201015362414" variant="secondary" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                  {isRTL ? 'واتساب' : 'WhatsApp'}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
