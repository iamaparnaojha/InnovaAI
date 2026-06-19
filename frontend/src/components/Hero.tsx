import React from 'react';

const Hero: React.FC = () => {
  const stats = [
    { emoji: '🤖', label: 'Robotics Projects', value: '10+' },
    { emoji: '🧠', label: 'AI Concepts', value: '15+' },
    { emoji: '🎥', label: 'Live Sessions', value: '20+' },
    { emoji: '🏆', label: 'Certificate', value: 'Yes' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ background: 'linear-gradient(135deg,#667eea 0%,#764ba2 45%,#06b6d4 100%)' }}
    >
      {/* background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/25 rounded-full blur-3xl pointer-events-none" />

      {/* floating decorations */}
      {[
        { icon: '🚀', top: '15%', left: '6%', delay: '0s' },
        { icon: '⚙️', top: '20%', right: '8%', delay: '0.6s' },
        { icon: '💡', bottom: '28%', left: '8%', delay: '1.2s' },
        { icon: '🤖', bottom: '20%', right: '10%', delay: '1.8s' },
        { icon: '⭐', top: '50%', left: '3%', delay: '0.9s' },
        { icon: '🔬', top: '60%', right: '5%', delay: '0.3s' },
      ].map((d, i) => (
        <span
          key={i}
          className="absolute text-3xl lg:text-4xl hidden lg:block animate-float select-none"
          style={{ top: d.top, left: d.left, bottom: d.bottom, right: d.right, animationDelay: d.delay } as React.CSSProperties}
        >
          {d.icon}
        </span>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* live badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-5 py-2 text-sm font-semibold mb-6 badge-pulse">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          🗓️ Starts 15 July 2026 &nbsp;·&nbsp; Limited Seats!
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-tight mb-4 drop-shadow-lg">
          AI &amp; Robotics
          <br />
          <span className="text-yellow-300">Summer Workshop</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
          Spark your child's curiosity! 4 weeks of live online classes where kids aged{' '}
          <strong className="text-yellow-300">8–14</strong> build robots, learn AI, and have a blast. 🎉
        </p>

        {/* price badge */}
        <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-3 mb-8 border border-white/20">
          <span className="text-3xl font-black text-white">₹2,999</span>
          <div className="text-left">
            <p className="text-white/60 text-xs line-through">₹5,999</p>
            <p className="text-yellow-300 text-xs font-bold">50% Early Bird 🎁</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            id="hero-enroll-btn"
            href="#register"
            className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-lg rounded-2xl shadow-2xl hover:shadow-yellow-400/50 hover:-translate-y-1 transition-all duration-200"
          >
            🚀 Enroll Now – ₹2,999
          </a>
          <a
            id="hero-details-btn"
            href="#details"
            className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border border-white/30 hover:-translate-y-1 transition-all duration-200"
          >
            📋 View Details
          </a>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-white card-hover"
            >
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="text-2xl font-black">{s.value}</div>
              <div className="text-xs text-white/70 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 fill-gray-50 dark:fill-gray-950">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
