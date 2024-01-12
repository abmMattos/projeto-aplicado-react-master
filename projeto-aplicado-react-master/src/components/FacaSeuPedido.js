import { useState } from 'react';
import './FacaSeuPedido.css';
import Modal from './Modal/Modal';

function FacaSeuPedido() {
    const [open, setOpen] = useState(false);
    if (open === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    return(
        <div>
        <a className="botao-ver-pedido" onClick={() => setOpen(!open)}>FAÇA SEU PEDIDO</a>
        <Modal isOpen={open} setOpen={setOpen}/>
        </div>
        )
}
export default FacaSeuPedido;