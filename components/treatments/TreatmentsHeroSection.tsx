'use client'

import Link from 'next/link'

export default function TreatmentsHeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#E8B8A0] via-[#0F4C81] to-[#6BA3D4] pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-2 text-white/80 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>&gt;</span>
          <span>Treatments</span>
        </nav>

        <h1 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-4 leading-tight">
          Complete dental care,<br />
          crafted by <span className="text-[#F26522]">specialists</span>.
        </h1>
        <p className="text-lg text-[#475569] max-w-3xl">
          Explore our full range of treatments — from orthodontics and implants to cosmetic dentistry and kids&apos; care. Every procedure is delivered with painless precision.
        </p>
      </div>
    </section>
  )
}
