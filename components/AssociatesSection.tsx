import React from 'react';

const AssociateLogo: React.FC<{ imageUrl: string; name: string }> = ({ imageUrl, name }) => (
    <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md h-32 grayscale hover:grayscale-0 transition-all duration-300">
        <img src={imageUrl} alt={name} className="max-h-16 max-w-full" />
    </div>
);


const AssociatesSection: React.FC = () => {
  const associates = [
    { name: 'Company 1', imageUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Logo+1' },
    { name: 'Company 2', imageUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Logo+2' },
    { name: 'Company 3', imageUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Logo+3' },
    { name: 'Company 4', imageUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Logo+4' },
    { name: 'Company 5', imageUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Logo+5' },
    { name: 'Company 6', imageUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Logo+6' },
  ];

  return (
    <section id="associados" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Nossos Associados
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {associates.map((associate, index) => (
            <AssociateLogo key={index} {...associate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociatesSection;
