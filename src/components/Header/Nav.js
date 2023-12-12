import { Link } from 'react-router-dom';
import FacaSeuPedido from '../FacaSeuPedido';

function Nav() {
    return (
        <nav id="navegacao-header">
            <ul className="header-menu">
                <li className='item-menu'> <Link to="/">Home</Link></li>
                <li className='item-menu'> <Link to="/sobre-nos">Sobre Nós</Link></li>
                <li className='item-menu'> <Link to="/cardapio">Cardápio</Link></li>
                <li className='item-menu'> <Link to="/contato">Contato</Link></li>
                <li className="faca-pedido"><FacaSeuPedido /></li>
            </ul>
        </nav>
    )
}

export default Nav;