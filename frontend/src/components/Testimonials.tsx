import React from 'react';

const testimonials = [
  { name: 'Riya M.', age: 12, text: 'I built my first robot in Week 2! I had no idea coding could be this fun. 10/10 would recommend!', emoji: '👧' },
  { name: 'Arjun K.', age: 10, text: "My son was glued to the screen every session. The teachers are amazing and so patient with kids.", emoji: '👦' },
  { name: 'Priya S.', age: 0, text: "As a parent I was skeptical, but the results were amazing. Arjun now talks about AI at dinner!", emoji: '👩' },
];

const Testimonials: React.FC = () => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 font-semibold text-sm rounded-full px-4 py-1 mb-3">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 dark:text-white">
          What Families Say 💬
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="card-hover bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm"
          >
            <p className="text-yellow-400 text-lg mb-3">★★★★★</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{t.emoji}</span>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                {t.age > 0 && <p className="text-xs text-gray-400">Age {t.age} · Workshop Graduate</p>}
                {t.age === 0 && <p className="text-xs text-gray-400">Parent of Workshop Graduate</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
