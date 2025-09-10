import React from 'react';

// Icons are defined as stateless functional components for reusability and clarity.
const CalendarIcon: React.FC = () => (
    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

const ClockIcon: React.FC = () => (
    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const LocationIcon: React.FC = () => (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);


const EventBannerSection: React.FC = () => {
  return (
    <section 
      id="fin-brasil" 
      className="relative py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop')" }}
      aria-labelledby="event-banner-heading"
    >
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-gray-900 opacity-80"
        aria-hidden="true"
      ></div>
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 text-center lg:text-left">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/5EwPycM.png"
              alt="FIN Brasil 2026 Logo"
              className="w-48 h-auto"
            />
          </div>

          {/* Description & CTA */}
          <div className="max-w-md">
            <h2 id="event-banner-heading" className="sr-only">FIN Brasil 2026 Evento</h2>
            <p className="text-lg leading-relaxed mb-6">
              Um evento multissetorial para empresas e profissionais que pretendem <strong className="font-semibold">ampliar os conhecimentos</strong> e a rede de negócios com outros países.
            </p>
            <a 
              href="#"
              className="inline-block bg-lime-600 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-700 transition-all duration-300 transform hover:scale-105 uppercase text-sm tracking-wider"
            >
              Inscreva-se
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px my-4 lg:my-0 lg:w-px lg:h-32 bg-white/30" aria-hidden="true"></div>

          {/* Event Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <CalendarIcon />
              <p><span className="sr-only">Data:</span> <span className="font-bold text-lg">12/05/2026</span></p>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <ClockIcon />
              <p><span className="sr-only">Horário:</span> <span className="font-bold text-lg">09h</span></p>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <LocationIcon />
              <p><span className="sr-only">Local:</span> <span className="font-bold text-lg">À ser definido</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventBannerSection;