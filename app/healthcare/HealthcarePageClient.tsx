'use client';

import Link from 'next/link';
import { IconBox } from '../../components/ServiceIcon';
import { healthcareServices, healthcareHubIntro } from '../../lib/healthcare-data';
import { getHealthcareMetrics, hubMetrics } from '../../lib/service-metrics';
import { KpiStrip, BarChart, LineChart } from '../../components/MarketingCharts';
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

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '100+', label: 'Clients Served' },
  { number: '3', label: 'Core Healthcare Services' },
  { number: '4', label: 'Cities Covered' },
];

const locations = ['Navi Mumbai', 'Mumbai', 'Thane', 'Maharashtra'];

export default function HealthcarePageClient() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">
      <section className="relative border-b border-[#2A2A2A] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/10 via-transparent to-transparent pointer-events-none"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#E31E24]/5 rounded-full blur-3xl pointer-events-none hidden lg:block"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <HeroReveal>
            <HeroItem>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[3px] font-semibold mb-6">
                Healthcare Specialisation
              </div>
            </HeroItem>
            <HeroItem delay={0.08}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-6 text-white max-w-4xl">
                Digital Marketing
                <br />
                <span className="text-[#E31E24]">for Healthcare.</span>
              </h1>
            </HeroItem>
            <HeroItem delay={0.14}>
              <p className="max-w-2xl text-xl md:text-2xl text-[#999999] mb-8 leading-relaxed">
                {healthcareHubIntro.heroDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {locations.map((loc) => (
                  <span
                    key={loc}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1A1A1A] text-[#AAAAAA] border border-[#2A2A2A]"
                  >
                    {loc}
                  </span>
                ))}
              </div>
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

      <section className="bg-[#E31E24] py-12 overflow-hidden relative border-b border-[#C01A1F]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <Stagger
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative"
          fast
        >
          {stats.map((s) => (
            <StaggerItem key={s.label} variant="scaleIn">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{s.number}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-[#111111] border-b border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase">
                Patient Growth
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                Data-driven results for healthcare practices
              </h2>
              <p className="text-[#666666] text-base leading-relaxed">
                SNK healthcare campaigns focus on patient acquisition, local visibility, and
                appointment growth — with metrics that matter to medical practices.
              </p>
            </div>
            <KpiStrip metrics={hubMetrics.kpis} />
          </Reveal>
          <Reveal delay={0.1} className="grid md:grid-cols-2 gap-5">
            <BarChart
              data={hubMetrics.barData}
              title="Healthcare client portfolio"
              unit="Indexed growth across medical practices in Navi Mumbai & Maharashtra"
            />
            <LineChart data={hubMetrics.lineData} title="Patient inquiry trend" />
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <Reveal className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase">
              Why Healthcare DM
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              {healthcareHubIntro.title}
            </h2>
            {healthcareHubIntro.paragraphs.map((p) => (
              <p key={p} className="text-[#888888] text-lg leading-relaxed mb-5 last:mb-0">
                {p}
              </p>
            ))}
          </div>
          <div className="rounded-3xl border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8">
            <h3 className="text-white font-semibold mb-6">Who we serve</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                'Multi-Specialty Hospitals',
                'Specialty Clinics',
                'Dental Practices',
                'Diagnostic Laboratories',
                'Doctors & Practitioners',
              ].map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#161616] border border-[#2A2A2A]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                  <span className="text-[#CCCCCC] text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-10">
          <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase text-center">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Our Healthcare Marketing Services
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.1}>
          {healthcareServices.map((s) => (
            <StaggerItem key={s.href}>
              <HoverLift lift={-10}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/50 transition-all duration-300 hover:shadow-[0_0_40px_-12px_rgba(227,30,36,0.3)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <IconBox name={s.icon} size={20} />
                    <span className="text-xs px-3 py-1 rounded-full bg-[#E31E24]/10 text-[#E31E24] border border-[#E31E24]/20 font-medium">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#E31E24] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                    {s.heroDesc}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {getHealthcareMetrics(s.slug)
                      .kpis.slice(0, 2)
                      .map((kpi) => (
                        <div
                          key={kpi.label}
                          className="p-3 rounded-xl bg-[#0D0D0D] border border-[#2A2A2A]"
                        >
                          <div className="text-[#E31E24] text-sm font-semibold">{kpi.value}</div>
                          <div className="text-[#555555] text-[10px] leading-snug mt-0.5">
                            {kpi.label}
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#0D0D0D] text-[#777777] border border-[#2A2A2A]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#E31E24] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Learn more
                  </span>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal variant="scaleIn">
          <div className="relative rounded-[2rem] overflow-hidden border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] shadow-[0_0_80px_-20px_rgba(227,30,36,0.25)] p-10 md:p-14 text-center">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E31E24]/10 blur-[80px] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight relative">
              Let&apos;s Grow Your Healthcare Practice
            </h2>
            <p className="text-[#888888] text-lg md:text-xl mb-10 max-w-2xl mx-auto relative">
              Partner with SNK and connect with more patients through data-driven, compliant, and
              results-focused healthcare digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
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
          </div>
        </Reveal>
      </section>
    </div>
  );
}
