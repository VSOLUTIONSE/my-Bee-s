import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
    // Using placeholder images from picsum with different seeds
    const works = [
        {
            title: "Logistics Brand Awareness",
            category: "Instagram Campaign",
            image: "https://picsum.photos/id/1/600/600",
            tag: "Sukom Logistics",
            link: "https://drive.google.com/file/d/1r819OqC1_regqtziJiqfpl2oRrzMNsju/view?usp=drivesdk" // Replace with actual Google Drive link
        },
        {
            title: "Travel Promo Campaign",
            category: "Flyer Design",
            image: "https://picsum.photos/id/20/600/800",
            tag: "Sukom Travel",
            link: "https://drive.google.com/file/d/1oFzUU_1-hXLr6W2j1-hHawWPIzAk6uAg/view?usp=drive_link" // Replace with actual Google Drive link
        },
        {
            title: "Intagram managemnet",
            category: "Channel Management",
            image: "https://picsum.photos/id/3/600/400",
            tag: "Mindrave",
            link: "#" // Replace with actual Google Drive link
        },
        {
            title: "Product Showcase Reels",
            category: "Video Editing",
            image: "https://picsum.photos/id/4/600/600",
            tag: "Retail Client",
            link: "https://drive.google.com/file/d/16MbOrQ7V9I99hDo4kWth5AifA7tB_5eA/view?usp=drive_link" // Replace with actual Google Drive link
        }
    ];

    const handleWorkClick = (link: string) => {
        if (link !== "#") {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

  return (
    <section id="portfolio" className="py-24 bg-gray-900 text-white rounded-t-[3rem] md:rounded-t-[4rem] mt-10 relative z-10 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <span className="text-brand font-bold tracking-wider uppercase text-sm">My Work</span>
            <h2 className="text-4xl font-extrabold mt-2 text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {works.map((work, idx) => (
                <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-[2rem] bg-gray-800 aspect-[4/3] cursor-pointer shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(74,246,38,0.3)] transition-all duration-500"
                    onClick={() => handleWorkClick(work.link)}
                >
                    <img 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-brand/50 transition-colors duration-300">
                            <div>
                                <span className="bg-brand text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-[0_0_10px_rgba(74,246,38,0.4)]">
                                    {work.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-1 group-hover:text-brand transition-colors">{work.title}</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-200">{work.tag}</p>
                            </div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:bg-brand hover:scale-110">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;