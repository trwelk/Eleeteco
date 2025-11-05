'use client';

import Link from 'next/link';
import CustomImage from '@/components/CustomImage';
import TrustBadges from '@/components/TrustBadges';

interface ServiceCard {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface CareType {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const mainServices: ServiceCard[] = [
  {
    title: 'Care at Home',
    description: 'Professional care services delivered in the comfort of your own home, tailored to your individual needs.',
    image: '/images/8.jpeg',
    link: '/services/care-at-home'
  },
  {
    title: 'Live-in Care',
    description: '24-hour support from a dedicated carer who lives in your home, providing continuous assistance.',
    image: '/images/9.jpeg',
    link: '/services/live-in-care'
  },
  {
    title: 'Butler Service',
    description: 'Personalised assistance to help you manage daily tasks effortlessly.',
    image: '/images/10.jpeg',
    link: '/services/butler-service'
  }
];

const careTypes: CareType[] = [
  {
    title: "Personal Care",
    description: "Support with bathing, dressing, and daily routines",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    link: "/services/who-we-support"
  },
  {
    title: "Dementia Care",
    description: "Specialised support for those living with dementia",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    link: "/services/who-we-support#dementia"
  },
  {
    title: "Respite Care",
    description: "Short-term support for family carers",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/services/who-we-support#respite"
  },
  {
    title: "Palliative Care",
    description: "Compassionate end-of-life support",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    link: "/services/who-we-support#palliative"
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Client',
    image: '/images/1.jpeg',
    quote: 'The care and attention I received was exceptional. The team truly understands the importance of personalised care.',
  },
  {
    name: 'Emily Davis',
    role: 'Family Member',
    image: '/images/3.jpeg',
    quote: 'The peace of mind knowing my mother is in such capable and caring hands is invaluable.',
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section - layered visuals and subtle animations */}
      <section className="relative h-[680px] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/11.jpeg"
            alt="Healthcare professionals"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent pointer-events-none" />
          {/* Decorative gradient blobs */}
          <div className="gradient-blob top-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-300/60 to-purple-300/60 animate-float-slow" />
          <div className="gradient-blob -bottom-16 -right-10 w-80 h-80 rounded-full bg-gradient-to-br from-purple-300/60 to-blue-300/60 animate-float-slow" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-up">Platinum 60 by Eleete Concepts</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up anim-delay-200">
              Transforming Lives,
              <br />
              Restoring Your Health
            </h2>
            <p className="text-xl mb-8 leading-relaxed animate-fade-up anim-delay-400">
              Professional care services delivered with compassion and expertise, in the comfort of your home.
            </p>
            <div className="space-x-4 animate-fade-up anim-delay-600">
              <Link
                href="/services"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Main Services */}
      <section className="container mx-auto px-4 bg-pattern-1 py-16 rounded-3xl animate-fade-up">
        <div className="relative">
          <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">Our Care Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of care services, tailored to meet your individual needs and preferences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden card-enhanced group animate-fade-up"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <CustomImage src={service.image} alt={service.title} className="w-full h-full group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center">
                  Learn more 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Types of Care */}
      <section className="relative overflow-hidden animate-fade-up">
        <div className="absolute inset-0">
          <CustomImage src="/images/15.jpeg" alt="Specialised care background" className="w-full h-full" />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">Specialised Care Services</h2>
          <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Our team of professionals provides specialised care services to meet various needs and conditions.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {careTypes.map((care, index) => (
              <Link
                key={index}
                href={care.link}
                className="bg-white/80 backdrop-blur p-6 rounded-xl border border-white/60 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group animate-fade-up"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {care.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">{care.title}</h3>
                <p className="text-gray-700 text-sm">{care.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CQC Rating */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <CustomImage src="/images/13.jpeg" alt="CQC background" className="w-full h-full" />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-md">
              <div className="inline-block mb-4 px-3 py-1 bg-blue-100 rounded-full">
                <span className="text-sm font-semibold text-blue-700">🏆 CQC Regulated</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our CQC Rating</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are proud to be regulated by the Care Quality Commission (CQC) — the independent body that inspects and monitors health and social care services in England.
              </p>
              <Link href="/services" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900">
                Learn more about our standards
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Safe
                </div>
                <div className="text-gray-600 text-sm">CQC Rating: Good</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Effective
                </div>
                <div className="text-gray-600 text-sm">CQC Rating: Good</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Caring
                </div>
                <div className="text-gray-600 text-sm">CQC Rating: Good</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Responsive
                </div>
                <div className="text-gray-600 text-sm">CQC Rating: Good</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 bg-pattern-4 py-16 rounded-3xl animate-fade-up">
        <h2 className="text-3xl font-bold text-center mb-4 text-decorated-center relative pb-6">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Real stories from real families we've had the privilege to serve</p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all card-enhanced group animate-fade-up">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <CustomImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full overflow-hidden border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic pl-6 leading-relaxed">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/12.jpeg"
            alt="Healthcare facility"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-900/80 pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white hero-text-enhanced max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">💬 Free Consultation Available</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contact us today to discuss your care needs or request a free consultation
            </p>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}