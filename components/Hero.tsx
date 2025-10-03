import Link from 'next/link'
import { 
  SparklesIcon, 
  StarIcon, 
  AcademicCapIcon,
  PlayCircleIcon,
  CheckBadgeIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full px-3 py-2 sm:px-4">
              <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span className="text-xs sm:text-sm font-semibold text-green-400">مدربة معتمدة NCDA</span>
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">مرحباً، أنا</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  جهاد أشرف
                </span>
              </h1>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                <span className="text-lime-400 font-semibold">🎯 هساعدك تكتشف شغفك الحقيقي</span>
                <br />
                وتختار مسارك المهني بثقة تامة
              </p>
              
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                متخصصة في التوجيه النفسي والمهني للطلاب والخريجين الجدد
                <br />
                <span className="text-sky-400 font-semibold">✨ أكثر من 500 طالب حققوا أهدافهم معايا</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:justify-center lg:justify-start">
              <Link
                href="/booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <RocketLaunchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>احجز جلستك المجانية</span>
              </Link>
              
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white/30 hover:border-white/50 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                <PlayCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>شوف قصتي</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="text-base sm:text-lg">🎓</span>
                <span>500+ طالب نجح</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="text-base sm:text-lg">⭐</span>
                <span>تقييم 4.9/5</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="text-base sm:text-lg">🏆</span>
                <span>شهادة NCDA</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="text-base sm:text-lg">💚</span>
                <span>جلسة مجانية</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-12 bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <span className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 bg-clip-text text-transparent">
                  ج
                </span>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-lime-400 to-green-500 p-4 rounded-2xl shadow-xl animate-bounce">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-cyan-500 p-4 rounded-2xl shadow-xl animate-pulse">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-400 to-sky-500 p-3 rounded-xl shadow-xl animate-ping">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>

              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2 sm:p-3 text-white text-center">
                <div className="text-lg sm:text-2xl font-bold text-green-400">500+</div>
                <div className="text-xs">طالب نجح</div>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2 sm:p-3 text-white text-center">
                <div className="text-lg sm:text-2xl font-bold text-lime-400">4.9⭐</div>
                <div className="text-xs">تقييم</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs sm:text-sm font-medium">اسكرول لتحت</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-cyan-400 to-lime-400 rounded-full mt-1 sm:mt-2 animate-pulse" />
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse delay-100"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}