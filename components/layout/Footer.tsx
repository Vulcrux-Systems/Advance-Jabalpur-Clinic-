import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Globe, ChevronRight } from 'lucide-react';
import { CLINIC } from '@/lib/data/site';

export function Footer() {
  return (
    <footer className="bg-[#0F4C81] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About (4 cols) */}
          <div className="lg:col-span-4 pr-4">
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-center gap-3 mb-2">
                <img src="/images/logo.jpeg" alt="Advanced Ranjhi Dental Logo" className="h-14 w-auto mix-blend-screen grayscale invert brightness-200" />
              </div>
            </div>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-8 pr-4">
              Painless dental care powered by the latest technology. We are committed to delivering world-class dentistry in Jabalpur with care, precision and warmth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Treatments', href: '/treatments' },
                { name: 'Doctors', href: '/doctors' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-100/80 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#F26522]" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-3">
              {[
                'Orthodontics & Braces',
                'Invisalign & Aligners',
                'Dental Implants',
                'Painless Root Canal',
                'Cosmetic Dentistry',
                'Kids Dentistry'
              ].map((treatment) => (
                <li key={treatment}>
                  <Link href="#" className="text-blue-100/80 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#F26522]" /> {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 whitespace-nowrap">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100/80 text-sm leading-relaxed">{CLINIC.address}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-[#F26522] flex-shrink-0" />
                <a href={`tel:${CLINIC.phoneRaw}`} className="text-blue-100/80 hover:text-white text-sm transition-colors">{CLINIC.phone}</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-[#F26522] flex-shrink-0" />
                <a href={`mailto:${CLINIC.email}`} className="text-blue-100/80 hover:text-white text-sm transition-colors">info@advancedentaljabalpur.in</a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={18} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100/80 text-sm leading-relaxed">Mon — Sat: 10:00 AM — 8:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-100/60">
            © 2026 Dr. Mulchandani's Advanced Ranjhi Dental Hospital. All rights reserved.
          </p>
          <p className="text-sm text-blue-100/60">
            Designed with care for healthier smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}


