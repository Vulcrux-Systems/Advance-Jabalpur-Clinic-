'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { CLINIC } from '@/lib/data/site';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/doctors', label: 'DOCTORS' },
  { href: '/treatments', label: 'TREATMENTS' },
  { href: '/clinical-setup', label: 'SETUP' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/contact', label: 'CONTACT' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="Advanced Ranjhi Dental Logo" className="h-10 w-auto" />
          <span className="font-extrabold text-[#0F4C81] text-lg lg:text-xl hidden sm:inline tracking-tight">
            Advance Dental Jabalpur
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#475569] hover:text-[#0F4C81] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="hidden sm:inline-block bg-[#F26522] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#E55A1A] transition"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#E2E8F0] lg:hidden">
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#475569] hover:text-[#0F4C81] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href={`tel:${CLINIC.phoneRaw}`} className="bg-[#F26522] text-white px-4 py-2 rounded-lg text-sm font-semibold mt-4 text-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
