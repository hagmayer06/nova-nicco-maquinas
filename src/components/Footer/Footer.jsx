import React from 'react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5541988883793';
    const message = 'Olá! Gostaria de mais informações sobre as máquinas.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Logo e Descrição */}
          <div>
            <h3 className="font-bebas text-nicco-orange text-2xl sm:text-3xl md:text-4xl mb-4">
              NICCO MÁQUINAS
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Soluções em máquinas pesadas para construção e agricultura
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bebas text-nicco-orange text-xl sm:text-2xl md:text-3xl mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg">
              <li className="hover:text-nicco-orange transition-colors cursor-pointer">
                Escavadeiras
              </li>
              <li className="hover:text-nicco-orange transition-colors cursor-pointer">
                Retroescavadeiras
              </li>
              <li className="hover:text-nicco-orange transition-colors cursor-pointer">
                Máquinas Florestais
              </li>
              <li className="hover:text-nicco-orange transition-colors cursor-pointer">
                Pá-Carregadeiras
              </li>
              <li className="hover:text-nicco-orange transition-colors cursor-pointer">
                Manutenção e Reparo
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bebas text-nicco-orange text-xl sm:text-2xl md:text-3xl mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg">
              <li>📍 Curitiba - PR</li>
              <li>📞 (41) 98888-3793</li>
              <li>✉️ niccomaquinas@gmail.com</li>
              <li>🕒 Seg-Sex: 8h às 20h</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-bebas text-nicco-orange text-xl sm:text-2xl md:text-3xl mb-4">
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-3">
              <button className="bg-nicco-orange text-black font-bebas text-base sm:text-lg md:text-xl px-6 py-2 rounded-lg transition-all duration-300 hover:bg-nicco-orange-dark hover:shadow-[0_4px_12px_rgba(255,170,0,0.4)] hover:-translate-y-0.5">
                Facebook
              </button>
              <button className="bg-nicco-orange text-black font-bebas text-base sm:text-lg md:text-xl px-6 py-2 rounded-lg transition-all duration-300 hover:bg-nicco-orange-dark hover:shadow-[0_4px_12px_rgba(255,170,0,0.4)] hover:-translate-y-0.5">
                Instagram
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-nicco-orange text-black font-bebas text-base sm:text-lg md:text-xl px-6 py-2 rounded-lg transition-all duration-300 hover:bg-nicco-orange-dark hover:shadow-[0_4px_12px_rgba(255,170,0,0.4)] hover:-translate-y-0.5"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base md:text-lg">
          <p className="text-center sm:text-left">
            &copy; 2024 Nicco Máquinas. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            Desenvolvido com ❤️ por{' '}
            <span className="text-nicco-orange font-bold">HagTec</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

