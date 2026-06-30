"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ServiceIcon } from "./ServiceIcon";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3.5 w-3.5 ml-1 inline-block opacity-60"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const services = [
  { href: "/services", label: "All Services" },
  { href: "/services#web", label: "Website Design & Development" },
  { href: "/services#seo", label: "Search Engine Optimization" },
  { href: "/services#performance", label: "Digital Marketing Services" },
  { href: "/services#social", label: "Social Media Marketing" },
  { href: "/services#content", label: "Content Creation & Marketing" },
  { href: "/services#maintenance", label: "Website Maintenance & Support" },
  { href: "/services#brand", label: "Branding & Promotion" },
];

const healthcareLinks = [
  { href: "/healthcare", label: "All Healthcare Services" },
  { href: "/healthcare/lead-generation", label: "Lead Generation" },
  { href: "/healthcare/social-media", label: "Social Media Marketing" },
  { href: "/healthcare/seo", label: "Healthcare SEO" },
];

const linkClass = (active: boolean, accent = false) => {
  if (accent)
    return `nav-link transition-colors ${active ? "active text-[#E31E24]" : "text-[#E31E24]/80 hover:text-[#E31E24]"}`;
  return `nav-link text-[#999999] hover:text-white transition-colors ${active ? "active text-white" : ""}`;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [healthcareOpen, setHealthcareOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) {
        setVisible(true);
      } else if (y > lastScrollY.current + 8) {
        setVisible(false);
      } else if (y < lastScrollY.current - 8) {
        setVisible(true);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setHealthcareOpen(false);
  }, [pathname]);

  const showBar = visible || isOpen;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: showBar ? 0 : "-100%" }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/40 to-transparent" />
      <nav className="relative bg-[#181818]/92 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 lg:h-[5.5rem] gap-4">
            <Link href="/" className="group shrink-0">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative"
              >
                <Image
                  src="/snk-logo.webp"
                  alt="SNK"
                  width={240}
                  height={240}
                  sizes="(max-width: 1024px) 56px, 64px"
                  className="h-12 w-auto sm:h-14 lg:h-16 rounded-lg object-contain transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(227,30,36,0.3)]"
                  priority
                />
              </motion.div>
            </Link>

            {/* Pill nav */}
            <div className="hidden xl:flex items-center gap-0.5 px-3 py-2 rounded-full bg-[#1A1A1A]/70 border border-white/[0.06]">
              <Link
                href="/"
                className={`px-3 py-1.5 text-[15px] font-semibold ${linkClass(isActive("/"))}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-1.5 text-[15px] font-semibold ${linkClass(isActive("/about"))}`}
              >
                About Us
              </Link>
              <Link
                href="/ai-digital-marketing"
                className={`px-3 py-1.5 text-[15px] font-semibold whitespace-nowrap ${linkClass(isActive("/ai-digital-marketing"), true)}`}
              >
                AI Digital Marketing
              </Link>

              <div className="dropdown relative">
                <button
                  className={`nav-link flex items-center text-[15px] font-semibold text-[#999999] hover:text-white transition-colors ${isActive("/services") ? "active text-white" : ""}`}
                >
                  Services <ChevronDown />
                </button>
                <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#1A1A1A] border border-[#2E2E2E] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                  {services.map((s) => (
                    <Link
                      key={`${s.href}-${s.label}`}
                      href={s.href}
                      className="block px-5 py-3 text-sm text-[#999999] hover:text-white hover:bg-[#E31E24]/10 transition-all border-b border-[#2E2E2E] last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="dropdown relative">
                <button
                  className={`nav-link flex items-center text-[15px] font-semibold whitespace-nowrap transition-colors ${isActive("/healthcare") ? "text-[#E31E24]" : "text-[#999999] hover:text-white"}`}
                >
                  Healthcare Digital Marketing <ChevronDown />
                </button>
                <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#1A1A1A] border border-[#2E2E2E] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                  {healthcareLinks.map((h, i) => (
                    <Link
                      key={h.href}
                      href={h.href}
                      className={`flex items-center px-5 py-3 text-sm hover:text-white hover:bg-[#E31E24]/10 transition-all border-b border-[#2E2E2E] last:border-0 ${
                        i === 0
                          ? "text-[#E31E24]/80 hover:text-[#E31E24] font-medium"
                          : "text-[#999999]"
                      }`}
                    >
                      {i === 0 && (
                        <ServiceIcon
                          name="hospital"
                          size={14}
                          className="mr-2 text-[#E31E24]"
                        />
                      )}
                      {h.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/case-studies"
                className={`px-3 py-1.5 text-[15px] font-semibold ${linkClass(isActive("/case-studies"))}`}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className={`px-3 py-1.5 text-[15px] font-semibold ${linkClass(isActive("/blog"))}`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-1.5 text-[15px] font-semibold ${linkClass(isActive("/contact"))}`}
              >
                Contact
              </Link>
            </div>

            <div className="hidden xl:block shrink-0">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#E31E24] text-white text-sm font-semibold hover:bg-[#C01A1F] transition-all active:scale-[0.985] hover:shadow-[0_0_22px_rgba(227,30,36,0.35)]"
              >
                Book Strategy Call
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="xl:hidden relative border-t border-[#2E2E2E] bg-[#181818]/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-1 text-base">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`py-3 border-b border-[#222222] ${isActive("/") ? "text-[#E31E24]" : "text-[#CCCCCC]"}`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`py-3 border-b border-[#222222] ${isActive("/about") ? "text-[#E31E24]" : "text-[#CCCCCC]"}`}
                >
                  About Us
                </Link>
                <Link
                  href="/ai-digital-marketing"
                  onClick={() => setIsOpen(false)}
                  className={`py-3 border-b border-[#222222] font-semibold ${isActive("/ai-digital-marketing") ? "text-[#E31E24]" : "text-[#E31E24]/80"}`}
                >
                  AI Digital Marketing
                </Link>

                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full text-left py-3 border-b border-[#222222] text-[#CCCCCC] flex justify-between items-center"
                  >
                    Services <ChevronDown />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 py-2 flex flex-col gap-1">
                      {services.map((s) => (
                        <Link
                          key={`${s.href}-${s.label}`}
                          href={s.href}
                          onClick={() => setIsOpen(false)}
                          className="py-2 text-sm text-[#888888] hover:text-white transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setHealthcareOpen(!healthcareOpen)}
                    className={`w-full text-left py-3 border-b border-[#222222] flex justify-between items-center ${isActive("/healthcare") ? "text-[#E31E24]" : "text-[#CCCCCC]"}`}
                  >
                    Healthcare Digital Marketing <ChevronDown />
                  </button>
                  {healthcareOpen && (
                    <div className="pl-4 py-2 flex flex-col gap-1">
                      {healthcareLinks.map((h) => (
                        <Link
                          key={h.href}
                          href={h.href}
                          onClick={() => setIsOpen(false)}
                          className="py-2 text-sm text-[#888888] hover:text-white transition-colors"
                        >
                          {h.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/case-studies"
                  onClick={() => setIsOpen(false)}
                  className={`py-3 border-b border-[#222222] ${isActive("/case-studies") ? "text-[#E31E24]" : "text-[#CCCCCC]"}`}
                >
                  Case Studies
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className={`py-3 border-b border-[#222222] ${isActive("/blog") ? "text-[#E31E24]" : "text-[#CCCCCC]"}`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`py-3 border-b border-[#222222] ${isActive("/contact") ? "text-[#E31E24]" : "text-[#CCCCCC]"}`}
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full text-center py-3 rounded-full bg-[#E31E24] text-white font-semibold hover:bg-[#C01A1F] transition-all"
                >
                  Book Strategy Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
