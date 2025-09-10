import React, { useState } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <img src="https://brasilportugalsc.org.br/wp-content/uploads/2024/04/logo-camara-brasil-portugal-sc.svg" alt="Logo Câmara Brasil Portugal SC" className="h-10" />
        <span className="text-gray-700 font-semibold text-lg tracking-tight hidden sm:block">Câmara Brasil Portugal | SC</span>
    </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode, isActive?: boolean }> = ({ href, children, isActive }) => (
    <a href={href} className={`text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-sm uppercase tracking-wider ${isActive ? 'text-green-600' : ''}`}>
        {children}
    </a>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: 'Início', isActive: true },
        { href: '#sobre', label: 'Quem Somos' },
        { href: '#eventos', label: 'Eventos' },
        { href: '#associados', label: 'Associados' },
        { href: '#noticias', label: 'Notícias' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" aria-label="Página inicial">
                    <Logo />
                </a>
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink key={link.label} href={link.href} isActive={link.isActive}>{link.label}</NavLink>
                    ))}
                </nav>
                <div className="hidden lg:flex items-center">
                     <a 
                        href="#contato" 
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
                           <a key={link.label} href={link.href} className="block py-2 px-3 font-semibold text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                               {link.label}
                           </a>
                         ))}
                         <a 
                            href="#contato" 
                            className="bg-lime-600 text-white text-center font-bold mt-2 px-5 py-3 rounded-md text-sm hover:bg-lime-700 transition-all duration-300 uppercase tracking-wider"
                            onClick={() => setIsMenuOpen(false)}
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