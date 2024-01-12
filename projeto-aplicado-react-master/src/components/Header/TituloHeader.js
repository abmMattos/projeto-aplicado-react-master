function TituloHeader(props) {
    return (
        <div>
            <h1 className="header-titulo"> {props.titulo}<br /> <span className="h1-cor">{props.tituloAmarelo}</span></h1>
        </div>
    )
}

export default TituloHeader;