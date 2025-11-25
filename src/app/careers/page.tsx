'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface JobPosting {
  title: string;
  location: string;
  pay: string;
  description: string;
}

const currentVacancies: JobPosting[] = [
  {
    title: 'Home Care Assistant – Part-Time & Full-Time',
    location: 'Dorset (Various areas)',
    pay: '£11.50 – £13.00/hour (plus mileage & training)',
    description: 'Providing personal care, companionship, meal support, and mobility assistance in clients\' homes. Full training provided.',
  },
  {
    title: 'Evening & Weekend Carers',
    location: 'Dorset',
    pay: 'Enhanced weekend and evening rates',
    description: 'Ideal for those looking for flexible hours. Includes assisting clients with evening routines, personal care, and wellbeing checks.',
  },
  {
    title: 'Live-in Carer',
    location: 'Dorset (Live-in positions)',
    pay: '£11.50 – £13.00/hour (plus accommodation & meals)',
    description: 'Round-the-clock care and companionship for clients needing continuous support. Rotational shifts available.',
  },
  {
    title: 'Specialist Dementia Carer',
    location: 'Dorset',
    pay: '£13 – £15/hour',
    description: 'Supporting clients with cognitive challenges, delivering compassionate and structured care in partnership with families and clinical teams.',
  },
];

export default function Careers() {
  return (
    <div className="space-y-16">
      {/* Hero Section - light overlay, full-width content panel */}
      <section className="relative h-[520px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/9.jpeg"
            alt="Careers at Eleete"
            priority
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-md">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 rounded-full border border-secondary/40">
              <span className="text-sm font-medium text-primary">💼 Careers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Make a Difference with Eleete
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Join a team that's changing lives through compassionate care
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="mb-24 bg-pattern-1 py-16 rounded-3xl">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg corner-accent">
              <div className="absolute inset-0">
                <CustomImage src="/images/16.jpeg" alt="Why Join Eleete" className="w-full h-full" />
                <div className="absolute inset-0 bg-white/75 backdrop-blur-sm pointer-events-none" />
              </div>
              <div className="relative z-10 p-8">
                <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-secondary/20 to-accent/40 rounded-full">
                  <span className="text-sm font-semibold text-primary">🌟 Join Our Team</span>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  At Eleete Concepts, we don't just provide care, we build relationships, change lives, and make a lasting difference in our community. If you're someone who leads with empathy, takes pride in their work, and believes that every person deserves to be treated with dignity, then you'll feel right at home here.
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto my-6 rounded-full"></div>
                <h2 className="text-2xl font-bold mb-6 text-center">Why Join Eleete?</h2>
                <ul className="space-y-3 mb-8">
                  <li className="p-4 bg-white/85 backdrop-blur rounded-lg border border-secondary/40 text-gray-800">A caring, supportive team where your voice is valued</li>
                  <li className="p-4 bg-white/85 backdrop-blur rounded-lg border border-secondary/40 text-gray-800">Ongoing training and development to help you grow in your role</li>
                  <li className="p-4 bg-white/85 backdrop-blur rounded-lg border border-secondary/40 text-gray-800">Flexible hours that fit around your life and commitments</li>
                  <li className="p-4 bg-white/85 backdrop-blur rounded-lg border border-secondary/40 text-gray-800">Opportunities for career progression in a fast-growing care organisation</li>
                  <li className="p-4 bg-white/85 backdrop-blur rounded-lg border border-secondary/40 text-gray-800">Innovation-driven care — including AI-powered tools to support your work and reduce stress</li>
                </ul>

                <p className="text-gray-700 mb-6">
                  Whether you're an experienced carer or just starting out in the care sector, we offer full training and mentoring to help you succeed. Most importantly, we look for people who bring kindness, reliability, and heart to every visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Vacancies */}
        <section className="mb-24 bg-pattern-2 py-16 rounded-3xl floating-shapes" id="current-vacancies">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-decorated-center relative pb-6">Current Vacancies</h2>
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Looking to start a meaningful career in care? Join us at Eleete Concepts and be part of a team that's changing lives — one visit, one conversation, one act of kindness at a time.
            </p>
            <div className="grid gap-6">
              {currentVacancies.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 card-enhanced group">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{job.title}</h3>
                    <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <strong>Location:</strong> <span className="ml-1">{job.location}</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      <strong>Pay:</strong> <span className="ml-1">{job.pay}</span>
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="mb-24 bg-pattern-3 py-16 rounded-3xl">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-decorated-center relative pb-6">Employee Testimonials</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Hear from our team members</p>
            <div className="bg-white p-8 rounded-xl shadow-lg corner-accent card-enhanced">
              <p className="text-gray-700 mb-6">
                At Eleete Concepts, our team is the heart of everything we do. Behind every care visit is a person who shows up with compassion, professionalism, and a genuine desire to help others live better, more independent lives.
              </p>
              <p className="text-gray-700 mb-6">
                This page is a space where our carers and team members share their stories — in their own words. What it's like to make a difference. How it feels to be part of a supportive, values-driven team. And why working at Eleete is more than just a job.
              </p>
              <p className="text-gray-700 mb-6">
                Because when we care for our team, they're empowered to care for others — brilliantly.
              </p>
            </div>
          </div>
        </section>

        {/* Apply Now CTA */}
        <section className="mb-24 bg-pattern-4 py-16 rounded-3xl floating-shapes">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-secondary/40">
              <span className="text-sm font-semibold text-primary">🚀 Join Us Today</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-decorated-center relative pb-6">Ready to make a real difference?</h2>
            <p className="text-xl text-gray-700 mb-8">
              We'd love to hear from you.
            </p>
            <div className="space-y-4">
              <Link
                href="#current-vacancies"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:from-primary hover:to-primary transition-all hover:scale-105 shadow-lg"
              >
                View Current Openings
              </Link>
              <p className="text-gray-600">
                Or send your CV and a short message to{' '}
                <a href="mailto:info@eleeteco.uk" className="text-accent hover:text-primary font-medium">
                  info@eleeteco.uk
                </a>
              </p>
            </div>
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <p className="text-gray-700 font-medium text-lg">
                Together, we can bring comfort, dignity, and joy to those who need it most.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}