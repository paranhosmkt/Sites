import React, { useState } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <img src="https://brasilportugalsc.org.br/wp-content/uploads/2024/04/logo-camara-brasil-portugal-sc.svg" alt="Logo Câmara Brasil Portugal SC" className="h-10" />
        <span className="text-gray-700 font-semibold text-lg tracking-tight hidden sm:block">Câmara Brasil Portugal | SC</span>
    </div>
);

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { type: 'page', id: 'home', label: 'Início' },
        { type: 'page', id: 'quem-somos', label: 'Quem Somos' },
        { type: 'anchor', id: 'eventos', label: 'Eventos' },
        { type: 'anchor', id: 'associados', label: 'Associados' },
        { type: 'anchor', id: 'noticias', label: 'Notícias' },
        { type: 'anchor', id: 'contato', label: 'Contato' },
    ];

    const handleNavClick = (type: string, id: string) => {
        setIsMenuOpen(false);
        if (type === 'page') {
            onNavigate(id);
        } else { // anchor link
            if (currentPage !== 'home') {
                onNavigate('home');
                setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} aria-label="Página inicial">
                    <Logo />
                </a>
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link.type, link.id);
                            }}
                            className={`pb-1 text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-sm uppercase tracking-wider ${
                                currentPage === link.id ? 'text-green-600 border-b-2 border-green-600' : ''
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden lg:flex items-center">
                     <a 
                        href="#contato"
                        onClick={(e) => { e.preventDefault(); handleNavClick('anchor', 'contato'); }}
                        className="bg-lime-600 text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-lime-700 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
                    >
                        Associe-se
                    </a>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-gray-800 focus:outline-none"
                    aria-label="Abrir menu"
                    aria-expanded={isMenuOpen}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full border-t border-gray-200">
                    <nav className="flex flex-col space-y-2 p-4">
                         {navLinks.map((link) => (
                           <a 
                             key={link.id} 
                             href={`#${link.id}`} 
                             className="block py-2 px-3 font-semibold text-gray-700 hover:bg-gray-100 rounded-md" 
                             onClick={(e) => { e.preventDefault(); handleNavClick(link.type, link.id); }}>
                               {link.label}
                           </a>
                         ))}
                         <a 
                            href="#contato"
                            onClick={(e) => { e.preventDefault(); handleNavClick('anchor', 'contato'); }}
                            className="bg-lime-600 text-white text-center font-bold mt-2 px-5 py-3 rounded-md text-sm hover:bg-lime-700 transition-all duration-300 uppercase tracking-wider"
                        >
                            Associe-se
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;