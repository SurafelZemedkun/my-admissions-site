'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from './ui/AppLogo';
import Icon from './ui/AppIcon';

const navLinks = [
{ label: 'Services', href: '#services' },
{ label: 'Success Stories', href: '#success-stories' },
{ label: 'Why Us', href: '#why-us' },
{ label: 'Contact', href: '#booking' }];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {document.body.style.overflow = '';};
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-10 py-6 flex items-center justify-between ${
        scrolled ? 'nav-scrolled' : ''}`
        }>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={handleNavClick}>
          <AppLogo
            size={36}
            className="transition-transform duration-300 group-hover:scale-105" />

          <span
            className="font-800 text-xl tracking-tight hidden sm:block transition-colors duration-300 text-[rgba(252,194,85,1)]">

            ECP Admissions
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${
          scrolled ?
          'bg-white/10 border-white/10' : 'bg-white/10 border-white/15 backdrop-blur-md'}`
          }>

          {navLinks?.map((link) =>
          <a
            key={link?.label}
            href={link?.href}
            className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
            scrolled ?
            'text-white/70 hover:text-white hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/15'}`
            }>

              {link?.label}
            </a>
          )}
          <a
            href="#booking"
            className="ml-1 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200">

            Book Free Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2.5 rounded-full border transition-all duration-200 ${
          scrolled ?
          'border-white/20 text-white hover:bg-white/10' : 'border-white/20 text-white hover:bg-white/10'}`
          }
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}>

          <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen &&
      <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col justify-center px-8">
          <div className="flex flex-col gap-6">
            {navLinks?.map((link, i) =>
          <a
            key={link?.label}
            href={link?.href}
            onClick={handleNavClick}
            className="text-3xl font-bold text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 border-b border-white/10 pb-6"
            style={{ transitionDelay: `${i * 60}ms` }}>

                {link?.label}
              </a>
          )}
            <a
            href="#booking"
            onClick={handleNavClick}
            className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest rounded-full text-sm hover:bg-accent/90 transition-all">

              Book Free Consultation
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
        </div>
      }
    </>);

}
