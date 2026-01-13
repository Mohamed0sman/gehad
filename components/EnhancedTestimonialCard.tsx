'use client'

import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

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
    <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{testimonial.avatar}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 font-playfair">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 font-inter">{testimonial.role}</p>
              <p className="text-xs text-gray-500 font-inter">{testimonial.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
        
        <div className="relative mb-6">
          <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
          <p className="text-gray-700 leading-relaxed font-inter pl-8 relative z-10 relative z-10">
            "{testimonial.content}"
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-xs text-gray-500 font-inter">{testimonial.category}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <StarIcon key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}