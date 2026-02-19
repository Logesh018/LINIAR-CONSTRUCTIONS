import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 1. Added state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About us', id: 'about-us' },
    { name: 'Our services', id: 'what-we-build' },
    { name: 'Our projects', id: 'packages-pricing' },
    { name: 'Our gallery', id: 'testimonials' },
    { name: 'Contact us', id: 'contact-us' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // 2. Close mobile menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-display text-2xl font-bold">L</span>
            </div>
            <div>
              <h1 className={`font-display text-2xl font-bold tracking-tight ${
                isScrolled ? 'text-primary-700' : 'text-white'
              }`}>
                LINIAR CONSTRUCTIONS
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-blue-100'}`}>
                Building Your Trust
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-blue-200'
                } ${item.name === 'Home' ? 'font-semibold' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection('contact-us')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                isScrolled 
                  ? 'gradient-blue text-white hover:shadow-xl' 
                  : 'bg-white text-primary-700 hover:shadow-2xl'
              }`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* 3. Added onClick handler and conditional icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden z-50 focus:outline-none"
          >
            {isOpen ? (
              // "X" Close Icon
              <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 4. Mobile Menu Container */}
        {/* Positioned absolute to slide down below the main bar */}
        <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`container mx-auto px-4 py-4 shadow-lg ${
            isScrolled ? 'bg-white' : 'bg-primary-700/95 backdrop-blur-sm'
          }`}>
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white hover:text-blue-200'
                  } ${item.name === 'Home' ? 'font-semibold' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              {/* Mobile CTA */}
              <button 
                onClick={() => scrollToSection('contact-us')}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
                  isScrolled 
                    ? 'gradient-blue text-white hover:shadow-xl' 
                    : 'bg-white text-primary-700 hover:shadow-2xl'
                }`}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;