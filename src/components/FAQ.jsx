import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQs = [
  {
    question: "Is this suitable for beginners with zero remote experience?",
    answer: "Yes! Whether you are transitioning to remote work for the first time or looking to upgrade your current local role to international pay, the guide walks you step-by-step from foundational resume building to live negotiation."
  },
  {
    question: "How do I receive access after payment?",
    answer: "Immediately upon completing payment, you will be redirected to your private download dashboard and also receive an instant confirmation email with direct download links to the PDF guide and Notion templates."
  },
  {
    question: "Is this specific to tech and software engineering only?",
    answer: "No. The strategies apply to virtual assistants, customer support, sales development, digital marketing, graphic design, content writing, data entry, project management, and software engineers."
  },
  {
    question: "Will this work specifically for Nigerians and other African nationals?",
    answer: "Yes, that is the exact purpose the Founder built this guide. It addresses payment processing (how to receive USD via Geegpay/Grey/Wise), handling US/UK timezone differences, and bypassing geo-blocked filters."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-sand">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200">Got Questions?</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-5 pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed ${openIndex === idx ? 'block' : 'hidden'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
