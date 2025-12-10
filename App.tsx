import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import About from './components/About';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Tools />
        <Experience />
        <Portfolio />
        <WhyMe />
      </main>
      <Contact />
    </div>
  );
}

export default App;