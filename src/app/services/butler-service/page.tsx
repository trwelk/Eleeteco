'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const butlerServices: ServiceDetail[] = [
  {
    title: "Personal Shopping & Errands",
    description: "Grocery shopping, pharmacy pickups, dry cleaning collection, post office runs, and other essential errands.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    title: "Personal Grooming & Nail Care",
    description: "Supporting personal grooming needs for both men and women, including hair care, shaving, skincare routines, dressing assistance, and nail care such as manicures and pedicures.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Appointment Management",
    description: "Scheduling, reminders, and transport arrangements for medical, social, or recreational appointments.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Meal Planning & Coordination",
    description: "Assisting with meal prep coordination or liaising with catering services.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Home Maintenance Liaison",
    description: "Coordinating with service providers for home repairs, cleaning, gardening, and deliveries.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Travel & Transport Assistance",
    description: "Booking taxis, arranging airport pickups, or accompanying clients on outings when needed.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    title: "Event Planning & Hospitality",
    description: "Organizing social gatherings, family visits, or special occasions with attention to every detail.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Mail and Communication Management",
    description: "Sorting mail, managing phone calls, and helping with correspondence as required.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

// Illustrative images to pair with each butler service row
const butlerImages: string[] = [
  '/images/6.jpeg',
  '/images/7.jpeg',
  '/images/10.jpeg',
  '/images/11.jpeg',
  '/images/12.jpeg',
  '/images/15.jpeg',
  '/images/16.jpeg',
  '/images/18.jpeg'
];

export default function ButlerService() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/4.jpeg"
            alt="Butler Service"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Butler Service
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Personalized assistance for everyday tasks
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction - wide, subtle image background */}
        <section className="relative overflow-hidden rounded-3xl mb-24">
          <div className="absolute inset-0">
            <CustomImage src="/images/7.jpeg" alt="Lifestyle background" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40 pointer-events-none" />
          </div>
          <div className="relative z-10 p-8 md:p-10">
            <div className="inline-block mb-4 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-100">
              <span className="text-sm font-semibold text-blue-700">🧤 Butler Service</span>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed max-w-4xl">
              The little things make a big difference. Our Butler Service offers discreet, personalised help with everyday tasks — so life at home feels effortless, organised, and truly yours.
            </p>
          </div>
        </section>

        {/* Core Features - alternating image/text rows (styled like Who We Support) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-6 text-decorated-center relative pb-6">Our Butler Service Includes</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Discreet, reliable support that removes friction from your day</p>
          {butlerServices.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center py-8">
              <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <CustomImage src={butlerImages[index % butlerImages.length]} alt={service.title} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                <div className="flex items-start gap-4 mb-2">
                  <div className="shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </section>

        

        {/* Why Choose Section - soft gradient with cards */}
        <section className="mb-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 py-16 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-decorated-center relative pb-6">Why Choose Eleete’s Butler Service?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 md:px-4">
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
              <div className="text-2xl mb-2">🎩</div>
              <h3 className="text-xl font-semibold mb-2">Professional & Discreet</h3>
              <p className="text-gray-600">Trained professionals delivering respectful, reliable support you can trust.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-purple-100">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Person‑Centred</h3>
              <p className="text-gray-600">Tailored to your preferences and lifestyle for genuine comfort.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-600">Daily responsibilities handled carefully so you can focus on what matters.</p>
            </div>
          </div>
        </section>

        {/* CTA Section - full, light gradient */}
        <section className="text-center mb-24 py-16 rounded-3xl bg-gradient-to-br from-white via-blue-50 to-purple-50">
          <h2 className="text-3xl font-bold mb-4 text-decorated-center relative pb-6">Experience the Difference</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how thoughtful, personalised assistance can simplify your day. Our Butler Service supports your independence with dignity and care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
          >
            Enquire About Butler Service
          </Link>
        </section>
      </div>
    </div>
  );
}
