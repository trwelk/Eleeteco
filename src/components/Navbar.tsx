'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

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
    { name: 'Destination Retirement', path: '/destination-retirement' },
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

  const isActive = (item: NavItem) => {
    if (item.path === '/') {
      return pathname === '/';
    }
    if (item.children) {
      return pathname.startsWith(item.path);
    }
    return pathname.startsWith(item.path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/30 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.path}
                    className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                      active
                        ? 'text-accent bg-background/10'
                        : 'text-secondary hover:text-accent hover:bg-background/10'
                    }`}
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
                    <div className="absolute left-0 mt-3 w-60 bg-white rounded-2xl shadow-xl py-2 z-[100] border border-secondary/40">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-4 py-2 text-sm text-primary hover:bg-background hover:text-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 rounded-full bg-accent text-primary text-sm font-semibold shadow-sm hover:bg-primary hover:text-background transition-colors"
            >
              Book a Consultation
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
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
          <div className="md:hidden py-4 bg-primary/98 backdrop-blur-md border-t border-secondary/30">
            <div className="space-y-2">
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
                          className="block py-1.5 text-sm text-secondary hover:text-accent transition-colors"
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
            <div className="mt-4 pt-4 border-t border-secondary/30">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 rounded-full bg-accent text-primary font-semibold hover:bg-primary hover:text-background transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;