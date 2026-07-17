'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

interface DoctorCardProps {
  id: string | number
  name: string
  title: string
  qualifications: string[]
  image?: string
  certifications?: string[]
}

export default function DoctorCard({
  name,
  title,
  qualifications,
  image,
  certifications
}: DoctorCardProps) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl transition">
      {/* Doctor image or placeholder */}
      <div className="h-64 bg-gradient-to-br from-[#0F4C81] to-[#6BA3D4] flex items-center justify-center relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-6xl">👨‍⚕️</span>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-1">{name}</h3>
        <p className="text-[#F26522] font-bold mb-4">{title}</p>
        <div className="space-y-2">
          {qualifications.slice(0, 3).map((qual, idx) => (
            <p key={idx} className="text-sm text-[#475569] flex gap-2">
              <span className="text-[#0F4C81]">✓</span>
              {qual}
            </p>
          ))}
        </div>
        
        {certifications && certifications.length > 0 && (
          <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
            <p className="text-xs text-[#0F4C81] font-bold uppercase mb-3 text-center tracking-wider">Certifications & Expertise</p>
            <Marquee speed={30} gradient={true} gradientColor="white" gradientWidth={20} className="py-1 overflow-hidden">
              {certifications.map((cert, idx) => (
                <span key={idx} className="mx-3 text-xs font-semibold bg-[#E8F5FF] text-[#0F172A] px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm border border-[#bae6fd]">
                  🏆 {cert}
                </span>
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </div>
  )
}
