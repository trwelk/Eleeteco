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
      "Personalized dementia care plans",
      "Memory stimulation and gentle engagement",
      "Risk management in the home",
      "Emotional support for families and caregivers",
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
    title: "Family Caregivers Seeking Respite",
    description: "Caring for a loved one can be incredibly rewarding — and incredibly demanding. We provide temporary, short-term support so that family caregivers can rest, attend to personal needs, or simply take a break. We ensure complete continuity and reassurance during their time away.",
    services: [
      "Hourly, daily, or live-in care cover",
      "Emergency or planned respite support",
      "Routine maintenance and emotional reassurance",
      "Regular updates to the family during their absence"
    ]
  }
];

export default function WhoWeSupport() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/8.jpeg"
            alt="Who We Support"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Support
            </h1>
            <p className="text-xl text-gray-100">
              Tailored care for every individual's unique needs
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed">
              At Eleete Concepts, we understand that inviting care into your home is a deeply personal decision — one that requires trust, professionalism, and sensitivity. That's why we tailor every care plan to reflect not just medical needs, but personal values, family dynamics, and individual preferences.
            </p>
          </div>
        </section>

        {/* Support Categories */}
        <div className="max-w-4xl mx-auto mb-24">
          {supportCategories.map((category, index) => (
            <section key={index} className="mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">{category.title}</h2>
                <p className="text-gray-700 mb-6">{category.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Services may include:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="text-gray-700">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Your Care, Your Way</h2>
            <p className="text-gray-700 mb-8">
              Every individual we care for is treated with the same respect, discretion, and professionalism we would expect for our own loved ones. Whether you require basic support or advanced specialist care, we are here to walk alongside you — with clinical excellence and a heart for service.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request Care Consultation
              </Link>
              <p className="text-gray-600">
                Or speak to our care team in confidence at{' '}
                <a href="mailto:info@eleeteco.uk" className="text-blue-600 hover:text-blue-800">
                  info@eleeteco.uk
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
