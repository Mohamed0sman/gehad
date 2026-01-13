'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Career Development Professional',
      organization: 'Independent Practice',
      period: '2018 - Present',
      description: 'Helping professionals and organizations design careers intentionally through evidence-based frameworks and strategic guidance.',
      color: 'from-blue-500 to-cyan-500',
      iconChar: '💼'
    },
    {
      title: 'HR Leader',
      organization: 'Multinational Engineering Firm',
      period: '2016 - 2018',
      description: 'Led HR initiatives and developed talent management strategies for engineering teams.',
      color: 'from-purple-500 to-pink-500',
      iconChar: '👥'
    },
    {
      title: 'Trainer & Facilitator',
      organization: 'American University in Cairo',
      period: '2014 - 2016',
      description: 'Delivered workshops and training programs focused on career development and professional skills.',
      color: 'from-yellow-500 to-orange-500',
      iconChar: '🎤'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-primary">
            A journey of growth, learning, and impact across diverse roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => {
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow h-full flex flex-col">

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl mb-6 text-3xl shadow-md`}>
                    {exp.iconChar}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 font-heading">
                    {exp.title}
                  </h3>

                  <p className="text-primary-600 font-semibold mb-4 font-primary">
                    {exp.organization}
                  </p>

                  <p className="text-sm text-neutral-500 mb-4 font-primary bg-neutral-50 inline-block px-3 py-1 rounded-full self-start">
                    {exp.period}
                  </p>

                  <p className="text-neutral-700 leading-relaxed font-primary">
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