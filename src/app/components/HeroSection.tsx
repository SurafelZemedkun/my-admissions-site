'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [line1Ref, line2Ref, line3Ref];
    const delays = [200, 380, 560];

    refs.forEach((ref, i) => {
      const el = ref.current?.closest('.line-reveal') as HTMLElement | null;
      if (!el) return;
      setTimeout(() => el.classList.add('revealed'), delays[i]);
    });

    setTimeout(() => {
      subRef.current?.classList.add('revealed');
      ctaRef.current?.classList.add('revealed');
      statsRef.current?.classList.add('revealed');
    }, 800);
  }, []);

  const stats = [
  { value: '500+', label: 'Students Placed' },
  { value: '98%', label: 'Visa Approval Rate' },
  { value: '200+', label: 'Partner Universities' },
  { value: '15 Yrs', label: 'Expertise' }];


  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/Gemini_Generated_Image_tb9bistb9bistb9b-1784186482942.png"
          alt="University campus with students walking under autumn trees, warm golden afternoon light, deep shadows, atmospheric collegiate architecture"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Gradient scrim — bottom to top for white text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
        {/* Extra top scrim for nav area */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-40 pb-16 flex flex-col gap-10">
        {/* Eyebrow */}
        <div
          className="scroll-reveal-hidden revealed inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm">
          
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            Trusted by 500+ Students Worldwide
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-hero-xl text-white max-w-5xl">
          <span className="line-reveal">
            <span ref={line1Ref}>Your dream</span>
          </span>
          <span className="line-reveal" style={{ transitionDelay: '80ms' }}>
            <span ref={line2Ref}>university,</span>
          </span>
          <span className="line-reveal flex items-center gap-4 flex-wrap" style={{ transitionDelay: '160ms' }}>
            <span className="h-px w-16 md:w-28 bg-accent/60 inline-block" />
            <span ref={line3Ref} className="text-accent">made reachable.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <div
          ref={subRef}
          className="scroll-reveal-hidden max-w-xl">
          
          <p className="text-lg md:text-xl text-white/75 leading-relaxed font-medium">
            EduConsult provides end-to-end guidance — from shortlisting programs to
            securing your visa — so you arrive at the right university, not just any university.
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="scroll-reveal-hidden flex flex-col sm:flex-row gap-4">
          
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300">
            
            Book Free Consultation
            <Icon name="ArrowRightIcon" size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all duration-300">
            
            Explore Services
            <Icon name="ChevronDownIcon" size={16} />
          </a>
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className="scroll-reveal-hidden mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          
          {stats.map((s) =>
          <div
            key={s.label}
            className="flex flex-col items-center justify-center py-5 px-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
            
              <span className="text-2xl md:text-3xl font-bold text-accent">{s.value}</span>
              <span className="text-[11px] uppercase tracking-widest text-white/50 font-bold mt-1 text-center">{s.label}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-50">
        <Icon name="ChevronDownIcon" size={28} className="text-white" />
      </div>
    </section>);

}