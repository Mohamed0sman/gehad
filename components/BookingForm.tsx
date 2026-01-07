'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  PaperAirplaneIcon,
  SparklesIcon,
  HeartIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function BookingForm() {
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
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
              className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircleIcon className="w-16 h-16 text-white" />
            </motion.div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              🎉 تم الحجز بنجاح!
            </h2>
            
            <p className="text-2xl text-gray-600 mb-8">
              أهلاً وسهلاً بيك! وصلني طلب الحجز بتاعك
              <br />
              <span className="text-green-600 font-semibold">هتواصل معاك خلال ساعة واحدة بس! 💚</span>
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">إيه اللي هيحصل دلوقتي؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-3xl mb-2">📞</div>
                  <div className="font-semibold text-gray-900">هكلمك</div>
                  <div className="text-gray-600">خلال ساعة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <div className="font-semibold text-gray-900">نحدد الموعد</div>
                  <div className="text-gray-600">اللي يناسبك</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-semibold text-gray-900">نبدأ الجلسة</div>
                  <div className="text-gray-600">ونحقق أهدافك</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/201234567890"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                💬 كلمني على واتساب
              </motion.a>
              
              <motion.button
                onClick={() => setIsSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
              >
                📝 احجز جلسة تانية
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
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
            <CalendarDaysIcon className="w-8 h-8 text-green-500" />
            <span className="text-green-600 font-semibold text-lg">احجز جلستك المجانية</span>
            <CalendarDaysIcon className="w-8 h-8 text-green-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">خلاص قررت؟</span>
            <br />
            <span className="text-gray-700">يلا نملأ البيانات 📝</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-600"
          >
            كل ما تديني تفاصيل أكتر، كل ما أقدر أساعدك أحسن في الجلسة
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-green-500" />
                معلومات شخصية
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="اكتب اسمك الكامل"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    العمر *
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    max="60"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="كام سنة؟"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="01234567890"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="your-email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Educational Background */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <SparklesIcon className="w-6 h-6 text-blue-500" />
                الخلفية التعليمية والمهنية
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    المستوى التعليمي الحالي *
                  </label>
                  <select
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">اختار مستواك التعليمي</option>
                    <option value="high-school">ثانوية عامة</option>
                    <option value="university-student">طالب جامعي</option>
                    <option value="fresh-graduate">خريج حديث</option>
                    <option value="experienced">خبرة في العمل</option>
                    <option value="career-change">أريد تغيير مجالي</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    وضعك الحالي *
                  </label>
                  <textarea
                    name="currentSituation"
                    required
                    rows={3}
                    value={formData.currentSituation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="قولي إيه وضعك دلوقتي... بتدرس إيه؟ شغال فين؟ أو لسه بتدور على شغل؟"
                  />
                </div>
              </div>
            </div>

            {/* Goals and Challenges */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                أهدافك والتحديات
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    إيه أهدافك اللي عايز تحققها؟ *
                  </label>
                  <textarea
                    name="goals"
                    required
                    rows={4}
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="قولي بالتفصيل إيه أحلامك وأهدافك... عايز تشتغل فين؟ عايز تدرس إيه؟ عايز تطور نفسك إزاي؟"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    إيه أكبر التحديات اللي بتواجهك؟ *
                  </label>
                  <textarea
                    name="challenges"
                    required
                    rows={4}
                    value={formData.challenges}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="قولي إيه اللي بيصعب عليك الموضوع... مش عارف تختار؟ خايف من المستقبل؟ مش واثق في نفسك؟ مش لاقي فرص؟"
                  />
                </div>
              </div>
            </div>

            {/* Session Preferences */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ClockIcon className="w-6 h-6 text-orange-500" />
                تفضيلات الجلسة
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    الوقت المفضل
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">اختار الوقت اللي يناسبك</option>
                    <option value="morning">الصبح (9-12) 🌅</option>
                    <option value="afternoon">بعد الضهر (12-5) ☀️</option>
                    <option value="evening">المساء (5-9) 🌆</option>
                    <option value="weekend">ويك إند 📅</option>
                    <option value="flexible">أي وقت يناسبك ⏰</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                معلومات إضافية (اختيارية)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    إزاي عرفت عني؟
                  </label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">اختار...</option>
                    <option value="social-media">سوشيال ميديا 📱</option>
                    <option value="friend">صديق رشحني 👥</option>
                    <option value="google">جوجل 🔍</option>
                    <option value="university">من الجامعة 🎓</option>
                    <option value="other">طريقة تانية</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    أي حاجة تانية عايز تقوليها؟
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="أي معلومات إضافية أو أسئلة عندك..."
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
                className={`relative px-12 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl rounded-2xl shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-green-500/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>بيتم الإرسال...</span>
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-6 h-6" />
                    <span>احجز جلستي المجانية 🚀</span>
                  </>
                )}
              </motion.button>
              
              <p className="text-sm text-gray-500 mt-6">
                🔒 بياناتك آمنة معانا ومش هنشاركها مع حد
                <br />
                هتواصل معاك خلال ساعة واحدة بس لتأكيد الموعد
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
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500"
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