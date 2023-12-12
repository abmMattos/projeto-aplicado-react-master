import Diferencial from '../components/Diferencial';
import SobreNosHome from '../components/SobreNosHome';
import img1 from '../assets/img1-sobrenos.svg';
import img2 from '../assets/img2-sobrenos.svg';
import FacaSeuPedido from '../components/FacaSeuPedido';
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';
import Especialidades from '../components/Especialidades';
import Galeria from '../components/Galeria';
import Header from '../components/Header/Header';
import './home.css'

function Home() {
    return (
        <div>
            <Header titulo="Bem-Vindo à" tituloAmarelo="COMIDARIA" />
            <main>
                <Diferencial />
                <SobreNosHome pagina="home" titulo="Um pouco" tituloAmarelo="Sobre Nós" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quidem neque" botao="VER MAIS" img1={img1} img2={img2} />
                <section>
                    <div className="faca-pedido-home">

                        <h2 className="faca-pedido-home-texto-h2"> Faça sua refeição com uma marmita <span
                            className=" titulo-amarelo">Personalizada</span><br /> por você</h2>
                        <p className="faca-pedido-home-texto">Marmitas personalizadas no conforto do seu <span
                            className=" titulo-amarelo">LAR</span> a partir de R$15,90!</p>
                        <FacaSeuPedido />

                    </div>
                </section>

                <Especialidades />

                <Galeria />

                <section>
                    <div className="funcionamento-bg funcionamento-align">
                        <div className="linhas-titulo-funcionamento funcionamento-titulo">
                            <img src={linhaTituloEsquerda} alt="" />
                            <h2 className="funcionamento-titulo">Funcionamento</h2>
                            <img src={linhaTituloDireita} alt="" />
                        </div>

                        <div className="funcionamento">
                            <p className="funcionamento-home-texto">Segunda-Feira: <span
                                className="titulo-amarelo">........................................</span> 10:30 às 00:00</p>
                            <p className="funcionamento-home-texto">Terça-Feira: <span
                                className="titulo-amarelo">.............................................</span> 10:30 às 00:00
                            </p>
                            <p className="funcionamento-home-texto">Quarta-Feira: <span
                                className="titulo-amarelo">...........................................</span> 10:30 às 00:00</p>
                            <p className="funcionamento-home-texto">Quinta-Feira: <span
                                className="titulo-amarelo">...........................................</span> 10:30 às 00:00</p>
                            <p className="funcionamento-home-texto">Sexta-Feira: <span
                                className="titulo-amarelo">.............................................</span> 10:30 às 00:00
                            </p>
                            <p className="funcionamento-home-texto">Sabádo: <span
                                className="titulo-amarelo">.........................</span> 11:00 às 15:00 / 18:00 às 23:00</p>
                            <p className="funcionamento-home-texto ultimo-p">Domingo: <span
                                className="titulo-amarelo">..................................................</span> 11:00 às
                                15:00</p>
                        </div>

                    </div>

                </section>
            </main>
        </div>
    )
}

export default Home;



