'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

export default function LiveInCare() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/19.jpeg"
            alt="Live-in Care Services"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Live-in Care
            </h1>
            <p className="text-xl text-gray-100">
              24-hour support in the comfort of your own home
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Live-in care provides 24-hour support for those who wish to remain in the comfort of their own home, while still receiving round-the-clock assistance. One of our professional, DBS-checked carers stays in your home to provide continuous help and companionship.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 mb-8">
              After an initial consultation and assessment, we carefully match a live-in carer based on your needs, preferences, and lifestyle. The carer lives in your home, offering support throughout the day and being on-hand overnight if needed.
            </p>
            
            <h3 className="text-2xl font-semibold mb-6">Our Services Include:</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
              <li>Personal care (washing, dressing, toileting)</li>
              <li>Medication support</li>
              <li>Meal preparation</li>
              <li>Companionship and emotional support</li>
              <li>Housekeeping and help around the home</li>
              <li>Mobility support and help with appointments</li>
            </ul>
          </div>
        </section>

        {/* Who We Help */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">Who We Help</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 mb-6">Live-in care is ideal for:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
              <li>Older adults needing full-time assistance</li>
              <li>Individuals with dementia or complex health needs</li>
              <li>People with limited mobility or recovering from surgery</li>
              <li>Couples who wish to stay together in their own home</li>
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">Why Choose Live-in Care?</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Remain in a familiar environment with one-to-one care</li>
              <li>Avoid the disruption of residential facilities</li>
              <li>Enjoy consistent routines, privacy, and companionship</li>
            </ul>
          </div>
        </section>

        {/* Request Info */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">More Information Request</h2>
            <p className="text-gray-700 mb-8">
              Would you like to learn more about our live-in care options? We'd love to help you explore what's right for you or your loved one.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                Email us at:{' '}
                <a href="mailto:info@eleeteco.uk" className="text-blue-600 hover:text-blue-800">
                  info@eleeteco.uk
                </a>
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Fill in our Live-in Care Enquiry Form
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
