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
        { name: 'Who We Support', path: '/services/who-we-support' },
      ],
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

  const isActive = (item: NavItem) => {
    if (item.path === '/') return pathname === '/';
    return pathname.startsWith(item.path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/main_logo.jpeg"
              alt="Platinum 60 by Eleete Concepts"
              width={140}
              height={45}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:space-x-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${
                    isActive(item)
                      ? 'text-accent bg-white/10'
                      : 'text-secondary hover:text-accent hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-md text-secondary hover:text-accent hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-primary border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => !item.children && setIsMenuOpen(false)}
                  className={`block px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    isActive(item)
                      ? 'text-accent bg-white/10'
                      : 'text-secondary hover:text-accent hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent/30 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-secondary/80 hover:text-accent transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
