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

const services = [
  {
    id: 'seo',
    icon: 'trending-up' as IconName,
    tag: null,
    title: 'SEO & Organic Growth',
    tagline: 'Own the search results. Own the market.',
    desc: 'We build comprehensive SEO strategies that compound over time — from deep technical audits and Core Web Vitals optimisation to content architecture and high-authority link acquisition.',
    features: ['Technical SEO Audits', 'Core Web Vitals Optimisation', 'Content Strategy & Clusters', 'Link Building & PR', 'Local & International SEO', 'Rank Tracking & Reporting'],
  },
  {
    id: 'performance',
    icon: 'target' as IconName,
    tag: null,
    title: 'Performance Marketing',
    tagline: 'Every rupee spent, accountable.',
    desc: 'ROI-focused paid media across Meta, Google, TikTok, and programmatic channels. We build full-funnel campaign architectures designed to acquire, nurture, and convert at scale.',
    features: ['Google & Meta Ads Management', 'TikTok & YouTube Advertising', 'Programmatic Display', 'Shopping & Feed Optimisation', 'Conversion Rate Optimisation', 'Attribution Modelling'],
  },
  {
    id: 'web',
    icon: 'monitor' as IconName,
    tag: null,
    title: 'Web Experience',
    tagline: 'Your website should work as hard as you do.',
    desc: 'High-performance websites and digital platforms engineered for speed, conversion, and scalability. We design and develop experiences that turn visitors into customers.',
    features: ['UX/UI Design', 'Next.js & React Development', 'E-Commerce Platforms', 'Page Speed Optimisation', 'A/B Testing Infrastructure', 'CMS Integration'],
  },
  {
    id: 'content',
    icon: 'pen' as IconName,
    tag: null,
    title: 'Content & Storytelling',
    tagline: 'Stories that build authority and drive pipeline.',
    desc: 'Strategic content systems — from thought leadership and long-form SEO content to video scripts and social campaigns — built to establish your brand as the definitive voice in your category.',
    features: ['Content Strategy & Planning', 'Blog & Long-Form Articles', 'Video & Podcast Scripts', 'Social Media Management', 'Email Marketing Sequences', 'Brand Voice Guidelines'],
  },
  {
    id: 'brand',
    icon: 'globe' as IconName,
    tag: null,
    title: 'Brand & Strategy',
    tagline: 'Position. Differentiate. Dominate.',
    desc: 'Positioning frameworks, go-to-market strategy, and brand identity systems that give your company a sharp, defensible market position — and the narrative to own it.',
    features: ['Market Positioning', 'Go-To-Market Strategy', 'Competitive Analysis', 'Brand Identity Systems', 'Messaging Frameworks', 'Launch Planning'],
  },
  {
    id: 'social',
    icon: 'smartphone' as IconName,
    tag: null,
    title: 'Social Media Marketing',
    tagline: 'Build communities. Drive conversations. Convert followers.',
    desc: 'End-to-end social media management across Instagram, Facebook, LinkedIn, and more. We craft platform-native content, grow your audience, and turn engagement into business outcomes.',
    features: ['Social Media Strategy', 'Content Creation & Scheduling', 'Community Management', 'Influencer Partnerships', 'Social Advertising', 'Analytics & Reporting'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 border-b border-[#2A2A2A]">
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E31E24]/6 blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        <HeroReveal>
          <HeroItem>
            <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">WHAT WE DO</div>
          </HeroItem>
          <HeroItem delay={0.06}>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-6 text-white">
              Services built<br />for measurable<br />
              <span className="text-[#E31E24]">outcomes.</span>
            </h1>
          </HeroItem>
          <HeroItem delay={0.12}>
            <p className="max-w-xl text-xl text-[#888888] mb-10">
              From precision SEO to performance marketing — we deploy the right combination of services to grow your brand faster than your competitors.
            </p>
          </HeroItem>
          <HeroItem delay={0.18}>
            <Link
              href="/ai-digital-marketing"
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-[#1A0505] border border-[#E31E24]/40 hover:border-[#E31E24] transition-all group"
            >
              <span className="text-[#E31E24] text-sm">✦</span>
              <span className="text-white text-sm font-medium">Looking for AI Digital Marketing?</span>
              <span className="text-[#E31E24] text-sm font-semibold group-hover:translate-x-1 transition-transform">Explore our AI services →</span>
            </Link>
          </HeroItem>
          <HeroItem delay={0.24}>
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
              >
                Get a Free Strategy Session
              </Link>
            </GlowButton>
          </HeroItem>
        </HeroReveal>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Stagger className="grid md:grid-cols-2 gap-6" stagger={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <HoverLift>
                <div
                  id={service.id}
                  className="group relative rounded-3xl p-9 border bg-[#161616] border-[#2A2A2A] hover:border-[#E31E24]/50 transition-colors duration-300 h-full"
                >
                  {service.tag && (
                    <span className="absolute top-6 right-6 text-[10px] tracking-[3px] font-bold px-3 py-1 rounded-full bg-[#E31E24] text-white">
                      {service.tag}
                    </span>
                  )}

                  <div className="mb-4 opacity-80"><ServiceIcon name={service.icon} size={36} /></div>
                  <h2 className="text-3xl font-semibold tracking-tight mb-1 text-white">{service.title}</h2>
                  <div className="text-[#888888] text-sm mb-4 italic">{service.tagline}</div>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">{service.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-[#CCCCCC]">
                        <span className="text-[#E31E24] text-xs">→</span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:gap-3 transition-all"
                  >
                    Get Started →
                  </Link>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA Band */}
      <section className="bg-[#E31E24] py-16 mt-4 overflow-hidden relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <Reveal className="max-w-4xl mx-auto text-center px-6 relative" variant="scaleIn">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Not sure where to start?</h2>
          <p className="text-white/80 text-xl mb-8">We&apos;ll audit your current digital presence and show you exactly where the biggest growth opportunities are — for free.</p>
          <GlowButton>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white text-[#E31E24] text-lg font-bold px-10 hover:bg-[#F0F0F0] transition-all"
            >
              Book Your Free Audit
            </Link>
          </GlowButton>
        </Reveal>
      </section>
    </div>
  );
}