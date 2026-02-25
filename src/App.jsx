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
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <HeroBanner />
      <WhatWeBuild />
      <PackagesPricing />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;