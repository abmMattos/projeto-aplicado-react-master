import Header from "../components/Header/Header";
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';
import './main-cardapio.css';
import TiposCard from "../components/TiposCard";
import img from '../assets/caseiro.svg';
import CardapioCard from "../components/CardapioCard";
import ParmegianaCarne from "../assets/img3-especialidade.png";
import ParmegianaFrango from "../assets/parmegiana de frango.png";
import YakisobaQueijo from "../assets/img2-especialidade.png";
import YakisobaCarne from "../assets/yakisoba de carne.png";
import YakisobaFrango from "../assets/yakisoba de frango.png";
import StrogonoffCarne from "../assets/strogonoff de carne.png";
import StrogonoffFrango from "../assets/strogonoff de frango.png";
import Espaguete from "../assets/espaguete.png";
import EspagueteIntegral from "../assets/espaguete integral.png";
import Penny from "../assets/penny.png";
import Talharim from "../assets/talharim.png";

function Cardapio() {
    return (
        <div>
            <Header titulo="Cardapio" tituloAmarelo="COMIDARIA" />
            <main>
                <section className="diferencial-home">
                    <TiposCard img={img} titulo="Comida Caseira" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
                </section>
                <section className="titulo-pagina">
                    <div className="linhas-titulo">
                        <img src={linhaTituloEsquerda} alt="" />
                    </div>
                    <div>
                        <h1 id="cardapio-titulo">Cardápio</h1>
                    </div>
                    <div className="linhas-titulo">
                        <img src={linhaTituloDireita} alt="" />
                    </div>
                </section>
                <div className="titulo-categoria">
                        <h2><u>Caldos & Massas</u></h2>
                    </div>
                    <section className="categoria">
    
                    <div classNames="itens">
                        <CardapioCard img={Espaguete} titulo="Spaghetti" descricao="Espaguete, com molho vermelho, cebola, alho e carne moida " preco="15,90" />
                    </div>
                    <div classNames="itens">
                        <CardapioCard img={EspagueteIntegral} titulo="Spaghetti Integral" descricao="Espaguete integral, cebola, 
tomate cereja, alho e champignom. " preco="20,90" />
                    </div>
                    <div classNames="itens">
                        <CardapioCard img={Penny} titulo="Penny" descricao="Penny, cebola, alho, queijo ralado, molho de tomate, 
cenoura e carne moida. " preco="17,90" />
                    </div>
                    <div classNames="itens">
                        <CardapioCard img={Talharim} titulo="Talharim" descricao="Talharim, cebola roxa, alho, salsa, 
molho branco, bacon, champignom. " preco="17,90" />
                    </div>
                </section>

                <div className="titulo-categoria">
                        <h2><u>Yakisoba</u></h2>
                    </div>
                <section className="categoria">
    
                    <div classNames="itens">
                        <CardapioCard img={YakisobaQueijo} titulo="Yakisoba de Queijo" descricao="Espaguete, cebola roxa, 
cenoura, couve-flor, brócolis, ricota, 
 repolho, champignon. " preco="15,90" />
                    </div>
                    <div classNames="itens">
                        <CardapioCard img={YakisobaCarne} titulo="Yakisoba de Carne" descricao="Espaguete, cebola, 
cenoura, pimentão, beterraba, carne, champignon. " preco="20,90" />
                    </div>
                    <div classNames="itens">
                        <CardapioCard img={YakisobaFrango} titulo="Yakisoba de Frango" descricao="Espaguete, cebola roxa, 
cenoura, pimentão, brócolis, frango, champignon. " preco="17,90" />
                    </div>
                </section>
                <div className="titulo-categoria">
                        <h2><u>Parmegiana e Strogonoff</u></h2>
                    </div>
                <section className="categoria">                  
                    <div className="itens">
                        <CardapioCard img={ParmegianaCarne} titulo="Parmegiana de Carne" descricao="Filé mignon, cebola, 
alho, manjericão, tomate, 
queijo. " preco="24,90" />
                    </div>
                    <div className="itens">
                        <CardapioCard img={ParmegianaFrango} titulo="Parmegiana de Frango" descricao="Filé de Frango, cebola, 
alho, manjericão, tomate, 
queijo. " preco="22,90" />
                    </div>
                    <div className="itens">
                        <CardapioCard img={StrogonoffCarne} titulo="Strogonoff de Carne" descricao="Filé mignon, cebola, 
limão, creme de leite, champignon, batata palha e arroz. " preco="21,90" />
                    </div>
                    <div className="itens">
                        <CardapioCard img={StrogonoffFrango} titulo="Strogonoff de Frango" descricao="Filé de frango, cebola, 
limão, creme de leite, champignon, batata palha e arroz. " preco="19,90" />
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Cardapio;