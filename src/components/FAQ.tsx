import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faqData';

export function FAQ() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-14 lg:py-20 bg-gradient-to-b from-gray-50 to-white" id="faq">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#ff0000] rounded-full">
            Frequently Asked Questions
          </span>
          
          <h2 className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Got Questions? We Have {' '}
            <span className="block bg-gradient-to-r from-red-500  to-orange-500 bg-clip-text text-transparent">
              Answers for You
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and support. Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      activeItem === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeItem === faq.id ? 'grid grid-rows-[1fr] opacity-100' : 'grid grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-4 pb-4 bg-orange-100">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;