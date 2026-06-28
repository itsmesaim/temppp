'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceIcon, type IconName } from '../../components/ServiceIcon';
import { Reveal, Stagger, StaggerItem, HoverLift, FloatPulse, GlowButton } from '../../components/motion';

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <Reveal className={className} delay={delay / 1000}>
      {children}
    </Reveal>
  );
}

/* ---------------------------------------------------------------------- */
/*  DATA                                                                  */
/* ---------------------------------------------------------------------- */

const services: { icon: IconName; title: string; desc: string }[] = [
  { icon: "globe", title: "Website Design & Development", desc: "Custom, high-converting websites built for performance and lasting impressions." },
  { icon: "smartphone", title: "Responsive & Mobile-Friendly Websites", desc: "Seamless experiences across all screen sizes and devices." },
  { icon: "search", title: "Search Engine Optimization (SEO)", desc: "Rank higher, attract qualified traffic, and grow organically." },
  { icon: "megaphone", title: "Digital Marketing Services", desc: "End-to-end digital campaigns designed to generate leads and revenue." },
  { icon: "smartphone", title: "Social Media Marketing", desc: "Build brand authority and community through strategic social engagement." },
  { icon: "pen", title: "Content Creation & Marketing", desc: "Compelling content that educates, engages, and converts your audience." },
  { icon: "wrench", title: "Website Maintenance & Support", desc: "Keep your digital presence secure, up-to-date, and performing at its best." },
  { icon: "target", title: "Branding & Business Promotion Solutions", desc: "Strategic branding that sets your business apart and drives recognition." },
];

const whyChoose: { icon: IconName; title: string; desc: string }[] = [
  { icon: "trophy", title: "Established & Trusted Since 2007", desc: "Nearly two decades of proven experience delivering digital excellence." },
  { icon: "briefcase", title: "Experienced & Dedicated Professionals", desc: "A passionate team of specialists committed to your business goals." },
  { icon: "settings", title: "Customized Business Solutions", desc: "Tailored strategies built around your unique requirements and objectives." },
  { icon: "wallet", title: "Affordable & Scalable Services", desc: "Premium quality services priced to deliver exceptional ROI for every business." },
  { icon: "lightbulb", title: "Creative & Innovative Approach", desc: "Fresh ideas and modern strategies that keep you ahead of competitors." },
  { icon: "clock", title: "Timely Project Delivery", desc: "Consistent on-time delivery without compromising quality or attention to detail." },
  { icon: "phone", title: "Transparent Communication", desc: "Clear, honest communication and full visibility into every project milestone." },
  { icon: "hammer", title: "Ongoing Support & Maintenance", desc: "Dedicated post-launch support to ensure your digital assets perform at their best." },
  { icon: "handshake", title: "Strong Commitment to Client Success", desc: "Your business growth is our primary measure of success — always." },
];

const team = [
  {
    name: "Pinky",
    role: "Senior Counsellor",
    bio: "A trusted advisor who guides clients through their digital journey with professionalism, clarity, and a genuine commitment to their success.",
    img: "/team-pinky.webp",
  },
  {
    name: "Yusuf Kadiri",
    role: "Digital Marketing Associate",
    bio: "Crafts data-driven digital marketing campaigns that boost brand visibility, drive qualified traffic, and generate meaningful business results.",
    img: "/team-main.webp",
  },
  {
    name: "Kahkasha Bhatkar",
    role: "Website Developer",
    bio: "Builds responsive, high-performance websites that combine clean code, modern design, and excellent user experience to elevate brands online.",
    img: "/team-kahkasha.webp",
  },
  {
    name: "Anup Patil",
    role: "Social Media Associate",
    bio: "Manages and grows brand presence across social platforms through engaging content, strategic planning, and community engagement.",
    img: "/team-anup.webp",
  },
  {
    name: "Aakash Karnekar",
    role: "Digital Marketing Associate",
    bio: "Executes performance-focused digital marketing strategies across multiple channels to deliver consistent, measurable client growth.",
    img: "/team-akash.webp",
  },
];

/* ---------------------------------------------------------------------- */
/*  PAGE                                                                  */
/* ---------------------------------------------------------------------- */

export default function About() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTeam, setActiveTeam] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">

      {/* ==================== 1. FOUNDER & CEO HERO BANNER =================== */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E31E24]/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E31E24]/5 blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#E31E24]/10 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <FadeInSection delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
                <span className="text-[#E31E24] text-xs font-semibold tracking-[3px]">FOUNDER &amp; DIRECTOR</span>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-3">
                Meet Our<br />
                <span className="text-[#E31E24]">Founder &amp; Director</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-[#CCCCCC] mb-8 tracking-tight">
                Mr. Sandeep Narayan Kanade
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="space-y-4 text-[#AAAAAA] leading-relaxed text-base mb-8">
                <p>
                  Mr. Sandeep Narayan Kanade is the Founder and Director of SNK Web Solutions. With a strong passion
                  for technology, innovation, and business development, he established the company in <strong className="text-white">2007</strong> with
                  the vision of helping businesses leverage the power of digital technology to achieve growth and success.
                </p>
                <p>
                  Over the years, he has successfully guided the organization through changing market trends,
                  technological advancements, and evolving client needs. His leadership philosophy is centered on
                  <span className="text-white font-medium"> quality, innovation, integrity, and customer satisfaction.</span>
                </p>
                <p>
                  Through his strategic vision and dedication, he has helped SNK Web Solutions earn the trust of clients
                  by consistently delivering reliable and result-oriented digital solutions. He believes in building
                  long-term relationships by understanding unique requirements and providing customized solutions that
                  create measurable business value.
                </p>
                <p className="text-[#CCCCCC]">
                  With extensive industry experience and a commitment to continuous improvement, he continues to lead
                  the company toward excellence — empowering businesses with modern digital solutions that enhance their
                  online presence and support long-term growth.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#E31E24] text-white font-semibold text-sm hover:bg-[#C01A1F] transition-all duration-300 hover:shadow-[0_0_24px_rgba(227,30,36,0.4)] hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full border border-[#E31E24]/50 text-[#E31E24] font-semibold text-sm hover:bg-[#E31E24]/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Free Website Audit
                </Link>
              </div>
            </FadeInSection>
          </div>

          {/* Right: Founder Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <FadeInSection delay={150}>
              <FloatPulse>
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#E31E24]/20 to-transparent blur-2xl" />

                {/* Glassmorphism frame */}
                <div className="relative rounded-[1.75rem] p-1.5 bg-gradient-to-br from-[#E31E24]/30 via-[#2A2A2A]/60 to-[#1A1A1A]/80 backdrop-blur-sm shadow-[0_32px_80px_-10px_rgba(227,30,36,0.3)]">
                  <div className="relative w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4] rounded-[1.5rem] overflow-hidden">
                    <Image
                      src="/team-sandeep.webp"
                      alt="Mr. Sandeep Narayan Kanade – Founder & Director, SNK Web Solutions"
                      fill
                      sizes="(max-width: 768px) 320px, 420px"
                      className="object-cover object-top"
                      priority
                    />
                    {/* Subtle overlay gradient at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
                  </div>
                </div>

                {/* Floating badge – established */}
                <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl bg-[#1A1A1A] border border-[#E31E24]/30 shadow-xl backdrop-blur-sm">
                  <div className="text-[#E31E24] text-xs tracking-widest font-semibold">EST.</div>
                  <div className="text-white font-bold text-xl leading-none">2007</div>
                </div>
                {/* Floating badge – experience */}
                <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-[#E31E24] shadow-xl">
                  <div className="text-white/80 text-xs font-semibold">Industry</div>
                  <div className="text-white font-bold text-xl leading-none">15+ yrs</div>
                </div>
              </div>
              </FloatPulse>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ==================== 2. ABOUT SNK WEB SOLUTIONS ==================== */}
      <section className="bg-[#161616] border-y border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <FadeInSection>
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-3">ABOUT US</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Welcome to<br /><span className="text-[#E31E24]">SNK Web Solutions</span>
              </h2>
              <div className="space-y-4 text-[#AAAAAA] leading-relaxed">
                <p>
                  Founded in <strong className="text-white">2007</strong>, SNK Web Solutions is a trusted digital solutions
                  company dedicated to helping businesses establish, grow, and strengthen their online presence.
                </p>
                <p>
                  With nearly two decades of industry experience, we have successfully delivered innovative web design,
                  website development, digital marketing, and branding solutions to businesses across various industries.
                </p>
                <p>
                  Our mission is to provide high-quality, cost-effective, and result-driven digital services that help
                  our clients achieve their business goals. We combine <span className="text-white font-medium">creativity,
                  technology, and strategic thinking</span> to deliver customized solutions that drive growth, improve
                  customer engagement, and create lasting value.
                </p>
                <p>
                  Over the years, SNK Web Solutions has built a reputation for professionalism, reliability, and
                  customer satisfaction. We believe every business deserves a strong digital presence, and our passionate
                  team transforms ideas into successful online experiences.
                </p>
              </div>
            </FadeInSection>

            {/* Right: Visual Stats Grid */}
            <Stagger className="grid grid-cols-2 gap-4" fast>
                {[
                  { num: "15+", label: "Years of Experience", icon: "calendar" as IconName },
                  { num: "150+", label: "Projects Delivered", icon: "rocket" as IconName },
                  { num: "100+", label: "Happy Clients", icon: "smile" as IconName },
                  { num: "2007", label: "Founded", icon: "zap" as IconName },
                ].map((stat) => (
                  <StaggerItem key={stat.label} variant="scaleIn">
                  <HoverLift>
                  <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors duration-300 text-center group">
                    <div className="mb-2 flex justify-center"><ServiceIcon name={stat.icon} size={28} /></div>
                    <div className="text-3xl font-bold text-[#E31E24] tracking-tight">{stat.num}</div>
                    <div className="text-xs text-[#888888] tracking-wide mt-1">{stat.label}</div>
                  </div>
                  </HoverLift>
                  </StaggerItem>
                ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ==================== 3. OUR VISION ==================== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <FadeInSection>
          <div className="text-center mb-10">
            <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">OUR VISION</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">What We Stand For</h2>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] p-10 md:p-14 shadow-[0_0_80px_-20px_rgba(227,30,36,0.2)]">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E31E24]/8 blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#E31E24]/5 blur-[40px] pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E31E24] flex items-center justify-center text-white shadow-lg">
                <ServiceIcon name="eye" size={24} className="text-white" />
              </div>
              <div>
                <div className="text-[#E31E24] text-xs tracking-[3px] uppercase font-semibold mb-4">VISION STATEMENT</div>
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed tracking-tight">
                  To become a leading and trusted digital solutions provider by delivering innovative websites,
                  effective digital marketing strategies, and exceptional customer service that empower businesses
                  to achieve <span className="text-[#E31E24]">sustainable growth</span> and long-term success.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ==================== 4. OUR SERVICES ==================== */}
      <section className="bg-[#161616] border-y border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">WHAT WE DO</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Our Services</h2>
              <p className="text-[#888888] text-lg mt-3 max-w-2xl mx-auto">
                Comprehensive digital solutions designed to help your business thrive online.
              </p>
            </div>
          </FadeInSection>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.06}>
            {services.map((service, i) => (
              <StaggerItem key={service.title}>
                <HoverLift lift={-8}>
                <div
                  className="group relative h-full p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/50 transition-colors duration-300 hover:shadow-[0_20px_40px_-10px_rgba(227,30,36,0.2)] cursor-default overflow-hidden"
                  onMouseEnter={() => setActiveService(i)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Glassmorphism shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                  {/* Red left border accent on hover */}
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#E31E24] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110 inline-block"><ServiceIcon name={service.icon} size={30} /></div>
                  <h3 className="font-semibold text-white text-base mb-2 group-hover:text-[#E31E24] transition-colors duration-300 leading-snug">{service.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed group-hover:text-[#AAAAAA] transition-colors duration-300">{service.desc}</p>
                </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ==================== 5. WHY CHOOSE SNK ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">WHY CHOOSE US</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Why Choose SNK Web Solutions</h2>
            <p className="text-[#888888] text-lg mt-3 max-w-2xl mx-auto">
              The advantages that make SNK Web Solutions the trusted digital partner for businesses.
            </p>
          </div>
        </FadeInSection>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05} fast>
          {whyChoose.map((item) => (
            <StaggerItem key={item.title}>
              <HoverLift>
              <div className="group flex items-start gap-4 p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors duration-300 hover:shadow-[0_12px_32px_-8px_rgba(227,30,36,0.15)] h-full">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center group-hover:bg-[#E31E24]/20 transition-colors duration-300">
                  <ServiceIcon name={item.icon} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1.5 group-hover:text-[#E31E24] transition-colors duration-300 leading-snug">{item.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ==================== 6. MEET OUR TEAM ==================== */}
      <section className="bg-[#161616] border-t border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">THE PEOPLE</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Meet Our Team</h2>
              <p className="text-[#888888] text-lg mt-3 max-w-2xl mx-auto">
                Our passionate professionals work together to deliver exceptional digital solutions and outstanding customer experiences.
              </p>
            </div>
          </FadeInSection>

          {/* 5 team members: 4 on desktop, 2 on tablet, 1 on mobile */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-items-center" stagger={0.08}>
            {team.map((member, i) => (
              <StaggerItem key={member.name}>
                <HoverLift lift={-10}>
                <div
                  className="group relative flex flex-col w-full max-w-[280px] xl:max-w-none rounded-3xl bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#2A2A2A] hover:border-[#E31E24]/60 transition-colors duration-400 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_48px_-10px_rgba(227,30,36,0.25)]"
                  onMouseEnter={() => setActiveTeam(i)}
                  onMouseLeave={() => setActiveTeam(null)}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
                  {/* Red glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-1 group-hover:ring-[#E31E24]/40 group-hover:shadow-[inset_0_0_20px_rgba(227,30,36,0.05)] transition-all duration-300 pointer-events-none" />

                  {/* Team member image */}
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '100%' }}>
                    <div className="absolute inset-0">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 280px"
                        loading="lazy"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="relative p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg text-white tracking-tight">{member.name}</h3>
                    <div className="text-[#E31E24] text-sm font-medium mb-2">{member.role}</div>
                    <p className={`text-sm text-[#888888] leading-relaxed flex-1 transition-colors duration-300 ${activeTeam === i ? 'text-[#AAAAAA]' : ''}`}>
                      {member.bio}
                    </p>
                  </div>
                </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ==================== 7. FINAL CALL TO ACTION ==================== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeInSection>
          <div className="relative rounded-[2rem] overflow-hidden border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] shadow-[0_0_80px_-20px_rgba(227,30,36,0.2)]">
            {/* Background glows */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E31E24]/10 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#E31E24]/8 blur-[60px] pointer-events-none" />

            <div className="relative p-10 md:p-14 lg:p-16 text-center">
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-4">GET STARTED</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Let&apos;s Build Your<br />
                <span className="text-[#E31E24]">Digital Success</span>
              </h2>

              <div className="max-w-2xl mx-auto space-y-3 text-[#AAAAAA] text-base leading-relaxed mb-10">
                <p>
                  At SNK Web Solutions, we are committed to helping businesses succeed in the digital world.
                  Whether you need a professional website, a powerful digital marketing strategy, engaging content,
                  or complete online branding solutions, our team is ready to help you achieve your goals.
                </p>
                <p className="text-[#CCCCCC]">
                  Partner with SNK Web Solutions and transform your digital vision into reality. Together, we build
                  stronger brands, create meaningful online experiences, and drive sustainable business growth.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-[#E31E24] text-white font-semibold text-sm hover:bg-[#C01A1F] transition-all duration-300 hover:shadow-[0_0_32px_rgba(227,30,36,0.45)]"
                  >
                    Start Your Project
                  </Link>
                </GlowButton>
                <GlowButton>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full border border-[#E31E24]/50 text-[#E31E24] font-semibold text-sm hover:bg-[#E31E24]/10 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </GlowButton>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-[#2A2A2A] text-[#CCCCCC] font-semibold text-sm hover:border-[#E31E24]/40 hover:text-white transition-all duration-300"
                >
                  Get Free Website Audit
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-[#2A2A2A]">
                {[
                  { value: "2007", label: "Founded" },
                  { value: "15+", label: "Years Experience" },
                  { value: "150+", label: "Projects Done" },
                  { value: "100+", label: "Happy Clients" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-[#E31E24]">{item.value}</div>
                    <div className="text-xs text-[#666666] tracking-widest mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
