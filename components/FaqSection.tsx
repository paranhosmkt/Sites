import React, { useState } from 'react';

const faqData = [
  {
    question: 'O que é a Câmara?',
    answer: (
        <>
            <p className="mb-4">A Câmara Brasil-Portugal de SC é uma associação civil sem fins lucrativos que promove o desenvolvimento empresarial entre Brasil e Portugal, gerando conexões reais entre empresas, instituições e territórios, com foco em:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Conexões estratégicas e networking qualificado;</li>
                <li>Rodadas de negócios nacionais e internacionais;</li>
                <li>Apoio à internacionalização de empresas;</li>
                <li>Visibilidade institucional e representação.</li>
            </ul>
        </>
    )
  },
  {
    question: 'Como se associar?',
    answer: (
      <p>
        Você pode entrar em contato por Whatsapp <a href="https://wa.me/5548988094477" target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:underline font-semibold">(48) 98809-4477</a> ou e-mail <a href="mailto:secretaria@brasilportugal.org.br" className="text-lime-600 hover:underline font-semibold">secretaria@brasilportugal.org.br</a>.
      </p>
    )
  },
  {
    question: 'Quais os benefícios de ser associado?',
    answer: (
        <div className="space-y-4">
            <div>
                <h4 className="font-bold">1. Reuniões individuais</h4>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                    <li>Match personalizado entre associados;</li>
                    <li>Lista de perfis disponível via plataforma;</li>
                    <li>Solicitação de conexão sob demanda;</li>
                    <li>Registro das reuniões via formulário digital.</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold">2. Reconhecimento e incentivo</h4>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                    <li>Destaque institucional aos mais engajados;</li>
                    <li>Prioridade em rodadas futuras;</li>
                    <li>Participação em cases de sucesso.</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold">3. Participação em eventos</h4>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                    <li>I. FINBRASIL - Feira Internacional de Negócios com foco na região EMEA;</li>
                    <li>Business Moove - Missão empresarial em Portugal com rodadas e visitas técnicas;</li>
                    <li>Sol & Sal - Festival Gastronômico que une cultura, educação e turismo;</li>
                    <li>Encontros Mensais de Associados - Reuniões com oportunidades exclusivas.</li>
                </ul>
            </div>
        </div>
    )
  },
];

const FaqItem: React.FC<{
  item: { question: string; answer: React.ReactNode };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-lime-300 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
        <span className="text-2xl font-light text-gray-500">
            {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen pt-4' : 'max-h-0'
        }`}
      >
        <div className="text-gray-600 leading-relaxed">
            {item.answer}
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Perguntas frequentes
          </h2>
        </div>
        <div>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;