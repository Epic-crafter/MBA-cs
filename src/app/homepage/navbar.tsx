"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { 
      href: '/about', 
      text: 'About Us',
      description: 'Learn more about our educational institution and mission'
    },
    { 
      href: '/courses', 
      text: 'Courses',
      description: 'Explore our comprehensive range of academic courses'
    },
    { 
      href: '/admission', 
      text: 'Admission',
      description: 'Information about admission process and requirements'
    },
    { 
      href: '/events', 
      text: 'Events & Webinars',
      description: 'Upcoming educational events and online webinars'
    },
    { 
      href: '/contact', 
      text: 'Contact Us',
      description: 'Get in touch with our admissions team'
    },
    { 
      href: '/blog', 
      text: 'Blog',
      description: 'Educational insights and industry updates'
    },
    { 
      href: '/university', 
      text: 'University Page',
      description: 'Comprehensive information about our university'
    },
    { 
      href: '/cat-calculator', 
      text: 'CAT Calculator',
      description: 'Calculate your CAT exam score and percentile'
    },
  ];

  return (
    <>
      <Head>
        <link rel="preload" href="/homepage/navlogo.png" as="image" />
        {/* Add structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Your Institution Name",
              "url": "https://yourdomain.com",
              "logo": "https://yourdomain.com/homepage/navlogo.png",
              "sameAs": [
                "https://www.facebook.com/yourinstitution",
                "https://twitter.com/yourinstitution",
                "https://www.linkedin.com/company/yourinstitution"
              ]
            })
          }}
        />
      </Head>

      <header className="bg-[#0b1c57] py-4">
        <nav className="container mx-auto px-4" aria-label="Main navigation" role="navigation">
          <div className="flex items-center justify-between">
            {/* Logo with semantic markup */}
            <div className="flex items-center">
              <Link href="/" aria-label="Return to homepage">
                <div itemScope itemType="https://schema.org/Organization">
                  <Image
                    src="/homepage/navlogo.png"
                    alt="Institution Name Logo"
                    width={40}
                    height={40}
                    priority
                    itemProp="logo"
                  />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button with ARIA */}
            <button
              className="lg:hidden text-white hover:text-orange-500"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation with Semantic HTML */}
            <div className="hidden lg:block" role="navigation">
              <ul className="flex space-x-8 text-white text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="hover:text-orange-500"
                      title={link.description}
                      aria-label={link.description}
                    >
                      <span itemProp="name">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search Button with ARIA */}
            <div className="hidden lg:block">
              <button 
                aria-label="Open search"
                title="Search our website"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu with ARIA */}
          <div
            id="mobile-menu"
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:hidden mt-4 border-t border-gray-700`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
          >
            <ul className="text-white text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.href} className="py-2" role="none">
                  <Link
                    href={link.href}
                    className="block hover:text-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                    title={link.description}
                    aria-label={link.description}
                    role="menuitem"
                  >
                    <span itemProp="name">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Search Button */}
            <div className="py-2">
              <button 
                aria-label="Open search"
                title="Search our website"
                className="text-orange-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;