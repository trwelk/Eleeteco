'use client';

import React from 'react';

const TrustBadges = () => {
  return (
    <section className="bg-pattern-5 py-12 rounded-3xl mx-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-secondary/40">
              <span className="text-sm font-semibold text-primary">🏅 Accredited & Trusted</span>
            </div>
            <h3 className="text-primary font-bold text-xl text-decorated-center relative pb-2">
              Trusted & Regulated Care Provider
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* CQC Badge */}
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl mb-3 w-full h-32 flex items-center justify-center transition-all hover:-translate-y-1 card-enhanced">
                <div className="text-accent transform group-hover:scale-110 transition-transform">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-accent transition-colors">CQC Registered</p>
              <p className="text-xs text-gray-500">Care Quality Commission</p>
            </div>

            {/* DBS Checked */}
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl mb-3 w-full h-32 flex items-center justify-center transition-all hover:-translate-y-1 card-enhanced">
                <div className="text-accent transform group-hover:scale-110 transition-transform">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-accent transition-colors">DBS Checked</p>
              <p className="text-xs text-gray-500">All Staff Verified</p>
            </div>

            {/* 24/7 Care */}
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl mb-3 w-full h-32 flex items-center justify-center transition-all hover:-translate-y-1 card-enhanced">
                <div className="text-accent transform group-hover:scale-110 transition-transform">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-accent transition-colors">24/7 Available</p>
              <p className="text-xs text-gray-500">Round-the-clock Care</p>
            </div>

            {/* Fully Insured */}
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl mb-3 w-full h-32 flex items-center justify-center transition-all hover:-translate-y-1 card-enhanced">
                <div className="text-accent transform group-hover:scale-110 transition-transform">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-accent transition-colors">Fully Insured</p>
              <p className="text-xs text-gray-500">Comprehensive Coverage</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-600 mt-2 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-600 mt-2 font-medium">Families Served</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-gray-600 mt-2 font-medium">Satisfaction Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-gray-600 mt-2 font-medium">Care Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;



