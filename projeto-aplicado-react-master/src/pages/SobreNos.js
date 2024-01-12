import TiposCard from '../components/TiposCard';
import img from '../assets/qualidade.svg';
import Header from '../components/Header/Header';
import Galeria from '../components/Galeria';
import './sobre-nos.css';
import SobreNosHome from '../components/SobreNosHome';
import img1 from '../assets/img1-sobrenos.svg';
import img2 from '../assets/img2-sobrenos.svg';
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';

function SobreNos() {
    return (
        <div>
            <Header titulo="" tituloAmarelo="SOBRE NÓS" />
            <main>
                <section className="diferencial-home">
                    <TiposCard img={img} titulo="Qualidade no Produto" texto="As marmitas da Comidaria Express garantem qualidade superior, com cada refeição preparada com ingredientes frescos para uma experiência culinária excepcional em sabor e nutrição." />
                </section>
                <SobreNosHome titulo="Sobre" tituloAmarelo="Nós" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quidem neque" img1={img1} img2={img2}/>
                <section id="nossa-missao">
                    <div id="titulo-nossa-missao">
                        <div >
                        <img src={linhaTituloEsquerda} alt="" />
                        </div>
                        <div>
                            <h2>Nossa <span>Missão</span></h2>
                        </div>
                        <div >
                        <img src={linhaTituloDireita} alt="" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </section>
                <Galeria />
            </main>
        </div>

    )
}

export default SobreNos;