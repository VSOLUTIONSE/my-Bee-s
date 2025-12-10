import React from 'react';
import { Smartphone, PenTool, Headphones, Video, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Social Media Management",
    description: "Full-stack management for Instagram, Facebook, and more to grow your presence.",
    icon: Smartphone,
    details: ["Content planning & scheduling", "Caption writing & posting", "DM & comment management", "Growth strategy"]
  },
  {
    title: "Content Creation",
    description: "Engaging visuals and copy that resonate with your target audience.",
    icon: PenTool,
    details: ["Content ideas & planning", "Reels/TikTok shooting & editing", "Canva graphics & flyers", "Promotional post design"]
  },
  {
    title: "Virtual Assistance",
    description: "Reliable admin and support tasks so you can focus on the big picture.",
    icon: Headphones,
    details: ["Customer support & follow-ups", "Email & Calendar management", "Data entry & research", "General admin tasks"]
  },
    {
    title: "YouTube Management",
    description: "Handling your channel from upload to optimization.",
    icon: Video,
    details: ["Faceless content management", "Uploads & scheduling", "YouTube Studio handling", "Thumbnail coordination"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="bg-brand text-black font-bold px-3 py-1 rounded-full uppercase text-xs tracking-wider shadow-[0_0_10px_rgba(74,246,38,0.4)]">My Specialization</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4">Services I Provide</h2>
          <p className="text-gray-500 mt-4 text-lg">Comprehensive digital solutions tailored to elevate your business operations and online brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-[0_0_30px_rgba(74,246,38,0.25)] hover:border-brand transition-all duration-300 border border-gray-100 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              {/* Icon Container: Black Background, Neon Icon */}
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-black transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110 shadow-md">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 border-t border-gray-50 pt-4">
                {service.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600">
                        <span className="mr-2 mt-0.5 text-brand drop-shadow-[0_0_5px_rgba(74,246,38,0.8)]">●</span> {detail}
                    </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-brand-dark transition-colors">
                Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform text-brand" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;