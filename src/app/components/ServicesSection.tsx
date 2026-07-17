'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '../../components/ui/AppIcon';

/*
  BENTO GRID AUDIT — 4 cards on 3-col grid
  Array: [Study Abroad, University Admissions, Visa & Documentation, Scholarship Guidance]

  Row 1: [col-1+2: StudyAbroad cs-2 rs-1] [col-3: Admissions cs-1 rs-2]
  Row 2: [col-1: Visa cs-1]               [col-2: Scholarship cs-1]    [col-3: FILLED by Admissions rs-2]

  Placed 4/4 ✓
*/

const services = [
  {
    id: 'study-abroad',
    icon: 'GlobeAltIcon',
    tag: 'Most Popular',
    title: 'Study Abroad Programs',
    description:
      'We match you with the right program across the UK, US, Canada, Australia, and Europe — factoring in your academic profile, budget, and career goals.',
    highlights: ['50+ destination countries', 'Shortlist in 48 hours', 'Full application support'],
    colSpan: 'md:col-span-2',
    rowSpan: '',
    accent: true,
  },
  {
    id: 'admissions',
    icon: 'AcademicCapIcon',
    tag: 'Admissions',
    title: 'University Admissions',
    description:
      'From SOP writing to interview prep — our counselors have helped students gain admission to Oxford, MIT, NUS, and 200+ other universities.',
    highlights: ['SOP & LOR guidance', 'Interview coaching', '200+ partner universities'],
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    accent: false,
  },
  {
    id: 'visa',
    icon: 'IdentificationIcon',
    tag: 'Visa',
    title: 'Visa & Documentation',
    description:
      '98% visa approval rate. We handle every document, checklist, and embassy requirement so nothing gets missed.',
    highlights: ['98% approval rate', 'End-to-end filing', 'Embassy prep'],
    colSpan: 'md:col-span-1',
    rowSpan: '',
    accent: false,
  },
  {
    id: 'scholarship',
    icon: 'TrophyIcon',
    tag: 'Scholarships',
    title: 'Scholarship Guidance',
    description:
      'Our students have secured over $4.2M in scholarships. We identify merit and need-based opportunities you qualify for.',
    highlights: ['$4.2M secured', 'Merit & need-based', 'Essay review'],
    colSpan: 'md:col-span-1',
    rowSpan: '',
    accent: false,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-6 md:px-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 scroll-reveal-hidden">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-3">
              What We Do
            </p>
            <h2 className="text-section-title text-foreground">
              Everything you need,<br />from search to acceptance.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed text-base md:text-right">
            Four core services, one dedicated team. We guide you through every step of your international education journey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`scroll-reveal-hidden ${service.colSpan} ${service.rowSpan} stagger-${idx + 1} group relative rounded-2xl p-8 border service-card-hover cursor-pointer flex flex-col justify-between min-h-[280px] ${
                service.accent
                  ? 'bg-primary border-primary/20' :'bg-card border-border hover:border-accent/30'
              }`}
            >
              {/* Tag */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    service.accent
                      ? 'bg-accent/20 text-accent' :'bg-muted text-muted-foreground'
                  }`}
                >
                  {service.tag}
                </span>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    service.accent
                      ? 'bg-accent/20 group-hover:bg-accent/30' :'bg-muted group-hover:bg-accent/15'
                  }`}
                >
                  <Icon
                    name={service.icon as Parameters<typeof Icon>[0]['name']}
                    size={22}
                    className={service.accent ? 'text-accent' : 'text-accent'}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    service.accent ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    service.accent ? 'text-white/65' : 'text-muted-foreground'
                  }`}
                >
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={15}
                        className={service.accent ? 'text-accent' : 'text-accent'}
                        variant="solid"
                      />
                      <span
                        className={`text-[12px] font-medium ${
                          service.accent ? 'text-white/70' : 'text-muted-foreground'
                        }`}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href="#booking"
                  className={`inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-300 ${
                    service.accent ? 'text-accent' : 'text-accent'
                  }`}
                >
                  Get Started
                  <Icon name="ArrowRightIcon" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
