import React, { useState, useEffect } from "react";
import BannerDesktop1 from "../../assets/LC-Banner-1.jpeg";
import BannerMobile1 from "../../assets/LC-Banner-1 portrait.jpeg";
import BannerDesktop2 from "../../assets/LC-Banner-2-landscape.jpeg";
import BannerMobile2 from "../../assets/LC-Banner-2-portrait.jpeg";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Built by Experienced Tamil Masons",
      subtitle: "Quality workmanship from foundation to finish.",
      desktopImage: BannerDesktop1,
      mobileImage: BannerMobile1,
    },
    {
      title: "24×7 CCTV Site Monitoring",
      subtitle: "Track work progress. Stay stress-free.",
      desktopImage: BannerDesktop2,
      mobileImage: BannerMobile2,
    },
    {
      title: "Share Site Location & Sq Ft",
      subtitle: "Get an Instant Quote Today",
      desktopImage:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
      mobileImage:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Wrapper */}
          <div className="absolute inset-0">
            
            {/* Desktop Image */}
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.desktopImage})` }}
            />

            {/* Mobile Image */}
            <div
              className="block md:hidden absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.mobileImage})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-700/70"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div
                  className={`transition-all duration-1000 delay-200 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>

                  <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 font-light">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                      Chat on Whatsapp
                    </button>

                    <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg backdrop-blur-sm hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-105">
                      Call Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            } rounded-full`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-20 animate-bounce hidden md:block">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 font-medium">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;