import { Link } from "react-router-dom";

function NavInformacao() {
    return (
        <nav className="navegacao">
            <ul className="lista-conteudo">
                <li className="item-lista"><Link to="/cardapio" className="link-item">Marmitas</Link></li>
                <li className="item-lista"><a href="https://www.google.com/maps/place/COMIDARIA+EXPRESS/@-27.5847944,-48.5004988,16.79z/data=!4m8!3m7!1s0x95273922a32006c3:0xc0eee36bec8aa037!8m2!3d-27.584854!4d-48.4979103!9m1!1b1!16s%2Fg%2F11k459t_k1?entry=ttu" target="blank" className="link-item">Nos Avalie</a></li>
                <li className="item-lista"><Link to="/contato" className="link-item">Contato / Trabalhe Conosco</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavInformacao;