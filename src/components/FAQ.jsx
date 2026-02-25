import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly offer our services across Coimbatore, Tirupur, Erode, and Virudhunagar, delivering excellence in every project we undertake. Our experienced team travels to these locations to ensure the same high-quality standards and personalized service regardless of the project location. We've successfully completed numerous residential, commercial, and renovation projects across these regions, earning the trust of customers throughout Tamil Nadu."
    },
    {
      question: "Is Vastu planning included in your services?",
      answer: "Yes, absolutely! We follow Vastu-compliant planning as an integral part of our construction process. Our team includes Vastu consultants who work with you from the initial design phase to ensure your building is aligned with Vastu principles. Additionally, Vastu pooja can also be arranged upon request before construction begins and at the time of handover, ensuring spiritual harmony and positive energy in your new space."
    },
    {
      question: "Do you handle the entire project from start to finish?",
      answer: "Absolutely! We provide complete end-to-end construction solutions, which means you don't have to worry about coordinating with multiple vendors or contractors. Our comprehensive service includes initial design consultation, Vastu planning, obtaining necessary approvals and permits, material procurement, construction execution, quality checks at every stage, finishing work, and final key handover. This streamlined approach saves you time, reduces stress, and ensures consistent quality throughout the project."
    },
    {
      question: "Can I visit your completed or ongoing projects?",
      answer: "Yes, definitely! We encourage prospective clients to visit our completed or ongoing projects to see the quality of our work firsthand. Site visits can be arranged upon request, and our team will be happy to show you various types of projects including residential homes, commercial buildings, and renovation works. This transparency allows you to assess our construction standards, finishing quality, and attention to detail before making your decision. Simply contact us to schedule a convenient time for your visit."
    },
    {
      question: "How do you ensure quality and timely delivery?",
      answer: "We follow a structured and systematic approach to ensure both quality and timely delivery. Our process includes detailed project planning with clear timelines, use of quality materials sourced from trusted and certified suppliers, deployment of skilled and experienced Tamil masons, regular site supervision by our project managers, 24×7 CCTV monitoring for real-time progress tracking, quality checks at every construction stage, and efficient workforce management. We maintain transparent communication with regular updates, and our proven project management methodology has helped us achieve a 100% on-time delivery record while maintaining uncompromising quality standards."
    },
    {
      question: "Where is your office located?",
      answer: "Our office location is mentioned in the Contact Us section below with complete address details and map directions for easy navigation. You can visit our office during business hours to discuss your project requirements in person, view our portfolio, and meet our team. We're conveniently located to serve customers across Coimbatore, Tirupur, Erode, and Virudhunagar. Feel free to call us at 8754767261 before visiting to ensure our team is available to assist you, or you can schedule an appointment for a dedicated consultation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Find answers to common questions about our construction services, process, and policies.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${openIndex === index
                    ? 'gradient-blue text-white shadow-xl'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-display font-bold text-lg pr-8 ${openIndex === index ? 'text-white' : 'text-gray-900'
                    }`}>
                    {faq.question}
                  </h3>

                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                      ? 'bg-white/20 rotate-180'
                      : 'bg-emerald-100 text-primary-700'
                    }`}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                >
                  <div className={`pt-4 border-t ${openIndex === index ? 'border-white/20' : 'border-gray-200'
                    }`}>
                    <p className={`leading-relaxed ${openIndex === index ? 'text-teal-50' : 'text-gray-700'
                      }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-teal-50 rounded-3xl p-12 max-w-3xl mx-auto border border-primary-100">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Can't find the answer you're looking for? Our team is here to help you with any queries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="gradient-blue text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
            <a
              href="tel:8754767261"
              className="border-2 border-teal-600 text-teal-700 px-8 py-4 rounded-lg font-bold hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: 8754767261
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;