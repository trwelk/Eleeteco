'use client';

import React from 'react';
import Link from 'next/link';

export default function Rights() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Know Your Rights
            </h1>
            <p className="text-xl text-gray-100">
              Understanding and protecting your rights in domiciliary care
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 bg-gray-50 p-4 rounded-lg">
            At Eleete, we want every client and family to feel safe, informed, and empowered. As someone receiving domiciliary (home) care in the UK, you have clear legal rights, and we are committed to upholding them in full.
          </p>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto grid gap-12">
          {/* Clear & Honest Information */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Clear & Honest Information</h2>
            <p className="text-gray-600 mb-4">
              You have the right to be given accurate, easy-to-understand information about your care, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>What services are available</li>
              <li>How much they cost and who pays</li>
              <li>Our terms and conditions</li>
              <li>How to end your care agreement</li>
            </ul>
            <Link 
              href="https://www.gov.uk/government/publications/homecare-a-guide-for-people-receiving-homecare"
              target="_blank"
              className="text-accent hover:text-primary font-medium"
            >
              Learn more from GOV.UK: Homecare (domiciliary care) →
            </Link>
          </section>

          {/* Fair & Respectful Treatment */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Fair & Respectful Treatment</h2>
            <p className="text-gray-600">
              Care must be delivered with dignity, respect, and without discrimination. Our policies ensure your needs, preferences, and privacy are always central to the care you receive. We follow Care Quality Commission (CQC) standards to make sure your care is safe, effective, and compassionate.
            </p>
          </section>

          {/* Quality You Can Trust */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Quality You Can Trust</h2>
            <p className="text-gray-600">
              You're entitled to high-quality care from properly trained staff. We recruit, train, and supervise our carers to meet the standards set by the CQC. You also have a right to see our most recent inspection report — just ask us or visit our CQC profile.
            </p>
          </section>

          {/* Choice, Control & Independence */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Choice, Control & Independence</h2>
            <p className="text-gray-600 mb-4">
              You have the right to be involved in every aspect of your care plan. If your care is arranged by your local authority, you also have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Request a personal budget</li>
              <li>Opt for direct payments to manage your own care provider</li>
            </ul>
            <Link 
              href="https://www.gov.uk/getting-help-from-social-services"
              target="_blank"
              className="text-accent hover:text-primary font-medium"
            >
              More on your choices: GOV.UK - Getting help from social services →
            </Link>
          </section>

          {/* Your Safety, Your Say */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Your Safety, Your Say</h2>
            <p className="text-gray-600 mb-4">
              If something isn't right, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Raise concerns or complaints at any time</li>
              <li>Receive a clear and fair response</li>
              <li>Escalate the issue to the Local Government and Social Care Ombudsman if not resolved</li>
            </ul>
            <Link 
              href="https://www.nhs.uk/using-the-nhs/about-the-nhs/how-to-complain-to-the-nhs/"
              target="_blank"
              className="text-accent hover:text-primary font-medium"
            >
              Learn how to complain: NHS – How to complain about adult social care →
            </Link>
          </section>

          {/* Need More Help */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
            <p className="text-gray-600 mb-4">
              If you'd like to better understand your rights or need help raising a concern, we're always here to listen. You can also contact:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <Link 
                  href="https://www.citizensadvice.org.uk/"
                  target="_blank"
                  className="text-accent hover:text-primary"
                >
                  Citizens Advice
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.cqc.org.uk/"
                  target="_blank"
                  className="text-accent hover:text-primary"
                >
                  Care Quality Commission (CQC)
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.lgo.org.uk/"
                  target="_blank"
                  className="text-accent hover:text-primary"
                >
                  Local Government Ombudsman
                </Link>
              </li>
            </ul>
          </section>

          {/* We're Here to Help */}
          <section className="bg-background p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">We're Here to Help</h2>
            <p className="text-gray-600">
              If you're unsure about your rights or want to speak to someone about your care, please contact us directly. We're always here to listen and support you.
            </p>
            <Link 
              href="/contact"
              className="inline-block mt-6 px-6 py-3 bg-accent text-primary rounded-lg hover:bg-primary hover:text-background transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
