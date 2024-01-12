import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';

function Funcionamento() {
    return (
        <section>
                    <div className="funcionamento-bg funcionamento-align">
                        <div className=" funcionamento-titulo">
                            <img className='linhas-titulo-funcionamento' src={linhaTituloEsquerda} alt="" />
                            <h2 className="funcionamento-titulo">Funcionamento</h2>
                            <img className='linhas-titulo-funcionamento' src={linhaTituloDireita} alt="" />
                        </div>

                        <div className="funcionamento">
                            <p className="funcionamento-home-texto">Segunda-Feira: <span
                                className="titulo-amarelo">........................................</span> 10h às 14h30m - 18h às 21h45m</p>
                            <p className="funcionamento-home-texto">Terça-Feira: <span
                                className="titulo-amarelo">...................................</span> 10h às 14h30m - 18h às 21h45m
                            </p>
                            <p className="funcionamento-home-texto">Quarta-Feira: <span
                                className="titulo-amarelo">.....................................</span> 10h às 14h30m - 18h às 21h45m</p>
                            <p className="funcionamento-home-texto">Quinta-Feira: <span
                                className="titulo-amarelo">.....................................</span> 10h às 14h30m - 18h às 21h45m</p>
                            <p className="funcionamento-home-texto">Sexta-Feira: <span
                                className="titulo-amarelo">...................................</span> 10h às 14h30m - 18h às 21h30m
                            </p>
                            <p className="funcionamento-home-texto">Sabádo: <span
                                className="titulo-amarelo">........................................................</span> 10h às 14h30m</p>
                            <p className="funcionamento-home-texto ultimo-p">Domingo: <span
                                className="titulo-amarelo">......................................................................</span> Fechado </p>
                        </div>

                    </div>

                </section>
    )
}
export default Funcionamento;