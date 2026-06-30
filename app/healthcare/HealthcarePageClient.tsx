'use client';

import Link from 'next/link';
import { ServiceIcon, type IconName } from '../../components/ServiceIcon';
import {
  HeroReveal,
  HeroItem,
  Reveal,
  Stagger,
  StaggerItem,
  HoverLift,
  GlowButton,
  motion,
} from '../../components/motion';

const healthcareServices = [
  {
    href: '/healthcare/seo',
    icon: 'search' as IconName,
    badge: 'SEO',
    title: 'Healthcare SEO',
    desc: 'Specialized SEO services for hospitals, clinics, doctors, and diagnostic centres across Navi Mumbai, Mumbai, and Maharashtra — medical keyword research, local SEO, Google Business Profile optimization, and healthcare content that helps patients find trusted providers online.',
    highlights: ['Medical Keyword Research', 'Local SEO', 'Technical SEO', 'Google Business Profile'],
  },
  {
    href: '/healthcare/social-media',
    icon: 'smartphone' as IconName,
    badge: 'Social Media',
    title: 'Healthcare Social Media',
    desc: 'Specialized social media solutions for doctors, clinics, and hospitals — creating informative, compliant content for patient education, community engagement, healthcare awareness, and brand building across all major platforms.',
    highlights: ['Content Creation', 'Patient Engagement', 'Paid Social Ads', 'Reputation Management'],
  },
  {
    href: '/healthcare/lead-generation',
    icon: 'target' as IconName,
    badge: 'Lead Generation',
    title: 'Healthcare Lead Generation',
    desc: 'Result-driven healthcare lead generation for hospitals, clinics, and diagnostic centres — using SEO, Google Ads, Meta advertising, landing pages, CRM integration, and conversion optimization to attract high-quality patient inquiries.',
    highlights: ['Google Ads & PPC', 'Meta Advertising', 'CRM Integration', 'Landing Pages'],
  },
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '100+', label: 'Clients Served' },
  { number: '3x', label: 'Avg. Patient Inquiry Growth' },
  { number: 'Mumbai', label: 'Navi Mumbai & Beyond' },
];

export default function HealthcarePageClient() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">
      {/* Hero */}
      <section className="relative border-b border-[#2A2A2A] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/10 via-transparent to-transparent pointer-events-none"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <HeroReveal>
            <HeroItem>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[3px] font-semibold mb-6">
                ✦ HEALTHCARE SPECIALISATION
              </div>
            </HeroItem>
            <HeroItem delay={0.08}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-6 text-white max-w-4xl">
                Digital Marketing<br />
                <span className="text-[#E31E24]">for Healthcare.</span>
              </h1>
            </HeroItem>
            <HeroItem delay={0.14}>
              <p className="max-w-2xl text-xl md:text-2xl text-[#999999] mb-10 leading-relaxed">
                SNK offers result-driven healthcare digital marketing for hospitals, clinics, doctors, diagnostic centres, and healthcare organizations across Navi Mumbai, Mumbai, Thane, and Maharashtra — connecting providers with patients actively searching for medical services online.
              </p>
            </HeroItem>
            <HeroItem delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
                  >
                    Book a Free Consultation
                  </Link>
                </GlowButton>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#1A1A1A] transition-all"
                >
                  All Services
                </Link>
              </div>
            </HeroItem>
          </HeroReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#2A2A2A]">
        <Stagger className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10" fast>
          {stats.map((s) => (
            <StaggerItem key={s.number} variant="scaleIn">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#E31E24] mb-2">{s.number}</div>
                <div className="text-sm text-[#666666]">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Healthcare Digital Marketing That Delivers Results
            </h2>
            <p className="text-[#999999] text-lg leading-relaxed mb-5">
              Effective healthcare marketing requires data-driven campaigns, advanced targeting, and continuous optimization. Our services use SEO, Google Ads, Meta advertising, social media marketing, landing page optimization, and conversion-focused strategies to generate qualified patient leads.
            </p>
            <p className="text-[#999999] text-lg leading-relaxed">
              Whether you operate a specialty clinic, diagnostic laboratory, dental practice, multi-specialty hospital, or healthcare center, we help increase patient acquisition while maximizing marketing ROI — trusted by providers across Navi Mumbai, Mumbai, Thane, and Maharashtra.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <Reveal className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our Healthcare Marketing Services
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl">
            Three specialised services, each designed for a specific aspect of your healthcare practice&apos;s digital growth.
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.1}>
          {healthcareServices.map((s) => (
            <StaggerItem key={s.href}>
              <HoverLift>
                <Link
                  href={s.href}
                  className="group p-8 rounded-2xl bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors block h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <ServiceIcon name={s.icon} size={30} />
                    <span className="text-xs px-3 py-1 rounded-full bg-[#E31E24]/10 text-[#E31E24] border border-[#E31E24]/20 font-medium">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#E31E24] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-6">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {s.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[#555555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24]/50" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-[#E31E24] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Learn More →
                  </div>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal className="text-center max-w-3xl mx-auto" variant="scaleIn">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Let&apos;s Grow Your Healthcare Practice
          </h2>
          <p className="text-[#888888] text-xl mb-10">
            Partner with SNK and connect with more patients through data-driven, compliant,
            and results-focused healthcare digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
              >
                Book a Free Consultation
              </Link>
            </GlowButton>
            <Link
              href="/case-studies"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#1A1A1A] transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}