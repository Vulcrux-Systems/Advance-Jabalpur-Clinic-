'use client'

import Link from 'next/link'

interface TreatmentHeroSectionProps {
  name: string
  description: string
}

export default function TreatmentHeroSection({ name, description }: TreatmentHeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#E8B8A0] via-[#0F4C81] to-[#6BA3D4] pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">


        <h1 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-4 leading-tight">
          {name}
        </h1>
        <p className="text-lg text-[#475569] max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  )
}
