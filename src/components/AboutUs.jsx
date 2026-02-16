import React from 'react';

const AboutUs = () => {
  const achievements = [
    {
      icon: "🏗️",
      number: "10+",
      label: "Projects Completed",
      description: "Successfully delivered across Tamil Nadu"
    },
    {
      icon: "😊",
      number: "20+",
      label: "Satisfied Customers",
      description: "Building lasting relationships"
    },
    {
      icon: "📅",
      number: "2019",
      label: "Established",
      description: "Years of trusted service"
    },
    {
      icon: "⭐",
      number: "100%",
      label: "Quality Assured",
      description: "Commitment to excellence"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description: "We never compromise on quality, using only the best materials and skilled craftsmen."
    },
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description: "Honest pricing, clear communication, and transparent processes at every step."
    },
    {
      icon: "⏱️",
      title: "Timely Delivery",
      description: "Respecting your time with efficient project management and on-time completion."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Combining traditional expertise with modern construction techniques and technology."
    }
  ];

  return (
    <section id="about-us-detailed" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary-600 font-bold text-sm tracking-wider uppercase mb-2 block">
            Know Us Better
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-up">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                  alt="Liniar Constructions Team"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 gradient-blue text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-display font-black">2019</div>
                  <div className="text-sm">Established</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Building Your Trust, One Project at a Time
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary-700">LINIAR Constructions</strong>, established in 2019, 
                  is a trusted building and civil construction company delivering quality and reliable structures. 
                  We have successfully completed <strong>10+ projects</strong> and earned the trust of{' '}
                  <strong>20+ satisfied customers</strong> across Tamil Nadu.
                </p>
                <p>
                  From Vastu planning to key handover, we offer complete end-to-end construction solutions for 
                  residential, commercial, and renovation projects. With a highly experienced and advanced team, 
                  we ensure quality execution, timely delivery, and long-lasting results.
                </p>
                <p className="text-xl font-display font-bold text-primary-700 pt-4">
                  At LINIAR Constructions, we don't just build structures — we build your trust.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <div className="text-4xl font-display font-black text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className="font-bold text-gray-900 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="gradient-blue text-white p-10 rounded-3xl shadow-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-2xl font-display font-bold mb-4">Our Mission</h4>
              <p className="leading-relaxed text-blue-50">
                To deliver exceptional construction solutions that exceed client expectations through quality 
                craftsmanship, innovative approaches, and unwavering commitment to customer satisfaction. We aim 
                to make the construction journey stress-free and transparent for every client.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 text-gray-900 p-10 rounded-3xl shadow-xl border border-primary-100">
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="text-2xl font-display font-bold mb-4 text-primary-700">Our Vision</h4>
              <p className="leading-relaxed text-gray-700">
                To become the most trusted and preferred construction company in Tamil Nadu, known for our 
                reliability, quality, and customer-centric approach. We envision setting new benchmarks in 
                construction excellence and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;