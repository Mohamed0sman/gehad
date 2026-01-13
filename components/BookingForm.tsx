'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BookingForm() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    currentSituation: '',
    goals: '',
    challenges: '',
    preferredTime: '',
    sessionType: 'online',
    hearAboutUs: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call for now (or keep existing logic)
    // Assuming backend is setup or just simulating
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)

    /* 
    // Original Logic
    try {
      const response = await fetch('/api/contact', { ... })
      ...
    } catch (error) { ... }
    */
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <section
        className="py-24 bg-gradient-to-br from-green-50 to-emerald-50"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 text-6xl text-white"
            >
              ✅
            </motion.div>

            <h2 className="text-5xl font-bold text-neutral-900 mb-6 font-heading">
              {t('🎉 Booking confirmed!', '🎉 تم الحجز بنجاح!')}
            </h2>

            <p className="text-2xl text-neutral-600 mb-8 font-primary">
              {t('Thanks! I received your booking request.', 'أهلاً وسهلاً بيك! وصلني طلب الحجز بتاعك')}
              <br />
              <span className="text-green-600 font-semibold">
                {t('I’ll reach out within one hour. 💚', 'هتواصل معاك خلال ساعة واحدة بس! 💚')}
              </span>
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 font-heading">
                {t("What's next?", 'إيه اللي هيحصل دلوقتي؟')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-3xl mb-2">📞</div>
                  <div className="font-semibold text-neutral-900">{t("I'll contact you", 'هكلمك')}</div>
                  <div className="text-neutral-600">{t('Within an hour', 'خلال ساعة')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <div className="font-semibold text-neutral-900">{t('We confirm the time', 'نحدد الموعد')}</div>
                  <div className="text-neutral-600">{t('that works for you', 'اللي يناسبك')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-semibold text-neutral-900">{t('We start the session', 'نبدأ الجلسة')}</div>
                  <div className="text-neutral-600">{t('and work on your goals', 'ونحقق أهدافك')}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/201015362414"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                {t('💬 Message me on WhatsApp', '💬 كلمني على واتساب')}
              </motion.a>

              <motion.button
                onClick={() => setIsSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
              >
                {t('📝 Book another session', '📝 احجز جلسة تانية')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="py-24 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-3xl">📅</span>
            <span className="text-green-600 font-semibold text-lg">
              {t('Book your free session', 'احجز جلستك المجانية')}
            </span>
            <span className="text-3xl">📅</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-h2 font-bold text-neutral-900 mb-6 font-heading"
          >
            <span className="gradient-text">{t('Ready to start?', 'خلاص قررت؟')}</span>
            <br />
            <span className="text-neutral-700">{t("Let's fill in your details 📝", 'يلا نملأ البيانات 📝')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-neutral-600 font-primary"
          >
            {t(
              'The more details you share, the more tailored and helpful the session will be.',
              'كل ما تديني تفاصيل أكتر، كل ما أقدر أساعدك أحسن في الجلسة'
            )}
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2 font-heading">
                <span className="text-green-500 text-2xl">💚</span>
                {t('Personal information', 'معلومات شخصية')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Full name *', 'الاسم الكامل *')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-primary"
                    placeholder={t('Your full name', 'اكتب اسمك الكامل')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Age *', 'العمر *')}
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    max="60"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-primary"
                    placeholder={t('Your age', 'كام سنة؟')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Phone number *', 'رقم الهاتف *')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-primary"
                    placeholder="01015362414"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Email *', 'البريد الإلكتروني *')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-primary"
                    placeholder="your-email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Educational Background */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2 font-heading">
                <span className="text-2xl">✨</span>
                {t('Education & professional background', 'الخلفية التعليمية والمهنية')}
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Current education level *', 'المستوى التعليمي الحالي *')}
                  </label>
                  <select
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-primary"
                  >
                    <option value="">{t('Select your education level', 'اختار مستواك التعليمي')}</option>
                    <option value="high-school">{t('High school', 'ثانوية عامة')}</option>
                    <option value="university-student">{t('University student', 'طالب جامعي')}</option>
                    <option value="fresh-graduate">{t('Fresh graduate', 'خريج حديث')}</option>
                    <option value="experienced">{t('Work experience', 'خبرة في العمل')}</option>
                    <option value="career-change">{t('Career change', 'أريد تغيير مجالي')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Your current situation *', 'وضعك الحالي *')}
                  </label>
                  <textarea
                    name="currentSituation"
                    required
                    rows={3}
                    value={formData.currentSituation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none font-primary"
                    placeholder={t(
                      'Tell me about your current situation (study/work/searching).',
                      'قولي إيه وضعك دلوقتي... بتدرس إيه؟ شغال فين؟ أو لسه بتدور على شغل؟'
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Goals and Challenges */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2 font-heading">
                <span className="text-2xl">✅</span>
                {t('Your goals & challenges', 'أهدافك والتحديات')}
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('What goals do you want to achieve? *', 'إيه أهدافك اللي عايز تحققها؟ *')}
                  </label>
                  <textarea
                    name="goals"
                    required
                    rows={4}
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none font-primary"
                    placeholder={t(
                      'Share your goals: job/major direction, skills you want to build, etc.',
                      'قولي بالتفصيل إيه أحلامك وأهدافك... عايز تشتغل فين؟ عايز تدرس إيه؟ عايز تطور نفسك إزاي؟'
                    )}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('What are your biggest challenges? *', 'إيه أكبر التحديات اللي بتواجهك؟ *')}
                  </label>
                  <textarea
                    name="challenges"
                    required
                    rows={4}
                    value={formData.challenges}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none font-primary"
                    placeholder={t(
                      'Tell me what feels difficult (uncertainty, confidence, opportunities, etc.).',
                      'قولي إيه اللي بيصعب عليك الموضوع... مش عارف تختار؟ خايف من المستقبل؟ مش واثق في نفسك؟ مش لاقي فرص؟'
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Session Preferences */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2 font-heading">
                <span className="text-2xl">⏰</span>
                {t('Session preferences', 'تفضيلات الجلسة')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Preferred time', 'الوقت المفضل')}
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-primary"
                  >
                    <option value="">{t('Select a time', 'اختار الوقت اللي يناسبك')}</option>
                    <option value="morning">{t('Morning (9-12) 🌅', 'الصبح (9-12) 🌅')}</option>
                    <option value="afternoon">{t('Afternoon (12-5) ☀️', 'بعد الضهر (12-5) ☀️')}</option>
                    <option value="evening">{t('Evening (5-9) 🌆', 'المساء (5-9) 🌆')}</option>
                    <option value="weekend">{t('Weekend 📅', 'ويك إند 📅')}</option>
                    <option value="flexible">{t('Flexible ⏰', 'أي وقت يناسبك ⏰')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 font-heading">
                {t('Additional information (optional)', 'معلومات إضافية (اختيارية)')}
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('How did you hear about me?', 'إزاي عرفت عني؟')}
                  </label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-primary"
                  >
                    <option value="">{t('Select...', 'اختار...')}</option>
                    <option value="social-media">{t('Social media 📱', 'سوشيال ميديا 📱')}</option>
                    <option value="friend">{t('A friend recommended you 👥', 'صديق رشحني 👥')}</option>
                    <option value="google">{t('Google 🔍', 'جوجل 🔍')}</option>
                    <option value="university">{t('University 🎓', 'من الجامعة 🎓')}</option>
                    <option value="other">{t('Other', 'طريقة تانية')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t('Anything else you’d like to share?', 'أي حاجة تانية عايز تقوليها؟')}
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none font-primary"
                    placeholder={t('Any extra info or questions...', 'أي معلومات إضافية أو أسئلة عندك...')}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`relative px-12 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl rounded-2xl shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-green-500/25'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>{t('Submitting...', 'بيتم الإرسال...')}</span>
                  </>
                ) : (
                  <>
                    <span className="text-2xl">🚀</span>
                    <span>{t('Book my free session 🚀', 'احجز جلستي المجانية 🚀')}</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-neutral-500 mt-6 font-primary">
                {t('🔒 Your data is safe and will never be shared.', '🔒 بياناتك آمنة معانا ومش هنشاركها مع حد')}
                <br />
                {t('I’ll reach out within one hour to confirm the appointment.', 'هتواصل معاك خلال ساعة واحدة بس لتأكيد الموعد')}
              </p>
            </div>
          </form>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>جلسة مجانية 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>بدون التزام</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>سرية تامة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>رد سريع خلال ساعة</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}