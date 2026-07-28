'use client'

import React from 'react';
import Image from 'next/image';
import { Award, Star, ShieldAlert } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: "Digital Orthodontics: The Future",
    organization: "AIIMS & Indian Orthodontic Society",
    description: "Certificate of Participation presented to Dr. Akhilesh Mulchandani in recognition of his involvement in advanced digital orthodontic education.",
    image: "/images/award_digital_orthodontics.jpg",
    icon: Award,
    badgeColor: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Art And Science Of Porcelain Veneers",
    organization: "The Dental Academy",
    description: "Certificate of Achievement awarded to Dr. Akhilesh Mulchandani upon successful completion of the hands-on course on Porcelain Veneers.",
    image: "/images/award_porcelain_veneers.jpg",
    icon: Star,
    badgeColor: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "Oral Lesion Awareness",
    organization: "SM Fibro",
    description: "Certificate of Appreciation presented to Dr. Akhilesh Mulchandani for recognizing excellence and dedication in oral lesion awareness and patient outcomes.",
    image: "/images/award_oral_lesion.jpg",
    icon: ShieldAlert,
    badgeColor: "bg-blue-500/10 text-blue-600",
  }
];

export default function AchievementsAwards() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-50/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#F26522]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-350 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-4">
            <span className="text-[#F26522]">✦</span> ACHIEVEMENTS & AWARDS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 tracking-tight">
            Recognized Clinical Excellence
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
            Certifications and recognitions awarded to Dr. Akhilesh Mulchandani for his dedication to cutting-edge dentistry.
          </p>
        </div>

        {/* Achievements Grid (3 columns max-w-6xl for optimal display) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-3/4 w-full bg-slate-50 p-5 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full shadow-md rounded-2xl overflow-hidden bg-white border border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Glassmorphic Badge */}
                  <div className="absolute top-8 left-8 z-10 backdrop-blur-md bg-white/95 px-3 py-1.5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-1.5">
                    <div className={`p-1 rounded-lg ${item.badgeColor}`}>
                      <IconComponent size={14} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 tracking-wide uppercase">{item.organization}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
