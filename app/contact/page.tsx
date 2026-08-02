'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import { CLINIC } from '@/lib/data/site'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner 
        title="Contact Us"
        subtitle="Get in touch with our team for any queries or to book an appointment"
        bgImage="/images/IMG_7126.JPG.jpeg"
      />

      <main>
        {/* Contact Info & Form */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Contact Information</h2>
                </div>

                <div className="flex gap-4">
                  <Phone size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Phone</p>
                    <a href={`tel:${CLINIC.phoneRaw}`} className="text-[#475569] hover:text-[#F26522]">
                      {CLINIC.phone}
                    </a>
                    <p className="text-[#475569] text-sm mt-1">{CLINIC.phone2}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Email</p>
                    <a href={`mailto:${CLINIC.email}`} className="text-[#475569] hover:text-[#F26522]">
                      {CLINIC.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Address</p>
                    <p className="text-[#475569]">{CLINIC.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Hours</p>
                    <p className="text-[#475569]">{CLINIC.hours}</p>
                    <p className="text-[#F26522] font-bold text-sm mt-1">{CLINIC.emergency}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">WhatsApp</p>
                    <a href={`https://wa.me/${CLINIC.phoneRaw}`} className="text-[#475569] hover:text-[#F26522]">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-8 rounded-xl border border-[#E2E8F0]">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        >
                          <option value="">Select a subject</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Braces">Braces</option>
                          <option value="Implants">Implants</option>
                          <option value="Cosmetic">Cosmetic</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#F26522] text-white py-3 rounded-lg font-bold hover:bg-[#E55A1A] transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="h-96 bg-gray-200">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Dr.+Mulchandani's+Ranjhi+Dental+Clinic,+Jabalpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
