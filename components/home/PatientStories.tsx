'use client'

import { TESTIMONIALS } from '@/lib/data/site'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export default function PatientStories() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header and navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6 shadow-sm border border-[#E2E8F0]">
              <Star size={14} className="text-[#0F4C81]" /> PATIENT STORIES
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tight">
              Loved by 50,000+ smiling<br />
              patients.
            </h2>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] hover:text-[#0F172A] hover:border-[#0F172A] transition-colors bg-white">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] hover:text-[#0F172A] hover:border-[#0F172A] transition-colors bg-white">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex flex-col"
            >
              {/* Large background quote */}
              <div className="absolute top-6 right-6 text-[#F0F5FF]">
                <Quote size={80} strokeWidth={0.5} fill="currentColor" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-[#F26522] fill-[#F26522]" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-[#475569] text-base leading-relaxed mb-8 relative z-10">
                “{testimonial.text}”
              </p>
              
              <div className="mt-auto">
                {/* Divider */}
                <div className="h-px bg-[#F1F5F9] mb-6 w-full" />

                {/* Patient info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-[#1A5C94] text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">{testimonial.name}</p>
                    <p className="text-sm text-[#64748B]">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
