import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
      {/* Decorative background element */}
      <div className="absolute left-0 top-20 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/2 -z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
             <div className="relative z-10 rounded-[2rem] bg-gradient-to-tr from-brand to-brand-light p-1.5 overflow-hidden max-w-md mx-auto aspect-square rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(74,246,38,0.3)]">
                <img
                    src="https://picsum.photos/id/65/800/800"
                    alt="Abisoye Gabriel Campaign Designer"
                    className="w-full h-full object-cover rounded-[1.8rem] border-4 border-white bg-white"
                />
             </div>
             {/* Decorative tags */}
             <div className="absolute top-8 -left-4 bg-gray-900 text-white px-5 py-3 rounded-lg text-sm font-bold shadow-xl transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 hidden md:block border border-gray-700">
                🎯 Campaign Designer
             </div>
             <div className="absolute bottom-12 -right-6 bg-brand text-black px-6 py-3 rounded-lg text-sm font-bold shadow-xl transform rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 hidden md:block border border-white">
                Remote Ready 🌍
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block py-1 px-3 rounded-full bg-brand text-black font-bold tracking-wider uppercase text-xs mb-4 shadow-[0_0_10px_rgba(74,246,38,0.4)]">About Me</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Who is <span className="relative">
              Abisoye Gabriel
              <span className="absolute bottom-2 left-0 w-full h-3 bg-brand/40 -z-10 -rotate-1"></span>
            </span>?</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a creative <span className="font-bold text-black bg-brand px-1 rounded-sm">Campaign Designer</span> specializing in crafting compelling marketing campaigns that drive engagement and results. With expertise in strategy development, creative ideation, and brand storytelling, I transform business objectives into impactful campaigns that resonate with target audiences and deliver measurable outcomes.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              I've collaborated with diverse brands across travel, logistics, and retail sectors, designing integrated campaigns that blend creative vision with strategic thinking. I'm passionate about data-driven design, compelling narratives, and creating campaigns that not only capture attention but drive meaningful business results.
            </p>

            <a href="#contact" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-brand hover:text-black hover:shadow-[0_10px_20px_-10px_rgba(74,246,38,0.6)] hover:-translate-y-1 transition-all duration-300">
                Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;