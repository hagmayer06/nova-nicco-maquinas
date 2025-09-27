import "./introdução.css";
import VideoIntro from "./VideoIntro";

export default function Introdução() {
  return (
    <div className="pai">
      <div>
        <div>
          <h1 className="titulo-completo">Bem vindo à Nicco Máquinas</h1>
        </div>
        <div>
          <p className="p">
            Seu projeto no ritmo certo!
            <br />
            Máquinas selecionadas, entrega ágil e suporte especializado.
            <br />
            <span className="destaque-amarelo">Pensou Máquina</span>, pensou
            Nicco!
          </p>
        </div>
      </div>
      <div className="img">
        <VideoIntro />
      </div>
    </div>
  );
}
