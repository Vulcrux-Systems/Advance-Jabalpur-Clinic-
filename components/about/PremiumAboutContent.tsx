'use client'

import { motion } from 'framer-motion'

const contentSections = [
  {
    title: "About Us",
    content: (
      <p className="text-lg leading-relaxed text-[#475569]">
        Built on trust and efficiency, Advance Jabalpur Clinic is one of the <strong className="text-[#0F172A]">best dental clinics in Jabalpur</strong>. Home to highly-skilled and experienced dentists in Jabalpur, the multi-specialty dental clinic has all the latest medical equipment, ensuring a world-class dental experience.
      </p>
    )
  },
  {
    title: "A Centre of Clinical Excellence for Everyone",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-[#475569]">
        <p>
          This multi-specialty dental clinic is here to redefine dentistry. With an impressive list of qualified professionals, the latest equipment, superior quality, and the finest treatment available, we promise to deliver a truly world-class dental experience.
        </p>
        <p>
          Centred in <strong className="text-[#0F172A]">Jabalpur</strong>, this clinic is a centre of excellence in the field of dentistry with a mission to offer a whole gamut of dental services at an affordable price tag, while laying special emphasis on convenience and customer satisfaction.
        </p>
        <p>
          Brainchild of outstanding professionals, this centre was incepted with the sole purpose of making international dental care affordable for the people of Jabalpur.
        </p>
        <p>
          The Panel of its &quot;Signature Clinic&quot; has specialists from every branch of dentistry with a special focus on orthodontics (Treatment with Braces). Moreover, their resident panel has a Periodontist, a Prosthodontist, and a general practitioner.
        </p>
      </div>
    )
  },
  {
    title: "Speciality of the Clinic",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-[#475569]">
        <p>
          A compilation of the finest speciality doctors/professionals in the city dedicated to the cause of dentistry and ever so ready to serve you with compassion. We provide all forms of modern dental treatment available under one common roof.
        </p>
        <p>
          It is one of the finest orthodontic clinics in the city with all forms of treatment available including - metal braces, ceramic braces, self-ligating braces, clear aligner treatment, Invisalign, and lingual orthodontics.
        </p>
        <p>
          Here you are offered the latest and superior quality equipment and infrastructure. A value for money clinic where our prime focus is providing you quality care at a very affordable cost. We follow strict sterilization protocols using international guidelines (OSHA protocol). Our staffs are well-behaved, equally well-trained, and ready to help you out in every possible way.
        </p>
      </div>
    )
  },
  {
    title: "Why Us?",
    content: (
      <p className="text-lg leading-relaxed text-[#475569]">
        Here at Advance Jabalpur Clinic, we believe that everyone deserves a healthy smile. We have the <strong className="text-[#0F172A]">best orthodontist in Jabalpur</strong> and the <strong className="text-[#0F172A]">top cosmetic dentist in Jabalpur</strong> on board. Our patients are our top priority. We focus on building an organic and long-lasting relationship with our patients. Simply put, we believe in utmost transparency.
      </p>
    )
  },
  {
    title: "Affordable & Quality Services",
    content: (
      <p className="text-lg leading-relaxed text-[#475569]">
        We help improve your confidence one smile at a time! We understand how a healthy smile can bring in positivity. Our qualified and experienced team of professionals is committed to providing superior quality dentistry at affordable costs. Our dedication and hard work make us stand ahead of the crowd. Being one of the <strong className="text-[#0F172A]">best cosmetic dental clinics in Jabalpur</strong> and home to the <strong className="text-[#0F172A]">top dentist in Jabalpur</strong>, we strive to provide our patients with a positive experience. Come, let us assist you in starting your journey to a beautiful, confident smile!
      </p>
    )
  },
  {
    title: "Best Dentist in Jabalpur",
    content: (
      <p className="text-lg leading-relaxed text-[#475569]">
        We have an array of highly-experienced professionals of different calibers to satisfy the growing aspirations of the patients. What to expect? Our team of experienced orthodontists in Jabalpur will welcome you with huge smiles! In the hands of our specialized staff, you will feel safe and comfortable.
      </p>
    )
  },
  {
    title: "Best Cosmetic Dentist",
    content: (
      <p className="text-lg leading-relaxed text-[#475569]">
        We also specialize in cosmetic dentistry, which is done to improve the appearance of an individual&apos;s gum, teeth, and/or bite. It is primarily focused on the improvement of dental aesthetics and the overall appearance of an individual&apos;s smile. Book an appointment with our experienced cosmetic dentists in Jabalpur to learn more about our services!
      </p>
    )
  },
  {
    title: "Our Services",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-[#475569]">
        <p>
          From <strong className="text-[#0F172A]">Root Canal Treatment, Dental Braces Treatment to Dental Implants, Invisible braces and Invisalign</strong> - we are your one-stop solution for all dental needs!
        </p>
        <p>
          Our range of treatment includes metal braces, self-ligating braces, Damon braces, Ceramic braces, Lingual braces, Clear aligners, and Invisalign treatment. We have a complete in-house setup for all forms of dental treatment using the latest and superior quality equipment and state-of-the-art infrastructure. We follow strict sterilization protocols as per international guidelines (OSHA protocol).
        </p>
      </div>
    )
  }
]

export default function PremiumAboutContent() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E8F5FF] rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-24 right-1/4 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm border border-[#E8F5FF]">
              ✨ WHO WE ARE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#F26522]">Dentistry</span> in Jabalpur
            </h2>
            <p className="text-[#475569] text-lg">
              A legacy built on trust, efficiency, and a commitment to providing you with the best world-class dental experience.
            </p>
          </motion.div>
        </div>

        {/* Content Grid (4 cards per row on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentSections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.15 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#F1F5F9] relative group hover:shadow-md transition-shadow h-full flex flex-col"
            >
              <div className="absolute -left-3 -top-3 w-10 h-10 bg-[#F26522] text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                {idx + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 mt-2 ml-4">
                {section.title}
              </h3>
              <div className="ml-4 flex-grow text-base">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
