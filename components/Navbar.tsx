import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight group text-gray-900">
          Abisoye<span className="text-brand group-hover:text-black transition-colors">.Gabriel</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-black font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-gray-900 text-white font-semibold hover:bg-brand hover:text-black hover:shadow-[0_4px_14px_0_rgba(74,246,38,0.39)] hover:-translate-y-0.5 transition-all duration-300">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900 hover:text-brand transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden flex flex-col space-y-4 shadow-xl animate-fade-in-up">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-black hover:bg-brand/10 font-medium block py-3 px-4 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;