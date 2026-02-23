import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🏗️",
      title: "End-to-End Construction Solutions",
      description: "From Vastu planning to key handover — we handle everything under one roof.",
      details: "No need to coordinate with multiple vendors. Our comprehensive approach ensures seamless project execution from initial design consultation to the final handover, saving you time, effort, and stress."
    },
    {
      icon: "👷",
      title: "Experienced Tamil Masons",
      description: "Skilled workmanship ensuring strong structure and long-lasting quality.",
      details: "Our team comprises highly skilled Tamil masons with decades of traditional expertise combined with modern construction techniques. Their meticulous attention to detail guarantees superior structural integrity and finishing."
    },
    {
      icon: "📹",
      title: "CCTV Site Monitoring",
      description: "24×7 CCTV surveillance to monitor work progress and maintain quality.",
      details: "Stay connected with your project anywhere, anytime. Our advanced CCTV monitoring system provides real-time visibility into construction progress, ensuring transparency and quality control at every stage."
    },
    {
      icon: "✨",
      title: "Quality Materials & Standards",
      description: "We use trusted materials and follow proper construction standards.",
      details: "We source materials only from certified suppliers and brands. Every element undergoes rigorous quality checks to meet industry standards, ensuring your building stands strong for generations."
    },
    {
      icon: "🤝",
      title: "Transparent Process",
      description: "Clear planning, honest pricing, and regular updates at every stage.",
      details: "No hidden costs, no surprises. We believe in complete transparency with detailed quotations, regular progress reports, and open communication throughout your project journey."
    },
    {
      icon: "⏱️",
      title: "On-Time Project Delivery",
      description: "Committed timelines with systematic planning and execution.",
      details: "We understand the value of your time. Our structured project management approach, coupled with efficient resource allocation, ensures your project is completed within the agreed timeline without compromising quality."
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            Why Liniar Constructions?
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Choose excellence, reliability, and trust. We bring together expertise, quality, and transparency
            to deliver construction solutions that exceed expectations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 gradient-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-4xl">{reason.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-teal-700 font-semibold mb-3 leading-relaxed">
                {reason.description}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.details}
              </p>

              {/* Decorative underline — teal via primary-500 */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-teal-500 to-transparent rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center gradient-blue rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Build Your Dream Project?
          </h3>
          <p className="text-teal-100 text-lg mb-8">
            Experience the Liniar difference. Let's discuss your construction needs today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-teal-700 transition-all duration-300 hover:scale-105">
              Call: 8754767261
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;