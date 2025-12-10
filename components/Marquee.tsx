import React from 'react';
import { Star } from 'lucide-react';

const Marquee: React.FC = () => {
  const items = [
    "Social Media Management",
    "Content Creation",
    "Virtual Assistance",
    "Community Engagement",
    "Email Marketing",
    "Customer Support",
    "Video Editing",
    "Copywriting"
  ];

  return (
    <div className="bg-brand py-6 rotate-0 md:-rotate-1 overflow-hidden shadow-lg mb-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-gray-900 font-extrabold text-xl uppercase tracking-wider">{item}</span>
            <Star className="ml-6 text-black fill-black" size={20} />
          </div>
        ))}
      </div>
      
      {/* Inline style for the basic marquee animation since tailwind doesn't have it by default without config */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;