'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// ponytail: keyword map is enough - no fuzzy lib for a handful of routes
const ROUTES: { href: string; label: string; desc: string; keys: string[] }[] = [
  {
    href: '/services/seo/',
    label: 'SEO Services',
    desc: 'Rank higher and grow organic traffic',
    keys: ['seo', 'search-engine'],
  },
  {
    href: '/services/aeo/',
    label: 'AEO Services',
    desc: 'Show up in AI and answer engines',
    keys: ['aeo', 'answer-engine'],
  },
  {
    href: '/services/social-media/',
    label: 'Social Media Marketing',
    desc: 'Content, community, and paid social',
    keys: ['social', 'instagram', 'facebook'],
  },
  {
    href: '/services/performance-marketing/',
    label: 'Performance Marketing',
    desc: 'Ads that convert and scale',
    keys: ['performance', 'ads', 'ppc', 'google-ads'],
  },
  {
    href: '/services/web-design/',
    label: 'Web Design',
    desc: 'Sites that look sharp and convert',
    keys: ['web-design', 'website', 'design', 'develop'],
  },
  {
    href: '/services/ai-digital-marketing/',
    label: 'AI Digital Marketing',
    desc: 'Smarter campaigns with AI',
    keys: ['ai'],
  },
  {
    href: '/healthcare/',
    label: 'Healthcare Digital Marketing',
    desc: 'Patient growth for clinics & brands',
    keys: ['health', 'hospital', 'clinic', 'doctor'],
  },
  {
    href: '/healthcare/seo/',
    label: 'Healthcare SEO',
    desc: 'Local SEO for healthcare brands',
    keys: ['healthcare-seo'],
  },
  {
    href: '/case-studies/',
    label: 'Case Studies',
    desc: 'Real results for real businesses',
    keys: ['case', 'portfolio', 'work'],
  },
  {
    href: '/blog/',
    label: 'Blog',
    desc: 'Insights on growth and marketing',
    keys: ['blog', 'article'],
  },
  {
    href: '/about/',
    label: 'About Us',
    desc: 'Meet the SNK team',
    keys: ['about', 'team'],
  },
  {
    href: '/contact/',
    label: 'Contact',
    desc: 'Book a free strategy call',
    keys: ['contact', 'call', 'quote'],
  },
  {
    href: '/services/',
    label: 'All Services',
    desc: 'Everything we offer in one place',
    keys: ['service'],
  },
];

const FALLBACK = [
  { href: '/', label: 'Home', desc: 'Back to the main page' },
  { href: '/services/', label: 'Services', desc: 'SEO, ads, social, web & more' },
  { href: '/case-studies/', label: 'Case Studies', desc: 'See our client results' },
  { href: '/contact/', label: 'Contact', desc: 'Talk to our team' },
];

function guess(path: string) {
  const p = path.toLowerCase();
  const seen = new Set<string>();
  const out: { href: string; label: string; desc: string }[] = [];
  for (const r of ROUTES) {
    if (!r.keys.some((k) => p.includes(k))) continue;
    if (seen.has(r.href)) continue;
    seen.add(r.href);
    out.push({ href: r.href, label: r.label, desc: r.desc });
    if (out.length >= 4) break;
  }
  return out.length ? out : FALLBACK;
}

export default function NotFound() {
  const [path, setPath] = useState('');
  useEffect(() => setPath(window.location.pathname), []);
  const tips = guess(path);
  const matched = tips !== FALLBACK && path.length > 1;

  return (
    <div className="relative min-h-[calc(100dvh-5rem)] overflow-hidden border-b border-[#2A2A2A]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#E31E24]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#E31E24]/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-28 text-center md:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E31E24]/30 bg-[#E31E24]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#E31E24]">
          Page moved or missing
        </div>

        <h1 className="mb-5 text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
          We may have changed
          <br />
          <span className="text-[#E31E24]">the page you wanted</span>
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-[#999999] md:text-lg">
          Links get updated as the site grows. No stress - try one of these instead, or head home
          and start fresh.
        </p>

        <div className="w-full max-w-2xl text-left">
          <div className="mb-4 flex items-center justify-between gap-3 px-1">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#E31E24]">
              {matched ? 'Try these instead' : 'Popular pages'}
            </p>
            <span className="text-xs text-[#555555]">{tips.length} options</span>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {tips.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-[#2A2A2A] bg-[#161616] p-5 transition-all hover:border-[#E31E24]/45 hover:bg-[#1A1A1A] hover:shadow-[0_0_32px_-12px_rgba(227,30,36,0.35)]"
                >
                  <span>
                    <span className="mb-1 block text-sm font-semibold text-white group-hover:text-[#E31E24] transition-colors">
                      {t.label}
                    </span>
                    <span className="block text-xs leading-relaxed text-[#777777]">{t.desc}</span>
                  </span>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-[#E31E24] transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex w-full max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#E31E24] px-8 text-sm font-semibold text-white transition-all hover:bg-[#C01A1F] hover:shadow-[0_0_24px_rgba(227,30,36,0.4)]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-sm font-medium text-[#CCCCCC] transition-all hover:border-[#E31E24]/40 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
