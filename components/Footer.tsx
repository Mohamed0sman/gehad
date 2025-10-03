'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'الرئيسية', href: '/', icon: '🏠' },
    { name: 'من أنا', href: '/about', icon: '👩‍💼' },
    { name: 'البرامج', href: '/programs', icon: '📚' },
    { name: 'الموارد', href: '/resources', icon: '📄' },
    { name: 'المدونة', href: '/blog', icon: '✍️' },
    { name: 'اتصل بي', href: '/contact', icon: '📞' },
  ],
  services: [
    { name: 'التوجيه المهني الشخصي', href: '/programs/1' },
    { name: 'ورش العمل الجماعية', href: '/programs/2' },
    { name: 'برنامج اكتشاف الذات', href: '/programs/3' },
    { name: 'استشارات الأداء الأكاديمي', href: '/programs/4' },
  ],
  social: [
    {
      name: 'واتساب',
      href: 'https://wa.me/201234567890',
      icon: '💬',
      color: 'hover:text-green-400'
    },
    {
      name: 'فيسبوك',
      href: 'https://facebook.com/gehad.ashraf',
      icon: '📘',
      color: 'hover:text-blue-400'
    },
    {
      name: 'إنستجرام',
      href: 'https://instagram.com/gehad.ashraf',
      icon: '📷',
      color: 'hover:text-pink-400'
    },
    {
      name: 'لينكد إن',
      href: 'https://linkedin.com/in/gehad-ashraf',
      icon: '💼',
      color: 'hover:text-blue-500'
    },
    {
      name: 'تيك توك',
      href: 'https://tiktok.com/@gehad.ashraf',
      icon: '🎵',
      color: 'hover:text-purple-400'
    },
    {
      name: 'يوتيوب',
      href: 'https://youtube.com/@gehad-ashraf',
      icon: '📺',
      color: 'hover:text-red-400'
    }
  ]
}

const stats = [
  { number: '500+', label: 'طالب نجح معانا', icon: '🎓' },
  { number: '98%', label: 'معدل رضا العملاء', icon: '⭐' },
  { number: '3+', label: 'سنوات خبرة', icon: '💼' },
  { number: '24/7', label: 'دعم مستمر', icon: '💬' }
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        
        {/* Top section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="text-4xl sm:text-6xl mb-4">🚀</div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              جاهز تبدأ رحلتك نحو النجاح؟
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              احجز جلستك المجانية دلوقتي وخلينا نحقق أحلامك سوا
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <RocketLaunchIcon className="w-6 h-6" />
                <span>احجز جلستك المجانية</span>
              </Link>
              
              <Link
                href="https://wa.me/201234567890"
                target="_blank"
                className="inline-flex items-center gap-3 border-2 border-green-400/50 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-green-400/10 transition-all duration-300"
              >
                <span className="text-2xl">💬</span>
                <span>واتساب مباشر</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">ج</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">جهاد أشرف</h3>
                <p className="text-purple-400 font-semibold">التدريب والاستشارات</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              مدربة معتمدة NCDA متخصصة في التوجيه النفسي والمهني للطلاب. 
              هدفي إني أساعدك تكتشف إمكاناتك وتحقق أهدافك المهنية بثقة تامة.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:info@gehad-ashraf.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                <span className="text-sm">info@gehad-ashraf.com</span>
              </a>
              
              <a
                href="tel:+201234567890"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <span className="text-sm">+20 123 456 7890</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-purple-400" />
                <span className="text-sm">القاهرة، مصر</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-purple-400" />
              الصفحات الرئيسية
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <HeartIcon className="w-5 h-5 text-pink-400" />
              البرامج والخدمات
            </h3>
            <ul className="space-y-3 mb-8">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social media */}
            <h4 className="text-white font-semibold mb-4">تابعيني على</h4>
            <div className="grid grid-cols-3 gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 ${item.color} group`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs text-gray-400 group-hover:text-white">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <span className="text-3xl">📧</span>
              اشترك في النشرة الإخبارية
            </h3>
            <p className="text-gray-300">
              وصلك أحدث النصائح والموارد المجانية مباشرة على إيميلك
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل إيميلك هنا"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
            />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <span>اشترك</span>
              <RocketLaunchIcon className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-xs text-gray-400 mt-4 text-center">
            مجاني تماماً • بدون إزعاج • يمكنك إلغاء الاشتراك في أي وقت
          </p>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>&copy; 2024 جهاد أشرف. جميع الحقوق محفوظة.</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                الشروط والأحكام
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>صُنع بـ</span>
              <HeartIcon className="w-4 h-4 text-red-400" />
              <span>في مصر</span>
              <span className="text-lg">🇪🇬</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}