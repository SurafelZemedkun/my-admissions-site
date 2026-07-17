'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '../../components/ui/AppIcon';
import AppImage from '../../components/ui/AppImage';

const stats = [
{ value: '500+', label: 'Students Placed', sub: 'Across 50+ countries' },
{ value: '98%', label: 'Visa Approval Rate', sub: 'Industry avg: 82%' },
{ value: '200+', label: 'Partner Universities', sub: 'UK, US, CA, AU, EU' },
{ value: '$4.2M', label: 'Scholarships Secured', sub: 'For our students' }];


const differentiators = [
{
  icon: 'UserCircleIcon',
  title: 'Dedicated Counselor',
  desc: 'One counselor handles your entire journey — no handoffs, no confusion.'
},
{
  icon: 'ClockIcon',
  title: '48-Hour Shortlist',
  desc: 'Receive a curated list of universities matching your profile within 2 days.'
},
{
  icon: 'ShieldCheckIcon',
  title: 'Visa Guarantee',
  desc: 'We re-file at no charge if your visa is rejected on documentation grounds.'
},
{
  icon: 'ChatBubbleLeftRightIcon',
  title: 'Post-Arrival Support',
  desc: 'Our support does not end at acceptance — we help you settle in.'
}];


const awards = [
{ title: 'Best Education Consultancy', sub: 'Study Abroad Awards / 2025' },
{ title: 'Top 10 Overseas Counselors', sub: 'Education World / 2024' },
{ title: 'Excellence in Visa Services', sub: 'Global Mobility Forum / 2023' },
{ title: 'Student Choice Award', sub: 'QS Rankings / 2022' }];


export default function WhyUsSection() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-24 px-6 md:px-10 bg-primary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 scroll-reveal-hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Why EduConsult
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-section-title text-white max-w-2xl">
              15 years of turning{' '}
              <span className="text-accent">ambition</span> into acceptance.
            </h2>
            <p className="max-w-sm text-white/55 leading-relaxed text-base">
              We have refined every step of the process so you spend less time worrying
              and more time preparing for the life ahead.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) =>
          <div
            key={s.label}
            className={`scroll-reveal-hidden stagger-${i + 1} rounded-2xl p-7 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:bg-white/5 ${
            i === 0 ? 'bg-accent/10' : 'bg-white/5'}`
            }>
            
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${i === 0 ? 'text-accent' : 'text-white'}`}>
                {s.value}
              </div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-white/50 mb-1">
                {s.label}
              </p>
              <p className="text-[11px] text-white/30">{s.sub}</p>
            </div>
          )}
        </div>

        {/* Two-col: Differentiators + Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Differentiators */}
          <div className="lg:col-span-7 scroll-reveal-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d, i) =>
              <div
                key={d.title}
                className={`rounded-2xl p-6 border border-white/10 hover:border-accent/30 bg-white/5 hover:bg-white/8 transition-all duration-300 group stagger-${i + 1}`}>
                
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                    <Icon
                    name={d.icon as Parameters<typeof Icon>[0]['name']}
                    size={20}
                    className="text-accent" />
                  
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{d.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{d.desc}</p>
                </div>
              )}
            </div>
          </div>

          {/* Awards */}
          <div className="lg:col-span-5 scroll-reveal-hidden">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
                  Recognition
                </p>
                <h3 className="text-2xl font-bold text-white mb-8 leading-snug">
                  Industry-validated expertise.
                </h3>
                <div className="divide-y divide-white/10">
                  {awards.map((a) =>
                  <div
                    key={a.title}
                    className="py-5 flex items-center justify-between group award-row cursor-default">
                    
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-accent transition-colors">
                          {a.title}
                        </p>
                        <p className="text-[11px] text-white/35 uppercase tracking-widest mt-1">
                          {a.sub}
                        </p>
                      </div>
                      <Icon
                      name="TrophyIcon"
                      size={18}
                      className="text-white/20 group-hover:text-accent transition-colors ml-4 flex-shrink-0" />
                    
                    </div>
                  )}
                </div>
              </div>
              <a
                href="#booking"
                className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-accent hover:gap-4 transition-all duration-300 border-b border-accent/30 pb-1.5 self-start hover:border-accent">
                
                Book Your Free Call
                <Icon name="ArrowRightIcon" size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Quote strip */}
        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/10 p-8 md:p-12 scroll-reveal-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-accent/40 relative">
              <AppImage
                src="/assets/images/photo_2026-03-24_15-28-20-1784186316592.jpg"
                alt="EduConsult founder portrait, professional headshot, man in business attire"
                fill
                className="object-cover"
                sizes="56px" />
              
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium text-white/80 italic leading-relaxed max-w-3xl">
                "Every student deserves access to the best education in the world, not just
                the students whose families already know the system. That is why we built EduConsult."
              </p>
              <p className="text-accent font-bold text-sm mt-3">
                Daniel Osei-Bonsu —{' '}
                <span className="text-white/40 font-normal">Founder & Lead Counselor, EduConsult</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
