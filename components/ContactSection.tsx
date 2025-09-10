import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    <section id="contato" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-white text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Como podemos te ajudar hoje?
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Conecte-se com líderes do <strong>mercado</strong> e <strong>amplie</strong> sua rede de contatos conecte-se com líderes do mercado e amplie sua rede de contatos.
            </p>
            <a 
              href="#sobre" 
              className="inline-block bg-lime-600 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-700 transition-all duration-300 transform hover:scale-105 uppercase text-sm tracking-wider"
            >
              Saiba mais!
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
             {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Obrigado!</h3>
                    <p className="text-gray-600">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                </div>
            ) : (
                <form 
                    onSubmit={handleSubmit} 
                    className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl space-y-5 relative"
                >
                    <div className="absolute top-0 left-8 w-16 h-1.5 bg-green-500 rounded-b-full"></div>
                    
                    <div>
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nome Completo:</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full mt-2 px-4 py-3 bg-gray-100 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail:</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full mt-2 px-4 py-3 bg-gray-100 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Telefone | Celular:</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full mt-2 px-4 py-3 bg-gray-100 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
                    </div>
                     <div>
                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Assunto:</label>
                        <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full mt-2 px-4 py-3 bg-gray-100 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700">Mensagem:</label>
                        <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full mt-2 px-4 py-3 bg-gray-100 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                    </div>
                    <p className="text-xs text-gray-500">
                        Ao clicar em ENVIAR os dados inseridos por você serão utilizados para possibilitar o nosso contato e lhe oferecer serviços que possam ser do seu interesse ou da empresa a qual você representa.
                    </p>
                    <div className="text-left">
                        <button type="submit" className="w-full bg-lime-600 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-700 transition-colors duration-300 uppercase text-sm tracking-wider">
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