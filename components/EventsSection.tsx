import React from 'react';

// A helper icon component for the countdown pill
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


interface EventProps {
  imageUrl: string;
  countdown: string;
  date: string;
  title: string;
  location: string;
}

const eventsData: EventProps[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    countdown: '16 dias para o evento',
    date: '25 de set. de 2025, 09:00 – 17:00',
    title: 'Rodada de negócios',
    location: 'Ágora Tech Park, Joinville – SC, Brasil',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop',
    countdown: '44 dias para o evento',
    date: '23 de out. de 2025, 09:00 – 11:00',
    title: 'Reunião',
    location: 'Online',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
    countdown: '79 dias para o evento',
    date: '27 de nov. de 2025, 09:00 – 17:00',
    title: 'Rodada de negócios',
    location: 'Local a ser definido, Criciúma, SC, Brasil',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop',
    countdown: '88 dias para o evento',
    date: '06 de dez. de 2025, 09:00 – 17:00',
    title: 'Almoço de encerramento do ano',
    location: 'Local a ser definido',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    countdown: '191 dias para o evento',
    date: '19 de mar. de 2026, 09:00 – 17:00',
    title: 'Rodada de negócios',
    location: 'Local a ser definido, Lages, SC, Brasil',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
    countdown: '219 dias para o evento',
    date: '16 de abr. de 2026, 09:00 – 11:00',
    title: 'Reunião online com rodada de negócios',
    location: 'Online',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    countdown: '',
    date: 'Junho de 2026',
    title: 'Reunião online com rodada de negócios',
    location: 'Online',
  },
];

const EventListItem: React.FC<EventProps> = ({ imageUrl, countdown, date, title, location }) => (
    <div className="py-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-5">
                <img src={imageUrl} alt={title} className="w-28 h-20 object-cover rounded-md flex-shrink-0 hidden sm:block" />
                <div>
                    {countdown && (
                        <div className="inline-flex items-center text-xs text-gray-600 bg-gray-100 border border-gray-300 rounded-full px-2.5 py-1 mb-2">
                           <ClockIcon />
                           {countdown}
                        </div>
                    )}
                    <p className="text-sm text-gray-500">{date}</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">
                        {title}
                        <span className="text-gray-500 font-normal text-xl ml-2">/ {location}</span>
                    </h3>
                </div>
            </div>
            <a 
                href="#"
                className="bg-lime-600 text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-lime-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap self-start md:self-center"
            >
                Saber mais
            </a>
        </div>
    </div>
);


const EventsSection: React.FC = () => {
  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Agenda
          </h2>
          <div className="w-16 h-1 bg-green-600 mt-2"></div>
        </div>
        <div>
          {eventsData.map((event, index) => (
            <EventListItem key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;