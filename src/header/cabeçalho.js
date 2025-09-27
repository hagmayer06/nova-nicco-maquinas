import "./cabeçalho.css";

export default function Cabeçalho() {
  return (
    <div className="todo-cabeçalho">
      <div className="logo">
        <img
          src="/assets/nova_logo-removebg-preview.png"
          width="100px"
          alt="Nicco Máquinas Logo"
        />
      </div>
      <div>
        <ul className="nav-bar">
          <li className="nav-item">
            <a className="a" href="#top">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="a" href="#nav-maq">
              MÁQUINAS
            </a>
          </li>
          <li className="nav-item">
            <a className="a" href="#sobre">
              SOBRE NÓS
            </a>
          </li>
        </ul>
      </div>
      <div className="contatos-sociais">
        <img
          className="wats32"
          src="assets/wats2.png"
          width="10px"
          alt="WhatsApp"
        />
        <button
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <p className="pc">Fale conosco</p>
        </button>
      </div>
    </div>
  );
}
