import React from 'react';
import { Wifi, MessageCircle, Layers, UserCheck } from 'lucide-react';

const WhyMe: React.FC = () => {
    const reasons = [
        { icon: Wifi, title: "Remote Expert", desc: "Seamlessly integrated into your workflow from anywhere." },
        { icon: MessageCircle, title: "Strong Communicator", desc: "Clear, timely updates via Slack, WhatsApp, or Email." },
        { icon: Layers, title: "Organized", desc: "I juggle multiple tasks without dropping the ball." },
        { icon: UserCheck, title: "Owner Mindset", desc: "I treat your business needs with the same care you do." },
    ];

  return (
    <section className="py-24 bg-brand/5 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">Why Choose Me?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 transition-all duration-300 border border-gray-50 group">
                    <div className="w-16 h-16 mx-auto bg-black rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-black transition-colors duration-300 shadow-md">
                        <r.icon size={32} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">{r.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;