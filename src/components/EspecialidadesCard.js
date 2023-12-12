function EspecialidadesCard(props) {
    return (
        <div className="especialidades-cardapio-bg">
            <img src={props.img} alt="" />
            <h2 className="especialidades-subtitulo">{props.titulo}</h2>
            <p className="especialidades-texto">{props.texto}</p>
        </div>
    )
}
export default EspecialidadesCard;