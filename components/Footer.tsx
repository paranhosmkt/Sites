import React from 'react';

const FooterLink: React.FC<{href: string, children: React.ReactNode}> = ({href, children}) => (
    <li><a href={href} className="hover:text-white transition-colors">{children}</a></li>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; ariaLabel: string }> = ({ href, children, ariaLabel }) => (
    <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
             <img src="https://brasilportugalsc.org.br/wp-content/uploads/2024/04/logo-camara-brasil-portugal-sc.svg" alt="Logo Câmara Brasil Portugal SC" className="h-12 bg-white p-2 rounded-md" />
            <p className="text-sm">A principal ponte de negócios entre empresas catarinenses e portuguesas.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Institucional</h3>
            <ul className="space-y-2 text-sm">
                <FooterLink href="#sobre">A Câmara</FooterLink>
                <FooterLink href="#vantagens">Associe-se</FooterLink>
                <FooterLink href="#noticias">Notícias</FooterLink>
                <FooterLink href="#eventos">Agenda de Eventos</FooterLink>
                <FooterLink href="#associados">Associados</FooterLink>
                <FooterLink href="#contato">Contato</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><span className="mr-2 mt-1">&#x25CF;</span>Endereço: Florianópolis, SC - Brasil</li>
              <li className="flex items-start"><span className="mr-2 mt-1">&#x25CF;</span>Email: contato@cbpsc.com.br</li>
              <li className="flex items-start"><span className="mr-2 mt-1">&#x25CF;</span>Telefone: +55 (48) 99999-9999</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Redes Sociais</h3>
            <div className="flex space-x-4">
                <SocialIcon href="#" ariaLabel="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </SocialIcon>
                <SocialIcon href="#" ariaLabel="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                </SocialIcon>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Câmara Brasil Portugal de Santa Catarina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
