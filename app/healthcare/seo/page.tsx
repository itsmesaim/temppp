'use client';

import Link from 'next/link';
import { ServiceIcon, type IconName } from '../../../components/ServiceIcon';
import {
  HeroReveal,
  HeroItem,
  Reveal,
  Stagger,
  StaggerItem,
  HoverLift,
  GlowButton,
  motion,
} from '../../../components/motion';

const seoServices: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'key', title: 'Medical Keyword Research', desc: 'In-depth research into how patients search for your speciality — targeting terms that drive qualified appointments.' },
  { icon: 'map-pin', title: 'Local SEO & Maps Optimisation', desc: 'Dominate local search results and Google Maps for your area, speciality, and service type.' },
  { icon: 'hospital', title: 'Google Business Profile', desc: 'Full optimisation and ongoing management of your GBP listing to maximise local visibility and patient reviews.' },
  { icon: 'settings', title: 'Technical SEO Audits', desc: 'Comprehensive site audits fixing speed, crawlability, structured data, and Core Web Vitals issues.' },
  { icon: 'file-text', title: 'Healthcare Content Optimisation', desc: 'Patient-friendly, medically accurate content crafted to rank and convert — from service pages to blogs.' },
  { icon: 'star', title: 'Online Reputation Management', desc: 'Build and protect your online reputation through strategic review acquisition and response management.' },
  { icon: 'link', title: 'Authority Link Building', desc: 'Ethical link-building from healthcare directories, medical associations, and credible publishers.' },
  { icon: 'bar-chart', title: 'SEO Analytics & Reporting', desc: 'Monthly performance reports with rankings, traffic, and lead data — clearly linked to business outcomes.' },
];

const results = [
  { number: '↑87%', label: 'Average increase in organic traffic' },
  { number: '3.2x', label: 'More patient inquiries from search' },
  { number: '↓40%', label: 'Reduction in cost per acquisition vs paid' },
  { number: 'Top 3', label: 'Google rankings for key healthcare terms' },
];

const whyMatters = [
  'Patients increasingly rely on search engines to find and evaluate healthcare providers',
  'First-page rankings build credibility and trust before a patient contacts you',
  'Local SEO drives nearby patients directly to your clinic or hospital',
  'Organic traffic reduces long-term dependence on paid advertising budgets',
  'Healthcare-specific content establishes you as a specialist authority in your field',
];

export default function HealthcareSEOPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">

      {/* Hero */}
      <section className="relative border-b border-[#2A2A2A] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/10 via-transparent to-transparent pointer-events-none"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <HeroReveal>
            <HeroItem>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[3px] font-semibold mb-6">
                ✦ HEALTHCARE MARKETING
              </div>
            </HeroItem>
            <HeroItem delay={0.08}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-6 text-white max-w-4xl">
                Healthcare<br />
                <span className="text-[#E31E24]">SEO.</span>
              </h1>
            </HeroItem>
            <HeroItem delay={0.14}>
              <p className="max-w-2xl text-xl md:text-2xl text-[#888888] mb-10 leading-relaxed">
                Patients increasingly rely on search engines to find trusted healthcare providers. We help
                hospitals, clinics, and doctors improve online visibility, attract local patients, and build trust
                in highly competitive healthcare markets.
              </p>
            </HeroItem>
            <HeroItem delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
                  >
                    Get a Free SEO Audit
                  </Link>
                </GlowButton>
                <Link
                  href="/healthcare"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#1A1A1A] transition-all"
                >
                  ← Healthcare Services
                </Link>
              </div>
            </HeroItem>
          </HeroReveal>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-[#2A2A2A]">
        <Stagger className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10" fast>
          {results.map((r) => (
            <StaggerItem key={r.number} variant="scaleIn">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#E31E24] mb-2">{r.number}</div>
                <div className="text-sm text-[#666666]">{r.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            SEO Designed for the Healthcare Industry
          </h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-5">
            SNK is a leading <strong className="text-white">healthcare SEO agency</strong> providing
            specialized SEO services for hospitals, clinics, doctors, diagnostic centres, and healthcare organisations
            across Navi Mumbai, Mumbai, and Maharashtra.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our healthcare SEO services include medical keyword research, local SEO, Google Business Profile
            optimization, technical SEO audits, healthcare content optimization, reputation management, and website
            performance improvements — helping medical practices generate more appointment requests and qualified leads.
          </p>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Why Healthcare SEO Matters
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-8">
              Patients are searching for you right now. Without a strong SEO presence, they're finding your competitors instead.
              Healthcare SEO ensures your practice appears when it matters most — the moment patients are ready to book.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4">
            {whyMatters.map((point) => (
              <div key={point} className="flex items-start gap-3 p-4 rounded-xl bg-[#0D0D0D] border border-[#2A2A2A]">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E31E24]/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                </div>
                <span className="text-[#CCCCCC] text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our Healthcare SEO Services
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl">
            A full-spectrum approach to search engine optimisation built for healthcare providers.
          </p>
        </div>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.05} fast>
          {seoServices.map((s) => (
            <StaggerItem key={s.title}>
              <HoverLift>
              <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#E31E24]/30 transition-colors group h-full">
                <div className="mb-4"><ServiceIcon name={s.icon} size={24} /></div>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#E31E24] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">{s.desc}</p>
              </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal className="text-center max-w-3xl mx-auto" variant="scaleIn">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Want More Patients to Find You Online?
          </h2>
          <p className="text-[#888888] text-xl mb-10">
            Partner with SNK, a trusted healthcare SEO agency, and strengthen your healthcare
            brand through effective SEO strategies that drive long-term patient acquisition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
              >
                Get a Free SEO Audit
              </Link>
            </GlowButton>
            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#1A1A1A] transition-all"
            >
              All Services
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
