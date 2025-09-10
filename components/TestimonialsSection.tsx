import React, { useState } from 'react';

const testimonials = [
  {
    text: "Nossos associados vão te contar como a Câmara ajuda a fomentar os negócios e gera oportunidades aqui e em Portugal.",
    callToAction: "Assista ao vídeo.",
    videoThumbnail: "https://i.imgur.com/gO08a5k.png",
  },
  // Add more testimonials here in the future
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-800 text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Depoimentos dos associados
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <p className="text-gray-300 text-lg mb-2">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-gray-300 text-lg">
              {testimonials[currentIndex].callToAction}
            </p>
          </div>

          {/* Video/Image Content */}
          <div className="relative">
            <img 
              src={testimonials[currentIndex].videoThumbnail} 
              alt="Depoimento de associado" 
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
          
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button 
          onClick={prevSlide} 
          aria-label="Depoimento anterior"
          className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
      >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
      </button>
      <button 
          onClick={nextSlide} 
          aria-label="Próximo depoimento"
          className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
      >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
      </button>

    </section>
  );
};

export default TestimonialsSection;