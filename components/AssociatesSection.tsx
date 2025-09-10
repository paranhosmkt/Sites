import React from 'react';

const AssociateLogo: React.FC<{ imageUrl: string; name: string }> = ({ imageUrl, name }) => (
    <div className="flex justify-center items-center p-4 transition-transform duration-300 transform hover:scale-110">
        <img src={imageUrl} alt={name} className="max-h-16 max-w-full" />
    </div>
);

const associates = [
    { name: 'Visainvest', imageUrl: 'https://i.imgur.com/8QpZQmH.png' },
    { name: 'Risetravel', imageUrl: 'https://i.imgur.com/fA4yP4S.png' },
    { name: 'Iopoint', imageUrl: 'https://i.imgur.com/eB3sYqL.png' },
    { name: 'Indikatore', imageUrl: 'https://i.imgur.com/eWv6lJj.png' },
    { name: 'Eu.conecto', imageUrl: 'https://i.imgur.com/D8i9L4D.png' },
    { name: 'YourAI', imageUrl: 'https://i.imgur.com/5V3z5kY.png' },
    { name: 'Simplifique Portugal', imageUrl: 'https://i.imgur.com/rN9kC6x.png' },
    { name: 'AG Assessoria', imageUrl: 'https://i.imgur.com/Qv9j5b3.png' },
    { name: 'M Logo', imageUrl: 'https://i.imgur.com/v1hQk0T.png' },
    { name: 'Ranzolin', imageUrl: 'https://i.imgur.com/sY2mD5t.png' },
    { name: 'Raffinato', imageUrl: 'https://i.imgur.com/9O0Z3sR.png' },
    { name: 'Virtual Office', imageUrl: 'https://i.imgur.com/gKj4f7N.png' },
    { name: 'RegularizaMais', imageUrl: 'https://i.imgur.com/1n9sZ5c.png' },
    { name: 'Simplifique Portugal 2', imageUrl: 'https://i.imgur.com/rN9kC6x.png' },
    { name: 'VX Virtual', imageUrl: 'https://i.imgur.com/mP0t9sB.png' },
];

const AssociatesSection: React.FC = () => {
  return (
    <section id="associados" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conheça nossos associados
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center">
          {associates.map((associate, index) => (
            <AssociateLogo key={index} {...associate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociatesSection;