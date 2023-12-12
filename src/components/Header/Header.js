import LogoHeader from './LogoHeader';
import Nav from './Nav';
import TituloHeader from './TituloHeader';
import './header.css';

function Header(props) {
    return (
        <header className="header-bg">
            <div className="header">
                <LogoHeader />
                <div><Nav /></div>
            </div>
            <TituloHeader titulo={props.titulo} tituloAmarelo={props.tituloAmarelo} />
        </header>
    )
}

export default Header;
