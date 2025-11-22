import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaHeart,
  FaChevronRight
} from 'react-icons/fa';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5541988883793';
    const message = 'Olá! Gostaria de mais informações sobre as máquinas.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-black text-gray-300 border-t border-nicco-orange/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="text-center sm:text-left">
            <div className="mb-4">
              <img
                src="/assets/nova_logo-removebg-preview.png"
                alt="Nicco Máquinas"
                className="w-24 h-auto mx-auto sm:mx-0"
              />
            </div>
            <h3 className="font-bebas text-nicco-orange text-2xl md:text-3xl mb-3">
              NICCO MÁQUINAS
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-400">
              Soluções em máquinas pesadas para construção e agricultura desde 2020.
            </p>
          </div>

          {/* Serviços */}
          <div className="text-center sm:text-left">
            <h4 className="font-bebas text-nicco-orange text-xl md:text-2xl mb-4 tracking-wide">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center gap-2 hover:text-nicco-orange transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <FaChevronRight className="text-nicco-orange w-3 h-3" />
                <span>Escavadeiras</span>
              </li>
              <li className="flex items-center gap-2 hover:text-nicco-orange transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <FaChevronRight className="text-nicco-orange w-3 h-3" />
                <span>Retroescavadeiras</span>
              </li>
              <li className="flex items-center gap-2 hover:text-nicco-orange transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <FaChevronRight className="text-nicco-orange w-3 h-3" />
                <span>Máquinas Florestais</span>
              </li>
              <li className="flex items-center gap-2 hover:text-nicco-orange transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <FaChevronRight className="text-nicco-orange w-3 h-3" />
                <span>Pá-Carregadeiras</span>
              </li>
              <li className="flex items-center gap-2 hover:text-nicco-orange transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <FaChevronRight className="text-nicco-orange w-3 h-3" />
                <span>Consultoria Técnica</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center sm:text-left">
            <h4 className="font-bebas text-nicco-orange text-xl md:text-2xl mb-4 tracking-wide">
              Contato
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaMapMarkerAlt className="text-nicco-orange w-4 h-4 flex-shrink-0" />
                <span>Curitiba - PR</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhone className="text-nicco-orange w-4 h-4 flex-shrink-0" />
                <span>(41) 98888-3793</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 break-all">
                <FaEnvelope className="text-nicco-orange w-4 h-4 flex-shrink-0" />
                <span>niccomaquinas@gmail.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaClock className="text-nicco-orange w-4 h-4 flex-shrink-0" />
                <span>Seg-Sex: 8h às 20h</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center sm:text-left">
            <h4 className="font-bebas text-nicco-orange text-xl md:text-2xl mb-4 tracking-wide">
              Conecte-se
            </h4>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 bg-nicco-orange hover:bg-nicco-orange-dark text-black font-bebas text-base md:text-lg px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-nicco-orange/50 hover:scale-105 active:scale-95">
                <FaFacebook className="w-5 h-5" />
                <span>Facebook</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-nicco-orange hover:bg-nicco-orange-dark text-black font-bebas text-base md:text-lg px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-nicco-orange/50 hover:scale-105 active:scale-95">
                <FaInstagram className="w-5 h-5" />
                <span>Instagram</span>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bebas text-base md:text-lg px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/50 hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-nicco-gray-light/30"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
          <p className="text-center md:text-left text-gray-400">
            &copy; {new Date().getFullYear()} Nicco Máquinas. Todos os direitos reservados.
          </p>
          <p className="flex items-center justify-center md:justify-end gap-1 text-center md:text-right">
            Desenvolvido com{' '}
            <FaHeart className="text-red-500 w-4 h-4" />
            {' '}por{' '}
            <span className="text-nicco-orange font-bold hover:text-nicco-orange-dark transition-colors cursor-pointer">
              HagTec
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
