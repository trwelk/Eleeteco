'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface Benefit {
  title: string;
  items: string[];
}

const benefitsByGroup: Benefit[] = [
  {
    title: "For Clients & Families",
    items: [
      "More personalized and transparent care",
      "Early warning for potential health issues",
      "Consistent, high-quality service at every visit"
    ]
  },
  {
    title: "For Our Care Team",
    items: [
      "Reduced time spent on paperwork",
      "Structured, guided care documentation",
      "Improved collaboration across the team"
    ]
  },
  {
    title: "For Operations & Compliance",
    items: [
      "Automated reporting aligned with GDPR & healthcare regulations",
      "Greater visibility into care trends and service delivery",
      "Seamless integration with our existing workflows"
    ]
  }
];

export default function AIIntegration() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-gradient-to-r from-blue-100 to-purple-200 animate-fade-in-up">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/5.jpeg"
            alt="AI Enhanced Care"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg">
              AI-Enhanced Care
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Leveraging technology for smarter, personalized care
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction - keep paragraph, enhance background */}
        <section className="relative overflow-hidden rounded-3xl mb-24">
          <div className="absolute inset-0">
            <CustomImage src="/images/8.jpeg" alt="AI intro background" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/50 pointer-events-none" />
          </div>
          <div className="relative z-10 p-8 md:p-10">
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              At Platinum 60 by Eleete Concepts Ltd, we believe the future of care lies in the perfect balance between heartfelt service and intelligent innovation. That's why we are proud to integrate SenzCare.AI, a cutting-edge, AI-driven care management platform by SenzMate, into our service delivery.
            </p>
          </div>
        </section>

        {/* Key Features - wider grid and elevated cards */}
        <section className="mb-24 bg-pattern-2 py-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">How SenzCare.AI Transforms Our Care</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Clear documentation, adaptive plans, and proactive insight at every step</p>
          <div className="grid md:grid-cols-2 gap-8 px-2 md:px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-semibold mb-3">Smarter, More Accurate Care Notes</h3>
              <p className="text-gray-700">With AI‑enhanced note optimization, visits are documented clearly and professionally. Prompts ensure completeness and clinical standards while reducing admin load.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-50">
              <h3 className="text-2xl font-semibold mb-3">Personalized, Dynamic Care Plans</h3>
              <p className="text-gray-700">Structured plans evolve automatically with reviews and assessments, maintaining compliance and quality as needs change.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-semibold mb-3">Predictive Insights for Proactive Care</h3>
              <p className="text-gray-700">Trends and risk signals highlight needs earlier, helping us act in time and support better long‑term outcomes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-50">
              <h3 className="text-2xl font-semibold mb-3">AI‑Powered Medical Support</h3>
              <p className="text-gray-700">Real‑time guidance and symptom assessments (including images) support confident decision‑making at the point of care.</p>
            </div>
          </div>
        </section>

        {/* Benefits Section - wider cards */}
        <section className="mb-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 py-16 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-decorated-center relative pb-6">Benefits for Everyone Involved</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 md:px-4">
            {benefitsByGroup.map((group, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Section - elevated panel */}
        <section className="mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-lg card-enhanced max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Seamless & Secure Integration</h2>
            <p className="text-gray-700">SenzCare.AI integrates securely via API or on‑premises deployment, ensuring full compliance with data privacy standards like GDPR and HIPAA. Whether cloud‑based or hosted on‑site, your data is protected with enterprise‑grade security measures.</p>
          </div>
        </section>

        {/* CTA Section - full, light gradient */}
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen text-center mb-24 py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-decorated-center relative pb-6">Experience Next‑Generation Care</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">Discover how AI‑enhanced services can support better outcomes for you or your loved ones.</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
            >
              Learn More About Our AI Integration
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
