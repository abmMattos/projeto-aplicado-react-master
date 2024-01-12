import { Link } from 'react-router-dom';
import FacaSeuPedido from '../FacaSeuPedido';
import { useState } from 'react';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="navegacao-header">
            <ul className={`header-menu ${menuOpen ? 'open' : ''}`}>
                <li className='item-menu'> <Link to="/">Home</Link></li>
                <li className='item-menu'> <Link to="/sobre-nos">Sobre Nós</Link></li>
                <li className='item-menu'> <Link to="/cardapio">Cardápio</Link></li>
                <li className='item-menu'> <Link to="/contato">Contato</Link></li>
                <li className="faca-pedido"><FacaSeuPedido /></li>
            </ul>
            <div className='mobile-menu' onClick={toggleMenu}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    );
}

export default Nav;
