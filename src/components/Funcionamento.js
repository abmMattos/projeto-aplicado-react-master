import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';
import './Funcionamento.css'
function Funcionamento() {
    return (
        <section>
                    <div className="funcionamento-bg funcionamento-align">
                        <div className=" funcionamento-titulo">
                            <img className='linhas-titulo-funcionamento' src={linhaTituloEsquerda} alt="" />
                            <h2 className="funcionamento-titulo">Funcionamento</h2>
                            <img className='linhas-titulo-funcionamento' src={linhaTituloDireita} alt="" />
                        </div>

                        <div className="funcionamento-info">
                            <div className='bg-info'>                              
                                <div><h3>Horário de Funcionamento</h3></div>
                                <div><span>segunda a sábado:</span></div>
                                <div><p>10:30 - 14:30</p></div>
                            </div>
                        </div>

                    </div>

                </section>
    )
}
export default Funcionamento;