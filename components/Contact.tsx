import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-white pt-24 pb-8 border-t border-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Contact Card */}
        <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-center md:text-left relative overflow-hidden mb-20 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(74,246,38,0.2)] transition-shadow duration-500">
            {/* Decor Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-light/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="mb-10 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's build something <span className="text-brand drop-shadow-[0_0_15px_rgba(74,246,38,0.5)]">great.</span></h2>
                    <p className="text-gray-300 text-lg max-w-lg font-medium">Ready to elevate your digital presence? I'm just a message away.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <a href="mailto:hello@abisoyegabriel.com" className="bg-brand text-gray-900 hover:bg-white hover:text-black transition-colors px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(74,246,38,0.39)] hover:-translate-y-1 duration-300">
                        <Mail size={20} /> hello@abisoyegabriel.com
                    </a>
                    <a href="#" className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 border border-white/10 hover:border-white/20 hover:text-brand hover:-translate-y-1 duration-300">
                        <Phone size={20} /> WhatsApp Me
                    </a>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <div className="mb-6 md:mb-0">
                <span className="text-2xl font-bold tracking-tight text-gray-900">Abisoye<span className="text-brand">.Gabriel</span></span>
            </div>
            
            <div className="flex gap-8 mb-6 md:mb-0">
                <a href="#" className="text-gray-500 hover:text-black font-medium transition-colors hover:underline decoration-brand decoration-2 underline-offset-4">Instagram</a>
                <a href="#" className="text-gray-500 hover:text-black font-medium transition-colors hover:underline decoration-brand decoration-2 underline-offset-4">Facebook</a>
                <a href="#" className="text-gray-500 hover:text-black font-medium transition-colors hover:underline decoration-brand decoration-2 underline-offset-4">LinkedIn</a>
            </div>

            <div className="flex items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Abisoye Gabriel.
                </p>
                <button 
                    onClick={scrollToTop}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-black hover:scale-110 transition-all shadow-sm"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;