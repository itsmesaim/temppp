'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const MenuIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
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
    <Link
      href={href}
      className={`relative px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-medium transition-colors ${
        nowrap ? 'whitespace-nowrap' : ''
      } ${active ? 'text-white' : 'text-[#999999] hover:text-white'}`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-px bg-[#E31E24] rounded-full" />
      )}
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
        className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-medium transition-colors ${
          nowrap ? 'whitespace-nowrap' : ''
        } ${active || open ? 'text-white' : 'text-[#999999] hover:text-white'}`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown open={open} />
      </button>
      {(active || open) && (
        <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-px bg-[#E31E24] rounded-full" />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 min-w-[240px] rounded-xl border border-[#2A2A2A] bg-[#141414] p-1.5 shadow-xl shadow-black/40"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-[#AAAAAA] hover:text-white hover:bg-[#1F1F1F] transition-colors"
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
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setHealthcareOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const mobileLinkClass = (active: boolean) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
      active ? 'text-white bg-[#1A1A1A]' : 'text-[#AAAAAA] hover:text-white hover:bg-[#161616]'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#2A2A2A]/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[4.5rem] gap-4">
            <Link href="/" className="flex shrink-0 items-center">
              <div className="rounded-2xl bg-white px-5 py-1.5">
                <Image
                  src="/snk-logo.jpg"
                  alt="SNK Web Solutions"
                  width={1080}
                  height={1080}
                  sizes="(max-width: 1024px) 150px, 180px"
                  className="h-11 w-auto object-contain sm:h-[3.25rem]"
                  priority
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center min-w-0">
              <NavItem href="/" label="Home" active={isActive('/')} />
              <NavItem href="/about" label="About Us" active={isActive('/about')} />
              <NavItem
                href="/ai-digital-marketing"
                label="AI Digital Marketing"
                active={isActive('/ai-digital-marketing')}
                nowrap
              />
              <DesktopDropdown
                label="Services"
                active={isActive('/services')}
                items={services}
              />
              <DesktopDropdown
                label="Healthcare DM"
                active={isActive('/healthcare')}
                items={healthcareLinks}
                nowrap
              />
              <NavItem href="/case-studies" label="Case Studies" active={isActive('/case-studies')} />
              <NavItem href="/blog" label="Blog" active={isActive('/blog')} />
              <NavItem href="/contact" label="Contact" active={isActive('/contact')} />
            </div>

            <div className="hidden lg:block shrink-0">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center rounded-lg bg-[#E31E24] px-5 text-sm font-semibold text-white hover:bg-[#C01A1F] transition-colors whitespace-nowrap"
              >
                Book a Call
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#CCCCCC] hover:text-white p-2 -mr-2 transition-colors"
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
              className="lg:hidden border-t border-[#2A2A2A] bg-[#0D0D0D] overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1 max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
                <Link href="/" onClick={() => setIsOpen(false)} className={mobileLinkClass(isActive('/'))}>
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(isActive('/about'))}
                >
                  About Us
                </Link>
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
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[#AAAAAA] hover:text-white hover:bg-[#161616] transition-colors"
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
                        className="rounded-lg px-3 py-2 text-sm text-[#777777] hover:text-white hover:bg-[#161616] transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setHealthcareOpen(!healthcareOpen)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[#AAAAAA] hover:text-white hover:bg-[#161616] transition-colors"
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
                        className="rounded-lg px-3 py-2 text-sm text-[#777777] hover:text-white hover:bg-[#161616] transition-colors"
                      >
                        {h.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  href="/case-studies"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(isActive('/case-studies'))}
                >
                  Case Studies
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(isActive('/blog'))}
                >
                  Blog
                </Link>
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
                  className="mt-3 flex h-11 items-center justify-center rounded-lg bg-[#E31E24] text-sm font-semibold text-white hover:bg-[#C01A1F] transition-colors"
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