import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Cabeçalho from "./header/cabeçalho";
import Introdução from "./introdução/introdução";
import CardMaq from "./nav-maq-cards/navMaq";
import NavegaçãoMaquinas from "./cards-maquinas/cards";
import Conjunto from "./conjuntoCardsFlo/conjuntoCards";
import ConjuntoE from "./conjuntoCardsEsca/conjuntoCards";
import ConjuntoR from "./conjuntoCardsRetro/conjuntoR";
import ConjuntoP from "./conjuntoCardsPáC/conjuntoP";
import Footer from "./rodapé/rodapé";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Cabeçalho />
    <Introdução />
    <CardMaq />
    <Conjunto/>
    <ConjuntoE/>
    <ConjuntoR />
    <ConjuntoP />
    

    

  </>
);
