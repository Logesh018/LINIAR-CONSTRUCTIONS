import React from 'react';
import Residential from "../../assets/works/LC-Residential.jpeg";
import Commercial from "../../assets/works/LC-commercial.jpeg";
import Renovation from "../../assets/works/LC-Renovation.jpeg";

const WhatWeBuild = () => {
  const services = [
    {
      icon: "🏗️",
      title: "Residential Construction",
      description: "From dream homes to apartments, we build quality living spaces with attention to every detail. Our residential projects combine modern design with traditional craftsmanship.",
      image: Residential,
      features: ["Custom Homes", "Villas", "Apartments", "Row Houses"]
    },
    {
      icon: "🏢",
      title: "Commercial Construction",
      description: "Building robust commercial spaces that drive business success. From offices to retail spaces, we deliver projects on time and within budget.",
      image: Commercial,
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Units"]
    },
    {
      icon: "🔨",
      title: "Renovation Works",
      description: "Transform your existing space with our expert renovation services. We breathe new life into old structures while preserving their character.",
      image: Renovation,
      features: ["Home Makeovers", "Office Renovations", "Structural Repairs", "Modern Upgrades"]
    }
  ];

  return (
    <section id="what-we-build" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block">
            <span className="text-emerald-600 font-bold text-sm tracking-wider uppercase mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
              What We Build
            </h2>
            <div className="w-24 h-1 bg-emerald-800 gradient-emerald mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            With decades of experience and skilled Tamil masons, we deliver construction excellence across all project types
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              /* Changed: max-w-sm to max-w-[340px] and w-full to w-[92%] mx-auto */
              className="max-w-[340px] mx-auto md:max-w-none w-[92%] sm:w-full bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div> */}
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-transparent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl">{service.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* <button className="w-full bg-teal-700 gradient-teal-light text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Not sure what you need? Let's discuss your project requirements
          </p>
          <button className="btn-primary">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
