import React from 'react';

interface DetailsCardProps {
  emoji: string;
  title: string;
  value: string;
  color: string;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ emoji, title, value, color }) => (
  <div className={`card-hover flex items-center gap-4 p-5 rounded-2xl border-2 bg-white dark:bg-gray-800 shadow-md ${color}`}>
    <div className="text-4xl shrink-0">{emoji}</div>
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">
        {title}
      </p>
      <p className="text-xl font-black text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default DetailsCard;
