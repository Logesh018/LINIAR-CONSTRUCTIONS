import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Coimbatore",
      project: "3 BHK Villa",
      rating: 5,
      text: "Liniar Constructions exceeded our expectations! From the initial Vastu planning to the final handover, their team was professional and transparent. The CCTV monitoring feature gave us complete peace of mind. Our dream home is now a reality, and the quality is outstanding!",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0066e6&color=fff&size=128"
    },
    {
      name: "Priya Sankaran",
      location: "Tirupur",
      project: "Commercial Building",
      rating: 5,
      text: "Exceptional service and quality work! The Tamil masons were highly skilled, and every detail was executed perfectly. The project was completed on time without any delays. I highly recommend Liniar Constructions for anyone looking for reliable and quality construction services.",
      image: "https://ui-avatars.com/api/?name=Priya+Sankaran&background=1a80ff&color=fff&size=128"
    },
    {
      name: "Arun Vijay",
      location: "Erode",
      project: "Home Renovation",
      rating: 5,
      text: "We approached Liniar for our home renovation project, and they transformed our old house beautifully. The team's attention to detail and commitment to quality materials made all the difference. Very transparent pricing with no hidden costs. Truly professional!",
      image: "https://ui-avatars.com/api/?name=Arun+Vijay&background=0052b3&color=fff&size=128"
    },
    {
      name: "Meena Lakshmi",
      location: "Virudhunagar",
      project: "4 BHK Independent House",
      rating: 5,
      text: "Building our house with Liniar was a stress-free experience. Their end-to-end solution meant we didn't have to run around for approvals or materials. The regular updates and site monitoring through CCTV kept us informed throughout. Excellent construction quality!",
      image: "https://ui-avatars.com/api/?name=Meena+Lakshmi&background=4d9cff&color=fff&size=128"
    },
    {
      name: "Karthik Ramesh",
      location: "Coimbatore",
      project: "Office Space",
      rating: 5,
      text: "Professional team with great expertise! They completed our office construction project ahead of schedule. The quality of work is exceptional, and their transparent process made the entire experience smooth. The 24/7 site monitoring was a great value addition. Highly satisfied!",
      image: "https://ui-avatars.com/api/?name=Karthik+Ramesh&background=0066e6&color=fff&size=128"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstChild?.offsetWidth || 0;
      const gap = 32; 
      scrollContainerRef.current.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary-600 font-bold text-sm tracking-wider uppercase mb-2 block">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers who trusted us with their dream projects.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full md:w-[500px] snap-center"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex-grow mb-6">
                    <svg className="w-10 h-10 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center pt-6 border-t border-gray-200">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 shadow-lg"
                    />
                    <div className="flex-grow">
                      <h4 className="font-display font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-600 text-sm font-medium">
                        {testimonial.project}
                      </p>
                      <p className="text-gray-500 text-sm">
                        📍 {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-12 h-3 gradient-blue' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-primary-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-display font-black text-primary-600 mb-2">20+</div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-display font-black text-primary-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-display font-black text-primary-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* FIXED: Removed 'jsx' attribute to prevent React warning */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;