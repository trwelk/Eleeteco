'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface ServiceType {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const mainServices: ServiceType[] = [
  {
    title: "Care at Home",
    description: "Professional care services delivered in the comfort of your own home, tailored to your individual needs and preferences.",
    link: "/services/care-at-home",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Live-in Care",
    description: "24-hour support from a dedicated carer who lives in your home, providing continuous assistance and companionship.",
    link: "/services/live-in-care",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Butler Service",
    description: "Personalized assistance to help you manage daily tasks effortlessly, giving you more time to enjoy what matters most.",
    link: "/services/butler-service",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "AI-Enhanced Care",
    description: "Experience the perfect balance of heartfelt service and intelligent innovation with our AI-integrated care solutions.",
    link: "/services/ai-integration",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Who We Support",
    description: "Learn about the different groups we help, from older adults to those with specialized care needs.",
    link: "/services/who-we-support",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

interface CostCalculatorInputs {
  careLevel: string;
  hoursPerVisit: number;
  visitsPerWeek: number;
}

export default function Services() {
  const [calculatorInputs, setCalculatorInputs] = useState<CostCalculatorInputs>({
    careLevel: 'basic',
    hoursPerVisit: 1,
    visitsPerWeek: 1
  });

  const calculateCost = () => {
    const baseRates = {
      basic: 25,
      intermediate: 30,
      complex: 35
    };
    const rate = baseRates[calculatorInputs.careLevel as keyof typeof baseRates];
    const weeklyHours = calculatorInputs.hoursPerVisit * calculatorInputs.visitsPerWeek;
    return rate * weeklyHours;
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/13.jpeg"
            alt="Professional Care Services"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white hero-text-enhanced">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">🏥 Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Types of Care We Offer
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Compassionate, personalized care tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-24 bg-pattern-1 py-16 rounded-3xl">
          <div className="bg-white p-8 rounded-xl shadow-lg corner-accent mx-4">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-sm font-semibold text-blue-700">💙 Personalized Care Approach</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Eleete Concepts, we understand that every individual's care needs are different — and often deeply personal. That's why we offer a wide range of flexible, tailored home care services, designed to support people at every stage of life and health.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto my-6 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our compassionate, DBS-checked carers are trained to deliver high-quality, person-centered support — whether it's a few hours a week or round-the-clock live-in care. From everyday tasks to complex health needs, we're here to help, with dignity and empathy at the heart of everything we do.
            </p>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="mb-24 bg-pattern-2 py-16 rounded-3xl floating-shapes">
          <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">Our Care Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive care solutions designed around you</p>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {mainServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 card-enhanced group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mt-4 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="max-w-4xl mx-auto mb-24 bg-pattern-3 py-16 rounded-3xl">
          <div className="bg-white p-8 rounded-xl shadow-lg corner-accent mx-4 card-enhanced">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full">
              <span className="text-sm font-semibold text-green-700">💰 Cost Calculator</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Domiciliary Care Cost Calculator</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At Eleete we understand that planning for in-home care involves many important considerations—especially when it comes to cost. Use our calculator to get an estimated weekly cost based on your care needs.
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-lg border-2 border-blue-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Level of Care Required</label>
                  <select
                    className="w-full p-2 border rounded"
                    value={calculatorInputs.careLevel}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, careLevel: e.target.value})}
                  >
                    <option value="basic">Basic Care</option>
                    <option value="intermediate">Intermediate Care</option>
                    <option value="complex">Complex Care</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Hours per Visit</label>
                  <input
                    type="number"
                    min="1"
                    max="24"
                    className="w-full p-2 border rounded"
                    value={calculatorInputs.hoursPerVisit}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, hoursPerVisit: parseInt(e.target.value)})}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Visits per Week</label>
                  <input
                    type="number"
                    min="1"
                    max="7"
                    className="w-full p-2 border rounded"
                    value={calculatorInputs.visitsPerWeek}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, visitsPerWeek: parseInt(e.target.value)})}
                  />
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg font-semibold text-gray-700">Estimated Weekly Cost:</p>
                  <p className="text-4xl font-bold text-blue-600 my-2">£{calculateCost()}</p>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-3"></div>
                  <p className="text-sm text-gray-600">
                    *This is an estimate. Contact us for a detailed quote based on your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center mb-24 bg-pattern-4 py-16 rounded-3xl">
          <div className="px-4">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200">
              <span className="text-sm font-semibold text-blue-700">🤝 Let's Talk</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-decorated-center relative pb-6">Your Care, Your Way</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every individual we care for is treated with the same respect, discretion, and professionalism we would expect for our own loved ones. Whether you require basic support or advanced specialist care, we are here to walk alongside you — with clinical excellence and a heart for service.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                Request Care Consultation
              </Link>
              <p className="text-gray-600">
                Or speak to our care team in confidence at{' '}
                <a href="mailto:info@eleeteco.uk" className="text-blue-600 hover:text-blue-800 font-medium">
                  info@eleeteco.uk
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}