import React from 'react';

interface EventItemProps {
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
}

const EventItem: React.FC<EventItemProps> = ({ day, month, title, time, location }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-6">
    <div className="flex-shrink-0 text-center">
      <p className="text-4xl font-bold text-blue-800">{day}</p>
      <p className="text-md font-semibold text-gray-600 uppercase">{month}</p>
    </div>
    <div className="border-l-2 border-gray-200 pl-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{time}</p>
      <p className="text-gray-500 text-sm">{location}</p>
    </div>
  </div>
);

const EventsSection: React.FC = () => {
  const events = [
    {
      day: '30',
      month: 'AGO',
      title: 'Rodada de Negócios Brasil-Portugal',
      time: '09:00 - 18:00',
      location: 'ACATE - Florianópolis, SC',
    },
    {
      day: '15',
      month: 'SET',
      title: 'Webinar: Investindo em Portugal',
      time: '19:00 - 20:30',
      location: 'Online',
    },
    {
      day: '10',
      month: 'OUT',
      title: 'Jantar de Gala Anual',
      time: '20:00',
      location: 'A Definir',
    },
  ];

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Agenda de Eventos
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <EventItem key={index} {...event} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a 
              href="#"
              className="bg-gray-800 text-white font-bold px-8 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300 uppercase text-sm tracking-wider"
            >
              Ver todos os eventos
            </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
