'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

export default function LiveInCare() {
  const helpImages = ['/images/6.jpeg', '/images/14.jpeg', '/images/15.jpeg', '/images/18.jpeg'];
  return (
    <div className="space-y-0">
      {/* HERO - Full bleed */}
      <section className="relative h-[70vh] w-full mb-12 md:mb-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage src="/images/2.jpeg" alt="Live-In Care" className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 h-full w-full flex items-center">
          <div className="px-6 md:px-10 w-full">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-5xl text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full">
                <span className="text-sm font-medium">24/7 Personalised Support</span>
        </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Live-In Care</h1>
              <p className="text-lg md:text-2xl text-gray-100 max-w-3xl">
                Compassionate, one-to-one care at home with comfort, dignity and independence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Talk to a Care Advisor
                </Link>
                <Link href="#how" className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  How it works
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO - Light background image with readable panel */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-white to-secondary/40">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <CustomImage src="/images/14.jpeg" alt="Soft background texture" className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-14">
          <div className="max-w-4xl bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-md">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              Live‑in care provides 24‑hour support in the comfort of your own home. A carefully matched, DBS‑checked professional lives with you to offer continuous assistance, warm companionship, and peace of mind — day and night.
            </p>
          </div>
          </div>
        </section>


      {/* HOW IT WORKS - Stepper with badges (no image) */}
      <section id="how" className="w-full bg-gradient-to-b from-white via-background to-secondary/40 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <h2 className="text-3xl font-bold mb-10 text-primary">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 items-stretch">
            {[
              { n: 1, title: 'Consult & Assess', desc: 'We listen, understand needs and goals.' },
              { n: 2, title: 'Tailored Plan', desc: 'We design a personalised live-in care plan.' },
              { n: 3, title: 'Carer Matching', desc: 'We carefully match the right live-in carer.' },
              { n: 4, title: 'Start & Support', desc: 'We onboard, check-in and refine continuously.' },
            ].map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-secondary/40 min-h-[160px] flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center font-bold">
                    {s.n}
                  </div>
                  <div className="text-lg font-semibold text-primary">{s.title}</div>
                </div>
                <div className="text-gray-700">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">Our Services Include:</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800 list-disc pl-5">
              <li>Personal care (washing, dressing, toileting)</li>
              <li>Medication support</li>
              <li>Meal preparation</li>
              <li>Companionship and emotional support</li>
              <li>Housekeeping and help around the home</li>
              <li>Mobility support and help with appointments</li>
            </ul>
          </div>
          </div>
        </section>

      {/* WHO WE HELP - Single background with differentiated cards */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <CustomImage src="/images/18.jpeg" alt="Who we help background" className="w-full h-full" />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Who We Help</h2>
          <p className="text-gray-700 mb-8">Live-in care is ideal for:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '👵', title: 'Older adults needing full-time assistance' },
              { emoji: '🧠', title: 'Individuals with dementia or complex health needs' },
              { emoji: '🦽', title: 'People with limited mobility or recovering from surgery' },
              { emoji: '❤️', title: 'Couples who wish to stay together at home' },
            ].map((item, i) => (
              <div key={i} className={`bg-white/85 backdrop-blur p-6 rounded-2xl shadow-md border border-secondary/40 hover:shadow-lg transition-shadow`}>
                <div className="w-10 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-3" />
                <div className="text-primary font-semibold leading-snug text-lg">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Why Choose Live‑in Care?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remain in a familiar environment with dedicated one‑to‑one care.</li>
                <li>Avoid the disruption and loss of independence that can come with residential facilities.</li>
                <li>Enjoy consistent routines, privacy, and meaningful companionship every day.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">More Information & Lifestyle Support</h3>
              <p className="text-gray-700">
                Would you like to learn more about our live‑in care options? We’d love to help you explore what’s right for you or your loved one.
                Email us at{' '}
                <a href="mailto:info@eleeteco.uk" className="text-accent hover:text-primary font-medium">
                  info@eleeteco.uk
                </a>{' '}
                or complete our{' '}
                <Link href="/contact" className="text-accent hover:text-primary font-medium">
                  Live‑in Care Enquiry Form
                </Link>
                .
              </p>
              <p className="text-gray-700">
                Through trusted partners, we also offer additional lifestyle services such as personal grooming, wellness visits, errands,
                shopping companionship, and more — because true wellbeing goes beyond medical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Light gradient panel (no image) */}
      <section className="w-full">
        <div className="container mx-auto px-6 md:px-10 py-16">
          <div className="text-center bg-gradient-to-br from-white via-background to-secondary/40 rounded-3xl p-10 shadow-md">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-secondary/40">
              <span className="text-sm font-semibold text-primary">✨ Next steps</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">Ready to explore Live‑In Care?</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">Speak to our friendly team today. We’ll help you build the right plan.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-primary to-accent text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Contact Us
              </Link>
              <Link href="#how" className="inline-block bg-white text-primary border-2 border-secondary/60 px-7 py-3 rounded-lg font-semibold hover:bg-background transition-all">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
