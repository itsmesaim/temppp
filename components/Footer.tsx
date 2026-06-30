"use client";

import Link from "next/link";
import Image from "next/image";
import { ServiceIcon } from "./ServiceIcon";
import { Reveal, Stagger, StaggerItem, motion } from "./motion";
import { OFFICE_ADDRESS, FOUNDED_YEAR } from "../lib/site";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${OFFICE_ADDRESS.mapsQuery}`;

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/contact" },
  { label: "Contact", href: "/contact" },
  { label: "Free Website Audit", href: "/contact" },
];

const serviceLinks = [
  { label: "Website Design", href: "/services" },
  { label: "Website Development", href: "/services" },
  { label: "SEO", href: "/services" },
  { label: "Digital Marketing", href: "/services" },
  { label: "Social Media Marketing", href: "/services" },
  { label: "Branding", href: "/services" },
  { label: "Website Maintenance", href: "/services" },
  { label: "Content Marketing", href: "/services" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/snkwebsolutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/snkwebsolutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/snkwebsolutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@snkwebsolutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A] text-sm text-white overflow-hidden">
      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          stagger={0.08}
        >
          {/* ── Col 1: Brand ── */}
          <StaggerItem variant="fadeUp">
            <div>
              <div className="mb-5">
                <Image
                  src="/snk-logo.webp"
                  alt="SNK"
                  width={160}
                  height={160}
                  sizes="120px"
                  loading="lazy"
                  className="h-14 w-auto rounded-lg object-contain"
                />
              </div>

              <p className="text-[#888888] text-sm leading-relaxed mb-6 max-w-[240px]">
                Helping businesses grow and thrive in the digital world since{" "}
                {FOUNDED_YEAR}. Your trusted partner for websites, digital
                marketing, and branding.
              </p>

              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    whileHover={{ y: -4, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-white hover:border-[#E31E24]/60 hover:bg-[#E31E24]/10 transition-colors duration-300"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* ── Col 2: Quick Links ── */}
          <StaggerItem variant="fadeUp">
            <div>
              <div className="text-xs tracking-[3px] text-[#E31E24] uppercase mb-5">
                Quick Links
              </div>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[#888888] hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E31E24] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* ── Col 3: Services ── */}
          <StaggerItem variant="fadeUp">
            <div>
              <div className="text-xs tracking-[3px] text-[#E31E24] uppercase mb-5">
                Services
              </div>
              <ul className="space-y-2.5">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[#888888] hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E31E24] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* ── Col 4: Contact ── */}
          <StaggerItem variant="fadeUp">
            <div>
              <div className="text-xs tracking-[3px] text-[#E31E24] uppercase mb-5">
                Contact Us
              </div>
              <div className="space-y-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-all duration-300 hover:bg-[#E31E24]/5"
                >
                  <ServiceIcon
                    name="map-pin"
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[#E31E24]"
                  />
                  <span className="text-[#888888] text-xs leading-relaxed group-hover:text-[#CCCCCC] transition-colors">
                    {OFFICE_ADDRESS.full}
                  </span>
                </a>

                <a
                  href="tel:+919321587762"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-all duration-300 hover:bg-[#E31E24]/5"
                >
                  <ServiceIcon
                    name="phone"
                    size={16}
                    className="flex-shrink-0 text-[#E31E24]"
                  />
                  <span className="text-[#888888] text-xs group-hover:text-[#CCCCCC] transition-colors">
                    +91 93215 87762
                  </span>
                </a>

                <a
                  href="mailto:snkwebsolutions@gmail.com"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E31E24]/40 transition-all duration-300 hover:bg-[#E31E24]/5"
                >
                  <ServiceIcon
                    name="mail"
                    size={16}
                    className="flex-shrink-0 text-[#E31E24]"
                  />
                  <span className="text-[#888888] text-xs group-hover:text-[#E31E24] transition-colors">
                    snkwebsolutions@gmail.com
                  </span>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A]">
                  <ServiceIcon
                    name="clock"
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[#E31E24]"
                  />
                  <div className="text-xs text-[#888888] leading-relaxed">
                    <div className="text-[#CCCCCC] font-medium mb-0.5">
                      Monday – Saturday
                    </div>
                    10:00 AM – 7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
      </div>

      <Reveal
        className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        variant="fadeIn"
      >
        <div className="text-[#555555] text-xs tracking-wide">
          © {FOUNDED_YEAR}–Present <span className="text-[#888888]">SNK</span>.
          All Rights Reserved.
        </div>
        <div className="flex items-center gap-5 text-xs text-[#555555]">
          <Link
            href="/privacy-policy"
            className="hover:text-[#E31E24] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-[#2A2A2A]">|</span>
          <Link
            href="/terms"
            className="hover:text-[#E31E24] transition-colors"
          >
            Terms &amp; Conditions
          </Link>
          <span className="text-[#2A2A2A]">|</span>
          <Link
            href="/sitemap.xml"
            className="hover:text-[#E31E24] transition-colors"
          >
            Sitemap
          </Link>
        </div>
      </Reveal>
    </footer>
  );
}
