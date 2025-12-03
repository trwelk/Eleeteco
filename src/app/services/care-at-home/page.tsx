'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface CareService {
  title: string;
  description: string;
}

const careServices: CareService[] = [
  {
    title: "Personal Care",
    description: "Assistance with washing, dressing, grooming, and continence needs"
  },
  {
    title: "Medication Support",
    description: "Reminders or administration, including liaising with healthcare professionals"
  },
  {
    title: "Meal Preparation",
    description: "Preparing nutritious meals tailored to dietary requirements"
  },
  {
    title: "Mobility Support",
    description: "Help with moving around safely at home or attending appointments"
  },
  {
    title: "Companionship",
    description: "Friendly visits, conversation, and emotional support"
  },
  {
    title: "Household Help",
    description: "Light housekeeping, laundry, and day-to-day tasks"
  },
  {
    title: "Monitoring & Reassurance",
    description: "Regular welfare checks and updates for families"
  }
];

export default function CareAtHome() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-gradient-to-r from-background to-secondary/60">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/3.jpeg"
            alt="Care At Home Service"
            priority
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Care at Home
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Compassionate support, right where you feel safest — at home.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary hover:text-background transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="mb-24 bg-gradient-to-br from-background via-white to-secondary/40 py-16 rounded-3xl">
          <div className="p-8 rounded-xl shadow-lg corner-accent">
            <div className="text-center">
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-secondary/20 to-accent/40 rounded-full">
                <span className="text-sm font-semibold text-primary">💙 Personalised Home Care</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-4xl mx-auto">
                At Platinum 60 by Eleete Concepts, our Care at Home service is built around a simple belief: people thrive when they can remain in the comfort of their own home, surrounded by familiarity and dignity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-4xl mx-auto">
                We provide professional, flexible, and respectful support tailored to your individual needs, routines, and lifestyle. Whether you require a little help each day or more regular support, our trained and DBS‑checked carers are here to assist with kindness, discretion, and consistency.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto my-6 rounded-full"></div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                From a little daily help to regular scheduled visits, our team will work with you and your family to build a care plan that feels natural, respectful, and truly supportive.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative mb-24 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <CustomImage src="/images/14.jpeg" alt="Care background" className="w-full h-full" />
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm pointer-events-none" />
          </div>
          <div className="relative z-10 px-4 py-16">
            <h2 className="text-3xl font-bold mb-4 text-center text-decorated-center relative pb-6">What We Offer</h2>
            <p className="text-center text-gray-700 mb-2 max-w-2xl mx-auto">
              Our Care at Home services include a wide range of support options to suit your situation:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careServices.map((service, index) => (
                <div key={index} className="bg-white/80 backdrop-blur p-6 rounded-xl border border-white/60 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-white/85 backdrop-blur rounded-xl shadow-md max-w-4xl mx-auto">
              <p className="text-gray-800 text-center italic leading-relaxed">
                All care plans are completely bespoke — created after a detailed, in-person assessment of your needs, preferences, and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Help (full-bleed background with readable panel) */}
        <section className="relative overflow-hidden rounded-3xl mb-24">
          <div className="absolute inset-0">
            <CustomImage src="/images/15.jpeg" alt="Care at Home" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/20 to-transparent pointer-events-none" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Who We Help</h2>
              <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-4">
                Our Care at Home service is ideal for:
              </p>
              <ul className="list-disc list-inside text-gray-900 space-y-2 mb-4">
                <li>Older adults wishing to maintain independence at home</li>
                <li>People living with physical disabilities or chronic conditions</li>
                <li>Individuals recovering from illness, injury, or surgery</li>
                <li>Those in need of personal or practical support throughout the day</li>
                <li>Families looking for peace of mind and regular updates</li>
              </ul>
              <p className="text-gray-900">
                Whether you're arranging care for yourself or a loved one, we know that trust, continuity, and respect are essential. 
                That’s why we take the time to match you with a carer who fits not just your clinical needs, but your personality and values too.
              </p>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-24 bg-pattern-4 py-16 rounded-3xl">
          <div className="px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-decorated-center relative pb-6">How to Get Started</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg card-enhanced max-w-6xl mx-auto">
              <p className="text-gray-700 mb-8 text-center">
                We make the process of arranging care simple and stress‑free.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg border border-secondary/40 bg-gradient-to-br from-background to-white">
                  <h3 className="text-xl font-semibold mb-2">1. Speak to us</h3>
                  <p className="text-gray-700">
                    Tell us about your situation. We’ll offer guidance and arrange a free, no‑obligation home assessment.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-secondary/40 bg-gradient-to-br from-background to-white">
                  <h3 className="text-xl font-semibold mb-2">2. Request care online</h3>
                  <p className="text-gray-700">
                    Submit a quick request through our website — we’ll contact you to confirm details and plan next steps together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24 bg-pattern-5 py-16 rounded-3xl floating-shapes">
          <div className="px-4 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-secondary/40">
              <span className="text-sm font-semibold text-primary">🚀 Get Started Today</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-decorated-center relative pb-6">Start Your Care Journey</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              We'll work with you to build a plan that's flexible, transparent, and just right for your circumstances.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:from-primary hover:to-primary transition-all hover:scale-105 shadow-lg"
            >
              Request Your Free Assessment
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
