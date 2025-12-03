'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface SupportCategory {
  title: string;
  description: string;
  services: string[];
}

const supportCategories: SupportCategory[] = [
  {
    title: "Older Adults Living Independently",
    description: "We support older adults who wish to remain in the comfort and familiarity of their own homes while maintaining autonomy. Our carers assist with daily routines, mobility, safety, and emotional wellbeing — helping individuals live independently, with dignity and peace of mind.",
    services: [
      "Personal care (e.g., bathing, dressing, toileting)",
      "Medication support",
      "Meal preparation and nutrition monitoring",
      "Companionship and conversation",
      "Home safety assessments and fall prevention"
    ]
  },
  {
    title: "Individuals Living with Dementia or Cognitive Impairment",
    description: "Our specialist dementia care is built on consistency, calm communication, and deep respect. We understand the challenges faced by families and their loved ones living with Alzheimer's or other forms of dementia. Our approach focuses on reassurance, stimulation, and maintaining familiar routines in a safe, supportive environment.",
    services: [
      "Personalised dementia care plans",
      "Memory stimulation and gentle engagement",
      "Risk management in the home",
      "Emotional support for families and carers",
      "Collaboration with NHS and dementia specialists"
    ]
  },
  {
    title: "Post-Hospital and Re-ablement Clients",
    description: "Returning home after surgery, illness, or injury can be daunting. We offer short- or medium-term support to bridge the gap between hospital and full recovery, promoting independence and preventing unnecessary readmission.",
    services: [
      "Assistance with mobility and exercises",
      "Wound care and hygiene support",
      "Medication compliance",
      "Nutrition and hydration monitoring",
      "Liaison with medical professionals and therapists"
    ]
  },
  {
    title: "Adults with Long-Term or Chronic Conditions",
    description: "Living with chronic illnesses such as Parkinson's disease, diabetes, multiple sclerosis, or arthritis often requires ongoing care and adaptable support. We work closely with clients, families, and healthcare professionals to deliver safe, coordinated, and responsive care.",
    services: [
      "Monitoring of symptoms and health changes",
      "Daily personal and practical support",
      "Nutritional and medication management",
      "Equipment handling and home adaptation advice",
      "Emotional support and confidence-building"
    ]
  },
  {
    title: "Individuals with Physical Disabilities",
    description: "We provide empowering and respectful care to individuals living with congenital or acquired disabilities. Our aim is always to promote independence, improve quality of life, and support participation in work, learning, or community activities.",
    services: [
      "Assistance with mobility, transfers, and personal routines",
      "Help with technology, communication, and accessibility tools",
      "Escorting to appointments or outings",
      "Partnership with occupational therapists or case managers"
    ]
  },
  {
    title: "Couples Requiring Dual Care",
    description: "When two people in a household require support, we provide integrated care that respects each individual's needs while supporting their life together. Our carers adapt to shared routines and foster independence for both individuals.",
    services: [
      "Coordinated personal care",
      "Shared meal preparation",
      "Synchronized medication schedules",
      "Support for one or both partners as needs evolve"
    ]
  },
  {
    title: "Palliative and End-of-Life Care",
    description: "We offer sensitive, compassionate support for individuals in the final stages of life. Our team works in collaboration with families, GPs, and palliative care professionals to ensure that physical, emotional, and spiritual needs are fully met — with dignity, comfort, and kindness.",
    services: [
      "Pain and symptom management",
      "Personal and emotional support",
      "Comfort-focused assistance with daily tasks",
      "Family liaison and bereavement guidance"
    ]
  },
  {
    title: "Family Carers Seeking Respite",
    description: "Caring for a loved one can be incredibly rewarding — and incredibly demanding. We provide temporary, short-term support so that family carers can rest, attend to personal needs, or simply take a break. We ensure complete continuity and reassurance during their time away.",
    services: [
      "Hourly, daily, or live-in care cover",
      "Emergency or planned respite support",
      "Routine maintenance and emotional reassurance",
      "Regular updates to the family during their absence"
    ]
  }
];

// Light illustrative images used alongside categories (cycled if fewer than categories)
const categoryImages: string[] = [
  '/images/6.jpeg',
  '/images/7.jpeg',
  '/images/10.jpeg',
  '/images/11.jpeg',
  '/images/12.jpeg',
  '/images/15.jpeg',
  '/images/16.jpeg',
  '/images/18.jpeg'
];

export default function WhoWeSupport() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden bg-gradient-to-r from-background to-secondary/60">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/9.jpeg"
            alt="Who We Support"
            priority
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-white/20 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Support
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Dedicated support tailored to diverse needs
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

      <section className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <CustomImage src="/images/14.jpeg" alt="Support introduction" className="w-full h-full" />
          <div className="absolute inset-0 bg-white/70 pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-5xl bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Who We Support</h2>
            <p className="text-gray-700 mb-4">
              At Platinum 60 by Eleete Concepts, we understand that inviting care into your home is a deeply personal decision — one that requires trust, professionalism, and sensitivity. 
              That’s why we tailor every care plan to reflect not just medical needs, but personal values, family dynamics, and individual preferences.
            </p>
            <p className="text-gray-700">
              We proudly support a wide range of individuals, each with unique circumstances. Whether your needs are temporary, progressive, or complex, 
              our team is equipped with the experience, training, and compassion to provide care that is both clinically sound and emotionally supportive.
            </p>
          </div>
        </div>
      </section>

      {supportCategories.map((category, index) => (
        <section key={index} className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center py-8">
            <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md ${index % 2 === 1 ? 'md:order-last' : ''}`}>
              <CustomImage src={categoryImages[index % categoryImages.length]} alt={category.title} className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent pointer-events-none" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">{category.title}</h2>
              <p className="text-gray-700 mb-6">{category.description}</p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/40">
                <h3 className="font-semibold mb-4 text-primary">Services may include:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="text-gray-800">{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen text-center py-20 bg-gradient-to-br from-white via-background to-secondary/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-decorated-center relative pb-6 text-primary">Your Care, Your Way</h2>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Every individual we care for is treated with the same respect, discretion, and professionalism we would expect for our own loved ones. Whether you require basic support or advanced specialist care, we are here to walk alongside you — with clinical excellence and a heart for service.
          </p>
          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:from-primary hover:to-primary transition-all hover:scale-105 shadow-lg"
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
  );
}
