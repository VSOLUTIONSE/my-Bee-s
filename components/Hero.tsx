import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import beeProf from '../components/img/bee-prof.png'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-green-50/20 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-light/20 to-transparent -z-10 rounded-bl-[150px] hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pr-12 animate-fade-in-up">

            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              I'm <span className="relative inline-block">
                Abisoye Gabriel
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>,<br />
              <span className="text-gray-500">Digital Marketer & VA.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              I help businesses, brands and companies manage their social media, engage customers, and stay organized remotely. Reliable, creative, and profitable.
              <br/>
              <span className="font-semibold text-gray-900 mt-3 block flex items-center gap-2">
                 Strategy | Content | Admin Support
              </span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#portfolio" className="group bg-brand hover:bg-brand-accent text-black px-8 py-4 rounded-full font-bold shadow-[0_10px_20px_-10px_rgba(74,246,38,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(74,246,38,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border-2 border-gray-200 hover:border-brand hover:text-black text-gray-600 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 flex items-center gap-2 bg-white">
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="pt-8 flex items-center space-x-6">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Follow Me</span>
              <div className="h-px w-12 bg-gray-200"></div>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/abiisioye?igsh=Mm9nOHNqNXgyMWZu" target="_blank" className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-600 hover:bg-black hover:text-brand hover:border-black hover:-translate-y-1 transition-all"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/kwishiana.gabriel" target="_blank" className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-600 hover:bg-black hover:text-brand hover:border-black hover:-translate-y-1 transition-all"><Facebook size={20} /></a>

              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
                {/* Abstract Blobs */}
                <div className="absolute inset-0 bg-brand/30 rounded-full blur-3xl transform scale-110 animate-pulse"></div>
                
                {/* Main Circle & Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                    <img 
                      src={beeProf}
                      alt="Abisoye Gabriel" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Floating Badges */}
                <div className="absolute top-10 -left-4 md:-left-12 bg-white/95 backdrop-blur-sm p-3 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-float z-20 border border-gray-50">
                  <div className="bg-black p-3 rounded-full text-brand">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Growth</p>
                    <p className="text-sm md:text-lg font-bold text-gray-900">+125% Reach</p>
                  </div>
                </div>

                <div className="absolute bottom-12 -right-4 md:-right-8 bg-white/95 backdrop-blur-sm p-3 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-float z-20 border border-gray-50" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-brand p-3 rounded-full text-black">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Support</p>
                    <p className="text-sm md:text-lg font-bold text-gray-900">24/7 Active</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;