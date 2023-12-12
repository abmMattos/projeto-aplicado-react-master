import './CardapioCard.css'

function CardapioCard(props) {
    return (
        <article className="item-categoria">
                            <div>
                                <img src={props.img} alt="" />
                            </div>
                            <div className="titulo-item">
                                <h3>{props.titulo}</h3>
                            </div>
                            <div className="descricao-item">
                                <p>{props.descricao}</p>
                            </div>
                            <div className="valor-item">
                                <p><strong>Por apenas</strong></p>
                                <span>R$ {props.preco}</span>
                            </div>
                        </article>
    )
}
export default CardapioCard;