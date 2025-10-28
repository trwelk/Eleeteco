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
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/20.jpeg"
            alt="Care at Home Services"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Care at Home
            </h1>
            <p className="text-xl text-gray-100">
              Compassionate support, right where you feel safest — at home
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Eleete Concepts, our Care at Home service is built around a simple belief: that people thrive when they can remain in the comfort of their own home, surrounded by familiarity and dignity. We provide professional, flexible, and respectful support tailored to your individual needs, routines, and lifestyle.
            </p>
            <p className="text-gray-700">
              Whether you require a little help each day or more regular support, our trained and DBS-checked carers are here to assist with kindness, discretion, and consistency.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {careServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8 text-center italic">
            All care plans are completely bespoke — created after a detailed, in-person assessment of your needs, preferences, and goals.
          </p>
        </section>

        {/* Who We Help */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">Who We Help</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 mb-6">Our Care at Home service is ideal for:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
              <li>Older adults wishing to maintain independence at home</li>
              <li>People living with physical disabilities or chronic conditions</li>
              <li>Individuals recovering from illness, injury, or surgery</li>
              <li>Those in need of personal or practical support throughout the day</li>
              <li>Families looking for peace of mind and regular updates</li>
            </ul>
            <p className="text-gray-700 italic">
              Whether you're arranging care for yourself or a loved one, we understand that trust, continuity, and respect are essential. That's why we take the time to match each client with a carer who fits not just your clinical needs, but your personality and values too.
            </p>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">How to Get Started</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 mb-6">We make the process of arranging care simple and stress-free.</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Speak to us</h3>
                <p className="text-gray-700">
                  Contact our team to discuss your care needs and arrange a free assessment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">2. Request care online</h3>
                <p className="text-gray-700">
                  Submit a quick request through our website — we'll contact you to arrange a free, no-obligation home assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Care Journey</h2>
            <p className="text-gray-700 mb-8">
              We'll work with you to build a plan that's flexible, transparent, and just right for your circumstances.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Your Free Assessment
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
