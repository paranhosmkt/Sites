import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="w-16 h-1 bg-green-600 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Nossa missão é conectar empresas, fomentar investimentos e fortalecer laços entre as nações.
            </h2>
          </div>
          <div className="text-left">
            <p className="text-gray-600 mb-6 text-lg">
              Junte-se a nós e explore oportunidades únicas de negócios e colaboração.
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-lime-600 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-700 transition-all duration-300 transform hover:scale-105 uppercase text-sm tracking-wider"
            >
              Saiba mais!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;