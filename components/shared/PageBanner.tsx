import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
  to?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: Breadcrumb[];
}

export default function PageBanner({ title, subtitle, breadcrumb = [] }: PageBannerProps) {
  return (
    <section className="bg-gradient-to-br from-[#0F4C81] via-[#1B5FA0] to-[#0F4C81] text-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Breadcrumb */}
      {breadcrumb.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:text-gray-200 transition">Home</Link>
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={16} />
                {item.href || item.to ? (
                  <Link href={item.href || item.to || '#'} className="hover:text-gray-200 transition">{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-balance">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
