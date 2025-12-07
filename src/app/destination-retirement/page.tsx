'use client';

import React from 'react';
import Image from 'next/image';

export default function DestinationRetirement() {
  return (
    <section className="relative min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
      {/* Decorative accents */}
      <div className="pointer-events-none">
        <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full border border-accent/40" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-secondary/40 px-10 py-12 flex flex-col items-center text-center max-w-xl">
          <div className="mb-6">
            <Image
              src="/images/main_logo.jpeg"
              alt="Platinum 60 by Eleete Concepts logo"
              width={220}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </div>
          <p className="text-sm tracking-[0.25em] uppercase text-secondary mb-3">
            Destination Retirement
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-primary">
            Coming Soon
          </h1>
        </div>
      </div>
    </section>
  );
}

