import { useState } from 'react';
import './FacaSeuPedido.css';
import Modal from './Modal/Modal';

function FacaSeuPedido() {
    const [open, setOpen] = useState(false); 
    return(
        <div>
        <a className="botao-ver-pedido" onClick={() => setOpen(!open)}>FAÇA SEU PEDIDO</a>
        <Modal isOpen={open} setOpen={setOpen}/>
        </div>
        )
}
export default FacaSeuPedido;