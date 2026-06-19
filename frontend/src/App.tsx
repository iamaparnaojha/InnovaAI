import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DetailsSection from './components/DetailsSection';
import LearningOutcomes from './components/LearningOutcomes';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <DetailsSection />
        <LearningOutcomes />
        <Testimonials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
