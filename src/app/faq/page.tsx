'use client';

import React, { useState } from 'react';
import CustomImage from '@/components/CustomImage';

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQSection = {
  title: string;
  items: FAQItem[];
};

const faqSections: FAQSection[] = [
  {
    title: 'Services & General',
    items: [
      {
        question: 'Who does Platinum 60 support?',
        answer: (
          <>
            We support older adults, people living with disabilities, and those recovering from hospital stays, ensuring
            tailored care that respects dignity and promotes wellbeing.
          </>
        ),
      },
      {
        question: 'How do I know which service is right for me?',
        answer: (
          <>
            Choosing the right service depends on your level of need, lifestyle, and preferences. During a free
            consultation, our care coordinators conduct a thorough assessment, discussing daily routines, medical
            conditions, emotional needs, and family involvement. Based on this, we recommend the most suitable package,
            whether occasional visits, full-time live-in care, or a hybrid approach. We ensure that recommendations are
            personalised, not one-size-fits-all, and can adapt as needs evolve.
          </>
        ),
      },
      {
        question: 'Do you provide emergency or short-notice care?',
        answer: (
          <>
            Yes. We understand that care needs can arise suddenly, for example after hospital discharge or when a family
            caregiver becomes unavailable. Subject to staff availability, we can arrange emergency care within 24–48
            hours. This may include temporary live-in support or urgent home visits. Our team prioritises these cases,
            ensuring rapid deployment of trained carers while maintaining quality standards.
          </>
        ),
      },
      {
        question: 'Can you provide care for couples or households?',
        answer: (
          <>
            Absolutely. Many couples prefer to remain together at home even when one or both require assistance. We
            design joint care plans that balance individual needs while respecting shared routines. For example, one
            partner may need mobility support while the other requires medication reminders. Our carers are trained to
            manage these dynamics, ensuring both receive compassionate care without disrupting household harmony.
          </>
        ),
      },
      {
        question: 'Do you only support elderly clients?',
        answer: (
          <>
            No. While elderly care is a core service, Platinum 60 also supports younger adults with disabilities,
            families needing respite, and individuals recovering from surgery or illness. Our philosophy is that care
            should be inclusive and adaptable, meeting people where they are in life.
          </>
        ),
      },
      {
        question: 'What makes Platinum 60 different from other care providers?',
        answer: (
          <>
            Several factors set us apart:
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Our Butler Service offers lifestyle support rarely found in care agencies.</li>
              <li>
                AI-Enhanced Care integrates technology for proactive monitoring, reducing risks and providing families
                with real-time reassurance.
              </li>
              <li>We emphasise emotional wellbeing and dignity, not just physical assistance.</li>
              <li>Transparent pricing with a cost calculator ensures families understand costs upfront.</li>
              <li>
                Our carers undergo continuous training and performance reviews, ensuring consistent, high-quality care.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: 'Costs & Pricing',
    items: [
      {
        question: 'How much does care cost?',
        answer: (
          <>
            Costs vary depending on the type of service, hours required, and complexity of care. As a guide, hourly care
            starts around £25 per visit. Live-in care is priced weekly, reflecting the intensity of support. The cost
            calculator provides an estimate, but final pricing is confirmed after consultation to account for factors
            such as night care, specialist needs, or travel. Platinum 60 believes in transparent pricing — and clear
            explanations of what’s included.
          </>
        ),
      },
      {
        question: 'How does the cost calculator work?',
        answer: (
          <>
            The calculator allows you to input variables such as hours per week, type of care, and duration. It then
            generates an estimated weekly cost. This tool is designed to give families a quick sense of affordability
            before committing to a consultation. However, because care needs are highly individual, the calculator
            serves as a guide, not a final quote.
          </>
        ),
      },
      {
        question: 'Is there a minimum booking requirement?',
        answer: (
          <>
            Yes. To ensure continuity and quality, most packages require a minimum of 2–3 hours per week. Live-in care
            is contracted weekly or monthly. This structure helps us allocate carers effectively and ensures clients
            receive consistent support.
          </>
        ),
      },
      {
        question: 'Do you offer flexible payment options?',
        answer: (
          <>
            Yes. Families can choose weekly or monthly billing, and we can align with care budgets. We also provide
            itemised invoices for transparency.
          </>
        ),
      },
      {
        question: 'Are there hidden fees?',
        answer: (
          <>
            No. All costs are explained upfront. Optional extras, such as specialist equipment or extended hours, are
            discussed in advance, including VAT and taxation where applicable. Platinum 60 prides itself on honesty and
            clarity in financial matters.
          </>
        ),
      },
    ],
  },
  {
    title: 'Care Delivery & Quality',
    items: [
      {
        question: 'How do you ensure quality of care?',
        answer: (
          <>
            Quality is maintained through a multi-layered approach:
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Carers undergo regular performance reviews.</li>
              <li>Families are encouraged to provide ongoing feedback, which we use to adjust services.</li>
              <li>Compliance with healthcare regulations ensures safety and professionalism.</li>
              <li>We employ risk management protocols to anticipate and mitigate issues.</li>
            </ul>
          </>
        ),
      },
      {
        question: 'Are your carers trained and regulated?',
        answer: (
          <>
            Yes. All carers are trained in safeguarding, infection prevention, and first aid. Beyond technical skills,
            we emphasise empathy and respect, ensuring carers treat clients with dignity. Services are delivered in line
            with CQC standards and best practice guidelines.
          </>
        ),
      },
      {
        question: 'Can I change or cancel my care plan?',
        answer: (
          <>
            Yes. Care plans are flexible. Home visits can be adjusted with 48 hours’ notice, while live-in care
            typically requires one week’s notice. This flexibility ensures families remain in control as needs change.
          </>
        ),
      },
      {
        question: 'Do carers provide medical support?',
        answer: (
          <>
            Carers provide non-medical assistance such as personal care, companionship, and daily living support. For
            medical needs, we coordinate with healthcare professionals, ensuring clients receive comprehensive support.
          </>
        ),
      },
      {
        question: 'How do you match carers with clients?',
        answer: (
          <>
            We consider skills, personality, and client preferences. For example, a client who enjoys conversation may
            be paired with a carer who shares similar interests. Compatibility is key to building trust and comfort, and
            we regularly review matches to ensure ongoing satisfaction.
          </>
        ),
      },
    ],
  },
  {
    title: 'Who We Support',
    items: [
      {
        question: 'Do you provide respite care for families?',
        answer: (
          <>
            Yes. Respite care allows family caregivers to rest while ensuring loved ones receive professional support.
            This can be short-term or recurring, depending on family needs.
          </>
        ),
      },
      {
        question: 'Can you support clients with dementia or Alzheimer’s?',
        answer: (
          <>
            Yes. Our carers are trained in specialist dementia techniques, such as memory prompts and structured
            routines, to reduce anxiety and maintain dignity.
          </>
        ),
      },
      {
        question: 'Do you provide post-hospital recovery support?',
        answer: (
          <>
            Yes. We assist with rehabilitation, medication reminders, and daily living tasks. This helps clients recover
            safely at home, reducing the risk of re-admission.
          </>
        ),
      },
      {
        question: 'Do you support younger adults with disabilities?',
        answer: (
          <>
            Yes. Care is tailored to individual needs, whether physical assistance, social support, or lifestyle
            management for younger adults living with disabilities.
          </>
        ),
      },
    ],
  },
  {
    title: 'Technology & Innovation',
    items: [
      {
        question: 'What is AI-Enhanced Care?',
        answer: (
          <>
            AI-Enhanced Care integrates smart monitoring tools with human carers. Devices track wellbeing indicators
            such as movement, sleep, or falls. Alerts are sent to carers and families, enabling proactive intervention.
            This reduces risks and provides peace of mind.
          </>
        ),
      },
      {
        question: 'Is my data safe with AI-Enhanced Care?',
        answer: (
          <>
            Yes. All technology complies with GDPR. Data is encrypted and only accessible to authorised carers and
            family members.
          </>
        ),
      },
      {
        question: 'Can families access care updates remotely?',
        answer: (
          <>
            Yes. Families can receive digital updates via secure platforms, ensuring transparency and reassurance.
          </>
        ),
      },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      {
        question: 'How do I book a consultation?',
        answer: (
          <>
            Click the “Request Care Consultation” button on our website or call our team. We respond promptly to
            schedule a convenient time and explain the next steps.
          </>
        ),
      },
      {
        question: 'What happens during the consultation?',
        answer: (
          <>
            We discuss your needs, explain service options, provide a cost estimate, and answer questions. Consultations
            are collaborative, ensuring families feel informed and supported.
          </>
        ),
      },
      {
        question: 'Do you offer trial periods?',
        answer: (
          <>
            Yes. Short-term trial packages allow families to experience our services before committing long term.
          </>
        ),
      },
      {
        question: 'How quickly can care start after consultation?',
        answer: (
          <>
            Typically, care can start within one week, depending on service type and staff availability. Emergency cases
            are prioritised wherever possible.
          </>
        ),
      },
    ],
  },
  {
    title: 'Compliance & Safety',
    items: [
      {
        question: 'Are you regulated by the Care Quality Commission (CQC)?',
        answer: (
          <>
            Yes. Platinum 60 is fully CQC registered and adheres to UK care standards. This ensures accountability,
            safety, and quality across all services.
          </>
        ),
      },
      {
        question: 'How do you handle emergencies?',
        answer: (
          <>
            Carers are trained in first aid and emergency protocols. We also coordinate with local healthcare providers
            to ensure rapid response in urgent situations, keeping families informed throughout.
          </>
        ),
      },
    ],
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenIndex((current) => (current === key ? null : key));
  };

  return (
    <div className="space-y-16">
      {/* Hero / Intro */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/17.jpeg"
            alt="Family discussing care options at home"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl bg-white/85 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-secondary/40">
            <div className="inline-block mb-3 px-4 py-1.5 bg-secondary/10 rounded-full border border-secondary/40">
              <span className="text-sm font-semibold text-primary">
                📚 Frequently Asked Questions
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Platinum 60 Care FAQs
            </h1>
            <p className="text-gray-700">
              Find clear, reassuring answers to the most common questions about our
              services, pricing, quality, and how we work with you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {faqSections.map((section) => (
            <div
              key={section.title}
              id={section.title.replace(/\s+/g, '-').toLowerCase()}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-6"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-900">{section.title}</h2>
              <div className="divide-y divide-gray-100">
                {section.items.map((item, index) => {
                  const key = `${section.title}-${index}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key} className="py-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left"
                        onClick={() => toggleItem(key)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-gray-800">{item.question}</span>
                        <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-primary text-sm">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="mt-2 text-sm text-gray-700 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQPage;


