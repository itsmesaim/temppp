'use client';

import Link from 'next/link';
import { IconBox } from '../../components/ServiceIcon';
import { services, servicesHubIntro } from '../../lib/services-data';
import { getServiceMetrics, hubMetrics } from '../../lib/service-metrics';
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
  { number: '150+', label: 'Projects Delivered' },
  { number: '100+', label: 'Happy Clients' },
  { number: 'Navi Mumbai', label: 'Serving Maharashtra' },
];

export default function ServicesPageClient() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">
      <section className="relative border-b border-[#2A2A2A] overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E31E24]/6 blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <HeroReveal>
            <HeroItem>
              <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">WHAT WE DO</div>
            </HeroItem>
            <HeroItem delay={0.06}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-6 text-white max-w-4xl">
                Services built
                <br />
                for measurable
                <br />
                <span className="text-[#E31E24]">outcomes.</span>
              </h1>
            </HeroItem>
            <HeroItem delay={0.12}>
              <p className="max-w-2xl text-xl text-[#999999] mb-10 leading-relaxed">
                {servicesHubIntro.paragraphs[0]}
              </p>
            </HeroItem>
            <HeroItem delay={0.18}>
              <Link
                href="/ai-digital-marketing"
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-[#1A0505] border border-[#E31E24]/40 hover:border-[#E31E24] transition-all group"
              >
                <span className="text-white text-sm font-medium">
                  Looking for AI Digital Marketing?
                </span>
                <span className="text-[#E31E24] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Explore AI services
                </span>
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
                Track Record
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                Measurable growth across every channel
              </h2>
              <p className="text-[#666666] text-base leading-relaxed">
                From SEO and paid ads to social and web — SNK campaigns are built around KPIs you
                can actually track. Here&apos;s a snapshot of typical client outcomes.
              </p>
            </div>
            <KpiStrip metrics={hubMetrics.kpis} />
          </Reveal>
          <Reveal delay={0.1} className="grid md:grid-cols-2 gap-5">
            <BarChart data={hubMetrics.barData} title={hubMetrics.barTitle} />
            <LineChart data={hubMetrics.lineData} title={hubMetrics.lineTitle} />
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <Reveal className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase">Our Approach</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5 leading-tight">
              {servicesHubIntro.title}
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-4">
              {servicesHubIntro.paragraphs[1]}
            </p>
            <p className="text-[#666666] text-base leading-relaxed italic">
              {servicesHubIntro.paragraphs[2]}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['SEO', 'AEO', 'Social Media', 'Performance Ads'].map((item, i) => (
              <div
                key={item}
                className={`p-6 rounded-2xl border text-center ${
                  i === 0 ? 'bg-[#1A0505] border-[#E31E24]/40' : 'bg-[#1A1A1A] border-[#2A2A2A]'
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-1 ${i === 0 ? 'text-[#E31E24]' : 'text-white'}`}
                >
                  0{i + 1}
                </div>
                <div className="text-[#888888] text-xs">{item}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 xl:grid-cols-6 gap-5" stagger={0.08}>
          {services.map((s, i) => (
            <StaggerItem
              key={s.slug}
              className={`h-full ${i < 3 ? 'xl:col-span-2' : i === 3 ? 'xl:col-span-2 xl:col-start-2' : 'xl:col-span-2'}`}
            >
              <HoverLift lift={-8}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col h-full p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/50 transition-all duration-300 hover:shadow-[0_0_40px_-12px_rgba(227,30,36,0.3)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <IconBox name={s.icon} size={20} />
                    <span className="text-xs px-3 py-1 rounded-full bg-[#E31E24]/10 text-[#E31E24] border border-[#E31E24]/20 font-medium">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#E31E24] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {getServiceMetrics(s.slug)
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
                    Explore service
                  </span>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-[#161616] py-20 border-t border-[#2A2A2A]">
        <Reveal className="max-w-4xl mx-auto text-center px-6" variant="scaleIn">
          <div className="relative rounded-[2rem] overflow-hidden border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-10 md:p-14">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E31E24]/10 blur-[60px] pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 relative">
              Not sure where to start?
            </h2>
            <p className="text-[#888888] text-lg mb-8 relative">
              We&apos;ll audit your current digital presence and show you exactly where the biggest
              growth opportunities are — for free.
            </p>
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all relative"
              >
                Book Your Free Audit
              </Link>
            </GlowButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
