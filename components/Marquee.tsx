import React from 'react';

const Marquee: React.FC = () => {
  // Repeat items to ensure smooth scrolling
  const items = [
    "SOCIAL MEDIA",
    "CONTENT CREATION",
    "VIRTUAL ASSISTANT",
  ];

  return (
    <div className="bg-brand py-5 rotate-0 md:-rotate-1 overflow-hidden shadow-lg mb-20 border-y-2 border-brand-dark/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-8">
            <span className="text-black font-extrabold text-lg md:text-xl uppercase tracking-widest">{item}</span>
            <span className="ml-8 md:ml-16 text-black font-bold text-2xl">*</span>
          </div>
        ))}
      </div>
      
      {/* Inline style for the basic marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;