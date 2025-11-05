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
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent pointer-events-none" />
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
                <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Talk to a Care Advisor
                </Link>
                <Link href="#how" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  How it works
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO - Light background image with readable panel */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
      <section id="how" className="w-full bg-gradient-to-b from-white via-blue-50 to-purple-50 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <h2 className="text-3xl font-bold mb-10 text-blue-900">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 items-stretch">
            {[
              { n: 1, title: 'Consult & Assess', desc: 'We listen, understand needs and goals.' },
              { n: 2, title: 'Tailored Plan', desc: 'We design a personalised live-in care plan.' },
              { n: 3, title: 'Carer Matching', desc: 'We carefully match the right live-in carer.' },
              { n: 4, title: 'Start & Support', desc: 'We onboard, check-in and refine continuously.' },
            ].map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-blue-100 min-h-[160px] flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white flex items-center justify-center font-bold">
                    {s.n}
                  </div>
                  <div className="text-lg font-semibold text-blue-900">{s.title}</div>
                </div>
                <div className="text-gray-700">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-900">Our Services Include:</h3>
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
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Who We Help</h2>
          <p className="text-gray-700 mb-8">Live-in care is ideal for:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '👵', title: 'Older adults needing full-time assistance' },
              { emoji: '🧠', title: 'Individuals with dementia or complex health needs' },
              { emoji: '🦽', title: 'People with limited mobility or recovering from surgery' },
              { emoji: '❤️', title: 'Couples who wish to stay together at home' },
            ].map((item, i) => (
              <div key={i} className={`bg-white/85 backdrop-blur p-6 rounded-2xl shadow-md border ${i % 2 === 0 ? 'border-blue-100' : 'border-purple-100'} hover:shadow-lg transition-shadow`}>
                <div className="text-2xl mb-2">{item.emoji}</div>
                <div className="font-medium text-blue-900 leading-snug">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Light gradient panel (no image) */}
      <section className="w-full">
        <div className="container mx-auto px-6 md:px-10 py-16">
          <div className="text-center bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-10 shadow-md">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200">
              <span className="text-sm font-semibold text-blue-700">✨ Next steps</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-900">Ready to explore Live‑In Care?</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">Speak to our friendly team today. We’ll help you build the right plan.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Contact Us
              </Link>
              <Link href="#how" className="inline-block bg-white text-blue-900 border-2 border-blue-200 px-7 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
