'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon,
  LightBulbIcon,
  SparklesIcon,
  StarIcon,
  HandRaisedIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const philosophyPoints = [
  {
    id: 1,
    title: 'كل شخص عنده موهبة مميزة',
    description: 'أؤمن إن كل إنسان خلق بموهبة وقدرات خاصة، ودوري إني أساعدك تكتشفها وتطورها',
    icon: SparklesIcon,
    color: 'from-purple-500 to-pink-500',
    emoji: '✨'
  },
  {
    id: 2,
    title: 'النجاح مش بس في الشهادات',
    description: 'النجاح الحقيقي هو إنك تلاقي شغفك وتعيش حياة سعيدة ومُرضية لك شخصياً',
    icon: HeartIcon,
    color: 'from-red-500 to-pink-500',
    emoji: '❤️'
  },
  {
    id: 3,
    title: 'التعلم رحلة مش وجهة',
    description: 'مفيش حد وصل لكل حاجة، كلنا بنتعلم كل يوم، والمهم إننا نستمر في النمو',
    icon: LightBulbIcon,
    color: 'from-yellow-500 to-orange-500',
    emoji: '💡'
  },
  {
    id: 4,
    title: 'الثقة بالنفس أهم من المهارات',
    description: 'لما تثق في نفسك وقدراتك، هتقدر تتعلم أي مهارة وتتغلب على أي تحدي',
    icon: StarIcon,
    color: 'from-blue-500 to-cyan-500',
    emoji: '⭐'
  }
]

const values = [
  {
    title: 'الصدق والشفافية',
    description: 'هقولك الحقيقة حتى لو كانت صعبة، لأن ده اللي هيساعدك تتقدم فعلاً',
    emoji: '🤝',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'الاحترام المتبادل',
    description: 'كل شخص له ظروفه وخلفيته، وأنا بحترم ده وبتعامل مع كل حالة بخصوصية',
    emoji: '🙏',
    color: 'bg-green-100 text-green-800'
  },
  {
    title: 'الدعم المستمر',
    description: 'مش بس جلسات وخلاص، أنا معاك في الرحلة كلها لحد ما تحقق هدفك',
    emoji: '🤗',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    title: 'التطوير المستمر',
    description: 'بطور نفسي باستمرار علشان أقدملك أحدث الطرق والتقنيات في المجال',
    emoji: '📈',
    color: 'bg-pink-100 text-pink-800'
  }
]

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-2000"></div>
      </div>

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
            <EyeIcon className="w-8 h-8 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-lg">فلسفتي في العمل</span>
            <EyeIcon className="w-8 h-8 text-yellow-400" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              رؤيتي ومبادئي
            </span>
            <br />
            <span className="text-gray-300">في التدريب 🎯</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-8 text-gray-300"
          >
            الأسس اللي بشتغل عليها علشان أضمن إنك تحقق أفضل النتائج
            <br />
            <span className="text-yellow-400 font-semibold">✨ لأن نجاحك هو نجاحي</span>
          </motion.p>
        </div>

        {/* Philosophy Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${point.color} shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <point.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">{point.emoji}</span>
                    <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <HandRaisedIcon className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">قيمي الأساسية</span>
              <HandRaisedIcon className="w-8 h-8 text-yellow-400" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                القيم اللي بشتغل بيها
              </span> 💎
            </h3>
            <p className="text-lg text-gray-300">
              المبادئ اللي مش بتنازل عنها في شغلي معاكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{value.emoji}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20"
          >
            <div className="text-4xl mb-4">💌</div>
            <h4 className="text-2xl font-bold text-white mb-4">رسالة شخصية ليك</h4>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              &ldquo;أنا مش بس مدربة، أنا شريكة في رحلتك نحو النجاح. هدفي إني أشوفك واثق في نفسك وقادر تحقق كل أحلامك. 
              كل طالب بتدرب معايا بيبقى جزء من عيلتي، وأنا بفتخر بنجاح كل واحد فيهم.&rdquo;
            </p>
            <div className="text-right">
              <p className="text-yellow-400 font-semibold text-lg">- جهاد أشرف 💛</p>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h4 className="text-2xl font-bold text-white mb-6">
              🚀 جاهز تبدأ رحلتك معايا؟
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                احجز جلستك المجانية الآن 🎯
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                تواصل معايا على واتساب 💬
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}