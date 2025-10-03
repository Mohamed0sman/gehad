'use client'

import { motion } from 'framer-motion'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'اتصل بيا',
    info: '+20 123 456 7890',
    description: 'متاحة للمكالمات من 9 صباحاً لـ 9 مساءً',
    action: 'tel:+201234567890',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'واتساب',
    info: '+20 123 456 7890',
    description: 'رد فوري 24/7 - الطريقة الأسرع للتواصل',
    action: 'https://wa.me/201234567890',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: EnvelopeIcon,
    title: 'البريد الإلكتروني',
    info: 'info@gehad-ashraf.com',
    description: 'للاستفسارات التفصيلية والمراسلات الرسمية',
    action: 'mailto:info@gehad-ashraf.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPinIcon,
    title: 'العنوان',
    info: 'القاهرة - مصر الجديدة',
    description: 'للجلسات الحضورية (بموعد مسبق)',
    action: '#',
    color: 'from-purple-500 to-indigo-500'
  }
]

const workingHours = [
  { day: 'السبت - الخميس', hours: '9:00 ص - 9:00 م', available: true },
  { day: 'الجمعة', hours: '2:00 م - 8:00 م', available: true },
  { day: 'واتساب', hours: '24/7 متاح', available: true }
]

const socialLinks = [
  {
    name: 'فيسبوك',
    url: 'https://facebook.com/gehad.ashraf',
    icon: '📘',
    color: 'hover:text-blue-600'
  },
  {
    name: 'إنستجرام',
    url: 'https://instagram.com/gehad.ashraf',
    icon: '📷',
    color: 'hover:text-pink-600'
  },
  {
    name: 'لينكد إن',
    url: 'https://linkedin.com/in/gehad-ashraf',
    icon: '💼',
    color: 'hover:text-blue-700'
  },
  {
    name: 'تيك توك',
    url: 'https://tiktok.com/@gehad.ashraf',
    icon: '🎵',
    color: 'hover:text-black'
  }
]

export default function ContactInfo() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-3">{method.info}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Working Hours & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <ClockIcon className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">مواعيد العمل</h3>
            </div>
            
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <span className="font-semibold text-gray-900">{schedule.day}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">{schedule.hours}</span>
                    {schedule.available && (
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <p className="text-sm text-green-800 font-semibold text-center">
                💚 للحالات العاجلة: واتساب متاح 24/7
              </p>
            </div>
          </motion.div>

          {/* Social Media & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <GlobeAltIcon className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-bold text-gray-900">تابعيني على</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${social.color}`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-semibold">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">💡 نصائح للتواصل الفعال</h3>
              
              <div className="space-y-4">
                {[
                  'اكتب اسمك وعمرك في بداية الرسالة',
                  'وضح إيه اللي محتاج مساعدة فيه بالتفصيل',
                  'اذكر إيه أهدافك وتطلعاتك المهنية',
                  'لو عندك مواعيد مفضلة للجلسات، اذكرها'
                ].map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white/90">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              محتاج مساعدة عاجلة؟
            </h3>
            <p className="text-gray-600 mb-4">
              لو في حالة طوارئ نفسية أو محتاج دعم فوري، تواصل معايا على واتساب
            </p>
            <motion.a
              href="https://wa.me/201234567890?text=مرحبا، محتاج مساعدة عاجلة"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span>🆘 تواصل عاجل</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}