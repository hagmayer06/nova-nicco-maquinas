import React, { useState } from "react";
import NavegaçãoMaquinas from "../cards-maquinas/cards";
import Titulos from "../titulos/titulos";
import "./conjuntoCards.css";

const todasAsMaquinas = [
  {
    nome: "Picador Florestal Bruno",
    imagem: "assets/picador.jpeg",
    caracteristica1: "Thunder ano 2024, com 1000 horas",
    valor: "R$ 2.590.000,00",
  },
  {
    nome: "Skider CAT 545C ano 2013",
    imagem: "assets/skidercat545c.jpeg",
    caracteristica1: "Com 17.300 horas, trocado sistema de injeção e bomba, todas as revisões feitas éla concessionária, maquina a toda a prova!",
    valor: "R$ 850.000,00",
  },
  {
    nome: "Escavadeira Hyundai R180 LC-9 Ano 2024",
    imagem: "assets/hyundair180.jpeg",
    caracteristica1: "Com apenas 293 horas, equipada com cabeçote feller marca Metacort MFD 1000. Local MG ",
    valor: "R$ 950.000,00",
  },
  {
    nome: "Máquina D",
    imagem: "assets/RETRO.png",
    caracteristica1: "potente",
    valor: "50.000",
  },
  {
    nome: "Máquina E",
    imagem: "assets/RETRO.png",
    caracteristica1: "moderno",
    valor: "75.000",
  },
  {
    nome: "Máquina F",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
    valor: "25.000",
  },
  {
    nome: "Máquina G",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
    valor: "25.000",
  },
  {
    nome: "Máquina H",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
    valor: "25.000",
  },
  {
    nome: "Máquina I",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
  
    valor: "25.000",
  },
];

export default function ConjuntoF() {
  const [maquinasVisiveis, setMaquinasVisiveis] = useState(3);

  const handleButtonClick = () => {
    // Se o número de máquinas visíveis for igual ao total de máquinas,
    // significa que estamos no final e devemos "mostrar menos".
    if (maquinasVisiveis === todasAsMaquinas.length) {
      setMaquinasVisiveis(3); // Volta para o valor inicial de 3.
    } else {
      // Caso contrário, significa que ainda há mais a mostrar.
      setMaquinasVisiveis((prevCount) => prevCount + 3);
    }
  };

  return (
    <div className="posição">
      <Titulos id="florestal" titulo="florestal" />
      <div className="cards-container">
        {todasAsMaquinas.slice(0, maquinasVisiveis).map((maquina, index) => (
          <NavegaçãoMaquinas
            key={index}
            nome={maquina.nome}
            imagem={maquina.imagem}
            caracteristica1={maquina.caracteristica1}
            valor={maquina.valor}
          />
        ))}
      </div>

      <button onClick={handleButtonClick} className="mostrarMaisOuMenos">
        {maquinasVisiveis < todasAsMaquinas.length
          ? "Saiba Mais"
          : "Mostrar Menos"}
      </button>
    </div>
  );
}
