'use client';

import React from 'react';
import CustomImage from '@/components/CustomImage';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications?: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Clinical Director',
    bio: 'With over 20 years of experience in geriatric care, Dr. Mitchell leads our clinical team with compassion and expertise.',
    image: '/images/14.jpeg',
    qualifications: ['MBBS', 'MD Geriatric Medicine', 'Registered with CQC']
  },
  {
    name: 'James Thompson',
    role: 'Operations Manager',
    bio: 'James ensures our care services run smoothly, coordinating with families and carers to deliver exceptional support.',
    image: '/images/15.jpeg',
    qualifications: ['BSc Healthcare Management', 'NVQ Level 5 in Leadership']
  },
  {
    name: 'Emily Chen',
    role: 'Senior Care Coordinator',
    bio: 'Emily works closely with families to create personalised care plans that meet each individual\'s unique needs.',
    image: '/images/16.jpeg',
    qualifications: ['RGN', 'Diploma in Care Management']
  },
  {
    name: 'Michael Roberts',
    role: 'Lead Care Professional',
    bio: 'With a gentle approach and years of hands-on experience, Michael is beloved by clients and their families.',
    image: '/images/1.jpeg',
    qualifications: ['NVQ Level 3 in Health & Social Care', 'Dementia Care Specialist']
  },
  {
    name: 'Aisha Patel',
    role: 'Care Quality Manager',
    bio: 'Aisha oversees our commitment to excellence, ensuring every aspect of care meets the highest standards.',
    image: '/images/7.jpeg',
    qualifications: ['BSc Nursing', 'CQC Inspector Training']
  },
  {
    name: 'David Wilson',
    role: 'Training & Development Lead',
    bio: 'David ensures our team stays at the forefront of care practices through continuous training and development.',
    image: '/images/14.jpeg',
    qualifications: ['MA Adult Education', 'Certified Trainer']
  }
];

export default function Team() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/1.jpeg"
            alt="Our Team"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-100">
              The compassionate professionals dedicated to providing exceptional care
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dedicated to Your Care</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team combines clinical excellence with genuine compassion. Each member is 
              carefully selected not just for their qualifications, but for their empathy, 
              patience, and commitment to making a real difference in people's lives.
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-80 overflow-hidden">
                  <CustomImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  {member.qualifications && (
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Qualifications:</p>
                      <ul className="space-y-1">
                        {member.qualifications.map((qual, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="mb-24 bg-blue-50 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fully Qualified</h3>
                <p className="text-gray-600">All team members are professionally trained and certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">DBS Checked</h3>
                <p className="text-gray-600">Enhanced background checks for your peace of mind</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
                <p className="text-gray-600">Selected for empathy, patience, and dedication</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="mb-24">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for compassionate professionals to join our growing family
            </p>
            <a 
              href="/careers" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Career Opportunities
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}



