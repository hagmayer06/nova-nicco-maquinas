import React from 'react';

const Header = () => {
  const handleContactClick = () => {
    const phoneNumber = '5541988883793';
    const message = 'Olá! Gostaria de mais informações sobre as máquinas.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-nicco-gray shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex justify-between items-center px-3 sm:px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-20 py-2.5 sm:py-3 md:py-4 gap-2 flex-wrap">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/assets/nova_logo-removebg-preview.png"
          alt="Nicco Máquinas Logo"
          className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] 2xl:w-[130px] h-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-shrink-0">
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-12 xl:gap-16 2xl:gap-24 list-none m-0 p-0">
          <li>
            <a
              href="#top"
              className="no-underline text-nicco-orange font-bebas text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold whitespace-nowrap shadow-[black_2px_4px_4px] transition-all duration-300 hover:text-[12px] hover:sm:text-[15px] hover:md:text-[17px] hover:lg:text-[20px] hover:xl:text-[22px] hover:shadow-[black_4px_6px_6px] hover:border-b-2 hover:border-nicco-orange hover:-translate-y-0.5"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#nav-maq"
              className="no-underline text-nicco-orange font-bebas text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold whitespace-nowrap shadow-[black_2px_4px_4px] transition-all duration-300 hover:text-[12px] hover:sm:text-[15px] hover:md:text-[17px] hover:lg:text-[20px] hover:xl:text-[22px] hover:shadow-[black_4px_6px_6px] hover:border-b-2 hover:border-nicco-orange hover:-translate-y-0.5"
            >
              MÁQUINAS
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="no-underline text-nicco-orange font-bebas text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold whitespace-nowrap shadow-[black_2px_4px_4px] transition-all duration-300 hover:text-[12px] hover:sm:text-[15px] hover:md:text-[17px] hover:lg:text-[20px] hover:xl:text-[22px] hover:shadow-[black_4px_6px_6px] hover:border-b-2 hover:border-nicco-orange hover:-translate-y-0.5"
            >
              SOBRE NÓS
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <div
        onClick={handleContactClick}
        className="flex items-center gap-1.5 sm:gap-2 border-2 border-nicco-orange px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 rounded text-nicco-orange text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base shadow-[black_2px_2px_10px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:bg-nicco-orange hover:text-nicco-gray hover:-translate-y-0.5 hover:shadow-[black_3px_3px_15px]"
      >
        <img
          className="w-5 h-auto"
          src="/assets/wats2.png"
          alt="WhatsApp"
        />
        <span className="font-bebas hidden sm:inline">Fale conosco</span>
      </div>
    </header>
  );
};

export default Header;
