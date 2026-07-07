'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const MenuIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 7h16M4 12h16M4 17h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDown = ({ open }: { open?: boolean }) => (
  <svg
    className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const services = [
  { href: '/services', label: 'All Services' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/aeo', label: 'AEO' },
  { href: '/services/social-media', label: 'Social Media' },
  { href: '/services/performance-marketing', label: 'Performance Marketing' },
  { href: '/services/web-design', label: 'Web Design' },
];

const healthcareLinks = [
  { href: '/healthcare', label: 'All Healthcare Services' },
  { href: '/healthcare/seo', label: 'Healthcare SEO' },
  { href: '/healthcare/social-media', label: 'Healthcare Social Media' },
  { href: '/healthcare/lead-generation', label: 'Healthcare Lead Generation' },
];

const aboutLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
];

const navLinkClass = (active: boolean, nowrap?: boolean) =>
  [
    'relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] xl:text-sm font-medium transition-all duration-200',
    nowrap ? 'whitespace-nowrap' : '',
    active
      ? 'text-[#111111] bg-white/70 backdrop-blur-sm shadow-sm ring-1 ring-white/60'
      : 'text-[#555555] hover:text-[#111111] hover:bg-white/50',
  ].join(' ');

function NavItem({
  href,
  label,
  active,
  nowrap,
}: {
  href: string;
  label: string;
  active: boolean;
  nowrap?: boolean;
}) {
  return (
    <Link href={href} className={navLinkClass(active, nowrap)}>
      {label}
    </Link>
  );
}

function DesktopDropdown({
  label,
  active,
  items,
  nowrap,
}: {
  label: string;
  active: boolean;
  items: { href: string; label: string }[];
  nowrap?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 ${navLinkClass(active || open, nowrap)}`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 min-w-[220px] rounded-2xl border border-white/50 bg-white/80 backdrop-blur-2xl backdrop-saturate-150 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [healthcareOpen, setHealthcareOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setHealthcareOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrollProgress(Math.min(window.scrollY / 160, 1));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const glassWhite = 0.9 - scrollProgress * 0.45;
  const glassFade = 1 - scrollProgress * 0.35;

  const mobileLinkClass = (active: boolean) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      active
        ? 'text-[#111111] bg-white/70 ring-1 ring-white/60'
        : 'text-[#555555] hover:text-[#111111] hover:bg-white/50'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="relative border-b border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        <div
          className="absolute inset-0 -z-10 backdrop-blur-2xl backdrop-saturate-150 transition-opacity duration-300"
          style={{
            opacity: isOpen ? 1 : glassFade,
            backgroundColor: `rgba(255, 255, 255, ${glassWhite})`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/35 via-white/15 to-transparent transition-opacity duration-300"
          style={{ opacity: isOpen ? 1 : glassFade }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-white/80" />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[4.5rem] gap-4">
            <Link
              href="/"
              className="relative z-10 isolate flex h-full shrink-0 items-center overflow-visible"
            >
              <Image
                src="/new_logo-nav.webp"
                alt="SNK Web Solutions"
                width={320}
                height={120}
                sizes="(max-width: 1024px) 180px, 220px"
                className="h-[3.35rem] w-auto max-h-full object-contain object-left mix-blend-multiply"
                priority
              />
            </Link>

            <div
              className="hidden lg:flex items-center gap-0.5 flex-1 justify-center min-w-0 transition-opacity duration-300"
              style={{ opacity: isOpen ? 1 : glassFade }}
            >
              <NavItem href="/" label="Home" active={isActive('/')} />
              <DesktopDropdown
                label="About Us"
                active={isActive('/about') || isActive('/case-studies') || isActive('/blog')}
                items={aboutLinks}
              />
              <NavItem
                href="/ai-digital-marketing"
                label="AI Digital Marketing"
                active={isActive('/ai-digital-marketing')}
                nowrap
              />
              <DesktopDropdown label="Services" active={isActive('/services')} items={services} />
              <DesktopDropdown
                label="Healthcare DM"
                active={isActive('/healthcare')}
                items={healthcareLinks}
                nowrap
              />
              <NavItem href="/contact" label="Contact" active={isActive('/contact')} />
            </div>

            <div className="relative z-10 hidden lg:block shrink-0">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center rounded-full bg-[#E31E24] px-6 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(227,30,36,0.35)] hover:bg-[#C01A1F] transition-colors whitespace-nowrap"
              >
                Book a Call
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 lg:hidden text-[#444444] hover:text-[#111111] p-2 -mr-2 transition-colors"
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="lg:hidden border-t border-white/40 overflow-hidden bg-white/85 backdrop-blur-2xl backdrop-saturate-150"
            >
              <div className="px-4 py-4 flex flex-col gap-1 max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(isActive('/'))}
                >
                  Home
                </Link>
                <button
                  type="button"
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between rounded-full px-3.5 py-2 text-sm font-medium text-[#555555] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                >
                  About Us
                  <ChevronDown open={aboutOpen} />
                </button>
                {aboutOpen && (
                  <div className="ml-3 flex flex-col gap-0.5 pb-1">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-[#777777] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/ai-digital-marketing"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(isActive('/ai-digital-marketing'))}
                >
                  AI Digital Marketing
                </Link>

                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between rounded-full px-3.5 py-2 text-sm font-medium text-[#555555] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                >
                  Services
                  <ChevronDown open={servicesOpen} />
                </button>
                {servicesOpen && (
                  <div className="ml-3 flex flex-col gap-0.5 pb-1">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-[#777777] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setHealthcareOpen(!healthcareOpen)}
                  className="flex items-center justify-between rounded-full px-3.5 py-2 text-sm font-medium text-[#555555] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                >
                  Healthcare DM
                  <ChevronDown open={healthcareOpen} />
                </button>
                {healthcareOpen && (
                  <div className="ml-3 flex flex-col gap-0.5 pb-1">
                    {healthcareLinks.map((h) => (
                      <Link
                        key={h.href}
                        href={h.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-[#777777] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                      >
                        {h.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(isActive('/contact'))}
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 flex h-11 items-center justify-center rounded-full bg-[#E31E24] text-sm font-semibold text-white hover:bg-[#C01A1F] transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
