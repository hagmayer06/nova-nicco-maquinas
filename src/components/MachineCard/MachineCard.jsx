import React from 'react';
import PropTypes from 'prop-types';

const MachineCard = ({ name, image, description, price }) => {
  return (
    <article className="group w-full max-w-sm mx-auto bg-gradient-to-br from-[#2c2f33] to-[#1a1d20] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-nicco-orange/20 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-black/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
        {/* Title */}
        <h3 className="text-nicco-orange font-bebas text-xl md:text-2xl lg:text-3xl leading-tight tracking-wide">
          {name}
        </h3>

        {/* Description */}
        <div className="bg-black/30 rounded-lg p-3 md:p-4 border border-nicco-gray-light/30">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t border-nicco-gray-light/30">
          <span className="text-gray-400 text-xs md:text-sm font-montserrat">Valor:</span>
          <span className="text-nicco-orange font-bebas text-2xl md:text-3xl lg:text-4xl">
            {price}
          </span>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => {
            const phoneNumber = '5541988883793';
            const message = `Olá! Gostaria de mais informações sobre: ${name}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
          className="w-full bg-nicco-orange hover:bg-nicco-orange-dark text-black font-bebas text-base md:text-lg py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-nicco-orange/50 active:scale-95"
        >
          Consultar Disponibilidade
        </button>
      </div>
    </article>
  );
};

MachineCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default MachineCard;
