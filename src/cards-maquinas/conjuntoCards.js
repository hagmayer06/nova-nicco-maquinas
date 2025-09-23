import "./conjuntoCards.css"
import NavegaçãoMaquinas from "./cards";

export default function Conjunto() {
  return (
    <div className="posição">
      <NavegaçãoMaquinas 
      nome="calebe" 
      imagem="assets/RETRO.png"
      caracteristica1="lindo"
      caracteristica2="lindo"
      caracteristica3="lindo"
      valor="19,90"   />

       <NavegaçãoMaquinas 
      nome="calebe" 
      imagem="assets/RETRO.png"
      caracteristica1="lindo"
      caracteristica2="lindo"
      caracteristica3="lindo"
      valor="19,90"   />

       <NavegaçãoMaquinas 
      nome="calebe" 
      imagem="assets/RETRO.png"
      caracteristica1="lindo"
      caracteristica2="lindo"
      caracteristica3="lindo"
      valor="19,90"   />
    </div>
  );
}
