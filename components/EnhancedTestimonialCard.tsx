'use client'

interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  date: string;
  rating: number;
  content: string;
  category: string;
}

export default function EnhancedTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{testimonial.avatar}</div>
            <div>
              <h3 className="text-lg font-bold text-neutral-800 font-heading">{testimonial.name}</h3>
              <p className="text-sm text-neutral-600 font-primary">{testimonial.role}</p>
              <p className="text-xs text-neutral-500 font-primary">{testimonial.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < testimonial.rating ? 'opacity-100' : 'opacity-20 grayscale'}`}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        <div className="relative mb-6">
          <span className="text-2xl absolute -top-2 -left-2 opacity-20 transform -scale-x-100">❝</span>
          <p className="text-neutral-700 leading-relaxed font-primary pl-4 relative z-10">
            "{testimonial.content}"
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-xs text-neutral-500 font-primary">{testimonial.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-neutral-400 font-primary">Verified</span>
            <span className="text-xs">✅</span>
          </div>
        </div>
      </div>
    </div>
  )
}