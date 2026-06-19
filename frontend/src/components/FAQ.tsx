import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Who can join the workshop?',
    answer: 'Kids aged 8–14 years are welcome. No prior coding or robotics experience is required — we start from absolute basics and make it super fun!',
  },
  {
    question: 'Is the workshop fully online?',
    answer: 'Yes! All sessions are live Zoom classes with interactive labs, real-time Q&A, and recorded replays so no session is ever missed.',
  },
  {
    question: 'What devices / equipment do kids need?',
    answer: 'Just a laptop or desktop with a stable internet connection. No physical robot kit is needed — we use virtual simulators for robotics and free browser-based tools for AI.',
  },
  {
    question: 'What is the fee and refund policy?',
    answer: 'The fee is ₹2,999 (early bird). We offer a full refund within 48 hours of enrollment, and a 50% refund before the workshop starts.',
  },
  {
    question: 'Will participants receive a certificate?',
    answer: 'Yes! Every child who completes the 4-week program receives a digitally signed Certificate of Achievement they can showcase in school portfolios.',
  },
  {
    question: 'Are there any assessments or homework?',
    answer: 'Short, fun weekly projects replace traditional homework. They are creative, hands-on, and take 30–45 minutes per week — no stress!',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent/10 text-accent-dark font-semibold text-sm rounded-full px-4 py-1 mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 dark:text-white">
            Frequently Asked Questions ❓
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Still curious? We've answered the most common questions below.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary/40 bg-white dark:bg-gray-800 shadow-md'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center gap-4"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary text-white rotate-45'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="faq-body"
                  style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
            Still have questions? We're here to help! 💬
          </p>
          <a
            href="#register"
            className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200 shadow-md"
          >
            Contact Us / Enroll
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
