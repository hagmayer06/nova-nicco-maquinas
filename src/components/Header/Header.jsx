import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const handleContactClick = () => {
    const phoneNumber = '5541988883793';
    const message = 'Olá! Gostaria de mais informações sobre as máquinas.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-nicco-gray/95 backdrop-blur-sm shadow-lg flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 md:py-4 gap-4">
      {/* Logo - Absolute com width igual ao botão */}
      <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] flex-shrink-0 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <img
            src="/assets/nova_logo-removebg-preview.png"
            alt="Nicco Máquinas Logo"
            className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto transition-transform hover:scale-105"
          />
        </div>
      </div>

      {/* Navigation - Centralizada */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 list-none m-0 p-0">
          <li>
            <a
              href="#top"
              className="relative block text-nicco-orange font-montserrat text-[10px] md:text-xs lg:text-sm xl:text-base font-semibold whitespace-nowrap transition-all duration-200 hover:text-nicco-orange-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nicco-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#nav-maq"
              className="relative block text-nicco-orange font-montserrat text-[10px] md:text-xs lg:text-sm xl:text-base font-semibold whitespace-nowrap transition-all duration-200 hover:text-nicco-orange-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nicco-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              MÁQUINAS
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="relative block text-nicco-orange font-montserrat text-[10px] md:text-xs lg:text-sm xl:text-base font-semibold whitespace-nowrap transition-all duration-200 hover:text-nicco-orange-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nicco-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              SOBRE NÓS
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Button - Cor da Marca com width fixa */}
      <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] flex-shrink-0 flex justify-end">
        <button
          onClick={handleContactClick}
          className="flex items-center gap-2 bg-nicco-orange hover:bg-nicco-orange-dark text-black font-montserrat text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-5 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-nicco-orange/50 active:scale-95"
        >
          <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">Fale conosco</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
