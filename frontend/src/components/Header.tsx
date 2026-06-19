import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    setDark(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#details', label: 'Details' },
    { href: '#learn', label: 'What You Learn' },
    { href: '#faq', label: 'FAQ' },
    { href: '#register', label: 'Enroll' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="AI Robotics Workshop Logo"
            className="h-12 w-12 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-200"
          />
          <div className="hidden sm:block">
            <p className="font-heading font-800 text-base leading-tight text-gray-900 dark:text-white">
              AI &amp; Robotics
            </p>
            <p className="text-xs text-primary font-semibold tracking-wide">Summer Workshop</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                link.label === 'Enroll'
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg hover:-translate-y-0.5'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-primary/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            id="theme-toggle"
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{ background: dark ? '#6366f1' : '#e2e8f0' }}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
                dark ? 'translate-x-7' : 'translate-x-0'
              }`}
            >
              {dark ? '🌙' : '☀️'}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <div className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-200 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-200 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-3 flex flex-col gap-1 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
                link.label === 'Enroll'
                  ? 'bg-primary text-white text-center mt-1'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
