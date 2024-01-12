import './TiposCard.css';

function TiposCard(props) {

    return (
        <div className="diferencial-home-tipos">
            <img className="diferencial-home-img" src={props.img} alt="" />
            <h2 className="diferencial-home-h2">{props.titulo}</h2>
            <p className="diferencial-home-texto">{props.texto}</p>
        </div>
    )
}
export default TiposCard;