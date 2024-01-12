import Direitos from './Direitos';
import LogoFooter from './LogoFooter';
import NavContato from './NavContato';
import NavInformacao from './NavInformacao';
import TituloFooterContato from './TituloFooterContato';
import TituloFooterInformacao from './TituloFooterInformacao';
import './footer.css';


function Footer() {
    return (
        <footer>
            <section id="conteudo-footer">
                <LogoFooter />
                <div id="contato-footer" className="conteudo">
                    <TituloFooterContato />
                    <NavContato />
                </div>
                <div id="informacoes-footer" className="conteudo">
                    <TituloFooterInformacao />
                    <NavInformacao />
                </div>
            </section>
            <Direitos />
        </footer>
    )
}

export default Footer;