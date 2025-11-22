import React from 'react';

const About = () => {
  return (
    <section
      id="sobre"
      className="relative bg-gradient-to-br from-black via-nicco-gray to-nicco-gray py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nicco-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nicco-orange/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-nicco-orange to-nicco-orange-dark rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="/assets/gilson.jpeg"
                alt="Gilson Nicco"
                className="relative w-64 md:w-80 lg:w-full h-auto rounded-2xl shadow-2xl border-4 border-nicco-gray"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-bebas text-nicco-orange text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 tracking-wide">
              Gilson Nicco
            </h2>
            <div className="w-24 h-1 bg-nicco-orange mb-6 md:mb-8 mx-auto lg:mx-0 rounded-full"></div>
            
            <div className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed space-y-4 md:space-y-5">
              <p>
                <span className="text-nicco-orange font-bold">De Vendedor a Visionário.</span> Tudo começou com uma paixão genuína por
                pessoas e negócios. Como vendedor de carros, aprendi que cada venda é
                mais que uma transação — {' '}
                <span className="text-white font-semibold">
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
                extraordinários. Cada cliente satisfeito é prova de que sonhar grande e{' '}
                <span className="text-white font-semibold">
                  agir com integridade constrói um legado duradouro.
                </span>
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl text-nicco-orange font-bold italic">
                "Vejo cada máquina como um catalisador de progresso — uma ponte entre
                a visão de um empreendedor e o desenvolvimento do Brasil."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
