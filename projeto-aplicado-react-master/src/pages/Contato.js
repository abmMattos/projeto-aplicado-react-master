import Header from "../components/Header/Header";
import './main-contato.css';
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';
import localizacao from '../assets/localizacao.svg'
import carta from '../assets/carta.svg'
import telefone from '../assets/telefone.svg'
import detalhe from '../assets/detalhe-formulario.svg'
import Formulario from "../components/Formulario";


function Contato() {
    return (
        <div>
            <Header titulo="" tituloAmarelo="CONTATO" />
            <main id="main-contato">
                <section className="titulo-pagina">
                    <div className="linhas-titulo">
                        <img src={linhaTituloEsquerda} alt="" />
                    </div>
                    <div>
                        <h1>Formulário</h1>
                    </div>
                    <div className="linhas-titulo">
                        <img src={linhaTituloDireita} alt="" />
                    </div>
                </section>
                <section id="formulario">
                    <article id="formulario-contato">
                        <div id="informacoes-formulario">
                            <div>
                                <h3>Comidaria Express</h3>
                            </div>
                            <div className="conteiner-info">
                                <div>
                                    <img src={localizacao} alt="" />
                                </div>
                                <div>
                                    <p>Rod. Amaro Antônio Vieira, 2308 - Itacorubi, Florianópolis - SC, 88034-101</p>
                                </div>
                            </div>
                            <div className="conteiner-info">
                                <div>
                                    <img src={carta} alt="" />
                                </div>
                                <div>
                                    <p>contato@gmail.com</p>
                                </div>
                            </div>
                            <div className="conteiner-info">
                                <div>
                                    <img src={telefone} alt="" />
                                </div>
                                <div>
                                    <p>(48) 99946-3095</p>
                                </div>
                            </div>
                            <div id="detalhe-formulario">
                                <img src={detalhe} alt="" />
                            </div>
                        </div>
                        <Formulario />
                    </article>
                </section>
            </main>
        </div>
    )
}
export default Contato;