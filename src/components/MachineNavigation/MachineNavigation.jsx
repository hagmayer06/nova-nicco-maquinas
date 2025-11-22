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
      className="bg-gradient-radial from-nicco-orange to-nicco-orange-dark p-2 sm:p-3 md:p-5 lg:p-7 xl:p-8 2xl:p-9"
    >
      {/* Title */}
      <div className="text-center">
        <h2 className="text-black font-bebas text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-5 2xl:p-9 m-0 transition-all duration-300 border-b-2 border-black rounded-md">
          Navegação de Máquinas
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 justify-items-center items-center p-2 sm:p-3 md:p-5 lg:p-7 xl:p-10 2xl:p-[70px] gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-[60px] w-full box-border max-w-full max-h-[350px] md:max-h-none overflow-hidden md:overflow-visible">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex justify-center items-center w-full no-underline group"
            aria-label={`Ir para ${item.label}`}
          >
            <img
              className="w-[60px] sm:w-[70px] md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[300px] h-auto rounded-2xl md:rounded-3xl 2xl:rounded-[40px] border-2 md:border-[3px] 2xl:border-[5px] border-black shadow-[black_4px_4px_12px] transition-all duration-500 p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-7 hover:scale-110 hover:shadow-[black_6px_6px_16px]"
              src={item.image}
              alt={item.label}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default MachineNavigation;
