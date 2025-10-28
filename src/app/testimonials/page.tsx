'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Client',
    location: 'Bournemouth',
    image: '/images/1.jpeg',
    quote: 'The care and attention I received was exceptional. The team truly understands the importance of personalized care. Every carer who visits is professional, kind, and genuinely interested in my wellbeing.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Daughter of Client',
    location: 'Poole',
    image: '/images/3.jpeg',
    quote: 'The peace of mind knowing my mother is in such capable and caring hands is invaluable. The team keeps us informed and treats her with such dignity and respect. We couldn\'t ask for better care.',
    rating: 5,
  },
  {
    name: 'Michael Roberts',
    role: 'Client',
    location: 'Dorchester',
    image: '/images/2.jpeg',
    quote: 'After my surgery, the care team helped me regain my independence with patience and encouragement. They made a difficult time much easier to bear.',
    rating: 5,
  },
  {
    name: 'Janet Wilson',
    role: 'Wife of Client',
    location: 'Weymouth',
    image: '/images/4.jpeg',
    quote: 'The respite care service has been a lifesaver for our family. Knowing my husband is safe and happy gives me the time I need to rest and recharge. The carers are wonderful.',
    rating: 5,
  },
  {
    name: 'Thomas Anderson',
    role: 'Client',
    location: 'Christchurch',
    image: '/images/5.jpeg',
    quote: 'I was hesitant about having care at home, but the team made the transition seamless. They respect my routines and help me maintain my independence. I look forward to their visits.',
    rating: 5,
  },
  {
    name: 'Patricia Hughes',
    role: 'Daughter of Client',
    location: 'Blandford Forum',
    image: '/images/6.jpeg',
    quote: 'The dementia care my father receives is outstanding. The carers are patient, understanding, and skilled at keeping him engaged and comfortable. It\'s made such a difference to his quality of life.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/14.jpeg"
            alt="Client Testimonials"
            priority
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-100">
              Real stories from the people we care for
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Voices of Trust</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              At Eleete, the kind words of our clients and their families mean everything to us.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Each testimonial reflects the trust, connection, and care we strive to build every day — whether it's a reassuring smile, a helping hand, or simply being there when it matters most.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're honored to share these stories, and grateful for the chance to walk alongside those we care for. Their voices remind us why we do what we do.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                      <CustomImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Eleete Difference</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to receive the same compassionate care our clients talk about? Get in touch with us today.
            </p>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

