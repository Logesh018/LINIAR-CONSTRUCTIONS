import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import WhatWeBuild from './components/WhatWeBuild';
import PackagesPricing from './components/PackagesPricing';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <WhatWeBuild />
      <PackagesPricing />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <AboutUs />
      <Contact />
      
      {/* Temporary Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 LINIAR CONSTRUCTIONS. All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-sm mt-2">
            Building Dreams Together
          </p> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
