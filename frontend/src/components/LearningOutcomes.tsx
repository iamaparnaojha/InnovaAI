import React from 'react';

const outcomes = [
  { emoji: '🤖', title: 'Build Real Robots', desc: 'Assemble and program physical-style robots using block coding and sensor integration.' },
  { emoji: '🧠', title: 'Understand AI', desc: 'Learn how machines learn, recognize images, and make decisions — explained for kids!' },
  { emoji: '🎮', title: 'Create AI Games', desc: 'Build fun interactive games and smart apps powered by artificial intelligence.' },
  { emoji: '🐞', title: 'Debug Like a Pro', desc: 'Learn to find and fix bugs through guided peer collaboration and problem-solving.' },
  { emoji: '🌐', title: 'Think Computationally', desc: 'Develop logical, structured thinking skills used by engineers and scientists worldwide.' },
  { emoji: '🏆', title: 'Earn a Certificate', desc: 'Every graduate receives a digital certificate of achievement to showcase their skills.' },
];

const LearningOutcomes: React.FC = () => (
  <section id="learn" className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-secondary/10 text-secondary-dark font-semibold text-sm rounded-full px-4 py-1 mb-3">
          Learning Outcomes
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 dark:text-white">
          What Kids Will Learn 🎓
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Skills your child takes home long after the workshop ends
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((item) => (
          <div
            key={item.title}
            className="card-hover group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/30 dark:hover:border-primary/30"
          >
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mentor strip */}
      <div className="mt-12 rounded-3xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="text-6xl shrink-0">👩‍🏫</div>
        <div>
          <h3 className="font-heading font-black text-xl text-gray-900 dark:text-white mb-2">
            Expert Mentors, Kid-Friendly Style
          </h3>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Our instructors are IIT &amp; NIT graduates with years of experience teaching young learners.
            Every session is interactive, energetic, and designed to keep kids curious and engaged.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Live Q&A', 'Recorded Replays', 'Doubt Sessions', 'Parent Updates', 'Fun Challenges'].map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold rounded-full px-3 py-1">
                ✅ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LearningOutcomes;
