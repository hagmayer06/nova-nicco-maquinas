import "./cabeçalho.css";
export default function Cabeçalho() {
  return (
    <div className="todo-cabeçalho">
      <div className="logo">
        <img src="/assets/nova_logo-removebg-preview.png" width="100px" />
      </div>
      <div>
        <ul className="nav-bar">
          <li className="nav-item">
            <a class="a" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a class="a" href="#nav-maq">
              MÁQUINAS
            </a>
          </li>
          <li className="nav-item">
            <a class="a" href="#">
              SOBRE NÓS
            </a>
          </li>
        </ul>
      </div>
      <div className="contatos-sociais">
        <img className="wats32" src="assets/wats2.png" width="10px" />
        <a>
          <p className="pc">Fale conosco</p>
        </a>
      </div>
    </div>
  );
}
