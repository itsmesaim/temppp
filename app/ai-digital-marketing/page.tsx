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

const capabilities: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'bot',
    title: 'AI-Powered Campaign Optimisation',
    desc: 'Our AI models analyse thousands of data signals in real time to continuously optimise bids, budgets, and targeting — achieving results human management simply cannot match.',
  },
  {
    icon: 'target',
    title: 'Predictive Audience Targeting',
    desc: 'We use machine learning to identify your highest-value audiences before they even search — modelling lookalikes, predicting purchase intent, and targeting at the perfect moment in the customer journey.',
  },
  {
    icon: 'flask',
    title: 'Automated Creative Testing',
    desc: 'Hundreds of ad variants tested simultaneously with AI-driven performance scoring. We identify winning creative combinations faster and scale them before your competitors know what hit them.',
  },
  {
    icon: 'message',
    title: 'Conversational AI & Chatbots',
    desc: 'Deploy intelligent chatbots that qualify leads 24/7, personalise user experiences, and hand off high-intent prospects to your sales team — automatically.',
  },
  {
    icon: 'pen',
    title: 'AI Content Generation at Scale',
    desc: 'Brand-safe, SEO-optimised content produced at a fraction of the time and cost — product descriptions, blog posts, ad copy, and email sequences, all reviewed and refined by our expert team.',
  },
  {
    icon: 'bar-chart',
    title: 'Real-Time Intelligence & Reporting',
    desc: "Live dashboards powered by AI surface actionable insights instantly. Know exactly what's working, what isn't, and what to do next — without wading through spreadsheets.",
  },
  {
    icon: 'search',
    title: 'AI-Enhanced SEO',
    desc: 'Leverage AI to identify ranking opportunities, auto-generate meta content, analyse competitor gaps, and build topical authority clusters that dominate search results at scale.',
  },
  {
    icon: 'mail',
    title: 'Smart Email Marketing Automation',
    desc: 'AI-driven email sequences that adapt to user behaviour — sending the right message, at the right time, to the right segment, automatically improving open and conversion rates.',
  },
  {
    icon: 'cart',
    title: 'AI-Powered Lead Generation',
    desc: 'Intelligent lead scoring, automated nurturing flows, and predictive outreach that identifies your most sales-ready prospects and moves them through the funnel faster.',
  },
];

const results = [
  { number: '3.8x', label: 'Average improvement in ROAS vs. manual management' },
  { number: '62%', label: 'Reduction in cost per acquisition on average' },
  { number: '10x', label: 'More creative variants tested per campaign cycle' },
  { number: '24/7', label: 'Always-on optimisation, never sleeping' },
];

const process = [
  { step: '01', title: 'AI Audit', desc: 'We analyse your existing data, campaigns, and tech stack to identify where AI can make the biggest impact immediately.' },
  { step: '02', title: 'Strategy & Stack', desc: 'We design your bespoke AI marketing architecture — selecting and integrating the right tools for your specific goals.' },
  { step: '03', title: 'Launch & Learn', desc: 'Campaigns go live with AI optimisation active from day one. The system learns fast; results improve week over week.' },
  { step: '04', title: 'Scale & Compound', desc: 'As your AI models accumulate data, performance compounds. The longer we work together, the greater the competitive advantage.' },
];

const faqs = [
  {
    q: 'What is AI Digital Marketing?',
    a: 'AI digital marketing uses artificial intelligence tools — machine learning, natural language processing, predictive analytics — to automate, optimise, and personalise every aspect of your digital campaigns. Instead of relying on manual decisions and weekly check-ins, AI makes thousands of micro-decisions every hour to maximise your results.',
  },
  {
    q: 'How is this different from regular digital marketing?',
    a: 'Traditional marketing depends on human intuition and periodic adjustments. AI marketing operates at machine speed — continuously processing real-time data, testing creative variants, adjusting bids, and personalising content. The difference in performance is significant: our clients typically see 40–60% improvements in key metrics within the first 90 days.',
  },
  {
    q: 'Do I need a large budget to use AI marketing?',
    a: 'No. AI marketing is scalable and works for businesses of all sizes. In fact, smaller budgets often see proportionally greater improvements because AI eliminates wasted spend very efficiently. We tailor our AI solutions to your budget and goals.',
  },
  {
    q: 'Which AI tools do you use?',
    a: 'We use a combination of proprietary models and best-in-class third-party platforms — including Google Performance Max, Meta Advantage+, ChatGPT-based content tools, and custom data pipelines — always matched to what will drive the best results for your specific business.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients see measurable improvement within the first 30–45 days as AI models begin learning from your campaign data. Performance compounds over time — the longer the AI has to learn your audience and market, the sharper and more efficient it becomes.',
  },
];

export default function AIDigitalMarketingPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-clip">

      {/* Hero */}
      <section className="relative border-b border-[#2A2A2A] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/10 via-transparent to-transparent pointer-events-none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E31E24]/5 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <HeroReveal>
            <HeroItem>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[3px] font-semibold mb-6">
                ✦ AI-POWERED SERVICE
              </div>
            </HeroItem>
            <HeroItem delay={0.08}>
              <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.88] mb-6 text-white max-w-4xl">
                AI Digital<br />
                <span className="text-[#E31E24]">Marketing.</span>
              </h1>
            </HeroItem>
            <HeroItem delay={0.14}>
              <p className="max-w-2xl text-xl md:text-2xl text-[#888888] mb-10 leading-relaxed">
                Your competitors are still doing marketing the old way. We use artificial intelligence to outpace them on every channel, every day — from campaigns to content to lead generation.
              </p>
            </HeroItem>
            <HeroItem delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-all"
                  >
                    Get an AI Strategy Session
                  </Link>
                </GlowButton>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#1A1A1A] transition-all"
                >
                  ← All Services
                </Link>
              </div>
            </HeroItem>
          </HeroReveal>
        </div>
      </section>

      {/* Results Bar */}
      <section className="bg-[#E31E24] py-12 overflow-hidden relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <Stagger className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative" fast>
          {results.map((r) => (
            <StaggerItem key={r.number} variant="scaleIn">
              <div>
                <div className="text-5xl font-semibold tracking-tighter text-white mb-1">{r.number}</div>
                <div className="text-white/70 text-sm leading-snug">{r.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* What is AI Marketing */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <Reveal className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">THE DIFFERENCE</div>
            <h2 className="text-5xl font-semibold tracking-tighter text-white mb-6 leading-tight">
              Marketing that thinks,<br />learns, and wins.
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-6">
              Traditional digital marketing relies on human instinct and weekly optimisations. AI marketing operates on machine precision and millisecond decisions — processing millions of data points to maximise every campaign, continuously.
            </p>
            <p className="text-[#888888] text-lg leading-relaxed">
              At SNK, we combine cutting-edge AI tools with deep human expertise. The machines handle the data. Our strategists handle the vision. Together, we drive results that neither could achieve alone.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Manual Marketing', items: ['Weekly optimisations', 'Limited A/B testing', 'Gut-feel targeting', 'Reactive reporting', 'Fixed budgets', 'Slow content output'] },
              { label: 'AI Marketing', items: ['Real-time optimisation', 'Thousands of variants', 'Predictive targeting', 'Proactive intelligence', 'Dynamic budget allocation', 'Content at scale'], isRed: true },
            ].map((col) => (
              <div key={col.label} className={`p-6 rounded-2xl border ${col.isRed ? 'bg-[#1A0505] border-[#E31E24]/40' : 'bg-[#1A1A1A] border-[#2A2A2A]'}`}>
                <div className={`text-xs tracking-[2px] font-semibold mb-4 ${col.isRed ? 'text-[#E31E24]' : 'text-[#555555]'}`}>{col.label}</div>
                {col.items.map((item) => (
                  <div key={item} className={`text-sm py-2 border-b border-[#2A2A2A] last:border-0 ${col.isRed ? 'text-[#CCCCCC]' : 'text-[#555555] line-through'}`}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">CAPABILITIES</div>
        <h2 className="text-5xl font-semibold tracking-tighter text-white mb-4">What we deploy for you.</h2>
        <p className="text-[#888888] text-lg mb-12 max-w-2xl">A full suite of AI marketing capabilities tailored to your business goals — from traffic to leads to revenue.</p>
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <HoverLift>
              <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/50 transition-colors duration-300 group h-full">
                <div className="mb-5 group-hover:scale-110 transition-transform duration-300"><ServiceIcon name={cap.icon} size={36} /></div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{cap.title}</h3>
                <p className="text-[#777777] leading-relaxed text-sm">{cap.desc}</p>
              </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">HOW IT WORKS</div>
        <h2 className="text-5xl font-semibold tracking-tighter text-white mb-12">From zero to AI-powered<br />in four steps.</h2>
        <Stagger className="grid md:grid-cols-4 gap-6" stagger={0.1}>
          {process.map((p, i) => (
            <StaggerItem key={p.step}>
            <div className="relative h-full">
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#2A2A2A] z-0" />
              )}
              <HoverLift>
              <div className="relative z-10 p-7 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] h-full hover:border-[#E31E24]/40 transition-colors">
                <div className="text-[#E31E24] text-4xl font-semibold tracking-tighter mb-4">{p.step}</div>
                <h3 className="text-white font-semibold text-xl mb-3">{p.title}</h3>
                <p className="text-[#777777] text-sm leading-relaxed">{p.desc}</p>
              </div>
              </HoverLift>
            </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">FAQ</div>
        <h2 className="text-5xl font-semibold tracking-tighter text-white mb-12">Common questions.</h2>
        <Stagger className="space-y-4" stagger={0.06}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
            <div className="p-7 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/30 transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#E31E24] font-bold text-lg mt-0.5 shrink-0">Q</span>
                <div>
                  <div className="text-white font-semibold text-lg mb-3">{faq.q}</div>
                  <div className="text-[#888888] leading-relaxed">{faq.a}</div>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24">
        <Reveal variant="scaleIn">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[3px] mb-6">
          ✦ LIMITED ONBOARDING SLOTS
        </div>
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-5">
          Ready to let AI work<br />for your brand?
        </h2>
        <p className="text-[#777777] text-xl mb-10">We onboard a limited number of AI marketing clients each quarter. Book your strategy session now to secure your spot.</p>
        <GlowButton>
          <Link
            href="/contact"
            className="inline-flex h-16 items-center justify-center rounded-full bg-[#E31E24] px-12 text-xl font-semibold text-white hover:bg-[#C01A1F] transition-all"
          >
            Book Your AI Strategy Session →
          </Link>
        </GlowButton>
        </Reveal>
      </section>

    </div>
  );
}
