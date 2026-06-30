'use client';

import Link from 'next/link';
import { IconBox, type IconName } from './ServiceIcon';
import {
  HeroReveal,
  HeroItem,
  Reveal,
  Stagger,
  StaggerItem,
  HoverLift,
  GlowButton,
  motion,
} from './motion';
import { PerformancePanel } from './MarketingCharts';
import type { ServiceMetrics } from '../lib/service-metrics';

const FEATURE_ICONS: IconName[] = [
  'zap',
  'target',
  'settings',
  'search',
  'bar-chart',
  'globe',
  'trending-up',
  'lightbulb',
];

type ServicePageLayoutProps = {
  variant: 'service' | 'healthcare';
  icon: IconName;
  badge: string;
  heroLine1: string;
  heroLine2: string;
  tagline?: string;
  heroDesc: string;
  introTitle: string;
  introParagraphs: string[];
  features: string[];
  highlights: string[];
  featuresTitle: string;
  whyChooseTitle?: string;
  whyChoose?: string[];
  benefits?: string[];
  ctaTitle: string;
  ctaDesc: string;
  ctaLabel: string;
  backHref: string;
  backLabel: string;
  relatedLinks?: { href: string; label: string }[];
  metrics?: ServiceMetrics;
};

export default function ServicePageLayout({
  variant,
  icon,
  badge,
  heroLine1,
  heroLine2,
  tagline,
  heroDesc,
  introTitle,
  introParagraphs,
  features,
  highlights,
  featuresTitle,
  whyChooseTitle = 'Why Choose SNK?',
  whyChoose,
  benefits,
  ctaTitle,
  ctaDesc,
  ctaLabel,
  backHref,
  backLabel,
  relatedLinks,
  metrics,
}: ServicePageLayoutProps) {
  const primaryIntro = introParagraphs[0] ?? '';
  const secondaryIntro = introParagraphs[1] ?? '';
  const insightParagraphs = introParagraphs.slice(2);

  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">
      {/* Hero */}
      <section className="relative border-b border-[#2A2A2A] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/10 via-transparent to-transparent pointer-events-none"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E31E24]/5 rounded-full blur-3xl pointer-events-none hidden lg:block"
          animate={{ scale: [1, 1.12, 1], x: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="max-w-4xl">
            <div>
              <HeroReveal>
                <HeroItem>
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[2px] font-semibold mb-6 uppercase">
                    {badge}
                  </div>
                </HeroItem>
                <HeroItem delay={0.08}>
                  <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-4 text-white">
                    {heroLine1}
                    <br />
                    <span className="text-[#E31E24]">{heroLine2}</span>
                  </h1>
                  {tagline && <p className="text-[#999999] text-lg italic mb-6">{tagline}</p>}
                </HeroItem>
                <HeroItem delay={0.14}>
                  <p className="text-xl md:text-2xl text-[#888888] mb-10 leading-relaxed max-w-xl">
                    {heroDesc}
                  </p>
                </HeroItem>
                <HeroItem delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <GlowButton>
                      <Link
                        href="/contact"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
                      >
                        {ctaLabel}
                      </Link>
                    </GlowButton>
                    <Link
                      href={backHref}
                      className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#1A1A1A] transition-all"
                    >
                      {backLabel}
                    </Link>
                  </div>
                </HeroItem>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="bg-[#E31E24] py-10 overflow-hidden relative border-b border-[#C01A1F]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <Stagger
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative"
          fast
        >
          {highlights.map((h) => (
            <StaggerItem key={h} variant="scaleIn">
              <div className="text-white font-semibold text-sm md:text-base leading-snug">{h}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Intro split */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <Reveal className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[#E31E24] tracking-[4px] text-xs mb-4 uppercase">
              {variant === 'healthcare' ? 'Healthcare Focus' : 'Overview'}
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              {introTitle}
            </h2>
            {primaryIntro && (
              <p className="text-[#AAAAAA] text-lg leading-relaxed mb-5">{primaryIntro}</p>
            )}
            {secondaryIntro && (
              <p className="text-[#888888] text-lg leading-relaxed">{secondaryIntro}</p>
            )}
          </div>
          <div className="rounded-3xl border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] p-8 shadow-[0_0_60px_-20px_rgba(227,30,36,0.2)]">
            <div className="flex items-center gap-3 mb-6">
              <IconBox name={icon} size={22} />
              <span className="text-white font-semibold">At a glance</span>
            </div>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[#CCCCCC] text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            {variant === 'healthcare' && (
              <div className="mt-6 pt-6 border-t border-[#2A2A2A] flex flex-wrap gap-2">
                {['Navi Mumbai', 'Mumbai', 'Thane', 'Maharashtra'].map((loc) => (
                  <span
                    key={loc}
                    className="text-xs px-3 py-1 rounded-full bg-[#E31E24]/10 text-[#E31E24] border border-[#E31E24]/20"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {insightParagraphs.length > 0 && (
          <Stagger className="mt-12 grid md:grid-cols-2 gap-5" stagger={0.08}>
            {insightParagraphs.map((p, i) => (
              <StaggerItem key={p}>
                <div className="h-full p-6 rounded-2xl bg-[#161616] border border-[#2A2A2A] border-l-4 border-l-[#E31E24]/70">
                  <div className="text-[#E31E24] text-xs font-semibold tracking-[2px] mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-[#999999] text-sm leading-relaxed">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>

      {metrics && (
        <section className="bg-[#111111] border-b border-[#2A2A2A] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="mb-10">
              <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase">
                Performance Data
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                {variant === 'healthcare'
                  ? 'Healthcare Client Outcomes'
                  : 'Client Results Snapshot'}
              </h2>
              <p className="text-[#666666] text-base mt-3 max-w-2xl">
                Representative metrics from SNK campaigns — illustrating the kind of growth our
                clients typically see within the first six months.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <PerformancePanel
                metrics={metrics.kpis}
                barData={metrics.barData}
                lineData={metrics.lineData}
                barTitle={metrics.barTitle}
                lineTitle={metrics.lineTitle}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="bg-[#161616] border-y border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase">Capabilities</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">{featuresTitle}</h2>
            {tagline && <p className="text-[#666666] text-lg">{tagline}</p>}
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
            {features.map((feature, i) => (
              <StaggerItem key={feature}>
                <HoverLift lift={-6}>
                  <div className="group h-full p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <IconBox name={FEATURE_ICONS[i % FEATURE_ICONS.length]} size={18} />
                      <div>
                        <div className="text-[#E31E24]/60 text-xs font-semibold mb-1">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-white font-medium text-sm leading-snug group-hover:text-[#E31E24] transition-colors">
                          {feature}
                        </h3>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose */}
      {whyChoose && whyChoose.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <Reveal className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase">Advantages</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                {whyChooseTitle}
              </h2>
            </Reveal>
            <Stagger className="lg:col-span-3 grid sm:grid-cols-2 gap-4" stagger={0.05} fast>
              {whyChoose.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/30 transition-colors h-full">
                    <div className="mt-1.5 w-0.5 h-4 rounded-full bg-[#E31E24]/50 flex-shrink-0" />
                    <span className="text-[#CCCCCC] text-sm leading-relaxed">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
          <Reveal className="mb-10">
            <div className="text-[#E31E24] tracking-[4px] text-xs mb-3 uppercase">Outcomes</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">What You Gain</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05} fast>
            {benefits.map((item, i) => (
              <StaggerItem key={item} variant="scaleIn">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0505] to-[#1A1A1A] border border-[#E31E24]/20 text-center">
                  <div className="text-3xl font-bold text-[#E31E24] mb-2 opacity-80">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-white text-sm font-medium leading-snug">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* Related links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 border-b border-[#2A2A2A]">
          <Reveal className="mb-8">
            <h3 className="text-xl font-semibold text-white">
              {variant === 'healthcare' ? 'Other Healthcare Services' : 'Explore More Services'}
            </h3>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 rounded-full border border-[#2A2A2A] text-[#AAAAAA] text-sm hover:border-[#E31E24]/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal variant="scaleIn">
          <div className="relative rounded-[2rem] overflow-hidden border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] shadow-[0_0_80px_-20px_rgba(227,30,36,0.25)]">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E31E24]/10 blur-[80px] pointer-events-none" />
            <div className="relative p-10 md:p-14 text-center">
              <div className="mb-5 flex justify-center">
                <IconBox name={icon} size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
                {ctaTitle}
              </h2>
              <p className="text-[#888888] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                {ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
                  >
                    {ctaLabel}
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
          </div>
        </Reveal>
      </section>
    </div>
  );
}
