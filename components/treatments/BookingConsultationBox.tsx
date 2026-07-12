'use client'

import Link from 'next/link'
import { CLINIC } from '@/lib/data/site'

interface BookingConsultationBoxProps {
  treatmentName: string
}

export default function BookingConsultationBox({ treatmentName }: BookingConsultationBoxProps) {
  return (
    <div className="sticky top-24 bg-[#0F4C81] text-white rounded-2xl p-8">
      <h3 className="text-2xl font-black mb-4">Book a Consultation</h3>
      <p className="text-white/90 mb-8">
        Speak to a specialist about your {treatmentName} needs.
      </p>

      <Link href="/contact" className="block bg-[#F26522] text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-[#E55A1A] transition mb-4">
        Book Appointment
      </Link>

      <p className="text-center text-white/80 mb-6">Or call us</p>
      <a href={`tel:${CLINIC.phoneRaw}`} className="block text-center text-[#F26522] font-bold mb-8">
        {CLINIC.phone}
      </a>

      {/* Duration */}
      <div className="border-t border-white/20 pt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⏱️</span>
          <div>
            <p className="font-bold mb-2">Duration</p>
            <p className="text-sm text-white/80">
              Most {treatmentName} procedures are completed in 1-3 visits depending on complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="border-t border-white/20 mt-6 pt-6">
        <p className="font-bold mb-4 flex items-center gap-2">
          <span>❤️</span> Why Choose Us
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2">
            <span className="text-[#FFB88C]">✓</span>
            <span>15+ years of specialist expertise</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FFB88C]">✓</span>
            <span>ISO-certified sterilization</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FFB88C]">✓</span>
            <span>Transparent pricing & EMI</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
