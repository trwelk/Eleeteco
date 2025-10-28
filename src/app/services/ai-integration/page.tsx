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
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/17.jpeg"
            alt="AI Integration in Care"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Integration for Our Care Services
            </h1>
            <p className="text-xl text-gray-100">
              Enhancing care delivery through intelligent innovation
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Eleete Concepts Ltd, we believe the future of care lies in the perfect balance between heartfelt service and intelligent innovation. That's why we are proud to integrate SenzCare.AI, a cutting-edge, AI-driven care management platform by SenzMate, into our service delivery.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12">How SenzCare.AI Transforms Our Care</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Smarter, More Accurate Care Notes</h3>
              <p className="text-gray-700">
                With AI-enhanced real-time care note optimization, our caregivers can document visits more clearly and professionally. SenzCare.AI automatically refines language, prompts for missing information, and ensures that every care note meets high clinical standards — reducing administrative strain and enhancing accuracy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Personalized, Dynamic Care Plans</h3>
              <p className="text-gray-700">
                SenzCare.AI's intelligent system helps us generate structured, personalized care plans that automatically evolve with each client's changing needs. It continuously updates plans in response to health reviews and assessments, ensuring regulatory compliance and the highest quality of care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Predictive Insights for Proactive Care</h3>
              <p className="text-gray-700">
                Using advanced predictive modelling, the platform identifies trends in health and behavior, enabling us to anticipate future care needs. This empowers our team to act early, avoid complications, and provide better long-term support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Medical Support</h3>
              <p className="text-gray-700">
                Even without a medical background, our caregivers are supported by SenzCare.AI's real-time clinical guidance. The platform offers immediate insights, symptom assessments (including image analysis), and care recommendations—enhancing decision-making on the front line.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12">Benefits for Everyone Involved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefitsByGroup.map((group, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">Seamless & Secure Integration</h2>
          <div className="bg-blue-50 p-8 rounded-xl">
            <p className="text-gray-700 mb-6">
              SenzCare.AI integrates securely via API or on-premises deployment, ensuring full compliance with data privacy standards like GDPR and HIPAA. Whether cloud-based or hosted on-site, your data is protected with enterprise-grade security measures.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold mb-6">Experience Next-Generation Care</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our AI-enhanced care services can provide better outcomes for you or your loved ones.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More About Our AI Integration
          </Link>
        </section>
      </div>
    </div>
  );
}
