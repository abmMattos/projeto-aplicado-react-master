import Header from "../components/Header/Header";
import './main-contato.css';
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';
import localizacao from '../assets/localizacao.svg'
import carta from '../assets/carta.svg'
import telefone from '../assets/telefone.svg'
import detalhe from '../assets/detalhe-formulario.svg'


function Contato() {
    return (
        <div>
            <Header titulo="Contato" tituloAmarelo="COMIDARIA" />
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
                        <form action="#" method="post">
                            <div className="campos-geral">
                                <div className="campos">
                                    <div>
                                        <label for="">Nome</label>
                                    </div>
                                    <div><input type="text" placeholder="Seu nome" /></div>
                                </div>
                                <div className="campos" id="campo-telefone">
                                    <div>
                                        <label for="">Telefone</label>
                                    </div>
                                    <div><input type="text" placeholder="(21) 99999-9999" /></div>
                                </div>
                                <div id="campo-email">
                                    <div>
                                        <label for="">E-mail</label>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="contato@email.com" />
                                    </div>
                                </div>
                                <div className="campos">
                                    <div>
                                        <label for="">Escolha seu assunto</label>
                                    </div>
                                    <div>
                                        <select name="assunto" id="assunto" required>
                                            <option value="trabalho">Trabalhe conosco</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="outro">Outros</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="campos">
                                    <div>
                                        <label for="">Mensagem</label>
                                    </div>
                                    <div><textarea name="mensagem" id="mensagem" cols="95" rows="5"
                                        placeholder="Mensagem"></textarea></div>
                                </div>
                            </div>
                            <div className="botao-formulario">
                                <button type="submit">ENVIAR MENSAGEM</button>
                            </div>
                        </form>
                    </article>
                </section>
            </main>
        </div>
    )
}
export default Contato;