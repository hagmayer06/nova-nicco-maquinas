import React from 'react';
import VideoIntro from './VideoIntro';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-nicco-gray via-nicco-gray to-black gap-8 lg:gap-12 xl:gap-16"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nicco-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-nicco-orange/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
        <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-nicco-orange leading-tight tracking-wide animate-[slideInFromLeft_1s_ease-out]">
          Bem-vindo à
          <br />
          <span className="text-white">Nicco</span> Máquinas
        </h1>
        
        <div className="space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat text-white font-medium">
            Seu projeto no <span className="text-nicco-orange font-bold">ritmo certo!</span>
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Máquinas selecionadas, entrega ágil e suporte especializado.
          </p>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-bebas text-nicco-orange pt-4">
            Pensou Máquina, pensou Nicco!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <a
            href="#nav-maq"
            className="bg-nicco-orange hover:bg-nicco-orange-dark text-black font-bebas text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-nicco-orange/50 hover:scale-105 active:scale-95"
          >
            Ver Máquinas
          </a>
          <a
            href="#sobre"
            className="border-2 border-nicco-orange text-nicco-orange hover:bg-nicco-orange hover:text-black font-bebas text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Sobre Nós
          </a>
        </div>
      </div>

      {/* Video */}
      <div className="relative z-10 w-full lg:w-1/2 max-w-2xl">
        <VideoIntro />
      </div>
    </section>
  );
};

export default Hero;
