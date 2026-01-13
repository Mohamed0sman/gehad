'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/Button'

export default function ProfessionalServices() {
  const { language, isRTL } = useLanguage()

  const services = {
    individual: {
      title: {
        en: 'Individual Career Coaching',
        ar: 'الإرشاد المهني الفردي'
      },
      subtitle: {
        en: 'Personalized guidance for career transformation',
        ar: 'إرشاد مخصص لتحويل المسار المهني'
      },
      description: {
        en: 'One-on-one coaching sessions tailored to your unique career goals and challenges.',
        ar: 'جلسات إرشاد فردية مخصصة لأهدافك وتحدياتك المهنية الفريدة.'
      },
      features: {
        en: [
          'Career path design',
          'Skill gap analysis',
          'Resume and interview preparation',
          'Professional branding',
          'Transition planning',
          'Networking strategies'
        ],
        ar: [
          'تصميم مسار مهني',
          'تحليل الفجوة في المهارات',
          'إعداد السيرة الذاتية والمقابلات',
          'العلامة المهنية',
          'خطة الانتقال',
          'استراتيجيات التواصل'
        ]
      }
    },
    organizational: {
      title: {
        en: 'Organizational Development',
        ar: 'تطوير المؤسسات'
      },
      subtitle: {
        en: 'Strategic solutions for teams and companies',
        ar: 'حلول استراتيجية للفرق والشركات'
      },
      description: {
        en: 'Comprehensive programs to enhance employee development and organizational effectiveness.',
        ar: 'برامج شاملة لتعزيز تطوير الموظفين وفعالية المؤسسة.'
      },
      features: {
        en: [
          'Leadership development programs',
          'Team effectiveness workshops',
          'Career development systems',
          'Talent retention strategies',
          'Succession planning',
          'Change management'
        ],
        ar: [
          'برامج تطوير القيادة',
          'ورش عمل فعالية الفرق',
          'أنظمة تطوير المهنة',
          'استراتيجيات الاحتفاظ بالمواهب',
          'خطة الخلافة',
          'إدارة التغيير'
        ]
      }
    }
  }

  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  return (
    <section className="section bg-neutral-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 font-heading font-bold mb-4 text-neutral-900">
            {t('Professional Services', 'الخدمات المهنية')}
          </h2>
          <p className="text-body-lg text-neutral-600 font-primary">
            {t(
              'Evidence-based solutions tailored to your unique professional needs',
              'حلول قائمة على الأدلة مخصصة لاحتياجاتك المهنية الفريدة'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Individual Services Card */}
          <div className="card-elevated p-10 flex flex-col h-full bg-white border-t-4 border-primary-500">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                {t('For Individuals', 'للأفراد')}
              </span>
              <h3 className="text-h3 font-heading font-bold mb-2 text-neutral-900">
                {t(services.individual.title.en, services.individual.title.ar)}
              </h3>
              <p className="text-body text-primary-600 font-medium mb-4">
                {t(services.individual.subtitle.en, services.individual.subtitle.ar)}
              </p>
              <p className="text-body text-neutral-600 leading-relaxed mb-6">
                {t(services.individual.description.en, services.individual.description.ar)}
              </p>
            </div>

            <div className="mb-8 flex-grow">
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-4 border-b border-neutral-100 pb-2">
                {t('What You\'ll Receive', 'ماذا ستحصل عليه')}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(language === 'ar' ? services.individual.features.ar : services.individual.features.en).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-neutral-100">
              <Button href="/booking" variant="primary" className="w-full justify-center">
                {t('Book a Session', 'احجز جلسة')}
              </Button>
            </div>
          </div>

          {/* Organizational Services Card */}
          <div className="card-elevated p-10 flex flex-col h-full bg-white border-t-4 border-accent-emerald-500">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
                {t('For Organizations', 'للمؤسسات')}
              </span>
              <h3 className="text-h3 font-heading font-bold mb-2 text-neutral-900">
                {t(services.organizational.title.en, services.organizational.title.ar)}
              </h3>
              <p className="text-body text-emerald-600 font-medium mb-4">
                {t(services.organizational.subtitle.en, services.organizational.subtitle.ar)}
              </p>
              <p className="text-body text-neutral-600 leading-relaxed mb-6">
                {t(services.organizational.description.en, services.organizational.description.ar)}
              </p>
            </div>

            <div className="mb-8 flex-grow">
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-4 border-b border-neutral-100 pb-2">
                {t('What You\'ll Receive', 'ماذا ستحصل عليه')}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(language === 'ar' ? services.organizational.features.ar : services.organizational.features.en).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-neutral-100">
              <Button href="/contact" variant="secondary" className="w-full justify-center">
                {t('Contact for Details', 'اتصل للتفاصيل')}
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-primary-900 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative">
          {/* Abstract shapes for visual interest without icons */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 rounded-tr-full opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-h2 font-heading font-bold mb-6 text-white">
              {t('Ready to Transform Your Professional Journey?', 'جاهز لتحويل مسارك المهني؟')}
            </h3>
            <p className="text-body-lg mb-10 text-primary-100 font-light">
              {t(
                'Whether you\'re an individual seeking career clarity or an organization looking to enhance employee development, I provide evidence-based solutions that deliver measurable results.',
                'سواء كنت فردًا تبحث عن وضوح مهني أو منظمة تسعى لتعزيز تطوير الموظفين، أقدم حلولًا قائمة على الأدلة تحقق نتائج ملموسة.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/booking" variant="accent" size="lg">
                {t('Book Individual Session', 'احجز جلسة فردية')}
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                {t('Contact for Organizations', 'اتصل للمؤسسات')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}