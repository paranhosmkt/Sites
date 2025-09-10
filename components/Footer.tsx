import React from 'react';

const FooterLink: React.FC<{href: string, children: React.ReactNode}> = ({href, children}) => (
    <li><a href={href} className="hover:text-white transition-colors duration-300">{children}</a></li>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; ariaLabel: string }> = ({ href, children, ariaLabel }) => (
    <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className="text-lime-500 border border-lime-500 rounded-full p-1.5 hover:bg-lime-500 hover:text-gray-800 transition-all duration-300">
        {children}
    </a>
);

// Icon components for contact details
const LocationIcon = () => <svg className="w-5 h-5 text-lime-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MailIcon = () => <svg className="w-5 h-5 text-lime-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg className="w-5 h-5 text-lime-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 pt-16 pb-8">
        
        {/* Top Logos Section */}
        <div className="flex justify-between items-center pb-8">
          <img src="https://brasilportugalsc.org.br/wp-content/uploads/2024/04/logo-camara-brasil-portugal-sc.svg" alt="Logo Câmara Brasil Portugal SC" className="h-10" />
          <img src="https://brasilportugalsc.org.br/wp-content/uploads/2024/04/selo-federacao.svg" alt="Selo da Federação" className="h-16" />
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 relative">
            <div className="absolute left-0 -top-[2px] w-20 h-1 bg-green-600"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
          
          <div className="lg:col-span-2">
            <p className="text-sm leading-relaxed">
                A Câmara Brasil-Portugal SC é uma associação sindical dedicada a fortalecer os laços entre Brasil e Portugal. Nós promovemos a cooperação, troca de conhecimento e oportunidades de negócios entre os dois países. Junte-se a nós para fazer parte desta rede única e beneficiar do nosso apoio mútuo.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-lime-500 mb-4">Páginas</h3>
            <ul className="space-y-2 text-sm">
                <FooterLink href="#home">Início</FooterLink>
                <FooterLink href="#sobre">Quem Somos</FooterLink>
                <FooterLink href="#eventos">Eventos</FooterLink>
                <FooterLink href="#associados">Associados</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#contato">Contato</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-lime-500 mb-4">Contatos</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3"><LocationIcon /> <span>Av. das Águias, 231 - Sala 402 - Pedra Branca</span></li>
              <li className="flex items-start space-x-3"><MailIcon /> <span>contato@brasilportugalsc.org.br</span></li>
              <li className="flex items-start space-x-3"><PhoneIcon /> <span>(48) 98809-4477</span></li>
            </ul>
            <div className="mt-6">
                <p className="text-sm mb-3">Nos siga nas redes sociais:</p>
                <div className="flex space-x-3">
                    <SocialIcon href="#" ariaLabel="Facebook">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
                    </SocialIcon>
                    <SocialIcon href="#" ariaLabel="Instagram">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                    </SocialIcon>
                    <SocialIcon href="#" ariaLabel="LinkedIn">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.481 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </SocialIcon>
                </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-center text-xs">
          <p className="mb-2 sm:mb-0">&copy; 2025 Câmara Brasil Portugal | SC</p>
          <p>Desenvolvido por VOU Agência</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
