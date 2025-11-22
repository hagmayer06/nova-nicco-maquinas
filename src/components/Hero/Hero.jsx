import React from 'react';
import VideoIntro from './VideoIntro';

const Hero = () => {
  return (
    <section
      id="top"
      className="flex flex-col md:flex-row items-center text-center md:text-left px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-48 py-6 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-40 bg-nicco-gray text-white gap-6 sm:gap-10 md:gap-12 lg:gap-16 min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-screen justify-between"
    >
      {/* Content */}
      <div className="order-1 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[60%] lg:max-w-[55%] xl:max-w-[50%] 2xl:max-w-[60%] md:mr-8 lg:mr-16 xl:mr-20 2xl:mr-24">
        <div className="flex flex-col gap-4">
          <h1 className="font-bebas text-nicco-orange text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight mb-4 animate-[slideInFromLeft_2s_ease-out_forwards]">
            Bem-vindo à Nicco Máquinas
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-gray-300 font-medium max-w-full mx-auto md:mx-0">
            Seu projeto no ritmo certo!
            <br />
            Máquinas selecionadas, entrega ágil e suporte especializado.
            <br />
            <span className="text-nicco-orange font-bold shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
              Pensou Máquina
            </span>
            , pensou Nicco!
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="order-2 flex justify-center items-center w-full md:max-w-[35%] lg:max-w-[40%] xl:max-w-[45%] 2xl:max-w-[35%] min-w-[280px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[380px] 2xl:min-w-[500px]">
        <VideoIntro />
      </div>
    </section>
  );
};

export default Hero;
