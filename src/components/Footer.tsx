import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <AppLogo size={28} />
          <span className="font-display font-bold text-base text-foreground tracking-tight hidden sm:block">ECPAdmissions

          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
          { label: 'Services', href: '#services' },
          { label: 'Success Stories', href: '#success-stories' },
          { label: 'Why Us', href: '#why-us' },
          { label: 'Book a Call', href: '#booking' },
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' }].
          map((link) =>
          <a
            key={link.label}
            href={link.href}
            className="text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">

              {link.label}
            </a>
          )}
        </nav>

        {/* Social + copyright */}
        <div className="flex items-center gap-4">
          {[
          { icon: 'GlobeAltIcon', label: 'Website' },
          { icon: 'EnvelopeIcon', label: 'Email' }].
          map((s) =>
          <a
            key={s.label}
            href="#"
            aria-label={s.label}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200">

              <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} />
            </a>
          )}
          <span className="text-[13px] text-muted-foreground ml-2 hidden lg:block">© 2026 ECPadmissions

          </span>
        </div>
      </div>
      <p className="text-center text-[13px] text-muted-foreground mt-4 lg:hidden">© 2026 ECPAdmissions. All rights reserved.

      </p>
    </footer>);

}