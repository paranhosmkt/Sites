import React from 'react';

const ShieldIcon = () => (
    <svg className="h-12 w-12 text-lime-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 7.5C4.5 5.29086 6.29086 3.5 8.5 3.5H15.5C17.7091 3.5 19.5 5.29086 19.5 7.5V13.5C19.5 15.2941 18.2393 16.8115 16.5 17.2816L12 18.5L7.5 17.2816C5.76071 16.8115 4.5 15.2941 4.5 13.5V7.5Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const UserIcon = () => (
    <svg className="h-12 w-12 text-lime-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17.5 18C17.5 15.2386 15.0114 13 12 13C8.98858 13 6.5 15.2386 6.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const HandshakeIcon = () => (
    <svg className="h-12 w-12 text-lime-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 10.5a2 2 0 01-2 2h-1a2 2 0 00-2 2v1a2 2 0 002 2h1a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 10.5a2 2 0 002 2h1a2 2 0 012 2v1a2 2 0 01-2 2h-1a2 2 0 00-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 18H3.1c-1.2 0-2.1-.9-2.1-2.1V14c0-1.1.9-2 2-2h1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 18h1.9c1.2 0 2.1-.9 2.1-2.1V14c0-1.1-.9-2-2-2h-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const infoItems = [
    {
      icon: <ShieldIcon />,
      title: 'Eventos e reuniões',
      description: 'Promovemos eventos e reuniões gratuitas para gerar aprendizado e negócios.',
    },
    {
      icon: <UserIcon />,
      title: '+200 Associados',
      description: 'Que estão desenvolvendo seus negócios e se conectando com empresas portuguesas.',
    },
    {
      icon: <HandshakeIcon />,
      title: 'Parcerias Sólidas',
      description: 'São mais de 29 câmaras na América Latina e temos parceria com grandes instituições Portuguesas.',
    },
];

const InfoItem: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
    <div className="flex items-center space-x-4 max-w-xs text-left">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
);

const InfoBarSection: React.FC = () => (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16">
          <InfoItem {...infoItems[0]} />
          <div className="w-full h-px md:w-1 md:h-24 bg-green-600 rounded-full"></div>
          <InfoItem {...infoItems[1]} />
          <div className="w-full h-px md:w-1 md:h-24 bg-green-600 rounded-full"></div>
          <InfoItem {...infoItems[2]} />
        </div>
      </div>
    </section>
);

export default InfoBarSection;