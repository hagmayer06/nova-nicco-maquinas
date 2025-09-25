import "./titulo.css";

export default function Titulos(props) {
    return (
        <div>
            <h1 id={props.id} className="titulo">{props.titulo}</h1>
        </div>
    )
}