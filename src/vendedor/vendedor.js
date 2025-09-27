import "./vendedor.css";
export default function Vendedor() {
  return (
    <div className="pai">
      <div className="foto">
        <img src="/assets/gilson.jpeg" width="185px" id="vendedor"/>
      </div>
      <div className="historia">
        <h1>Gilson Nicco</h1>
        <p className="texto">
          De Vendedor a Visionário Tudo começou com uma paixão genuína por
          pessoas e negócios. Como vendedor de carros, aprendi que cada venda é
          mais que uma transação <b className="impacto">é sobre realizar sonhos e construir
          confiança</b>. <br/>Mas foi ao descobrir o mundo das máquinas pesadas que
          encontrei meu verdadeiro propósito. Vi algo extraordinário:
          empresários visionários construindo o futuro do nosso país, tijolo por
          tijolo, obra por obra. NaNicco Máquinas, cada negociação é uma
          oportunidade de inovação.<br/>
           <b className="impacto">Não vendemos apenas equipamentos
          oferecemos as ferramentas que transformam ideias em realidade.</b><br/>Nossos
          valores éticos e dedicação incansável nos guiaram a sucessos
          extraordinários em cada etapa. <br/>Cada cliente satisfeito é prova de
          que sonhar grande e <b className="impacto">agir com integridade constrói um legado duradouro.</b><br/>
          Hoje, vejo cada máquina não como um produto, mas como um catalisador de
          progresso uma ponte entre a visão de um empreendedor e o
          desenvolvimento do Brasil.
        </p>
      </div>
    </div>
  );
}
