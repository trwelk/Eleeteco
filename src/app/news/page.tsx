'use client';

import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

// This would typically come from a CMS or API
const latestNews = [
  {
    title: "Introducing Our New Care Management App",
    date: "September 2025",
    category: "Innovation",
    excerpt: "We're excited to announce the launch of our new care management app, making it easier than ever for families to stay connected and informed.",
    image: "/images/10.jpeg"
  },
  {
    title: "Community Event: Senior Health & Wellness Day",
    date: "August 2025",
    category: "Events",
    excerpt: "Join us for a day of health talks, wellness activities, and community connection. Free health checks available.",
    image: "/images/11.jpeg"
  },
  {
    title: "Understanding Dementia Care: A Guide for Families",
    date: "August 2025",
    category: "Care Tips",
    excerpt: "Our comprehensive guide to understanding and supporting loved ones living with dementia.",
    image: "/images/12.jpeg"
  }
];

export default function News() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <CustomImage
            src="/images/19.jpeg"
            alt="News and updates from Eleete Concepts"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News &amp; Info
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-xl">
              Stay updated with the latest news, stories, and insights from Platinum 60
              by Eleete Concepts.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Welcome to our News & Info Hub</h2>
            <p className="text-gray-600 text-lg mb-6">
              Your go-to space for updates, insights, and helpful resources from Eleete Concepts.
            </p>
            <p className="text-gray-600 mb-8">
              Here, we'll share:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
              <li>Company news and community stories</li>
              <li>Care tips for families and loved ones</li>
              <li>Updates on our services and innovations</li>
              <li>Important announcements, including CQC updates and local events</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Whether you're a client, family member, or just exploring your care options, 
              we're here to keep you informed, connected, and supported — every step of the way.
            </p>
            <p className="text-gray-600 font-medium">
              Check back regularly to see what's new or follow us on social media for real-time updates!
            </p>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <CustomImage
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-sm">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link 
                    href="#" 
                    className="text-accent hover:text-primary font-medium inline-flex items-center"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-background p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-background transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
