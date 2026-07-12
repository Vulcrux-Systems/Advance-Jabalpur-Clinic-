'use client'

import { TECHNOLOGIES } from '@/lib/data/site'
import { Zap, Radio, Eye, Cpu, Smartphone, Shield, PenToolIcon, Sparkles } from 'lucide-react'

// Map the correct icons to match the design precisely
const getTechIcon = (name: string) => {
  if (name.includes('OPG')) return <Radio className="w-6 h-6" />
  if (name.includes('Laser')) return <Zap className="w-6 h-6" />
  if (name.includes('Scanner')) return <Eye className="w-6 h-6" />
  if (name.includes('Rotary')) return <Cpu className="w-6 h-6" />
  if (name.includes('Smile')) return <PenToolIcon className="w-6 h-6" />
  if (name.includes('Sterilization')) return <Shield className="w-6 h-6" />
  return <Sparkles className="w-6 h-6" />
}

export default function ModernTechnology() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F4C81]">
      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-white text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
            MODERN TECHNOLOGY
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Digital Dentistry, Precision<br />
            Outcomes
          </h2>
          <p className="text-blue-100/90 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We invest in the latest dental technology so you receive faster, safer and more comfortable treatment — with predictable, world-class results.
          </p>
        </div>

        {/* Technology cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#1A5C94] border border-[#2A6CA4] rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Icon container */}
              <div className="w-14 h-14 bg-[#F26522] rounded-2xl flex items-center justify-center mb-6 text-white">
                {getTechIcon(tech.name)}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {tech.name}
              </h3>
              <p className="text-blue-100/80 leading-relaxed text-base">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
