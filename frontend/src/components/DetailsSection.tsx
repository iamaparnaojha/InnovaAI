import React from 'react';
import DetailsCard from './DetailsCard';

const workshopInfo = [
  { emoji: '👶', title: 'Age Group',  value: '8–14 Years',   color: 'border-violet-200 dark:border-violet-800' },
  { emoji: '📅', title: 'Duration',   value: '4 Weeks',       color: 'border-cyan-200 dark:border-cyan-800' },
  { emoji: '💻', title: 'Mode',       value: 'Online (Live)', color: 'border-indigo-200 dark:border-indigo-800' },
  { emoji: '💰', title: 'Fee',        value: '₹2,999',        color: 'border-yellow-200 dark:border-yellow-800' },
  { emoji: '🗓️', title: 'Start Date', value: '15 July 2026',  color: 'border-green-200 dark:border-green-800' },
];

const DetailsSection: React.FC = () => (
  <section id="details" className="py-16 bg-gray-50 dark:bg-gray-950">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-primary/10 text-primary font-semibold text-sm rounded-full px-4 py-1 mb-3">
          Workshop Details
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 dark:text-white">
          Everything You Need to Know
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Quick facts about the AI &amp; Robotics Summer Workshop 2026
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {workshopInfo.map((item) => (
          <DetailsCard key={item.title} {...item} />
        ))}
      </div>

      {/* Curriculum highlights */}
      <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
        <h3 className="text-2xl font-heading font-black mb-6 text-center">📚 4-Week Curriculum Snapshot</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { week: 'Week 1', title: 'Intro to AI & Machine Learning', desc: 'What is AI? How do machines think? Fun demos & games.' },
            { week: 'Week 2', title: 'Block Coding & Robot Building', desc: 'Build your first robot with Scratch & sensor kits.' },
            { week: 'Week 3', title: 'Computer Vision & Smart Bots', desc: 'Teach your robot to see with image recognition.' },
            { week: 'Week 4', title: 'Capstone Project & Showcase', desc: 'Present your project to parents & earn your certificate!' },
          ].map((w) => (
            <div key={w.week} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <span className="text-yellow-300 text-xs font-bold uppercase tracking-wider">{w.week}</span>
              <p className="font-bold mt-1 mb-1">{w.title}</p>
              <p className="text-white/75 text-sm">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DetailsSection;
