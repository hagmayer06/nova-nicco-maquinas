import "./navMaq.css";
export default function CardMaq() {
  return (
    <div id="nav-maq">
      <div>
        <h1 className="h1">Navegação de máquinas</h1>
      </div>
      <div className="navmaq">
        <div>
          <a href="#florestal">
            <img
              className="img-nav"
              src="/assets/FLORESTAL.png"
              alt=""
              width="150px"
            />
          </a>
        </div>
        <div>
          <a href="#Esca">
            <img
              className="img-nav"
              src="/assets/escavadeira.png"
              alt=""
              width="150px"
            />
          </a>
        </div>
        <div>
          <a href="#retro">
            <img
              className="img-nav"
              src="/assets/RETRO.png"
              alt=""
              width="150px"
            />
          </a>
        </div>
        <div>
          <a href="#pá carregadeira">
            <img
              className="img-nav"
              src="/assets/PÁCARRE.png"
              alt=""
              width="150px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
