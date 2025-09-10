import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 p-6 flex flex-col items-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-md">
          A principal ponte de negócios entre empresas brasileiras e portuguesas.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 font-light drop-shadow-sm">
          Nos dedicamos à promoção de relações comerciais e culturais para nossos associados.
        </p>
        <a 
          href="#sobre" 
          className="bg-lime-600 text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-lime-700 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase text-sm tracking-wider"
        >
          Saiba mais!
        </a>
      </div>

      <div className="absolute bottom-8 right-8 z-10">
        <img 
          src="https://brasilportugalsc.org.br/wp-content/uploads/2024/04/selo-federacao.svg" 
          alt="Selo da Federação das Câmaras Portuguesas de Comércio no Brasil"
          className="h-20 md:h-24"
        />
      </div>
    </section>
  );
};

export default HeroSection;