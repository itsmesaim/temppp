import Link from 'next/link';
import { ServiceIcon, type IconName } from '../../../components/ServiceIcon';

const capabilities: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'bot',
    title: 'AI-Powered Campaign Optimisation',
    desc: 'Our proprietary AI models analyse thousands of data signals in real time to continuously optimise bids, budgets, and targeting — achieving results human management simply cannot match.',
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
    desc: 'Live dashboards powered by AI surface actionable insights instantly. Know exactly what\'s working, what isn\'t, and what to do next — without wading through spreadsheets.',
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

export default function AIDigitalMarketingPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">

      {/* Hero */}
      <section className="relative border-b border-[#2A2A2A] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[3px] font-semibold mb-6">
            ✦ NEW SERVICE
          </div>
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.88] mb-6 text-white max-w-4xl">
            AI Digital<br />
            <span className="text-[#E31E24]">Marketing.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-[#888888] mb-10 leading-relaxed">
            Your competitors are still doing marketing the old way. We use artificial intelligence to outpace them on every channel, every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] active:scale-[0.985] transition-all"
            >
              Get an AI Strategy Session
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-[#CCCCCC] hover:bg-[#1A1A1A] transition-all"
            >
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="bg-[#E31E24] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {results.map((r) => (
            <div key={r.number}>
              <div className="text-5xl font-semibold tracking-tighter text-white mb-1">{r.number}</div>
              <div className="text-white/70 text-sm leading-snug">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is AI Marketing */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
              { label: 'Manual Marketing', items: ['Weekly optimisations', 'Limited A/B testing', 'Gut-feel targeting', 'Reactive reporting'] },
              { label: 'AI Marketing', items: ['Real-time optimisation', 'Thousands of variants', 'Predictive targeting', 'Proactive intelligence'], isRed: true },
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
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">CAPABILITIES</div>
        <h2 className="text-5xl font-semibold tracking-tighter text-white mb-12">What we deploy for you.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => (
            <div key={cap.title} className="p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/50 transition-all group">
              <div className="mb-5 group-hover:scale-110 transition-transform"><ServiceIcon name={cap.icon} size={36} /></div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{cap.title}</h3>
              <p className="text-[#777777] leading-relaxed text-sm">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#2A2A2A]">
        <div className="text-[#E31E24] tracking-[4px] text-xs mb-4">HOW IT WORKS</div>
        <h2 className="text-5xl font-semibold tracking-tighter text-white mb-12">From zero to AI-powered<br />in four steps.</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#2A2A2A] z-0" />
              )}
              <div className="relative z-10 p-7 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] h-full">
                <div className="text-[#E31E24] text-4xl font-semibold tracking-tighter mb-4">{p.step}</div>
                <h3 className="text-white font-semibold text-xl mb-3">{p.title}</h3>
                <p className="text-[#777777] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/30 text-[#E31E24] text-xs tracking-[3px] mb-6">
          ✦ LIMITED ONBOARDING SLOTS
        </div>
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-5">
          Ready to let AI work<br />for your brand?
        </h2>
        <p className="text-[#777777] text-xl mb-10">We onboard a limited number of AI marketing clients each quarter. Book your strategy session now to secure your spot.</p>
        <Link
          href="/contact"
          className="inline-flex h-16 items-center justify-center rounded-full bg-[#E31E24] px-12 text-xl font-semibold text-white hover:bg-[#C01A1F] active:scale-[0.985] transition-all"
        >
          Book Your AI Strategy Session →
        </Link>
      </section>

    </div>
  );
}
