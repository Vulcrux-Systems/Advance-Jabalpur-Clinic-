'use client'

import Link from 'next/link'
import Image from 'next/image'

interface TreatmentCardProps {
  id: string
  icon: string
  name: string
  shortDesc: string
  image?: string
}

export default function TreatmentCard({
  id,
  icon,
  name,
  shortDesc,
  image
}: TreatmentCardProps) {
  return (
    <Link
      href={`/treatments/${id}`}
      className="group relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#F26522]"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#1B5FA0] opacity-0 group-hover:opacity-95 transition-opacity duration-300 z-10"></div>

      {/* Image or Icon */}
      <div className="h-40 bg-gradient-to-br from-[#0F4C81] to-[#6BA3D4] flex items-center justify-center relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <span className="text-5xl group-hover:scale-110 transition-transform">{icon}</span>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 p-6">
        <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-white mb-3 transition-colors">
          {name}
        </h3>
        <p className="text-[#475569] group-hover:text-white/90 mb-4 transition-colors">
          {shortDesc}
        </p>

        {/* Learn More Link */}
        <div className="text-[#F26522] font-bold group-hover:text-[#FFB88C] flex items-center gap-2 transition-colors">
          Learn more <span>→</span>
        </div>
      </div>
    </Link>
  )
}
