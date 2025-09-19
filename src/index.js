import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Cabeçalho from "./header/cabeçalho";
import Introdução from "./introdução/introdução";
import CardMaq from "./nav-maq-cards/navMaq";
import NavegaçãoMaquinas from "./cards-maquinas/card-maq";
import Conjunto from "./cards-maquinas/conjuntoCards";
import Titulos from "./titulos/titulos";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Cabeçalho />
    <Introdução />
    <CardMaq />
    <Titulos titulo="Florestal"/>
    <Conjunto/>
  </>
);
