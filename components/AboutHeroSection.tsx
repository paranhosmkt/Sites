import React from 'react';

const AboutHeroSection: React.FC = () => {
  return (
    <section id="quem-somos-hero" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Vista da cidade de Lisboa, Portugal" 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Seja bem-vindo à Câmara Brasil Portugal | SC
            </h1>
            <div className="w-16 h-1 bg-green-600 mb-6"></div>
            <p className="text-gray-600 text-lg mb-4">
              Somos uma organização dedicada à promoção de relações comerciais e culturais entre Brasil e Portugal.
            </p>
            <p className="text-gray-600 text-lg">
              Nossa missão é conectar empresas, fomentar investimentos e fortalecer laços entre as nações. Junte-se a nós e explore oportunidades únicas de negócios e colaboração.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;