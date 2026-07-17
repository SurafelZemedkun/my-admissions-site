'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from './../components/ui/AppIcon';

const steps = [
  {
    num: '01',
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Free 30-Min Call',
    desc: 'Tell us your goals, target countries, and timeline. No obligation.',
  },
  {
    num: '02',
    icon: 'DocumentTextIcon',
    title: 'Profile Assessment',
    desc: 'We review your academics, finances, and preferences to build your roadmap.',
  },
  {
    num: '03',
    icon: 'AcademicCapIcon',
    title: 'Your Shortlist',
    desc: 'Receive a curated list of 8–12 universities within 48 hours of your call.',
  },
];

const programInterests = [
  'Undergraduate',
  'Postgraduate / Masters',
  'MBA',
  'PhD / Research',
  'Foundation / Pre-university',
  'Language Programs',
];

const destinations = [
  'United Kingdom',
  'United States',
  'Canada',
  'Australia',
  'Germany',
  'Netherlands',
  'Ireland',
  'Singapore',
  'Other',
];

export default function BookingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    destination: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 px-6 md:px-10 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center scroll-reveal-hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Get Started
          </p>
          <h2 className="text-section-title text-foreground">
            Book your free consultation.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base leading-relaxed">
            A 30-minute call costs nothing. A wrong university choice costs years.
            Let us help you get it right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Process Steps */}
          <div className="lg:col-span-4 scroll-reveal-hidden">
            <div className="rounded-2xl bg-primary p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">How it works</h3>
                <p className="text-white/50 text-sm mb-10">
                  Three steps from today to your university shortlist.
                </p>
                <div className="space-y-8">
                  {steps.map((step, i) => (
                    <div key={step.num} className="flex gap-5 group">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                          <Icon
                            name={step.icon as Parameters<typeof Icon>[0]['name']}
                            size={18}
                            className="text-accent"
                          />
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px flex-1 bg-white/10 mt-3" />
                        )}
                      </div>
                      <div className="pb-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent/60">
                          Step {step.num}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-8 pt-8 border-t border-white/10">
                {[
                  { icon: 'LockClosedIcon', text: 'Your data is never shared or sold' },
                  { icon: 'ClockIcon', text: 'Response within 24 hours, guaranteed' },
                  { icon: 'XMarkIcon', text: 'No commitment required after the call' },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-3 mb-3 last:mb-0">
                    <Icon
                      name={t.icon as Parameters<typeof Icon>[0]['name']}
                      size={14}
                      className="text-accent flex-shrink-0"
                    />
                    <span className="text-[12px] text-white/40">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8 scroll-reveal-hidden stagger-2">
            <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-[0_8px_40px_rgba(15,32,68,0.07)]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                    <Icon name="CheckCircleIcon" size={32} className="text-accent" variant="solid" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    You are on the list!
                  </h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
                    A member of our team will reach out within 24 hours to confirm your consultation time. Check your inbox.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', program: '', destination: '', message: '' }); }}
                    className="mt-8 text-[12px] font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Priya Sharma"
                        className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="priya@example.com"
                        className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>

                    {/* Program */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Program Interest <span className="text-accent">*</span>
                      </label>
                      <select
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select program level</option>
                        {programInterests.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="space-y-3">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      Preferred Destination
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {destinations.map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setForm((prev) => ({ ...prev, destination: d }))}
                          className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-all duration-200 ${
                            form.destination === d
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-transparent border-border text-muted-foreground hover:border-accent hover:text-accent'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="e.g., I am targeting MSc Data Science programs in the UK for September 2026 intake. My GPA is 3.6..."
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded-full hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book My Free Consultation
                        <Icon name="ArrowRightIcon" size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-muted-foreground">
                    By submitting, you agree to our{' '}
                    <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                    . We respond within 24 hours.
                  </p>
                  {error && (
                    <p className="text-center text-[12px] text-red-500 font-medium">{error}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
