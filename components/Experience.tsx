import React from 'react';
import { Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: "Sukom Travel & Tours LTD",
    role: "Executive Assistant / SMM",
    highlights: [
        "Managed clients in the absence of the CEO",
        "Assisted with ticketing and visa applications",
        "Managed Instagram, Facebook, and WhatsApp Business",
        "Created content, edited videos, and designed flyers",
        "Handled customer enquiries and confirmed travel details"
    ]
  },
  {
    company: "Sukom Logistics",
    role: "Social Media Manager",
    highlights: [
        "Managed Instagram account",
        "Posted branded content consistently",
        "Responded to customer messages & engagement"
    ]
  },
  {
    company: "Mindrave",
    role: "Channel Manager (YouTube)",
    highlights: [
        "Manage a faceless YouTube channel",
        "Plan and upload content strategy",
        "Use YouTube Studio to manage uploads & analytics"
    ]
  },
  {
    company: "Rem's Business",
    role: "Business Manager",
    highlights: [
        "Managed daily operations",
        "Supervised two staff members",
        "Handled customer relations",
        "Managed financial records"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div>
                <span className="bg-brand text-black font-bold px-3 py-1 rounded-full uppercase text-xs tracking-wider shadow-[0_0_10px_rgba(74,246,38,0.4)]">Track Record</span>
                <h2 className="text-4xl font-extrabold text-gray-900 mt-4">Work Experience</h2>
            </div>
            <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right hidden md:block text-lg">
                Real world results delivered for diverse businesses.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">{exp.company}</h3>
                            <span className="text-black font-bold text-sm uppercase tracking-wide bg-brand px-2 py-1 rounded-md mt-2 inline-block border border-brand">{exp.role}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-full shadow-sm text-gray-400 group-hover:bg-black group-hover:text-brand transition-colors">
                            <Briefcase size={20} />
                        </div>
                    </div>
                    <ul className="space-y-3 mt-4">
                        {exp.highlights.map((point, i) => (
                            <li key={i} className="flex items-start text-gray-600 text-sm md:text-base">
                                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0"></span>
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;