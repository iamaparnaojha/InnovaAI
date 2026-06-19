// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9', // teal-500
        secondary: '#f97316', // orange-500
        accent: '#fbbf24', // yellow-400
      },
      boxShadow: {
        card: '0 4px 6px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
