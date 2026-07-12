'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import { TECHNOLOGIES } from '@/lib/data/site'
import { Zap, Shield, CheckCircle2 } from 'lucide-react'

export default function ClinicalSetupPage() {
  const safetyMeasures = [
    { title: 'UV Sterilization Chambers', desc: 'Advanced UV technology to eliminate 99.9% of pathogens' },
    { title: 'ISO 9001 Certification', desc: 'Internationally recognized quality management system' },
    { title: 'Medical-Grade Autoclave', desc: 'High-pressure steam sterilization for instruments' },
    { title: 'HEPA Air Filtration', desc: 'Hospital-grade air purification systems' },
    { title: 'Disposable Consumables', desc: 'Single-use items for maximum hygiene' },
    { title: 'Daily Sanitization', desc: 'Complete facility disinfection protocols' },
  ];

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner 
        title="Clinical Setup & Technology"
        subtitle="State-of-the-art infrastructure meeting international standards"
        breadcrumb={[{ label: 'Clinical Setup' }]}
      />

      <main>
        {/* Advanced Technology */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Advanced Technology</h2>
              <p className="text-lg text-[#475569]">German and Swiss equipment for precise diagnosis and treatment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TECHNOLOGIES.map((tech, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-[#F8FAFC] p-8 rounded-xl border border-[#E2E8F0] hover:shadow-lg transition">
                  <div className="w-12 h-12 rounded-lg bg-[#F26522]/10 flex items-center justify-center mb-4">
                    <Zap size={24} className="text-[#F26522]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{tech.name}</h3>
                  <p className="text-[#475569] text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Sterilization */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F4C81] to-[#1B5FA0] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Safety & Sterilization Protocols</h2>
              <p className="text-lg text-white/80">Highest standards of infection control and patient safety</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetyMeasures.map((measure, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle2 size={24} className="text-[#F26522] flex-shrink-0" />
                    <h3 className="text-lg font-bold">{measure.title}</h3>
                  </div>
                  <p className="text-white/80">{measure.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ISO Certification */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-[#0F4C81] to-[#1B5FA0] rounded-2xl p-12 text-white text-center">
              <Shield size={64} className="mx-auto mb-6 text-[#F26522]" />
              <h2 className="text-4xl font-bold mb-4">ISO 9001:2015 Certified</h2>
              <p className="text-xl text-white/80 mb-6">
                Internationally recognized quality management system ensuring consistent excellence in clinical practice, patient safety, and satisfaction
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-white/80">Sterilization Compliance</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">98%+</p>
                  <p className="text-sm text-white/80">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-sm text-white/80">Years Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
