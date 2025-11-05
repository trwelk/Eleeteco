'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface Achievement {
  number: string;
  label: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    number: '15+',
    label: 'Encouraging Independence',
    description: 'Providing exceptional healthcare since 2009',
  },
  {
    number: '50k+',
    label: 'Enabling Choice',
    description: 'Preserving Dignity',
  },
  {
    number: '98%',
    label: 'Celebrating Individuality',
    description: 'Committed to excellence in patient care',
  },
  {
    number: '98%',
    label: 'Preserving Dignity',
    description: 'Committed to excellence in patient care',
  },
  {
    number: '24/7',
    label: 'Nurturing the Spirit',
    description: 'Round-the-clock care when you need it',
  },
  {
    number: '24/7',
    label: 'Involving Family and Friends',
    description: 'Round-the-clock care when you need it',
  }
];

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/7.jpeg"
            alt="About Us"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg">
            <div className="inline-block mb-4 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">💙 Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">About Us</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Elevating Domiciliary Care with Compassion, Innovation, and Heart
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              Everyone deserves care that's personal, thoughtful, and truly human.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <section className="mb-24 bg-pattern-1 py-16 rounded-3xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-decorated-center relative pb-6">Our Mission</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg corner-accent">
              <p className="text-xl text-gray-700 leading-relaxed mb-4 bg-gray-50 p-4 rounded-lg">
              At Platinum 60 by Eleete Concepts Ltd, care is more than a service — it's a relationship built on trust, compassion, and dignity. As a Dorset-based domiciliary care provider, we are committed to supporting individuals in living independently at home, surrounded by comfort, familiarity, and the people they love.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              Whether it's helping an elderly parent with daily routines, offering companionship, or supporting someone recovering from illness or managing a complex condition, we're here — with gentle hands, kind hearts, and professional care.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl mb-24">
          <div className="absolute inset-0">
            <CustomImage src="/images/11.jpeg" alt="Legacy background" className="w-full h-full" />
            <div className="absolute inset-0 bg-white/75 pointer-events-none" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center py-16 px-4">
            <h2 className="text-3xl font-bold mb-8 text-decorated-center relative pb-6">A Legacy of Excellence</h2>
            <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg card-enhanced">
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-700">🌟 Part of Village 60 Plus Family</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
              Platinum 60 by Eleete Concepts proudly operates as a subsidiary of Village 60 Plus, one of Sri Lanka's most respected names in eldercare. With a long-standing legacy of delivering compassionate, person-centred senior living and residential services across Colombo, Village 60 Plus has set the benchmark for care rooted in dignity, clinical excellence, and empathy.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto my-6 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
              Platinum 60 by Eleete Concepts extends this legacy into the UK by bringing the same high standards directly into people's homes — combining our parent company's foundational principles with local insight and modern innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24 bg-pattern-3 py-16 rounded-3xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-decorated-center relative pb-6">Our Care Philosophy</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 card-enhanced group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{index % 6 === 0 ? '🤝' : index % 6 === 1 ? '✨' : index % 6 === 2 ? '🎯' : index % 6 === 3 ? '💎' : index % 6 === 4 ? '🌱' : '👨‍👩‍👧‍👦'}</div>
                  <div className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{achievement.label}</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-24 bg-pattern-4 py-16 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">What Makes Eleete Different?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">The core values that drive everything we do</p>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            <div className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group card-enhanced">
              <div className="relative h-48 overflow-hidden">
                <CustomImage
                  src="/images/14.jpeg"
                  alt="Compassion"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80" />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 -mt-16 relative z-10 border-4 border-white shadow-lg">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Compassion</h3>
                <p className="text-gray-600 leading-relaxed">
                What truly sets us apart is how deeply we care. Every individual we support is unique — and so is the care we provide. From personal assistance and daily companionship to complex dementia care and palliative support, our services are tailored with empathy and flexibility to meet evolving needs.  
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group card-enhanced">
              <div className="relative h-48 overflow-hidden">
                <CustomImage
                  src="/images/15.jpeg"
                  alt="Excellence"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80" />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6 -mt-16 relative z-10 border-4 border-white shadow-lg">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                We also embrace the future of care. By integrating AI-powered systems, we enhance the quality and responsiveness of our services. Families can stay informed in real-time, and care
                plans can adapt quickly — giving our carers more tools to care better, and giving families peace of mind.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group card-enhanced">
              <div className="relative h-48 overflow-hidden">
                <CustomImage
                  src="/images/16.jpeg"
                  alt="Trust"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80" />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6 -mt-16 relative z-10 border-4 border-white shadow-lg">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                At Eleete, we know that letting someone into your home — and your life — takes trust. That's why every carer we employ is not only fully trained and DBS-checked, but also handpicked for their empathy, patience, and integrity.
                We are here for the quiet moments, the daily challenges, and the small victories. We are here to make sure no one feels alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="mb-24 bg-pattern-5 py-16 rounded-3xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">Explore More</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover the people and stories behind our care</p>
            <div className="grid md:grid-cols-2 gap-8 px-4">
              <Link href="/team" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 card-enhanced">
                  <div className="relative h-64">
                    <CustomImage
                      src="/images/1.jpeg"
                      alt="Meet the Team"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-block mb-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-xs font-semibold">👥 Our People</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">Meet the Team</h3>
                      <p className="text-gray-200">Get to know the compassionate people behind Eleete</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/testimonials" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 card-enhanced">
                  <div className="relative h-64">
                    <CustomImage
                      src="/images/14.jpeg"
                      alt="Client Testimonials"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-block mb-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-xs font-semibold">💬 Reviews</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">What Our Clients Say</h3>
                      <p className="text-gray-200">Read stories from the families we've helped</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}