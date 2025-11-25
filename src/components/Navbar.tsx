'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      children: [
        { name: 'Care at Home', path: '/services/care-at-home' },
        { name: 'Live-in Care', path: '/services/live-in-care' },
        { name: 'Butler Service', path: '/services/butler-service' },
        { name: 'AI-Enhanced Care', path: '/services/ai-integration' },
        { name: 'Who We Support', path: '/services/who-we-support' }
      ]
    },
    { name: 'Careers', path: '/careers' },
    {
      name: 'About Us',
      path: '/about',
      children: [
        { name: 'About Eleete', path: '/about' },
        { name: 'Meet the Team', path: '/team' },
        { name: 'What Our Clients Say', path: '/testimonials' },
      ],
    },
    { name: 'News', path: '/news' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Your Rights', path: '/rights' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/main_logo.jpeg"
              alt="Platinum 60 by Eleete Concepts logo"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="sr-only">Platinum 60 by Eleete Concepts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.path}
                  className="text-secondary hover:text-accent transition-colors py-4"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="w-4 h-4 inline-block ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-56 bg-primary rounded-lg shadow-lg py-2 z-50 border border-secondary/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block px-4 py-2 text-secondary hover:bg-background/10 hover:text-accent transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-primary">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className="block py-2 text-secondary hover:text-accent transition-colors"
                  onClick={() => {
                    if (!item.children) {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;