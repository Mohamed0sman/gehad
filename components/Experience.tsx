'use client'

import { BriefcaseIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export default function Experience() {
  const experiences = [
    {
      title: 'Career Development Professional',
      organization: 'Independent Practice',
      period: '2018 - Present',
      description: 'Helping professionals and organizations design careers intentionally through evidence-based frameworks and strategic guidance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'HR Leader',
      organization: 'Multinational Engineering Firm',
      period: '2016 - 2018',
      description: 'Led HR initiatives and developed talent management strategies for engineering teams.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Trainer & Facilitator',
      organization: 'American University in Cairo',
      period: '2014 - 2016',
      description: 'Delivered workshops and training programs focused on career development and professional skills.',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const icons = [BriefcaseIcon, HeartIcon, LightBulbIcon]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            A journey of growth, learning, and impact across diverse roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow h-full">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-playfair">
                    {exp.title}
                  </h3>

                  <p className="text-gray-600 font-semibold mb-4 font-inter">
                    {exp.organization}
                  </p>

                  <p className="text-sm text-gray-500 mb-4 font-inter">
                    {exp.period}
                  </p>

                  <p className="text-gray-700 leading-relaxed font-inter">
                    {exp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}