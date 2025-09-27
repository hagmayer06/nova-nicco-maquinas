import React, { useState } from "react";
import NavegaçãoMaquinas from "../cards-maquinas/cards";
import Titulos from "../titulos/titulos";
import "./conjuntoCards.css";

const todasAsMaquinas = [
  {
    nome: "Máquina A",
    imagem: "assets/RETRO.png",
    caracteristica1: "lindo",
    caracteristica2: "lindo",
    caracteristica3: "lindo",
    valor: "19,90",
  },
  {
    nome: "Máquina B",
    imagem: "assets/RETRO.png",
    caracteristica1: "incrível",
    caracteristica2: "incrível",
    caracteristica3: "incrível",
    valor: "190.000",
  },
  {
    nome: "Máquina C",
    imagem: "assets/RETRO.png",
    caracteristica1: "bonito",
    caracteristica2: "bonito",
    caracteristica3: "bonito",
    valor: "19,90",
  },
  {
    nome: "Máquina D",
    imagem: "assets/RETRO.png",
    caracteristica1: "potente",
    caracteristica2: "potente",
    caracteristica3: "potente",
    valor: "50.000",
  },
  {
    nome: "Máquina E",
    imagem: "assets/RETRO.png",
    caracteristica1: "moderno",
    caracteristica2: "moderno",
    caracteristica3: "moderno",
    valor: "75.000",
  },
  {
    nome: "Máquina F",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
    caracteristica2: "compacto",
    caracteristica3: "compacto",
    valor: "25.000",
  },
  {
    nome: "Máquina G",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
    caracteristica2: "compacto",
    caracteristica3: "compacto",
    valor: "25.000",
  },
  {
    nome: "Máquina H",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
    caracteristica2: "compacto",
    caracteristica3: "compacto",
    valor: "25.000",
  },
  {
    nome: "Máquina I",
    imagem: "assets/RETRO.png",
    caracteristica1: "compacto",
    caracteristica2: "compacto",
    caracteristica3: "compacto",
    valor: "25.000",
  },
];

export default function ConjuntoE() {
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
    <div className="fundo">
      <div className="posiçãoE">
        <Titulos id="Esca" titulo="Escavadeira" />
        <div className="cards-container">
          {todasAsMaquinas.slice(0, maquinasVisiveis).map((maquina, index) => (
            <NavegaçãoMaquinas
              key={index}
              nome={maquina.nome}
              imagem={maquina.imagem}
              caracteristica1={maquina.caracteristica1}
              caracteristica2={maquina.caracteristica2}
              caracteristica3={maquina.caracteristica3}
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
    </div>
  );
}
