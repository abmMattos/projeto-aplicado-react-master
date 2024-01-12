import './Modal.css';
import img from  '../../assets/whatsapp-logo.svg'


export default function Modal({ isOpen, setOpen }) {
    if (isOpen) {
        return (
            <div className="bg-popup">
                <div className="principal-popup">
                    <h2 className='titulo-popup'>Faça Seu Pedido</h2>
                    <div>
                        <div id="whatsapp" className="botao-popup">
                            <img className='whatsappImg' src={img} />
                            <a href="https://api.whatsapp.com/message/BKK2A3OLQVU3C1?autoload=1&app_absent=0" target='blank'>Whatsapp</a>
                        </div>
                        <div id="online" className="botao-popup">
                            <a href="https://pedido.anota.ai/loja/comidaria-gastronmica?from=site&utm_source=portal-share-btn&referer=https%3A%2F%2Fwww.google.com%2F" target='blank'>Fazer Pedido Online</a>
                        </div>
                        <div id="ifood" className="botao-popup">
                            <a href="https://www.ifood.com.br/delivery/florianopolis-sc/comidaria-express-itacorubi/d21acc04-4731-419c-b5ca-0f0919729f67" target='blank'>Ifood</a>
                        </div>
                        <div id="numero" className="botao-popup">
                            <a href="tel:+5548999463095">(48) 99946-3095</a>
                        </div>
                        <button id="voltar" className="botao-ver-pedido" onClick={() => setOpen(!isOpen)}>Voltar</button>

                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }

} 