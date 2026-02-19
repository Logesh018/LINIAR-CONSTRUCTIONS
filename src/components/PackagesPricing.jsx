import React from 'react';

const PackagesPricing = () => {
  const packages = [
    {
      name: "Basic Package",
      price: "1,499",
      icon: "🏗️",
      color: "from-blue-700 to-blue-800",
      description: "Perfect for budget-conscious homeowners seeking quality construction",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
      features: [
        "Standard quality materials",
        "Basic finishing work",
        "Standard flooring & tiling",
        "Basic electrical & plumbing",
        "Distemper paint finish",
        "1 year warranty",
        "Weekly progress updates",
        "Basic construction monitoring"
      ],
      popular: false
    },
    {
      name: "Standard Package",
      price: "2,999",
      icon: "🏘️",
      color: "from-primary-600 to-primary-700",
      description: "The most popular choice for modern homes with premium finishes",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      features: [
        "Premium quality materials",
        "High-quality finishing work",
        "Vitrified tiles & premium flooring",
        "Concealed electrical wiring",
        "Emulsion paint finish",
        "Modular kitchen basics",
        "2 year warranty",
        "24×7 CCTV monitoring",
        "Daily progress updates",
        "3D visualization included"
      ],
      popular: true
    },
    {
      name: "Premium Package",
      price: "4,999",
      icon: "🏛️",
      color: "from-yellow-500 to-yellow-600",
      description: "Luxury construction with imported materials and designer finishes",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      features: [
        "Imported premium materials",
        "Designer finishing work",
        "Italian marble & wooden flooring",
        "Smart home automation ready",
        "Premium texture paint finish",
        "Fully modular kitchen & wardrobes",
        "Premium sanitary & CP fittings",
        "3 year warranty",
        "24×7 CCTV + AI monitoring",
        "Real-time app tracking",
        "Dedicated project manager",
        "Architectural consultation included"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages-pricing" className="py-10 gradient-blue relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-15 animate-fade-in-up">
          <div className="inline-block">
            {/* <span className="text-blue-200 font-bold text-sm tracking-wider uppercase mb-2 block">
              Transparent Pricing
            </span> */}
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
              Packages & Pricing
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <p className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto">
            Clear, competitive pricing based on per square foot. No hidden charges, complete transparency.
          </p>
          {/* <div className="mt-2mb-10 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            All prices are per sq. ft
          </div> */}
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up ${pkg.popular ? 'ring-2 ring-yellow-400 md:-mt-8 md:mb-8' : ''
                }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {/* {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary-900 px-6 py-2 rounded-bl-2xl font-bold text-sm shadow-lg">
                  ⭐ MOST POPULAR
                </div>
              )} */}

              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-90`}></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-6xl mb-4 block">{pkg.icon}</span>
                    <h3 className="text-3xl font-display font-black">{pkg.name}</h3>
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-8">
                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-gray-600 text-lg mr-1">₹</span>
                    <span className="text-3xl font-display font-black text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/sq.ft</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                  Choose {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-blue-100 mb-6">
              Every project is unique. Tell us your requirements and budget, and we'll create a custom package tailored just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Get Custom Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold backdrop-blur-sm hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div> */}

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-display font-black text-white mb-2">500+</div>
              <div className="text-blue-200 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-black text-white mb-2">15+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-black text-white mb-2">98%</div>
              <div className="text-blue-200 text-sm">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-black text-white mb-2">100%</div>
              <div className="text-blue-200 text-sm">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesPricing;
