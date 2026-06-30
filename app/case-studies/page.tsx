'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies, allServices } from '../../lib/case-studies-data';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesFilter =
        activeFilter === 'All' ||
        cs.services.some((s) =>
          s.toLowerCase().includes(activeFilter.toLowerCase())
        ) ||
        cs.industry.toLowerCase().includes(activeFilter.toLowerCase());

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        cs.client.toLowerCase().includes(q) ||
        cs.industry.toLowerCase().includes(q) ||
        cs.services.some((s) => s.toLowerCase().includes(q)) ||
        cs.title.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-24 md:py-32 border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(227,30,36,0.08)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#555555] mb-8">
            <Link href="/" className="hover:text-[#E31E24] transition">Home</Link>
            <span>/</span>
            <span className="text-[#888888]">Case Studies</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/20 text-[#E31E24] text-xs tracking-[3px] mb-6">
              PROVEN RESULTS
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[0.95] mb-6">
              Real Results for<br />
              <span className="text-[#E31E24]">Real Businesses.</span>
            </h1>
            <p className="text-xl text-[#888888] max-w-2xl mb-10">
              Discover how SNK helps businesses grow through web development, SEO, branding, digital marketing, and software solutions — with results that speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-base font-semibold text-white hover:bg-[#C01A1F] transition-all active:scale-[0.985]"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-base font-medium text-white hover:bg-[#1A1A1A] hover:border-[#E31E24] transition-all"
              >
                Free Website Audit
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '40+', label: 'Brands Served' },
              { value: '4.2x', label: 'Average ROAS' },
              { value: '300%', label: 'Max Traffic Growth' },
              { value: '94%', label: 'Top 10 Keywords' },
            ].map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-center">
                <div className="text-3xl font-semibold tracking-tighter text-[#E31E24] mb-1">{stat.value}</div>
                <div className="text-xs text-[#666666] tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS + SEARCH */}
      <section className="py-10 border-b border-[#2A2A2A] bg-[#0D0D0D] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 flex-1">
              {allServices.map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveFilter(service)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeFilter === service
                      ? 'bg-[#E31E24] text-white'
                      : 'bg-[#1A1A1A] border border-[#2A2A2A] text-[#888888] hover:border-[#E31E24] hover:text-white'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full md:w-64 flex-shrink-0">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#555555]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search client, industry, service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-[#555555] focus:border-[#E31E24] focus:outline-none transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY GRID */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-[#666666]">Try adjusting your filters or search terms</p>
              <button
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-6 px-6 py-2 rounded-full bg-[#E31E24] text-white text-sm font-medium hover:bg-[#C01A1F] transition"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-[#555555]">
                Showing <span className="text-white font-medium">{filtered.length}</span> case {filtered.length === 1 ? 'study' : 'studies'}
                {activeFilter !== 'All' && <span> in <span className="text-[#E31E24]">{activeFilter}</span></span>}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((cs) => (
                  <Link
                    key={cs.id}
                    href={`/case-studies/${cs.slug}`}
                    className="case-card group relative block rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24] overflow-hidden"
                  >
                    {/* Cover Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={cs.coverImage}
                        alt={cs.client}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-[#E31E24]/90 text-white text-xs font-semibold backdrop-blur-sm">
                          {cs.industry}
                        </span>
                        {cs.featured && (
                          <span className="px-3 py-1 rounded-full bg-black/60 text-[#FFD700] text-xs font-semibold backdrop-blur-sm border border-[#FFD700]/30">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm p-1.5 flex items-center justify-center">
                        <Image
                          src={cs.clientLogo}
                          alt={cs.client}
                          width={60}
                          height={60}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="font-semibold text-lg text-white tracking-tight group-hover:text-[#E31E24] transition-colors">
                          {cs.client}
                        </h3>
                        <div className="text-[#555555] text-xs mt-1">
                          {cs.duration} • {cs.services.slice(0, 2).join(', ')}
                        </div>
                      </div>

                      <p className="text-[#888888] text-sm leading-relaxed mb-4 line-clamp-2">
                        {cs.shortDesc}
                      </p>

                      {/* Key Result */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#E31E24]/30 transition-colors mb-4">
                        <span className="text-xs text-[#555555]">Key Result</span>
                        <span className="text-[#E31E24] font-semibold text-sm text-right">{cs.keyResult}</span>
                      </div>

                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {cs.services.slice(0, 3).map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded-md bg-[#1A1A1A] border border-[#2A2A2A] text-[#666666] text-xs">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium text-[#666666] group-hover:text-white transition-colors">
                        View Case Study
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#0D0D0D] border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/20 text-[#E31E24] text-xs tracking-[3px] mb-6">
            YOUR TURN
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
            Ready to become our next<br />
            <span className="text-[#E31E24]">success story?</span>
          </h2>
          <p className="text-[#666666] text-lg mb-8">
            Let&apos;s build your case study together. Book a free strategy call and see how we can grow your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-base font-semibold text-white hover:bg-[#C01A1F] transition-all active:scale-[0.985]"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-base font-medium text-white hover:bg-[#1A1A1A] hover:border-[#E31E24] transition-all"
            >
              Free Website Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}