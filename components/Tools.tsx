import React from 'react';
import { PenTool, Video, Mail, MessageSquare, Layout, Youtube } from 'lucide-react';

const Tools: React.FC = () => {
    const tools = [
        { name: "Canva", icon: Layout, level: "95%" },
        { name: "CapCut / InShot", icon: Video, level: "90%" },
        { name: "Google Workspace", icon: Mail, level: "98%" },
        { name: "Meta Business", icon: MessageSquare, level: "92%" },
        { name: "YouTube Studio", icon: Youtube, level: "85%" },
        { name: "Notion", icon: PenTool, level: "88%" },
    ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200/50">
      <div className="container mx-auto px-4 md:px-8">
         <div className="text-center mb-16">
            <span className="text-brand font-bold tracking-wider uppercase text-sm drop-shadow-sm">My Stack</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Tools I Use Daily</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 border border-transparent hover:border-brand/50 group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-brand group-hover:text-black transition-colors duration-300">
                             <tool.icon size={22} />
                        </div>
                        <span className="font-bold text-gray-700 text-lg group-hover:text-gray-900">{tool.name}</span>
                    </div>
                    <span className="bg-black text-brand text-xs font-bold px-2.5 py-1 rounded-md border border-gray-800">{tool.level}</span>
                </div>
            ))}
        </div>
        
        <p className="text-center text-gray-400 mt-10 text-sm">
            And many more. I adapt quickly to new software.
        </p>
      </div>
    </section>
  );
};

export default Tools;