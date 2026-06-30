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
    icon: 'search' as IconName,
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Improve rankings, increase traffic, generate more leads.',
    desc: 'Professional SEO services in Navi Mumbai that help your business rank higher on Google and generate quality leads. We develop customized SEO strategies combining technical knowledge, content optimization, and data-driven insights for sustainable online growth.',
    features: ['Keyword Research & Competitor Analysis', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Local SEO Strategies', 'Google Business Profile Optimization', 'Content Optimization & SEO Strategy', 'High-Quality Link Building', 'Website Speed & Performance', 'Analytics Tracking & Reporting'],
  },
  {
    id: 'aeo',
    icon: 'bot' as IconName,
    title: 'Answer Engine Optimization (AEO)',
    tagline: 'Be the answer across AI-powered search.',
    desc: 'As search technology evolves, businesses need more than traditional SEO. We help you appear in featured snippets, voice search results, AI-generated answers, and knowledge panels by structuring content so search engines and AI platforms deliver your business as the most relevant answer.',
    features: ['Direct Answer Content Optimization', 'FAQ Creation & Optimization', 'Schema Markup & Structured Data', 'Featured Snippet Optimization', 'Voice Search Optimization', 'Knowledge Graph & Entity Optimization', 'AI Search Readiness Assessment', 'Semantic SEO & Topical Authority'],
  },
  {
    id: 'social',
    icon: 'smartphone' as IconName,
    title: 'Social Media Marketing',
    tagline: 'Build communities. Drive conversations.',
    desc: 'Strategic social media marketing that helps businesses attract the right audience, strengthen brand presence, and convert engagement into loyal customers — across Instagram, Facebook, LinkedIn, and more.',
    features: ['Social Media Strategy', 'Content Creation & Management', 'Community Management', 'Paid Social Advertising', 'Audience Targeting', 'Brand Awareness Campaigns', 'Engagement Optimization', 'Analytics & Performance Reporting'],
  },
  {
    id: 'performance',
    icon: 'target' as IconName,
    title: 'Performance Marketing',
    tagline: 'Turn advertising spend into measurable revenue.',
    desc: 'Data-driven advertising strategies that focus on results, not just clicks. We create, manage, and optimize campaigns that generate qualified leads, increase sales, and maximize return on investment.',
    features: ['Google Ads Management', 'Facebook & Instagram Advertising', 'Lead Generation Campaigns', 'E-commerce Marketing', 'Remarketing & Retargeting', 'Landing Page Optimization', 'Conversion Tracking & Analytics', 'Performance Max Campaigns'],
  },
  {
    id: 'web',
    icon: 'monitor' as IconName,
    title: 'Web Design & Development',
    tagline: 'Modern, responsive, conversion-focused websites.',
    desc: 'SNK is a leading website development company in Navi Mumbai, creating modern, responsive, and conversion-focused websites that enhance credibility, improve user experience, search visibility, and lead generation.',
    features: ['Corporate Website Development', 'Business Website Development', 'eCommerce Website Development', 'Landing Page Design', 'WordPress Website Development', 'UI/UX Design Services', 'Website Maintenance & Support', 'Website Speed Optimization', 'SEO-Friendly Website Development'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">
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
            <p className="max-w-2xl text-xl text-[#999999] mb-10 leading-relaxed">
              Looking for the best digital marketing agency in Navi Mumbai? With over 15+ years of experience, we provide customized digital marketing services that combine strategic planning, creative execution, and data-driven insights to help startups, SMEs, healthcare brands, and enterprises grow online.
            </p>
          </HeroItem>
          <HeroItem delay={0.18}>
            <Link
              href="/ai-digital-marketing"
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-[#1A0505] border border-[#E31E24]/40 hover:border-[#E31E24] transition-all group"
            >
              <span className="text-[#E31E24] text-sm">✦</span>
              <span className="text-white text-sm font-medium">Looking for AI Digital Marketing?</span>
              <span className="text-[#E31E24] text-sm font-semibold group-hover:translate-x-1 transition-transform">Explore AI services →</span>
            </Link>
          </HeroItem>
          <HeroItem delay={0.24}>
            <GlowButton>
              <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all">
                Get a Free Strategy Session
              </Link>
            </GlowButton>
          </HeroItem>
        </HeroReveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <Stagger className="grid md:grid-cols-2 gap-6" stagger={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <HoverLift>
                <div
                  id={service.id}
                  className="group relative rounded-3xl p-9 border bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#E31E24]/50 transition-colors duration-300 h-full"
                >
                  <div className="mb-4 opacity-80"><ServiceIcon name={service.icon} size={36} /></div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 text-white">{service.title}</h2>
                  <div className="text-[#999999] text-sm mb-4 italic">{service.tagline}</div>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">{service.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-[#CCCCCC]">
                        <span className="text-[#E31E24] text-xs">→</span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:gap-3 transition-all">
                    Get Started →
                  </Link>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

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
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-white text-[#E31E24] text-lg font-bold px-10 hover:bg-[#F0F0F0] transition-all">
              Book Your Free Audit
            </Link>
          </GlowButton>
        </Reveal>
      </section>
    </div>
  );
}