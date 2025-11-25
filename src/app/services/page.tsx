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
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
      {
        title: "Live-in Care",
        description: "24-hour support from a dedicated carer who lives in your home, providing continuous assistance and companionship.",
        link: "/services/live-in-care",
        icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
      {
        title: "Butler Service",
        description: "Personalised assistance to help you manage daily tasks effortlessly, giving you more time to enjoy what matters most.",
        link: "/services/butler-service",
        icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
      {
        title: "AI-Enhanced Care",
        description: "Experience the perfect balance of heartfelt service and intelligent innovation with our AI-integrated care solutions.",
        link: "/services/ai-integration",
        icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
      {
        title: "Who We Support",
        description: "Learn about the different groups we help, from older adults to those with specialised care needs.",
        link: "/services/who-we-support",
        icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="relative h-[500px] w-full bg-gradient-to-r from-background to-secondary/60">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/13.jpeg"
            alt="Professional Care Services"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg">
            <div className="inline-block mb-4 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">🏥 Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Types of Care We Offer
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Compassionate, personalised care tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Main Services Grid (image-backed like Care at Home) */}
        <section className="relative mb-24 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <CustomImage src="/images/14.jpeg" alt="Services background" className="w-full h-full" />
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm pointer-events-none" />
          </div>
          <div className="relative z-10 py-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">Our Care Services</h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">Comprehensive care solutions designed around you</p>
            <div className="grid md:grid-cols-3 gap-8 px-4">
              {mainServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-white/80 backdrop-blur p-8 rounded-xl border border-white/60 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mt-4 mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What Our Services Include */}
        <section className="max-w-5xl mx-auto mb-24 bg-white/90 rounded-3xl shadow-lg p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-4 text-decorated-center relative pb-6">What Our Services Include</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Platinum 60 by Eleete Concepts, we understand that every individual’s care needs are different — and often deeply personal. 
            That’s why we offer a wide range of flexible, tailored home care services, designed to support people at every stage of life and health.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our compassionate, DBS‑checked carers are trained to deliver high‑quality, person‑centred support — whether it’s a few hours a week or round‑the‑clock live‑in care. 
            From everyday tasks to complex health needs, we’re here to help, with dignity and empathy at the heart of everything we do.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Personal Care</h3>
                <p className="text-gray-700">
                  Gentle support with bathing, grooming, dressing, and toileting — always delivered with respect for privacy and independence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Medication Support</h3>
                <p className="text-gray-700">
                  Reminders and assistance to ensure medications are taken safely and on time, including coordination with healthcare professionals where needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Meal Preparation</h3>
                <p className="text-gray-700">
                  Nutritious, home‑cooked style meals tailored to individual dietary needs — with help around mealtimes and feeding if required.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Companionship</h3>
                <p className="text-gray-700">
                  Friendly conversation, emotional support, and shared activities to ease loneliness and promote overall wellbeing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Mobility Assistance</h3>
                <p className="text-gray-700">
                  Support with moving safely around the home, using mobility aids, and maintaining physical strength, balance, and confidence.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Specialist Care</h3>
                <p className="text-gray-700">
                  Expert support for dementia and Alzheimer’s, long‑term conditions such as Parkinson’s or diabetes, and palliative care delivered with compassion and dignity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Post‑Hospital Recovery</h3>
                <p className="text-gray-700">
                  Short‑term care following surgery or illness, assisting with rehabilitation, wound care, medication, rest, and safe re‑ablement at home.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Respite Care</h3>
                <p className="text-gray-700">
                  Temporary relief for family caregivers — from a few hours to longer‑term support — so they can rest while we continue their loved one’s routine.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Live‑in Care</h3>
                <p className="text-gray-700">
                  24‑hour, in‑home support for those needing full‑time help and companionship, without having to move into residential care.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Additional Lifestyle Services</h3>
                <p className="text-gray-700">
                  Through trusted local partners, we can also arrange grooming and self‑care support (such as nail and hair care), personal assistants and shopping companions, 
                  and wellness services to promote holistic wellbeing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              No matter what kind of care you need, we’re here to listen and create a plan that works for you and your family — with kindness, flexibility, and professionalism.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-background transition-all hover:scale-105 shadow-lg"
            >
              📞 Contact us to talk through your options
            </Link>
          </div>
        </section>
      </div>

      {/* Personalised Care Approach (now full-width, second) */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-20 bg-gradient-to-br from-white via-background to-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-secondary/40">
              <span className="text-sm font-semibold text-primary">💙 Personalised Care Approach</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Everyone’s care needs are unique. We listen first, then design a plan that fits your daily routine, clinical needs, and personal preferences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto my-6 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From hourly visits to 24/7 live‑in care, our DBS‑checked professionals deliver consistent, person‑centred support with dignity and respect — so you can feel safe, independent, and fully supported at home.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Cost Calculator */}
        <section className="max-w-4xl mx-auto mb-24 bg-pattern-3 py-16 rounded-3xl">
          <div className="bg-white p-8 rounded-xl shadow-lg corner-accent mx-4 card-enhanced">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-secondary/20 to-accent/40 rounded-full">
              <span className="text-sm font-semibold text-primary">💰 Cost Calculator</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Domiciliary Care Cost Calculator</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At Eleete we understand that planning for in-home care involves many important considerations—especially when it comes to cost. Use our calculator to get an estimated weekly cost based on your care needs.
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-lg border-2 border-secondary/40">
              <div className="flex flex-col md:flex-row md:items-stretch md:gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Level of Care Required</label>
                    <select
                      className="w-full p-2 border rounded"
                      value={calculatorInputs.careLevel}
                      onChange={(e) => setCalculatorInputs({ ...calculatorInputs, careLevel: e.target.value })}
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
                      onChange={(e) => setCalculatorInputs({ ...calculatorInputs, hoursPerVisit: parseInt(e.target.value) })}
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
                      onChange={(e) => setCalculatorInputs({ ...calculatorInputs, visitsPerWeek: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="mt-8 md:mt-0 md:w-1/3">
                  <div className="h-full bg-gradient-to-br from-background to-secondary/40 p-6 rounded-lg border-l-4 border-primary flex flex-col justify-center">
                    <p className="text-lg font-semibold text-gray-700">Estimated Weekly Cost:</p>
                    <p className="text-4xl font-bold text-accent my-2">£{calculateCost()}</p>
                    <div className="w-32 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mb-3"></div>
                    <p className="text-sm text-gray-600">
                      *This is an estimate. Contact us for a detailed quote based on your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action (full-width like Personalized Care Approach) */}
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen text-center mb-24 py-20 bg-gradient-to-br from-white via-background to-secondary/40">
          <div className="container mx-auto px-4">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-secondary/50">
              <span className="text-sm font-semibold text-primary">🤝 Let's Talk</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-decorated-center relative pb-6">Your Care, Your Way</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Every individual we care for is treated with the same respect, discretion, and professionalism we’d expect for our own loved ones. Whether you need basic support or advanced specialist care, we’re here to walk alongside you — with clinical excellence and a heart for service.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block bg-accent text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-background transition-all hover:scale-105 shadow-lg"
              >
                Request Care Consultation
              </Link>
              <p className="text-gray-600">
                Or speak to our care team in confidence at{' '}
                <a href="mailto:info@eleeteco.uk" className="text-accent hover:text-primary font-medium">
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