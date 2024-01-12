import Diferencial from '../components/Diferencial';
import SobreNosHome from '../components/SobreNosHome';
import img1 from '../assets/img1-sobrenos.svg';
import img2 from '../assets/img2-sobrenos.svg';
import FacaSeuPedido from '../components/FacaSeuPedido';
import Especialidades from '../components/Especialidades';
import Galeria from '../components/Galeria';
import Header from '../components/Header/Header';
import './home.css'
import Funcionamento from '../components/Funcionamento';

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

                <Funcionamento />
            </main>
        </div>
    )
}

export default Home;



