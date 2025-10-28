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

export default function ButlerService() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/18.jpeg"
            alt="Butler Service"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Butler Service
            </h1>
            <p className="text-xl text-gray-100">
              Personalized Support to Enhance Your Daily Life
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Eleete Concepts Ltd, we understand that the little things make a big difference in maintaining independence and comfort at home. Our Butler Service is designed to provide personalized assistance that helps you manage daily tasks effortlessly, giving you more time to enjoy what matters most.
            </p>
          </div>
        </section>

        {/* Core Features */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12">Our Butler Service Includes:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Tailored Assistance</h3>
              <p className="text-gray-600">Our butlers work closely with you to understand your unique needs, offering support with everyday tasks and organizing your schedule.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Errand Management</h3>
              <p className="text-gray-600">From collecting prescriptions to arranging transportation or handling personal errands, our butlers take care of the details for you.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Event and Appointment Coordination</h3>
              <p className="text-gray-600">Planning special occasions or medical appointments? We help coordinate every detail smoothly and efficiently.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Home Organization and Oversight</h3>
              <p className="text-gray-600">Ensuring your home environment stays comfortable and well-managed, including overseeing housekeeping and managing deliveries.</p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12">Detailed List of Butler Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {butlerServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">Why Choose Eleete's Butler Service?</h2>
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Professional and Discreet</h3>
                <p className="text-gray-600">Our butlers are trained professionals dedicated to providing respectful and reliable support.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Person-Centered Care</h3>
                <p className="text-gray-600">We tailor our services to reflect your preferences and lifestyle, ensuring your comfort and satisfaction.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                <p className="text-gray-600">With Eleete's Butler Service, you and your family can trust that daily responsibilities are handled with care and attention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference personalized, compassionate assistance can make to your daily living. At Eleete Concepts Ltd, our Butler Service is part of our commitment to supporting your independence with dignity and respect.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enquire About Butler Service
          </Link>
        </section>
      </div>
    </div>
  );
}
