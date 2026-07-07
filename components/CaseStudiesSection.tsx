'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedCaseStudies } from '../lib/case-studies-data';

import { Reveal, Stagger, StaggerItem, HoverLift, motion } from './motion';

export default function CaseStudiesSection() {
  const featured = getFeaturedCaseStudies();

  return (
    <section className="py-20 bg-[#0D0D0D] border-t border-[#2A2A2A] overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/20 text-[#E31E24] text-xs tracking-[2px] mb-4">
                PROVEN RESULTS
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white leading-tight">
                Success Stories &<br />
                <span className="text-[#E31E24]">Case Studies</span>
              </h2>
              <p className="mt-4 text-[#888888] max-w-lg text-lg">
                Real campaigns. Measurable outcomes. Here&apos;s how we&apos;ve transformed brands
                across industries into digital growth stories.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} variant="slideLeft">
            <Link
              href="/case-studies"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#888888] hover:text-white group transition"
            >
              VIEW ALL CASE STUDIES
              <motion.span
                className="inline-block"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                →
              </motion.span>
            </Link>
          </Reveal>
        </div>

        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr"
          stagger={0.12}
        >
          {featured.map((cs) => (
            <StaggerItem key={cs.id} variant="scaleIn" className="h-full min-w-0">
              <HoverLift lift={-8} scale={1.015} className="h-full">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="case-card group relative flex h-full min-w-0 flex-col rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24] overflow-hidden"
                >
                  <div className="relative h-40 sm:h-44 lg:h-48 shrink-0 overflow-hidden">
                    <Image
                      src={cs.coverImage}
                      alt={cs.client}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#E31E24]/90 text-white text-xs font-semibold tracking-wide backdrop-blur-sm">
                        {cs.industry}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm p-1.5 flex items-center justify-center">
                      <Image
                        src={cs.clientLogo}
                        alt={cs.client}
                        width={80}
                        height={80}
                        sizes="48px"
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6 min-w-0">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="font-semibold text-lg sm:text-xl text-white tracking-tight group-hover:text-[#E31E24] transition-colors">
                        {cs.client}
                      </h3>
                      <p className="text-[#666666] text-xs sm:text-sm mt-1">
                        {cs.duration} • {cs.services.slice(0, 2).join(' + ')}
                      </p>
                    </div>

                    <p className="text-[#888888] text-sm leading-relaxed mb-4 sm:mb-5 line-clamp-2">
                      {cs.shortDesc}
                    </p>

                    <div className="p-3 sm:p-4 rounded-2xl bg-[#141414] border border-[#2A2A2A] group-hover:border-[#E31E24]/30 transition-colors mb-4 sm:mb-5">
                      <div className="text-xs text-[#666666] mb-1 tracking-wide">KEY RESULT</div>
                      <div className="text-[#E31E24] font-semibold text-base sm:text-lg leading-snug">
                        {cs.keyResult}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#888888] group-hover:text-white transition-colors">
                      View Case Study
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 text-center md:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#2A2A2A] text-white text-sm font-medium hover:border-[#E31E24] hover:text-[#E31E24] transition"
          >
            View All Case Studies →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
