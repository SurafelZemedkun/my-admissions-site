'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

const testimonials = [
{
  id: 0,
  name: 'Priya Sharma',
  location: 'Mumbai, India',
  university: 'University of Edinburgh',
  program: 'MSc Computer Science, 2025',
  quote:
  'EduConsult did not just help me apply — they helped me understand what each university was really looking for. My SOP was transformed completely. I got into Edinburgh with a £6,000 merit scholarship.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_126d7e136-1768020582546.png",
  scholarship: '£6,000 Scholarship'
},
{
  id: 1,
  name: 'Marcus Adeyemi',
  location: 'Lagos, Nigeria',
  university: 'University of Toronto',
  program: 'BEng Mechanical Engineering, 2025',
  quote:
  'The visa process was the part I was most scared about. My counselor walked me through every single document. I got my Canadian student visa approved in 18 days.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1212a8632-1768802888308.png",
  scholarship: 'Full Visa Approval'
},
{
  id: 2,
  name: 'Linh Nguyen',
  location: 'Ho Chi Minh City, Vietnam',
  university: 'Monash University',
  program: 'MBA, 2024',
  quote:
  'I had been rejected twice before. EduConsult completely changed my approach — the interview coaching was exceptional. I start my MBA at Monash this September.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1024c28aa-1778669971007.png",
  scholarship: 'After 2 Prior Rejections'
}];


const bgPortraits = [
{
  src: "/assets/images/photo_2025-10-07_16-32-32-1784186293909.jpg",
  alt: 'Student portrait, confident young man, neutral background',
  style: 'absolute left-0 top-1/2 -translate-y-1/2 -rotate-12 w-36 md:w-48 h-52 md:h-64'
},
{
  src: "/assets/images/photo_2026-03-16_09-38-27-1784186254087.jpg",
  alt: 'Student portrait, young woman smiling, neutral background',
  style: 'absolute left-20 md:left-24 top-1/2 -translate-y-1/3 rotate-6 w-36 md:w-48 h-52 md:h-64'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ece17484-1763301747443.png",
  alt: 'Student portrait, young man in casual attire, light background',
  style: 'absolute right-20 md:right-24 top-1/2 -translate-y-1/4 -rotate-6 w-36 md:w-48 h-52 md:h-64'
},
{
  src: "/assets/images/_MG_0507__2_-1784186303367.JPG",
  alt: 'Student portrait, young woman in professional attire, warm background',
  style: 'absolute right-0 top-1/2 -translate-y-1/2 rotate-12 w-36 md:w-48 h-52 md:h-64'
}];


export default function SuccessStoriesSection() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const switchTo = (idx: number) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = testimonials[active];

  return (
    <section id="success-stories" className="py-24 px-6 md:px-10 bg-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal-hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Real Results
          </p>
          <h2 className="text-section-title text-foreground">
            Students who made it.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Not just accepted — placed at universities that changed their trajectories.
          </p>
        </div>

        {/* Overlapping Portrait Layout */}
        <div className="scroll-reveal-hidden relative h-[580px] md:h-[640px] flex items-center justify-center">
          {/* Background Portraits */}
          {bgPortraits.map((p, i) =>
          <div
            key={i}
            className={`${p.style} rounded-2xl overflow-hidden shadow-xl hidden md:block`}>
            
              <AppImage
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover grayscale"
              sizes="192px" />
            
            </div>
          )}

          {/* Center Card */}
          <div
            className={`relative z-10 w-full max-w-md bg-card rounded-3xl shadow-[0_40px_100px_rgba(15,32,68,0.15)] p-8 md:p-10 text-center transition-opacity duration-300 ${
            fading ? 'opacity-0' : 'opacity-100'}`
            }>
            
            {/* Avatar */}
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden border-4 border-background shadow-lg relative">
              <AppImage
                src={current.image}
                alt={`${current.name} student portrait`}
                fill
                className="object-cover"
                sizes="80px" />
              
            </div>

            {/* Name + Location */}
            <h4 className="text-lg font-bold text-foreground">{current.name}</h4>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1 mb-2">
              {current.location}
            </p>

            {/* University Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-5">
              <Icon name="AcademicCapIcon" size={13} className="text-accent" />
              <span className="text-[11px] font-bold text-accent">{current.university}</span>
            </div>

            {/* Program */}
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
              {current.program}
            </p>

            {/* Quote mark */}
            <div className="text-3xl font-bold text-muted-foreground/30 italic mb-2">"</div>

            {/* Quote */}
            <p className="text-sm leading-relaxed text-muted-foreground font-medium mb-5">
              {current.quote}
            </p>

            {/* Scholarship badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full">
              <Icon name="TrophyIcon" size={12} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                {current.scholarship}
              </span>
            </div>
          </div>
        </div>

        {/* Switcher Dots + Names */}
        <div className="flex items-center justify-center gap-6 mt-8 scroll-reveal-hidden">
          {testimonials.map((t, i) =>
          <button
            key={t.id}
            onClick={() => switchTo(i)}
            className={`flex flex-col items-center gap-2 group transition-all duration-300 ${
            i === active ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`
            }>
            
              <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active ? 'bg-accent scale-125' : 'bg-muted-foreground group-hover:bg-accent'}`
              } />
            
              <span className="text-[11px] font-bold uppercase tracking-widest text-foreground hidden sm:block">
                {t.name.split(' ')[0]}
              </span>
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-reveal-hidden">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300">
            
            Start Your Story
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>);

}
