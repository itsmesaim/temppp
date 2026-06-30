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

const services: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'pen', title: 'Healthcare Content Creation', desc: 'Medically accurate, patient-friendly content that builds authority and educates your audience across platforms.' },
  { icon: 'calendar', title: 'Social Media Management', desc: 'End-to-end management of your Facebook, Instagram, LinkedIn, and YouTube presence.' },
  { icon: 'message', title: 'Patient Engagement Campaigns', desc: 'Interactive campaigns that foster two-way communication and build lasting patient relationships.' },
  { icon: 'heart', title: 'Healthcare Awareness Initiatives', desc: 'Disease awareness, health tips, and seasonal campaigns that position your brand as a trusted authority.' },
  { icon: 'video', title: 'Video Marketing', desc: 'Doctor-led videos, patient testimonials, procedure explainers, and live sessions that build credibility.' },
  { icon: 'megaphone', title: 'Paid Healthcare Advertising', desc: 'Targeted social ad campaigns on Meta and LinkedIn designed to drive appointment bookings and inquiries.' },
  { icon: 'star', title: 'Online Reputation Management', desc: 'Monitor, respond to, and improve your online reviews and patient feedback across platforms.' },
  { icon: 'bar-chart', title: 'Performance Tracking & Reporting', desc: 'Clear, transparent reports on reach, engagement, leads, and conversion — so you always know the ROI.' },
];

const platforms = [
  { name: 'Facebook', desc: 'Patient education & community building' },
  { name: 'Instagram', desc: 'Visual storytelling & brand awareness' },
  { name: 'LinkedIn', desc: 'B2B referrals & professional authority' },
  { name: 'YouTube', desc: 'Long-form video & procedure explainers' },
];

const whyUs = [
  'Deep understanding of healthcare communication compliance',
  'Patient-centric content that builds trust, not just impressions',
  'Medically accurate messaging reviewed by content specialists',
  'Platform-specific strategy tailored to your specialty',
  'Consistent brand voice across all channels',
  'Measurable outcomes aligned to patient acquisition goals',
];

export default function HealthcareSocialMediaPage() {
  return (
    <div className="bg-[#121212] min-h-screen overflow-x-clip">

      {/* Hero */}
      <section className="relative border-b border-[#2E2E2E] overflow-hidden">
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
                Healthcare Social<br />
                <span className="text-[#E31E24]">Media Marketing.</span>
              </h1>
            </HeroItem>
            <HeroItem delay={0.14}>
              <p className="max-w-2xl text-xl md:text-2xl text-[#888888] mb-10 leading-relaxed">
                Build patient trust, increase brand visibility, and grow your healthcare practice through
                strategic, compliant, and engaging social media marketing.
              </p>
            </HeroItem>
            <HeroItem delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
                  >
                    Get Your Social Media Strategy
                  </Link>
                </GlowButton>
                <Link
                  href="/healthcare"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#2E2E2E] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#222222] transition-all"
                >
                  ← Healthcare Services
                </Link>
              </div>
            </HeroItem>
          </HeroReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2E2E2E]">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            Social Media Built for Healthcare Professionals
          </h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-5">
            As an experienced <strong className="text-white">healthcare social media agency</strong>, we understand
            the unique challenges of healthcare communication. Social media has become a powerful platform for patient
            education, community engagement, healthcare awareness, and brand building.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our healthcare marketing specialists create informative, compliant, and engaging content that helps
            healthcare organisations establish credibility and maintain meaningful patient relationships — across
            every platform your patients use.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2E2E2E]">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our Healthcare Social Media Services
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl">
            Everything your healthcare brand needs to grow, engage, and retain patients online.
          </p>
        </div>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.05} fast>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <HoverLift>
              <div className="p-6 rounded-2xl bg-[#181818] border border-[#2E2E2E] hover:border-[#E31E24]/30 transition-colors group h-full">
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

      {/* Platforms */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2E2E2E]">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">Platforms We Manage</h2>
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-5" fast>
          {platforms.map((p) => (
            <StaggerItem key={p.name} variant="scaleIn">
              <HoverLift>
              <div className="p-7 rounded-2xl bg-[#181818] border border-[#2E2E2E] text-center h-full">
                <div className="text-2xl font-bold text-[#E31E24] mb-2">{p.name}</div>
                <div className="text-[#666666] text-sm">{p.desc}</div>
              </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2E2E2E]">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Why Choose SNK?
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-8">
              We develop customised strategies tailored to your healthcare practice, specialty, and business
              goals — focusing on delivering accurate, valuable, and patient-centric information that builds
              confidence and trust.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#E31E24] px-8 text-sm font-semibold text-white hover:bg-[#C01A1F] transition-all"
            >
              Let's Build Your Social Presence →
            </Link>
          </div>
          <div className="lg:w-1/2 space-y-4">
            {whyUs.map((point) => (
              <div key={point} className="flex items-start gap-3 p-4 rounded-xl bg-[#181818] border border-[#2E2E2E]">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E31E24]/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                </div>
                <span className="text-[#CCCCCC] text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal className="text-center max-w-3xl mx-auto" variant="scaleIn">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Attract, Engage & Retain More Patients Online
          </h2>
          <p className="text-[#888888] text-xl mb-10">
            Contact SNK today and discover how our healthcare social media marketing services
            can help your brand grow patient trust and visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
              >
                Contact Us Today
              </Link>
            </GlowButton>
            <Link
              href="/case-studies"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#2E2E2E] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#222222] transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
