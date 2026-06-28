'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ServiceIcon } from './ServiceIcon';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
);

const services = [
  { href: '/services', label: 'All Services' },
  { href: '/services#seo', label: 'SEO & Organic Growth' },
  { href: '/services#performance', label: 'Performance Marketing' },
  { href: '/services#web', label: 'Web Experience' },
  { href: '/services#content', label: 'Content & Storytelling' },
  { href: '/services#brand', label: 'Brand & Strategy' },
  { href: '/services#social', label: 'Social Media Marketing' },
];

const healthcareLinks = [
  { href: '/healthcare', label: 'All Healthcare Services' },
  { href: '/healthcare/lead-generation', label: 'Lead Generation' },
  { href: '/healthcare/social-media', label: 'Social Media Marketing' },
  { href: '/healthcare/seo', label: 'Healthcare SEO' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [healthcareOpen, setHealthcareOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Brand lockup */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 420, damping: 20 }}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 flex-shrink-0 ring-1 ring-[#2A2A2A] group-hover:ring-[#E31E24]/50 transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(227,30,36,0.3)]"
            >
              <Image
                src="/snk-logo.webp"
                alt="SNK Web Solutions"
                width={44}
                height={44}
                sizes="44px"
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
            <div className="leading-none">
              <div className="font-semibold text-base sm:text-lg tracking-tighter text-white group-hover:text-white transition-colors">
                SNK
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#E31E24] tracking-[2.5px] font-medium mt-0.5 hidden sm:block">
                WEB SOLUTIONS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {/* Home */}
            <Link
              href="/"
              className={`nav-link text-[#999999] hover:text-white transition-colors ${isActive('/') ? 'active text-white' : ''}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="dropdown relative">
              <button className={`nav-link flex items-center text-[#999999] hover:text-white transition-colors ${isActive('/services') ? 'active text-white' : ''}`}>
                Services <ChevronDown />
              </button>
              <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#161616] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-3 text-sm text-[#999999] hover:text-white hover:bg-[#E31E24]/10 transition-all border-b border-[#2A2A2A] last:border-0"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Healthcare Dropdown */}
            <div className="dropdown relative">
              <button className={`nav-link flex items-center transition-colors ${isActive('/healthcare') ? 'text-[#E31E24]' : 'text-[#999999] hover:text-white'}`}>
                Healthcare <ChevronDown />
              </button>
              <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-[#161616] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                {healthcareLinks.map((h, i) => (
                  <Link
                    key={h.href}
                    href={h.href}
                    className={`flex items-center px-5 py-3 text-sm hover:text-white hover:bg-[#E31E24]/10 transition-all border-b border-[#2A2A2A] last:border-0 ${
                      i === 0
                        ? 'text-[#E31E24]/80 hover:text-[#E31E24] font-medium'
                        : 'text-[#999999]'
                    }`}
                  >
                    {i === 0 && <ServiceIcon name="hospital" size={14} className="mr-2 text-[#E31E24]" />}
                    {h.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              className={`nav-link text-[#999999] hover:text-white transition-colors ${isActive('/case-studies') ? 'active text-white' : ''}`}
            >
              Case Studies
            </Link>

            {/* AI Digital Marketing — standalone nav link */}
            <Link
              href="/ai-digital-marketing"
              className={`nav-link transition-colors ${
                isActive('/ai-digital-marketing')
                  ? 'text-[#E31E24]'
                  : 'text-[#E31E24]/80 hover:text-[#E31E24]'
              }`}
            >
              AI Marketing
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`nav-link text-[#999999] hover:text-white transition-colors ${isActive('/about') ? 'active text-white' : ''}`}
            >
              About
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`nav-link text-[#999999] hover:text-white transition-colors ${isActive('/blog') ? 'active text-white' : ''}`}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`nav-link text-[#999999] hover:text-white transition-colors ${isActive('/contact') ? 'active text-white' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-[#E31E24] text-white text-sm font-semibold hover:bg-[#C01A1F] transition-all active:scale-[0.985]"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="md:hidden border-t border-[#2A2A2A] bg-[#0D0D0D] overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="px-6 py-6 flex flex-col gap-1 text-base"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className={`py-3 border-b border-[#1A1A1A] ${isActive('/') ? 'text-[#E31E24]' : 'text-[#CCCCCC]'}`}>Home</Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left py-3 border-b border-[#1A1A1A] text-[#CCCCCC] flex justify-between items-center"
              >
                Services <ChevronDown />
              </button>
              {servicesOpen && (
                <div className="pl-4 py-2 flex flex-col gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
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

            {/* Mobile Healthcare */}
            <div>
              <button
                onClick={() => setHealthcareOpen(!healthcareOpen)}
                className={`w-full text-left py-3 border-b border-[#1A1A1A] flex justify-between items-center ${isActive('/healthcare') ? 'text-[#E31E24]' : 'text-[#CCCCCC]'}`}
              >
                Healthcare <ChevronDown />
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

            {/* Case Studies in mobile */}
            <Link
              href="/case-studies"
              onClick={() => setIsOpen(false)}
              className={`py-3 border-b border-[#1A1A1A] ${isActive('/case-studies') ? 'text-[#E31E24]' : 'text-[#CCCCCC]'}`}
            >
              Case Studies
            </Link>

            {/* AI Digital Marketing standalone in mobile */}
            <Link
              href="/ai-digital-marketing"
              onClick={() => setIsOpen(false)}
              className={`py-3 border-b border-[#1A1A1A] font-semibold ${isActive('/ai-digital-marketing') ? 'text-[#E31E24]' : 'text-[#E31E24]/80'}`}
            >
              AI Digital Marketing
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)} className={`py-3 border-b border-[#1A1A1A] ${isActive('/about') ? 'text-[#E31E24]' : 'text-[#CCCCCC]'}`}>About</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className={`py-3 border-b border-[#1A1A1A] ${isActive('/blog') ? 'text-[#E31E24]' : 'text-[#CCCCCC]'}`}>Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className={`py-3 border-b border-[#1A1A1A] ${isActive('/contact') ? 'text-[#E31E24]' : 'text-[#CCCCCC]'}`}>Contact</Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-center py-3 rounded-full bg-[#E31E24] text-white font-semibold hover:bg-[#C01A1F] transition-all"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
