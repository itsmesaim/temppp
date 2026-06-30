'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EcosystemCanvas from '../components/EcosystemCanvas';
import CaseStudiesSection from '../components/CaseStudiesSection';
import { ServiceIcon, type IconName } from '../components/ServiceIcon';
import {
  HeroReveal,
  HeroItem,
  Reveal,
  Stagger,
  StaggerItem,
  HoverLift,
  GlowButton,
  FloatPulse,
  motion,
} from '../components/motion';

const clientLogos = [
  { src: '/clients/trigensoft.webp', alt: 'Trigensoft', width: 210, height: 100 },
  {
    src: '/clients/ana-infra.webp',
    alt: 'Ana Infra Builders & Developers',
    width: 152,
    height: 158,
  },
  { src: '/clients/the-basics.webp', alt: 'The Basics', width: 185, height: 113 },
  { src: '/clients/lifeforce.webp', alt: 'LifeForce Homeopathy', width: 191, height: 105 },
  { src: '/clients/health-total.webp', alt: 'Health Total', width: 205, height: 104 },
  { src: '/clients/london-organic.webp', alt: 'London Organic Beauty', width: 210, height: 111 },
  {
    src: '/clients/vision-international.webp',
    alt: 'Vision International',
    width: 146,
    height: 124,
  },
  { src: '/clients/apoio.webp', alt: 'Apoio', width: 247, height: 120 },
  { src: '/clients/eduvert.webp', alt: 'Eduvert', width: 621, height: 226 },
  { src: '/clients/empyrean-school.webp', alt: 'Empyrean School', width: 313, height: 365 },
  { src: '/clients/dewcool.webp', alt: 'Dewcool', width: 300, height: 116 },
  { src: '/clients/acepark.webp', alt: 'AcePark', width: 157, height: 157 },
  { src: '/clients/krysaliis.webp', alt: 'Krysaliis', width: 560, height: 205 },
  { src: '/clients/miapia.webp', alt: 'Miapia', width: 528, height: 156 },
  { src: '/clients/tarrang-banquets.webp', alt: 'Tarrang Banquets', width: 366, height: 318 },
  {
    src: '/clients/dr-pansare.webp',
    alt: 'Dr. Pansare Pathology Laboratory',
    width: 413,
    height: 157,
  },
  { src: '/clients/dot-and-grid.webp', alt: 'Dot & Grid', width: 560, height: 116 },
  { src: '/clients/union.webp', alt: 'Union', width: 660, height: 317 },
  {
    src: '/clients/ramkrishna-upvc.webp',
    alt: 'Ramkrishna uPVC Windows & Doors',
    width: 640,
    height: 261,
  },
  { src: '/clients/nuvvagen.webp', alt: 'NuVvaGen', width: 660, height: 216 },
];

const services: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'trending-up',
    title: 'SEO & Organic Growth',
    desc: 'Dominate search with technical excellence and content that converts.',
  },
  {
    icon: 'target',
    title: 'Performance Marketing',
    desc: 'ROI-focused paid campaigns across Meta, Google, and programmatic.',
  },
  {
    icon: 'pen',
    title: 'Content & Storytelling',
    desc: 'Strategic content systems that build authority and drive pipeline.',
  },
  {
    icon: 'monitor',
    title: 'Web Experience',
    desc: 'High-converting websites and digital platforms built for speed.',
  },
  {
    icon: 'bar-chart',
    title: 'Analytics & CRO',
    desc: 'Data infrastructure and experimentation that unlock hidden growth.',
  },
  {
    icon: 'globe',
    title: 'Brand & Strategy',
    desc: 'Positioning and go-to-market frameworks for category leadership.',
  },
];

export default function Home() {
  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center border-b border-[#2A2A2A] pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E31E24]/8 blur-[100px]"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E31E24]/5 blur-[80px]"
            animate={{ x: [0, 30, 0], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 pt-10 pb-16 md:pb-10">
            <HeroReveal>
              <HeroItem>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1A1A1A] text-xs tracking-[2px] mb-6 border border-[#2A2A2A] text-[#888888]">
                  EST. 2010 • NAVI MUMBAI • MAHARASHTRA
                </div>
              </HeroItem>

              <HeroItem delay={0.08}>
                <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-[0.92] mb-6 text-white">
                  Grow Your Business
                  <br />
                  with Result-Driven
                  <br />
                  <motion.span
                    className="text-[#E31E24] inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  >
                    Digital Marketing.
                  </motion.span>
                </h1>
              </HeroItem>

              <HeroItem delay={0.16}>
                <p className="max-w-lg text-xl text-[#999999] mb-10 leading-relaxed">
                  Trusted digital marketing agency in Navi Mumbai — helping startups, SMEs,
                  healthcare brands, and enterprises increase visibility, generate quality leads,
                  and maximize ROI.
                </p>
              </HeroItem>

              <HeroItem delay={0.24}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GlowButton>
                    <Link
                      href="/case-studies"
                      className="inline-flex h-14 items-center justify-center rounded-full bg-[#E31E24] px-10 text-lg font-semibold text-white hover:bg-[#C01A1F] transition-colors shadow-[0_0_40px_-8px_rgba(227,30,36,0.5)]"
                    >
                      Explore Our Work
                    </Link>
                  </GlowButton>
                  <GlowButton>
                    <Link
                      href="/contact"
                      className="inline-flex h-14 items-center justify-center rounded-full border border-[#2A2A2A] px-8 text-lg font-medium text-white hover:bg-[#1A1A1A] hover:border-[#E31E24]/40 transition-all"
                    >
                      Book a Strategy Call
                    </Link>
                  </GlowButton>
                </div>
              </HeroItem>

              <HeroItem delay={0.32}>
                <div className="mt-10 flex items-center gap-8 text-sm text-[#888888]">
                  <div>
                    Trusted by <span className="text-white font-semibold">100+</span> brands
                  </div>
                  <div className="h-px w-8 bg-[#E5E5E5]" />
                  <div>
                    <span className="text-[#E31E24] font-semibold">150+</span> projects delivered
                  </div>
                </div>
              </HeroItem>
            </HeroReveal>
          </div>

          <Reveal variant="scaleIn" delay={0.35} duration={0.85} className="md:col-span-5">
            <FloatPulse>
              <div className="relative h-[280px] sm:h-[360px] md:h-[520px] rounded-3xl overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] shadow-[0_0_60px_-15px_rgba(227,30,36,0.25)]">
                <EcosystemCanvas />
                <div className="absolute bottom-4 right-4 text-[10px] text-[#666666] tracking-widest">
                  INTERACTIVE DIGITAL ECOSYSTEM
                </div>
              </div>
            </FloatPulse>
          </Reveal>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden md:flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[3px] text-[#666666]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          SCROLL TO BEGIN
          <motion.span
            className="block w-px h-8 bg-gradient-to-b from-[#E31E24] to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <section className="py-8 border-b border-[#2A2A2A] bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeIn" duration={0.5}>
            <div className="flex items-center justify-between mb-4 text-xs tracking-widest text-[#666666]">
              <div>TRUSTED BY AMBITIOUS BRANDS</div>
              <div className="hidden md:block">ACROSS INDUSTRIES</div>
            </div>
          </Reveal>

          <div className="marquee" style={{ '--marquee-duration': '42s' } as React.CSSProperties}>
            <div className="marquee-inner flex items-center gap-x-14 md:gap-x-20 py-2">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="h-14 md:h-16 w-[120px] md:w-[140px] flex-shrink-0 flex items-center justify-center rounded-xl bg-white/95 p-2 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-full w-full object-contain"
                    sizes="140px"
                    quality={75}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Reveal className="flex justify-between items-end mb-10">
          <div>
            <div className="text-[#E31E24] text-sm tracking-[3px] mb-2">WHAT WE DO BEST</div>
            <h2 className="text-5xl tracking-tighter font-semibold text-white">
              Precision growth systems.
            </h2>
          </div>
          <Link
            href="/contact"
            className="hidden md:block text-sm underline-offset-4 hover:underline text-[#888888]"
          >
            See how we work →
          </Link>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <HoverLift>
                <div className="group h-full p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24] transition-colors duration-300">
                  <motion.div
                    className="mb-6 opacity-80"
                    whileHover={{ scale: 1.15, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <ServiceIcon name={service.icon} size={36} />
                  </motion.div>
                  <h3 className="font-semibold text-2xl tracking-tight mb-3 text-white group-hover:text-[#E31E24] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#888888] leading-relaxed">{service.desc}</p>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CaseStudiesSection />

      {/* WHY US / STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-12 items-center">
          <div className="md:col-span-5">
            <Reveal className="sticky top-24">
              <div className="text-[#E31E24] tracking-[3px] text-sm mb-3">WHY BRANDS CHOOSE US</div>
              <h2 className="text-5xl tracking-[-1.5px] leading-none font-semibold text-white">
                We don&apos;t chase vanity metrics.
                <br />
                We engineer outcomes.
              </h2>
            </Reveal>
          </div>

          <Stagger
            className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left"
            stagger={0.12}
          >
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '150+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
            ].map((stat, i) => (
              <StaggerItem key={i} variant="scaleIn">
                <HoverLift scale={1.04}>
                  <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors">
                    <motion.div
                      className="text-6xl font-semibold tracking-tighter text-[#E31E24] mb-1"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 + i * 0.1,
                        duration: 0.6,
                        type: 'spring',
                        stiffness: 200,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-[#888888]">{stat.label}</div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0D0D0D] py-20 border-t border-[#2A2A2A] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(227,30,36,0.08) 0%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
        />
        <Reveal className="relative max-w-3xl mx-auto text-center px-6">
          <h2 className="text-5xl tracking-tighter font-semibold mb-4 text-white">
            Ready to expand your digital universe?
          </h2>
          <p className="text-xl text-[#666666] mb-9">
            Let&apos;s discuss how we can drive measurable growth for your brand.
          </p>
          <GlowButton className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-[#E31E24] text-white text-lg font-semibold hover:bg-[#C01A1F] transition-colors shadow-[0_0_48px_-10px_rgba(227,30,36,0.55)]"
            >
              Start the Conversation
            </Link>
          </GlowButton>
        </Reveal>
      </section>
    </div>
  );
}
