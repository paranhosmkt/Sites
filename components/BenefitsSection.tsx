import React from 'react';

// --- Icon Components ---
const NetworkingIcon = () => (
    <svg className="w-10 h-10 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 00-9-9m9-9a9 9 0 00-9 9"></path></svg>
);
const SupportIcon = () => (
    <svg className="w-10 h-10 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const MarketHighlightIcon = () => (
    <svg className="w-10 h-10 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
);
const StrategicInfoIcon = () => (
    <svg className="w-10 h-10 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
);
const AdvocacyIcon = () => (
    <svg className="w-10 h-10 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const ChamberIcon = () => (
    <svg className="w-10 h-10 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h4v5h-4z"></path></svg>
);


interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Updated card style to match the user's image
const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl text-left h-full shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="w-10 h-1 bg-green-500 mb-6"></div>
    {icon}
    <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <NetworkingIcon />,
      title: 'Networking e Relacionamento',
      description: 'Conecte-se com líderes do mercado e amplie sua rede de contatos.',
    },
    {
      icon: <SupportIcon />,
      title: 'Assessoria e Suporte Comercial',
      description: 'Receba orientação em importação, exportação e regulamentações.',
    },
    {
      icon: <MarketHighlightIcon />,
      title: 'Destaque-se no mercado!',
      description: 'Conecte-se com líderes do mercado e amplie sua rede de contatos.',
    },
    {
      icon: <StrategicInfoIcon />,
      title: 'Informações Estratégicas',
      description: 'Mantenha-se informado sobre tendências e oportunidades de investimento.',
    },
    {
      icon: <AdvocacyIcon />,
      title: 'Defesa de Interesses',
      description: 'Deixe-nos representar seus interesses perante governos e organismos reguladores.',
    },
    {
      icon: <ChamberIcon />,
      title: 'Câmara Brasil Portugal | SC',
      description: 'Fortaleça suas relações comerciais entre Brasil e Portugal.',
    },
  ];

  // Updated section style to match the user's image
  return (
    <section id="vantagens" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefícios de ser associado
          </h2>
           <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
