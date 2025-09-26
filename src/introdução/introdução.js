import './introdução.css'
import VideoIntro from "./VideoIntro";

export default function Introdução() {
  return (
    <div className="pai">
      <div>
        <div>
          <h1 className="bv">Bem vindo</h1>
          <h1 className='nm'>Nicco Máquinas</h1>
        </div>
        <div>
          <p className='p'>
            Seu projeto no ritmo certo!
            <br />
            Máquinas selecionadas, entrega agil <br />
            e suporte especializado.
            <br />
            Pensou Máquina, pensou Nicco!
          </p>
        </div>
      </div>
      <div class="img">
        <VideoIntro/>
      </div>
    </div>
  );
}
