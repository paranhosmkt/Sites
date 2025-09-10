import React from 'react';

const PresidentMessageSection: React.FC = () => {
  return (
    <section id="president-message" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Video/Image Column */}
          <div className="relative group cursor-pointer shadow-lg rounded-md overflow-hidden">
            <img 
              src="https://i.imgur.com/4a09h2C.png" 
              alt="Mensagem do Presidente Jatyr Ranzolin" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-30">
              <button aria-label="Play video" className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                 <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
             <div className="absolute top-0 left-0 w-1/4 h-2 bg-green-600"></div>
          </div>

          {/* Text Column */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Mensagem de nosso presidente!
            </h2>
            <div className="w-16 h-1 bg-green-600 mb-6"></div>
            <p className="text-gray-600 text-lg">
              Assista à chamada do nosso presidente Jatyr Ranzolin e entenda a importância de se associar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessageSection;