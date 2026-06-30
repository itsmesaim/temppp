'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '../../../lib/case-studies-data';
import { ServiceIcon, type IconName } from '../../../components/ServiceIcon';

import { AnimatePresence } from 'framer-motion';
import {
  Reveal,
  Stagger,
  StaggerItem,
  HoverLift,
  GlowButton,
  motion,
} from '../../../components/motion';

// Animated counter hook
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function AnimatedMetric({ value, suffix, label, startAnimation }: {
  value: string;
  suffix?: string;
  label: string;
  startAnimation: boolean;
}) {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const animated = useCounter(numericValue, 2000, startAnimation);
  const isDecimal = value.includes('.');

  return (
    <div className="text-center p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24] transition-colors">
      <div className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#E31E24] mb-2">
        {startAnimation
          ? isDecimal
            ? animated.toFixed(1)
            : animated.toString()
          : '0'}
        {suffix}
      </div>
      <div className="text-xs text-[#666666] tracking-wide uppercase">{label}</div>
    </div>
  );
}

const processSteps: { key: string; label: string; icon: IconName }[] = [
  { key: 'research', label: 'Research', icon: 'search' },
  { key: 'planning', label: 'Planning', icon: 'planning' },
  { key: 'design', label: 'Design', icon: 'palette' },
  { key: 'development', label: 'Development', icon: 'settings' },
  { key: 'testing', label: 'Testing', icon: 'check' },
  { key: 'launch', label: 'Launch', icon: 'rocket' },
];

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const cs = getCaseStudyBySlug(resolvedParams.slug);

  if (!cs) notFound();

  const related = getRelatedCaseStudies(cs.relatedSlugs);
  const [startAnimation, setStartAnimation] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStartAnimation(true); },
      { threshold: 0.3 }
    );
    if (resultsRef.current) observer.observe(resultsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-clip bg-[#0D0D0D]">
      {/* HERO BANNER */}
      <section className="relative min-h-[70vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={cs.heroImage}
            alt={cs.client}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/85 to-[#0D0D0D]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(227,30,36,0.12)_0%,transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <Reveal>
          <div className="flex items-center gap-2 text-xs text-[#555555] mb-8">
            <Link href="/" className="hover:text-[#E31E24] transition">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-[#E31E24] transition">Case Studies</Link>
            <span>/</span>
            <span className="text-[#888888]">{cs.client}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-[#E31E24] text-white text-xs font-semibold">
                  {cs.industry}
                </span>
                {cs.services.slice(0, 2).map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs border border-white/20">
                    {s}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[0.95] mb-4">
                {cs.title}
              </h1>
              <p className="text-[#888888] text-lg max-w-2xl">{cs.shortDesc}</p>
            </div>

            {/* Client Card */}
            <div className="flex-shrink-0 p-5 rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-md border border-[#2A2A2A] min-w-[220px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center">
                  <Image
                    src={cs.clientLogo}
                    alt={cs.client}
                    width={80}
                    height={80}
                    sizes="48px"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{cs.client}</div>
                  <div className="text-xs text-[#666666]">{cs.industry}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#555555]">Duration</span>
                  <span className="text-white">{cs.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Services</span>
                  <span className="text-white text-right max-w-[140px] text-xs">{cs.services.slice(0, 2).join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 border-b border-[#2A2A2A]">
        <Reveal className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">PROJECT OVERVIEW</div>
            <h2 className="text-3xl font-semibold tracking-tighter text-white mb-6">Project Summary</h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-8">{cs.shortDesc}</p>
            <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">OBJECTIVES</div>
            <ul className="space-y-3">
              {cs.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#E31E24] text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-[#CCCCCC]">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] h-full">
              <div className="text-[#E31E24] text-xs tracking-[3px] mb-4">KEY METRICS AT A GLANCE</div>
              <div className="space-y-4">
                {cs.results.slice(0, 3).map((r, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#2A2A2A] last:border-0">
                    <span className="text-[#888888] text-sm">{r.label}</span>
                    <span className="text-[#E31E24] font-semibold text-lg">{r.value}{r.suffix}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="text-xs text-[#555555] tracking-wide mb-2">TECHNOLOGY STACK</div>
                <div className="flex flex-wrap gap-2">
                  {cs.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#2A2A2A] text-[#888888] text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CHALLENGE */}
      <section className="py-16 border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <Reveal className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center" variant="slideRight">
          <div className="md:col-span-5">
            <HoverLift>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#E31E24]/5 border border-[#E31E24]/10" />
              <div className="relative p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A]">
                <div className="mb-4"><ServiceIcon name="zap" size={48} /></div>
                <div className="text-[#E31E24] font-semibold text-2xl mb-2">The Problem</div>
                <div className="text-[#666666] text-sm">Business challenge that required expert digital strategy</div>
              </div>
            </div>
            </HoverLift>
          </div>
          <div className="md:col-span-7">
            <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">THE CHALLENGE</div>
            <h2 className="text-3xl font-semibold tracking-tighter text-white mb-6">What Was Holding Them Back</h2>
            <p className="text-[#AAAAAA] text-lg leading-relaxed">{cs.challenge}</p>
          </div>
        </Reveal>
      </section>

      {/* SOLUTION */}
      <section className="py-16 border-b border-[#2A2A2A]">
        <Reveal className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center" variant="slideLeft">
          <div className="md:col-span-7">
            <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">OUR SOLUTION</div>
            <h2 className="text-3xl font-semibold tracking-tighter text-white mb-6">Strategy & Implementation</h2>
            <p className="text-[#AAAAAA] text-lg leading-relaxed">{cs.solution}</p>
          </div>
          <div className="md:col-span-5">
            <HoverLift>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#E31E24]/5 border border-[#E31E24]/10" />
              <div className="relative p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A]">
                <div className="mb-4"><ServiceIcon name="target" size={48} /></div>
                <div className="text-white font-semibold text-2xl mb-2">Our Approach</div>
                <div className="text-[#666666] text-sm">Data-driven strategy tailored to their specific industry and goals</div>
              </div>
            </div>
            </HoverLift>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="py-16 border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">HOW WE DID IT</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Our Process</h2>
          </div>

          {/* Process Steps */}
          <div className="flex scroll-x-smooth gap-2 mb-8 pb-2">
            {processSteps.map((step, i) => (
              <button
                key={step.key}
                onClick={() => setActiveProcess(i)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  activeProcess === i
                    ? 'bg-[#E31E24] text-white'
                    : 'bg-[#1A1A1A] border border-[#2A2A2A] text-[#888888] hover:border-[#E31E24] hover:text-white'
                }`}
              >
                <ServiceIcon name={step.icon} size={16} className="text-current" />
                {step.label}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
          <motion.div
            key={activeProcess}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="p-8 rounded-3xl bg-[#1A1A1A] border border-[#E31E24]/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center">
                <ServiceIcon name={processSteps[activeProcess].icon} size={24} />
              </div>
              <div>
                <div className="font-semibold text-xl text-white">{processSteps[activeProcess].label}</div>
                <div className="text-xs text-[#555555]">Step {activeProcess + 1} of {processSteps.length}</div>
              </div>
            </div>
            <p className="text-[#AAAAAA] text-lg leading-relaxed">
              {cs.process[processSteps[activeProcess].key as keyof typeof cs.process]}
            </p>
          </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="flex gap-2 mt-6">
            {processSteps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all ${i <= activeProcess ? 'bg-[#E31E24]' : 'bg-[#2A2A2A]'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS - Animated Counters */}
      <section className="py-16 border-b border-[#2A2A2A]" ref={resultsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">MEASURABLE IMPACT</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Results Achieved</h2>
            <p className="text-[#666666] mt-3">Numbers that tell the full story</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.results.map((metric, i) => (
              <AnimatedMetric
                key={i}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                startAnimation={startAnimation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="py-16 border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">TRANSFORMATION</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Before & After</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-[#333333]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center text-sm">✗</div>
                <div className="font-semibold text-[#888888] text-lg">Before Working With Us</div>
              </div>
              <div className="space-y-4">
                {cs.beforeAfter.before.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#1A1A1A] last:border-0">
                    <span className="text-[#666666] text-sm">{item.label}</span>
                    <span className="text-[#555555] font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* After */}
            <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-[#E31E24]/30 shadow-[0_0_40px_rgba(227,30,36,0.05)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E31E24]/20 border border-[#E31E24]/30 flex items-center justify-center text-sm text-[#E31E24]">✓</div>
                <div className="font-semibold text-white text-lg">After SNK</div>
              </div>
              <div className="space-y-4">
                {cs.beforeAfter.after.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#1A1A1A] last:border-0">
                    <span className="text-[#888888] text-sm">{item.label}</span>
                    <span className="text-[#E31E24] font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT & RESULTS */}
      <section className="py-16 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[#E31E24] text-xs tracking-[3px] mb-3">CLIENT PARTNER</div>
          <h2 className="text-3xl font-semibold tracking-tighter text-white mb-8">Brand & Measurable Results</h2>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-5">
              <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden border border-[#2A2A2A]">
                <Image
                  src={cs.coverImage}
                  alt={cs.client}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              {cs.results.map((metric, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/30 transition-colors">
                  <div className="text-3xl font-semibold tracking-tighter text-[#E31E24] mb-2">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </div>
                  <div className="text-sm text-[#888888]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#E31E24] text-xs tracking-[3px] mb-8">CLIENT TESTIMONIAL</div>
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-[#E31E24]/10 font-serif leading-none">&ldquo;</div>
            <blockquote className="relative text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug mb-8 italic">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </blockquote>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E31E24] flex items-center justify-center text-white font-bold text-lg">
              {cs.testimonial.name[0]}
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">{cs.testimonial.name}</div>
              <div className="text-[#666666] text-sm">{cs.testimonial.title}, {cs.testimonial.company}</div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      {related.length > 0 && (
        <section className="py-16 border-b border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-10">
              <div>
                <div className="text-[#E31E24] text-xs tracking-[3px] mb-2">MORE WORK</div>
                <h2 className="text-3xl font-semibold tracking-tighter text-white">Related Case Studies</h2>
              </div>
              <Link href="/case-studies" className="text-sm text-[#888888] hover:text-white transition flex items-center gap-2 group">
                View All <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <Stagger className="grid md:grid-cols-3 gap-5" stagger={0.08}>
              {related.map((rc) => (
                <StaggerItem key={rc.id}>
                <HoverLift>
                <Link
                  href={`/case-studies/${rc.slug}`}
                  className="case-card group block rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24] overflow-hidden h-full"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={rc.coverImage}
                      alt={rc.client}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#E31E24]/80 text-white text-xs font-medium">
                        {rc.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white group-hover:text-[#E31E24] transition-colors mb-1">{rc.client}</h3>
                    <p className="text-[#E31E24] text-sm font-medium mb-3">{rc.keyResult}</p>
                    <div className="text-xs text-[#666666] flex items-center gap-2">
                      View Case Study
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
                </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <Reveal className="max-w-3xl mx-auto text-center px-6" variant="scaleIn">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/20 text-[#E31E24] text-xs tracking-[3px] mb-6">
            YOUR TURN
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
            Ready to become our next<br />
            <span className="text-[#E31E24]">success story?</span>
          </h2>
          <p className="text-[#666666] text-lg mb-8">
            Let&apos;s build results like these for your business. Every great case study starts with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-base font-semibold text-white hover:bg-[#C01A1F] transition-all"
              >
                Contact Us
              </Link>
            </GlowButton>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-base font-medium text-white hover:bg-[#1A1A1A] hover:border-[#E31E24] transition-all"
            >
              Free Website Audit
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
