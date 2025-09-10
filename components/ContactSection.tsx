import React, { useState } from 'react';

const ContactInfoItem: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({icon, title, children}) => (
    <div className="flex items-start space-x-4">
        <div className="text-blue-800 mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-gray-800">{title}</h4>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Contato
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-8">
                <ContactInfoItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} title="Endereço">
                    Florianópolis, SC - Brasil
                </ContactInfoItem>
                <ContactInfoItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} title="E-mail">
                    contato@cbpsc.com.br
                </ContactInfoItem>
                <ContactInfoItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>} title="Telefone">
                    +55 (48) 99999-9999
                </ContactInfoItem>
            </div>
            <div className="lg:w-1/2">
                {isSubmitted ? (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                        <p className="font-bold">Obrigado!</p>
                        <p>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder="Nome" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">E-mail</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder="E-mail" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Telefone</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="Telefone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensagem</label>
                            <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Mensagem" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <div className="text-left">
                            <button type="submit" className="bg-blue-800 text-white font-bold px-8 py-3 rounded-md hover:bg-blue-900 transition-colors duration-300 uppercase text-sm tracking-wider">
                                Enviar
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
