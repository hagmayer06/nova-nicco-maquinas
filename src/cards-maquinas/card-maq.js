import "./card-maq.css";
export default function NavegaçãoMaquinas(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.nome} className="card-imagem" />

      <div className="card-conteudo">
        <h2 className="nome-maq">{props.nome}</h2>

        <ul className="car-maq">
          <li>{props.caracteristica1}</li>

          <li>{props.caracteristica2}</li>

          <li>{props.caracteristica3}</li>
        </ul>

        <h2>{props.valor}</h2>
      </div>
    </div>
  );
}
