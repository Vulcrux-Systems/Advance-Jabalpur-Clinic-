'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    { id: 1, category: 'braces', title: 'Orthodontic Transformation', before: '/gallery/braces-before.jpg', after: '/gallery/braces-after.jpg' },
    { id: 2, category: 'implants', title: 'Dental Implant Case', before: '/gallery/implant-before.jpg', after: '/gallery/implant-after.jpg' },
    { id: 3, category: 'cosmetic', title: 'Smile Makeover', before: '/gallery/cosmetic-before.jpg', after: '/gallery/cosmetic-after.jpg' },
    { id: 4, category: 'braces', title: 'Complex Case Resolution', before: '/gallery/braces2-before.jpg', after: '/gallery/braces2-after.jpg' },
    { id: 5, category: 'whitening', title: 'Professional Whitening', before: '/gallery/whiten-before.jpg', after: '/gallery/whiten-after.jpg' },
    { id: 6, category: 'implants', title: 'Full Mouth Implants', before: '/gallery/implants-before.jpg', after: '/gallery/implants-after.jpg' },
  ];

  const categories = ['all', 'braces', 'implants', 'cosmetic', 'whitening'];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner 
        title="Treatment Results & Gallery"
        subtitle="See the transformations we've created for our patients"
        breadcrumb={[{ label: 'Gallery' }]}
      />

      <main>
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-16 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-lg font-semibold capitalize transition ${
                    selectedCategory === cat
                      ? 'bg-[#F26522] text-white'
                      : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {cat === 'all' ? 'All Results' : cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition">
                  <div className="aspect-square bg-[#F8FAFC] relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#0F4C81] to-[#1B5FA0] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-2">📸</div>
                        <p className="text-white text-sm">Before & After</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#F26522] font-bold mb-2 capitalize">{item.category}</p>
                    <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="text-[#475569] text-sm mt-2">Professional treatment with exceptional results</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Ready for Your Transformation?</h3>
              <p className="text-[#475569] mb-8 max-w-2xl mx-auto">
                Join thousands of happy patients who have transformed their smiles with us
              </p>
              <a href="/contact" className="inline-block bg-[#F26522] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#E55A1A] transition">
                Book Your Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
