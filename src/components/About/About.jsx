import React from 'react';

const About = () => {
  return (
    <section
      id="sobre"
      className="bg-gradient-to-br from-nicco-gray to-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/assets/gilson.jpeg"
            alt="Gilson Nicco"
            className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[240px] xl:w-[280px] h-auto rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.5)] border-4 border-nicco-orange"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-bebas text-nicco-orange text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8">
            Gilson Nicco
          </h2>
          <div className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed space-y-4">
            <p>
              De Vendedor a Visionário. Tudo começou com uma paixão genuína por
              pessoas e negócios. Como vendedor de carros, aprendi que cada venda é
              mais que uma transação{' '}
              <span className="text-nicco-orange font-bold">
                é sobre realizar sonhos e construir confiança.
              </span>
            </p>
            <p>
              Mas foi ao descobrir o mundo das máquinas pesadas que encontrei meu
              verdadeiro propósito. Vi algo extraordinário: empresários visionários
              construindo o futuro do nosso país, tijolo por tijolo, obra por obra.
            </p>
            <p>
              Na Nicco Máquinas, cada negociação é uma oportunidade de inovação.{' '}
              <span className="text-nicco-orange font-bold">
                Não vendemos apenas equipamentos, oferecemos as ferramentas que
                transformam ideias em realidade.
              </span>
            </p>
            <p>
              Nossos valores éticos e dedicação incansável nos guiaram a sucessos
              extraordinários em cada etapa. Cada cliente satisfeito é prova de que
              sonhar grande e{' '}
              <span className="text-nicco-orange font-bold">
                agir com integridade constrói um legado duradouro.
              </span>
            </p>
            <p>
              Hoje, vejo cada máquina não como um produto, mas como um catalisador
              de progresso — uma ponte entre a visão de um empreendedor e o
              desenvolvimento do Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

