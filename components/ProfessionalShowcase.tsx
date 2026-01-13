'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/Button'

export default function ProfessionalShowcase() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const features = [
    {
      label: '01',
      title: t('Innovative Approach', 'نهج مبتكر'),
      description: t('Evidence-based methodologies for career development', 'أساليب قائمة على الأدلة لتطوير المسارات المهنية')
    },
    {
      label: '02',
      title: t('Measurable Results', 'نتائج قابلة للقياس'),
      description: t('Trackable outcomes and career progression', 'نتائج قابلة للقياس وتطوير مهني ملموس')
    },
    {
      label: '03',
      title: t('Trusted Experts', 'خبراء موثوقون'),
      description: t('Years of experience in career development', 'سنوات من الخبرة في تطوير المسارات المهنية')
    },
    {
      label: '04',
      title: t('Certified Programs', 'برامج معتمدة'),
      description: t('Internationally recognized certifications', 'شهادات معترف بها دولياً')
    }
  ]

  return (
    <section className="section bg-neutral-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-heading font-bold mb-6 text-neutral-900">
            <span className="text-primary-600">
              {t('Professional Excellence', 'التميز المهني')}
            </span>
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto font-primary">
            {t(
              'Our commitment to excellence in career development services',
              'التزامنا بالتميز في خدمات تطوير المسارات المهنية'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-8 hover:-translate-y-1 transition-transform duration-300 bg-white"
            >
              <div className="text-4xl font-bold text-primary-100 mb-4 font-heading">
                {feature.label}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-body text-neutral-600 font-primary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-10 border border-neutral-100 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-heading">
                {t('Ready to Transform Your Career?', 'هل أنت مستعد لتحويل مسارك المهني؟')}
              </h3>
              <p className="text-body text-neutral-600 mb-8 font-primary">
                {t(
                  'Join thousands of professionals who have transformed their careers with our guidance.',
                  'انضم إلى آلاف المحترفين الذين حولوا مساراتهم المهنية مع إرشادنا.'
                )}
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  t('Personalized career roadmap', 'خطة مهنية مخصصة'),
                  t('Expert guidance and support', 'إرشاد ودعم من الخبراء'),
                  t('Proven methodologies', 'أساليب مثبتة')
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                    <span className="text-neutral-700 font-primary text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button href="/booking" variant="primary">
                {t('Start Today', 'ابدأ اليوم')}
              </Button>
              <Button href="/about" variant="secondary">
                {t('Learn More', 'تعلم المزيد')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}