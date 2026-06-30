"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceIcon, type IconName } from "../../components/ServiceIcon";
import {
  Reveal,
  Stagger,
  StaggerItem,
  HoverLift,
  GlowButton,
} from "../../components/motion";
import { FOUNDED_YEAR } from "../../lib/site";

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={className} delay={delay / 1000}>
      {children}
    </Reveal>
  );
}

const services: {
  id: string;
  icon: IconName;
  title: string;
  desc: string;
}[] = [
  {
    id: "seo",
    icon: "search",
    title: "Search Engine Optimization (SEO)",
    desc: "Rank higher on Google, drive organic traffic, and turn search visibility into qualified leads.",
  },
  {
    id: "aeo",
    icon: "bot",
    title: "Answer Engine Optimization (AEO)",
    desc: "Show up in featured snippets, voice search, and AI answers when customers ask questions online.",
  },
  {
    id: "social",
    icon: "smartphone",
    title: "Social Media Marketing",
    desc: "Grow your audience, build brand trust, and turn social engagement into real business results.",
  },
  {
    id: "performance",
    icon: "target",
    title: "Performance Marketing",
    desc: "Run ROI-focused ad campaigns on Google and Meta that generate leads and measurable revenue.",
  },
  {
    id: "web",
    icon: "monitor",
    title: "Web Design & Development",
    desc: "Get a fast, mobile-friendly website built to look professional and convert visitors into customers.",
  },
];

const whyChoose: { icon: IconName; title: string }[] = [
  { icon: "trophy", title: `Established and trusted since ${FOUNDED_YEAR}` },
  { icon: "briefcase", title: "Experienced and dedicated professionals" },
  { icon: "settings", title: "Customized business-focused solutions" },
  { icon: "wallet", title: "Affordable and scalable services" },
  { icon: "lightbulb", title: "Creative and innovative approach" },
  { icon: "clock", title: "Timely project delivery" },
  { icon: "phone", title: "Transparent communication" },
  { icon: "hammer", title: "Ongoing support and maintenance" },
  { icon: "handshake", title: "Strong commitment to client success" },
];

const team: { name: string; role: string; img: string; bio: string }[] = [
  {
    name: "Mr. Sandeep Narayan Kanade",
    role: "Founder & Director",
    img: "/team-sandeep.webp",
    bio: `Founder and Director of SNK since ${FOUNDED_YEAR}. With a passion for technology and business development, he guides the organization through evolving market trends while centering leadership on quality, innovation, integrity, and customer satisfaction.`,
  },
  {
    name: "Pinky",
    role: "Senior Counsellor",
    img: "/team-pinky.webp",
    bio: "A trusted advisor who guides clients through their digital journey with professionalism, clarity, and a genuine commitment to their success.",
  },
  {
    name: "Yusuf Kadiri",
    role: "Digital Marketing Associate",
    img: "/team-main.webp",
    bio: "Crafts data-driven digital marketing campaigns that boost brand visibility, drive qualified traffic, and generate meaningful business results.",
  },
  {
    name: "Anup Patil",
    role: "Social Media Associate",
    img: "/team-anup.webp",
    bio: "Manages and grows brand presence across social platforms through engaging content, strategic planning, and community engagement.",
  },
  {
    name: "Aakash Karnekar",
    role: "Digital Marketing Associate",
    img: "/team-akash.webp",
    bio: "Executes performance-focused digital marketing strategies across multiple channels to deliver consistent, measurable client growth.",
  },
  {
    name: "Kahkasha Bhatkar",
    role: "Website Developer",
    img: "/team-kahkasha.webp",
    bio: "Builds responsive, high-performance websites that combine clean code, modern design, and excellent user experience to elevate brands online.",
  },
];

export default function About() {
  const [activeTeam, setActiveTeam] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#E31E24]/6 blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 w-full text-center">
          <FadeInSection delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/25 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
              <span className="text-[#E31E24] text-xs font-semibold tracking-[3px]">
                ABOUT US
              </span>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-white mb-6">
              Welcome to
              <br />
              <span className="text-[#E31E24]">SNK</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#999999] max-w-2xl mx-auto leading-relaxed">
              A trusted digital solutions company helping businesses establish,
              grow, and strengthen their online presence.
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#E31E24] text-white font-semibold text-sm hover:bg-[#C01A1F] transition-all hover:shadow-[0_0_24px_rgba(227,30,36,0.4)]"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full border border-[#2A2A2A] text-[#CCCCCC] font-semibold text-sm hover:border-[#E31E24]/40 hover:text-white transition-all"
              >
                Get Free Website Audit
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-[#161616] border-y border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-3">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Your Trusted Digital
                <br />
                <span className="text-[#E31E24]">Partner</span>
              </h2>
              <div className="space-y-4 text-[#AAAAAA] leading-relaxed">
                <p>
                  Founded in{" "}
                  <strong className="text-white">{FOUNDED_YEAR}</strong>, SNK is
                  a trusted digital solutions company dedicated to helping
                  businesses establish, grow, and strengthen their online
                  presence.
                </p>
                <p>
                  With nearly two decades of industry experience, we have
                  successfully delivered innovative web design, website
                  development, digital marketing, and branding solutions to
                  businesses across various industries.
                </p>
                <p>
                  Over the years, SNK has built a reputation for
                  professionalism, reliability, and customer satisfaction. We
                  believe that every business deserves a strong digital
                  presence, and our team works passionately to transform ideas
                  into successful online experiences.
                </p>
              </div>
            </FadeInSection>

            <Stagger className="grid grid-cols-2 gap-4" fast>
              {[
                {
                  num: "15+",
                  label: "Years of Experience",
                  icon: "calendar" as IconName,
                },
                {
                  num: "150+",
                  label: "Projects Delivered",
                  icon: "rocket" as IconName,
                },
                {
                  num: "100+",
                  label: "Happy Clients",
                  icon: "smile" as IconName,
                },
                {
                  num: String(FOUNDED_YEAR),
                  label: "Founded",
                  icon: "zap" as IconName,
                },
              ].map((stat) => (
                <StaggerItem key={stat.label} variant="scaleIn">
                  <HoverLift>
                    <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors duration-300 text-center">
                      <div className="mb-2 flex justify-center">
                        <ServiceIcon name={stat.icon} size={28} />
                      </div>
                      <div className="text-3xl font-bold text-[#E31E24] tracking-tight">
                        {stat.num}
                      </div>
                      <div className="text-xs text-[#888888] tracking-wide mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">
              OUR PURPOSE
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#2A2A2A] bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] p-8 md:p-10 h-full">
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-[#E31E24]/6 blur-[50px] pointer-events-none" />
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-[#E31E24]/15 border border-[#E31E24]/30 flex items-center justify-center mb-5">
                  <ServiceIcon
                    name="target"
                    size={22}
                    className="text-[#E31E24]"
                  />
                </div>
                <div className="text-[#E31E24] text-xs tracking-[3px] uppercase font-semibold mb-3">
                  OUR MISSION
                </div>
                <p className="text-base md:text-lg text-white font-medium leading-relaxed">
                  Our mission is to provide high-quality, cost-effective, and
                  result-driven digital services that help our clients achieve
                  their business goals. We combine{" "}
                  <span className="text-[#E31E24]">
                    creativity, technology, and strategic thinking
                  </span>{" "}
                  to deliver customized solutions that drive growth, improve
                  customer engagement, and create lasting value.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] p-8 md:p-10 h-full shadow-[0_0_60px_-20px_rgba(227,30,36,0.2)]">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#E31E24]/8 blur-[50px] pointer-events-none" />
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-[#E31E24] flex items-center justify-center mb-5 shadow-lg">
                  <ServiceIcon name="eye" size={22} className="text-white" />
                </div>
                <div className="text-[#E31E24] text-xs tracking-[3px] uppercase font-semibold mb-3">
                  OUR VISION
                </div>
                <p className="text-base md:text-lg text-white font-medium leading-relaxed">
                  To become a leading and trusted digital solutions provider by
                  delivering innovative websites, effective digital marketing
                  strategies, and exceptional customer service that empower
                  businesses to achieve{" "}
                  <span className="text-[#E31E24]">sustainable growth</span> and
                  long-term success.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">
              WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Our Services
            </h2>
          </div>
        </FadeInSection>

        <Stagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.06}
        >
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <HoverLift lift={-4}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex flex-col h-full p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors duration-300"
                >
                  <div className="mb-4">
                    <ServiceIcon name={service.icon} size={28} />
                  </div>
                  <h3 className="font-semibold text-white text-base leading-snug mb-2 group-hover:text-[#E31E24] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <span className="mt-4 text-[#E31E24] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View service →
                  </span>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Why Choose */}
      <section className="bg-[#161616] border-y border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Why Choose SNK?
              </h2>
            </div>
          </FadeInSection>

          <Stagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            stagger={0.05}
            fast
          >
            {whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <HoverLift>
                  <div className="group flex items-center gap-4 p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-colors h-full">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center">
                      <ServiceIcon name={item.icon} size={18} />
                    </div>
                    <h3 className="font-medium text-white text-sm leading-snug group-hover:text-[#E31E24] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#161616] border-y border-[#2A2A2A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">
                OUR TEAM
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Meet Our Team
              </h2>
              <p className="text-[#888888] text-lg mt-3 max-w-2xl mx-auto">
                The people behind SNK — led by our Founder &amp; Director,
                working together to deliver exceptional digital solutions.
              </p>
            </div>
          </FadeInSection>

          <Stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.08}
          >
            {team.map((member, i) => (
              <StaggerItem key={member.name}>
                <HoverLift lift={-10}>
                  <div
                    className={`group relative flex flex-col h-full rounded-3xl bg-[#1A1A1A] border hover:border-[#E31E24]/60 transition-colors overflow-hidden ${
                      i <= 1 ? "border-[#E31E24]/30" : "border-[#2A2A2A]"
                    }`}
                    onMouseEnter={() => setActiveTeam(i)}
                    onMouseLeave={() => setActiveTeam(null)}
                  >
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ paddingBottom: "100%" }}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={member.img}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 33vw"
                          loading={i < 2 ? "eager" : "lazy"}
                          priority={i === 0}
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-base text-white leading-snug">
                        {member.name}
                      </h3>
                      <div
                        className={`text-sm font-medium mt-1 mb-2 transition-colors ${activeTeam === i ? "text-[#E31E24]" : "text-[#E31E24]/80"}`}
                      >
                        {member.role}
                      </div>
                      <p
                        className={`text-xs leading-relaxed flex-1 transition-colors ${activeTeam === i ? "text-[#AAAAAA]" : "text-[#888888]"}`}
                      >
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

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeInSection>
          <div className="relative rounded-[2rem] overflow-hidden border border-[#E31E24]/25 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0D0D0D] shadow-[0_0_80px_-20px_rgba(227,30,36,0.2)]">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E31E24]/10 blur-[80px] pointer-events-none" />

            <div className="relative p-10 md:p-14 lg:p-16 text-center">
              <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-4">
                GET STARTED
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Let&apos;s Build Your
                <br />
                <span className="text-[#E31E24]">Digital Success</span>
              </h2>

              <div className="max-w-2xl mx-auto space-y-4 text-[#AAAAAA] text-base leading-relaxed mb-10">
                <p>
                  At SNK, we are committed to helping businesses succeed in the
                  digital world. Whether you need a professional website, a
                  powerful digital marketing strategy, engaging content, or
                  complete online branding solutions, our team is ready to help
                  you achieve your goals.
                </p>
                <p className="text-[#CCCCCC]">
                  Partner with SNK and transform your digital vision into
                  reality. Together, we build stronger brands, create meaningful
                  online experiences, and drive sustainable business growth.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <GlowButton>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-[#E31E24] text-white font-semibold text-sm hover:bg-[#C01A1F] transition-all"
                  >
                    Start Your Project
                  </Link>
                </GlowButton>
                <GlowButton>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full border border-[#E31E24]/50 text-[#E31E24] font-semibold text-sm hover:bg-[#E31E24]/10 transition-all"
                  >
                    Contact Us
                  </Link>
                </GlowButton>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
