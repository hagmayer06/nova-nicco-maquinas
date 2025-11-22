import React from 'react';

const navigationItems = [
  {
    id: 'florestal',
    label: 'Florestais',
    image: '/assets/FLORESTAL.png',
  },
  {
    id: 'Esca',
    label: 'Escavadeiras',
    image: '/assets/escavadeira.png',
  },
  {
    id: 'retro',
    label: 'Retroescavadeiras',
    image: '/assets/RETRO.png',
  },
  {
    id: 'pá carregadeira',
    label: 'Pá-Carregadeiras',
    image: '/assets/PÁCARRE.png',
  },
];

const MachineNavigation = () => {
  return (
    <section
      id="nav-maq"
      className="relative bg-gradient-to-br from-nicco-orange via-nicco-orange-dark to-nicco-orange py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-black font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wide">
          Navegação de Máquinas
        </h2>
        <div className="w-32 h-1 bg-black mx-auto rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border-2 border-black/20 hover:border-black/40"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white/90 p-4">
              <img
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                src={item.image}
                alt={item.label}
                loading="lazy"
              />
            </div>
            <h3 className="text-center mt-4 font-bebas text-black text-lg md:text-xl lg:text-2xl tracking-wide">
              {item.label}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MachineNavigation;
