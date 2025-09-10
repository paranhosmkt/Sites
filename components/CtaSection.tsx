import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta-connect" className="bg-white">
      <div className="container mx-auto pl-6">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content Column */}
          <div className="lg:w-1/2 text-left py-12 lg:py-24 lg:pr-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Conecte-se com Portugal
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Sua empresa pode estar a um passo de se tornar internacional, conheça os benefícios de ser associado.
            </p>
            <div className="w-16 h-1 bg-green-600 mb-8"></div>
            <a 
              href="#contato" 
              className="inline-block bg-lime-600 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-700 transition-all duration-300 transform hover:scale-105 uppercase text-sm tracking-wider"
            >
              Junte-se a nós!
            </a>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2 w-full relative h-96 lg:h-[32rem] self-stretch">
             <div className="absolute top-0 right-0 w-3/4 h-2 bg-green-600 z-10"></div>
             <img 
              src="https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Vista da cidade de Lisboa, Portugal" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;