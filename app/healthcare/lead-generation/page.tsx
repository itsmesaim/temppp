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
  { icon: 'clipboard', title: 'Lead Generation Strategy', desc: 'Customised patient acquisition plans built around your speciality, target audience, and business objectives.' },
  { icon: 'megaphone', title: 'Google Ads & PPC', desc: 'Targeted search campaigns that capture patients actively looking for treatments and specialist services.' },
  { icon: 'smartphone', title: 'Meta Advertising', desc: 'Facebook and Instagram campaigns designed to reach the right demographics and drive appointment bookings.' },
  { icon: 'search', title: 'Healthcare SEO & Local SEO', desc: 'Improve organic rankings for local medical searches so patients find you before your competitors.' },
  { icon: 'monitor', title: 'Landing Page Design', desc: 'High-converting, patient-centric landing pages built to turn clicks into consultation requests.' },
  { icon: 'trending-up', title: 'Conversion Rate Optimisation', desc: 'Continuous testing and refinement to improve inquiry rates and reduce cost per patient lead.' },
  { icon: 'link', title: 'CRM Integration & Lead Tracking', desc: 'Seamless integration with your CRM to capture, route, and follow up every lead automatically.' },
  { icon: 'bot', title: 'Marketing Automation', desc: 'Automated nurture sequences that keep prospective patients engaged from first inquiry to appointment.' },
  { icon: 'bar-chart', title: 'Analytics & Reporting', desc: 'Transparent performance dashboards with insights on lead volume, cost, and campaign ROI.' },
];

const stats = [
  { number: '15+', label: 'Years of Digital Marketing Experience' },
  { number: '500+', label: 'Lead Campaigns Delivered' },
  { number: '3x', label: 'Average Increase in Patient Inquiries' },
  { number: '24/7', label: 'Campaign Monitoring & Optimisation' },
];

const healthcareTypes = [
  'Multi-Specialty Hospitals',
  'Specialty Clinics',
  'Dental Practices',
  'Diagnostic Laboratories',
  'Physiotherapy Centres',
  'Fertility & IVF Clinics',
  'Eye Care Centres',
  'Ayurveda & Wellness Centers',
];

export default function HealthcareLeadGenerationPage() {
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
                <span className="text-[#E31E24]">Lead Generation.</span>
              </h1>
            </HeroItem>
            <HeroItem delay={0.14}>
              <p className="max-w-2xl text-xl md:text-2xl text-[#888888] mb-10 leading-relaxed">
                Attract high-quality patient inquiries, appointment bookings, and consultation requests through
                strategic digital marketing campaigns built specifically for healthcare providers.
              </p>
            </HeroItem>
            <HeroItem delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
                  >
                    Get a Free Strategy Session
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
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            Connecting Healthcare Providers with Patients Who Need Them Most
          </h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-5">
            In today&apos;s competitive healthcare industry, effective lead generation requires a combination of
            data-driven marketing, advanced targeting, and continuous optimisation. SNK is a trusted
            <strong className="text-white"> healthcare lead generation agency</strong> offering result-driven services
            for hospitals, clinics, doctors, diagnostic centres, and healthcare organisations across Navi Mumbai, Mumbai,
            Thane, and Maharashtra.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We create customised campaigns using SEO, Google Ads, Meta advertising, social media marketing, landing
            page optimisation, and conversion-focused strategies to connect healthcare providers with patients actively
            searching for medical treatments and specialist services online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our Healthcare Lead Generation Services
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl">
            A comprehensive suite of patient acquisition solutions designed to grow your practice sustainably.
          </p>
        </div>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <HoverLift>
              <div className="p-7 rounded-2xl bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#E31E24]/30 transition-colors group h-full">
                <div className="mb-4"><ServiceIcon name={s.icon} size={28} /></div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#E31E24] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">{s.desc}</p>
              </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Healthcare Types */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Who We Serve
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-8">
              Whether you operate a specialty clinic, diagnostic laboratory, dental practice, multi-specialty
              hospital, or healthcare centre, we help increase patient acquisition while maximising marketing ROI.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#E31E24] px-8 text-sm font-semibold text-white hover:bg-[#C01A1F] transition-all"
            >
              Start Growing Your Practice →
            </Link>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-3">
            {healthcareTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 p-4 rounded-xl bg-[#0D0D0D] border border-[#2A2A2A]">
                <div className="w-2 h-2 rounded-full bg-[#E31E24] flex-shrink-0" />
                <span className="text-[#CCCCCC] text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal className="text-center max-w-3xl mx-auto" variant="scaleIn">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Ready to Increase Patient Inquiries?
          </h2>
          <p className="text-[#888888] text-xl mb-10">
            Partner with SNK for expert healthcare lead generation services and let our
            specialists create a customised strategy that drives measurable growth.
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
