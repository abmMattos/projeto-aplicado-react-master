import Header from "../components/Header/Header";
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';
import './main-cardapio.css';
import TiposCard from "../components/TiposCard";
import img from '../assets/caseiro.svg';
import CardapioCard from "../components/CardapioCard";
import StrogonoffCarne from "../assets/strogonoff de carne.png";
import StrogonoffFrango from "../assets/strogonoff de frango.png";
import MarmitaQueijo from '../assets/MarmitaQueijo.png'
import MarmitaBifeAcebolado from '../assets/MarmitaBifeAcebolado.png'
import MarmitaBifeGrelhado from '../assets/MarmitaBifeGrelhado.png'
import MarmitaBifeMilanesa from '../assets/MarmitaBifeMilanesa.png'
import MarmitaCarneMoida from '../assets/MarmitaCarneMoida.png'
import MarmitaFrangoEmpanado from '../assets/MarmitaFrangoEmpanado.png'
import MarmitaFrangoGrelhado from '../assets/MarmitaFrangoGrelhado.png'
import MarmitaLinguica from '../assets/MarmitaLinguica.png'
import MarmitaSobrecoxaGrelhada from '../assets/MarmitaSobrecoxaGrelhada.png'
import MarmitaTilapiaDore from '../assets/MarmitaTilapiaDore.png'
import MarmitaTilapiaGrelhada from '../assets/MarmitaTilapiaGrelhada.png'
import MarmitaTofu from '../assets/MarmitaTofu.png'
import CaseiroBife from '../assets/CaseiroBife.png'
import CaseiroContraFile from '../assets/CaseiroContraFile.png'
import CaseiroEscondidinhoCarne from '../assets/CaseiroEscondidinhoCarne.png'
import CaseiroEscondidinhoFrango from '../assets/CaseiroEscondidinhoFrango.png'
import CaseiroEscondidinhoSoja from '../assets/CaseiroEscondidinhoSoja.png'
import CaseiroFeijoada from '../assets/CaseiroFeijoada.png'
import CaseiroLegumes from '../assets/CaseiroLegumes.png'
import CaseiroMoqueca from '../assets/CaseiroMoqueca.png'
import CaseiroVirado from '../assets/CaseiroVirado.png'
import Yakisoba from '../assets/yakisoba.jpg'
import MassasCaldosCanjaGalinha from '../assets/MassasCaldosCanjaGalinha.png'
import MassasCaldosCremeAipim from '../assets/MassasCaldosCremeAipim.png'
import MassasCaldosCremeCabotia from '../assets/MassasCaldosCremeCabotia.png'
import MassasCaldosCremeErvilha from '../assets/MassasCaldosCremeErvilha.png'
import MassasCaldosPanquecaBolonhesa from '../assets/MassasCaldosPanquecaBolonhesa.png'
import MassasCaldosPanquecaBolonhesaSoja from '../assets/MassasCaldosPanquecaBolonhesaSoja.png'
import MassasCaldosPanquecaBrocolis from '../assets/MassasCaldosPanquecaBrocolis.png'
import MassasCaldosTagliatelleBolonhesa from '../assets/MassasCaldosTagliatelleBolonhesa.png'
import MassasCaldosTagliatelleBolonhesaSoja from '../assets/MassasCaldosTagliatelleBolonhesaSoja.png'
import MassasCaldosTagliatelleQueijo from '../assets/MassasCaldosTagliatelleQueijo.png'
import ParmegianaCarne from '../assets/ParmegianaCarne.png'
import ParmegianaFrango from '../assets/ParmegianaFrango.png'
import EstrogonofeCarne from '../assets/EstrogonofeCarne.png'
import EstrogonofeFrango from '../assets/EstrogonofeFrango.png'
import EstrogonofeLombo from '../assets/EstrogonofeLombo.png'
import EstrogonofeShimeji from '../assets/EstrogonofeShimeji.png'


function Cardapio() {
    return (
        <div>
            <Header titulo="" tituloAmarelo="CARDÁPIO" />
            <main id="cardapio-main">
                <section className="diferencial-home">
                    <TiposCard img={img} titulo="Comida Caseira" texto="Na Comidaria Express, desfrute da autenticidade e sabor excepcional da nossa comida caseira, preparada com ingredientes frescos e receitas tradicionais. Descubra o prazer de uma experiência culinária única e reconfortante conosco." />
                </section>
                <div className="titulo-categoria">
                    <h2><u>Marmitas</u></h2>
                </div>
                <section className="categoria">
                    <CardapioCard img={MarmitaQueijo} titulo="Marmita Omelete com queijo" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                    <CardapioCard img={MarmitaCarneMoida} titulo="Marmita Carne moída temperada" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                    <CardapioCard img={MarmitaBifeGrelhado} titulo="Marmita Bife patinho grelhado" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="23,90" />
                    <CardapioCard img={MarmitaBifeAcebolado} titulo="Marmita Bife patinho acebolado" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="23,90" />
                    <CardapioCard img={MarmitaBifeMilanesa} titulo="Marmita Bife patinho à milanesa" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="23,90" />
                    <CardapioCard img={MarmitaTilapiaGrelhada} titulo="Marmita Filé de tilápia grelhado" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="29,90" />
                    <CardapioCard img={MarmitaTilapiaDore} titulo="Marmita Filé de tilápia à dorê" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="29,90" />
                    <CardapioCard img={MarmitaFrangoGrelhado} titulo="Marmita Filé de frango grelhado" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                    <CardapioCard img={MarmitaFrangoEmpanado} titulo="Marmita Filé de frango empanado" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                    <CardapioCard img={MarmitaSobrecoxaGrelhada} titulo="Marmita Filé de sobrecoxa grelhada" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                    <CardapioCard img={MarmitaLinguica} titulo="Marmita linguiça Toscana" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                    <CardapioCard titulo="Marmita Proteína de soja temperada" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                    <CardapioCard img={MarmitaTofu} titulo="Marmita Tofu grelhado" descricao="Acompanha arroz caseiro e feijão carioca + acompanhamento" preco="19,90" />
                </section>
                <div className="titulo-categoria">
                    <h2><u>Caseiros Executivos</u></h2>
                </div>
                <section className="categoria">
                    <CardapioCard img={CaseiroLegumes} titulo="Carne de panela com legumes" descricao="Deliciosos cubos de carne cozida com legumes. Acompanha arroz caseiro e feijão carioca." preco="23,90" />
                    <CardapioCard img={CaseiroBife} titulo="Bife à cavalo" descricao="Tradicional bife de Contrafilé Grelhado servida com ovo frito, acompanha arroz caseiro e feijão carioca." preco="32,90" />
                    <CardapioCard img={CaseiroContraFile} titulo="Contrafilé Acebolado" descricao="Bife de Contrafilé grelhado com cebola deliciosamente preparada e temperada. Acompanha arroz caseiro e feijão carioca." preco="29,90" />
                    <CardapioCard img={CaseiroEscondidinhoSoja} titulo="Escondidinho de soja" descricao="Delicioso preparo com proteína de soja coberto com purê de batata e muçarela, finalizado com maçarico. Acompanha arroz caseiro." preco="21,90" />
                    <CardapioCard img={CaseiroEscondidinhoCarne} titulo="Escondidinho de carne" descricao="Carne moída temperada coberta com purê de batata e muçarela, finalizado no maçarico. Acompanha arroz caseiro." preco="25,90" />
                    <CardapioCard img={CaseiroEscondidinhoCarne} titulo="Escondidinho de carne seca" descricao="Carne seca coberta com purê de batata e muçarela, finalizado no maçarico. Acompanha arroz caseiro." preco="32,90" />
                    <CardapioCard img={CaseiroEscondidinhoFrango} titulo="Escondidinho de frango" descricao="Saboroso frango desfiado coberto com purê de batata e muçarela, finalizado com maçarico. Acompanha arroz caseiro." preco="23,90" />
                    <CardapioCard img={CaseiroMoqueca} titulo="Moqueca de peixe" descricao="Refogado com azeite de dendê e leite de coco, deliciosos pedaços de peixe com pimentões e molho de tomate. Acompanha arroz caseiro." preco="32,90" />
                    <CardapioCard img={CaseiroVirado} titulo="Virado à Paulista" descricao="Escalopes de mignon suíno com ovo frito e couve mineira. Acompanha arroz caseiro e feijão tropeiro." preco="32,90" />
                    <CardapioCard img={CaseiroFeijoada} titulo="Feijoada da Comidaria" descricao="Acompanha nosso delicioso arroz caseiro, couve refogada, torresmo, vinagrete e farofa. Nossa feijoada é preparada com, paio, calabresa, costelinha defumada, bacon e carne seca." preco="36,90" />
                </section>

                <div className="titulo-categoria">
                    <h2><u>Massas e Caldos</u></h2>
                </div>
                <section className="categoria">
                    <CardapioCard img={MassasCaldosTagliatelleBolonhesa} titulo="Tagliatelle a Bolonhesa" descricao="Massa Tagliatelle ao molho bolonhesa, finalizado com queijo no maçarico." preco="23,90" />
                    <CardapioCard img={MassasCaldosTagliatelleBolonhesaSoja} titulo="Tagliatelle bolonhesa com soja" descricao="Massa Tagliatelle ao molho bolonhesa preparado com proteína de soja, finalizado com queijo no maçarico." preco="21,90" />
                    <CardapioCard img={MassasCaldosTagliatelleQueijo} titulo="Tagliatelle 4 Queijos" descricao="Massa tagliatelle ao molho 4 queijos." preco="25,90" />
                    <CardapioCard img={MassasCaldosPanquecaBolonhesa} titulo="Panqueca a Bolonhesa" descricao="Panqueca de massa fina com carne moída coberta por molho de tomate artesanal e muçarela finalizado com maçarico. Acompanha arroz caseiro." preco="27,90" />
                    <CardapioCard img={MassasCaldosPanquecaBolonhesaSoja} titulo="Panqueca Bolonhesa com soja" descricao="Panqueca de massa fina com proteína de soja temperada coberta por molho de tomate artesanal e muçarela finalizado com maçarico. Acompanha arroz caseiro." preco="23,90" />
                    <CardapioCard img={MassasCaldosPanquecaBrocolis} titulo="Panqueca de Brócolis com Molho Branco" descricao="Panqueca de massa fina com brócolis cremoso, coberta por molho branco e muçarela, finalizada com massarico.Acompanha arroz caseiro." preco="24,90" />
                    <CardapioCard img={MassasCaldosCremeAipim} titulo="Creme De Aipim Com Carne" descricao="Delicioso Creme De Aipim Com Pedaços De Carne. Acompanha Torradas." preco="28,90" />
                    <CardapioCard img={MassasCaldosCremeCabotia} titulo="Creme Cabotiá Com Gorgonzola" descricao="Delicioso Creme De Cabotiá Com Gorgonzola. Acompanha Torradas." preco="25,90" />
                    <CardapioCard img={MassasCaldosCanjaGalinha} titulo="Canja De Galinha" descricao="Canja De Galinha Com Toque Caseiro. Acompanha Torradas." preco="21,90" />
                    <CardapioCard img={MassasCaldosCremeErvilha} titulo="Creme de ervilha" descricao="Delicioso creme com ervilhas, e adicional de bacon. Acompanha pão caseiro" preco="21,90" />
                </section>

                <div className="titulo-categoria">
                    <h2><u>Yakisoba</u></h2>
                </div>
                <section className="categoria">
                    <CardapioCard img={Yakisoba} titulo="YAKISOBA DE CARNE" descricao="" preco="27,90" />
                    <CardapioCard img={Yakisoba} titulo="YAKISOBA DE FRANGO" descricao="" preco="24,90" />
                    <CardapioCard img={Yakisoba} titulo="YAKISOBA DE LOMBO" descricao="" preco="23,90" />
                    <CardapioCard img={Yakisoba} titulo="YAKISOBA DE SHIMEJI" descricao="Yakisoba Vegano" preco="26,90" />
                    <CardapioCard img={Yakisoba} titulo="YAKISOBA DE TOFU" descricao="Yakisoba Vegano" preco="24,90" />
                </section>
                <div className="titulo-categoria">
                    <h2><u>Parmegiana & Estrogonofe</u></h2>
                </div>
                <section className="categoria">
                        <CardapioCard img={ParmegianaCarne} titulo="Parmegiana de Carne" descricao="Delicioso bife empanado e frito servido com molho de tomate artesanal e muçarela, acompanha arroz e batata frita. Peso médio da porção, 500g." preco="36,90" />
                        <CardapioCard img={ParmegianaFrango} titulo="Parmegiana de frango" descricao="Maravilhoso filé de frango empanado e frito servido com molho de tomate artesanal e muçarela, acompanha arroz e batata frita. Peso médio da poção, 550g." preco="29,90" />
                        <CardapioCard img={EstrogonofeShimeji} titulo="Estrogonofe de Shimeji na manteiga" descricao="Saboroso estrogonofe de shimeji, acompanha arroz caseiro e batata palha. Peso médio da poção, 500g." preco="35,90" />
                        <CardapioCard img={EstrogonofeCarne} titulo="Estrogonofe de carne" descricao="Clássico estrogonofe de carne com champignon, acompanha arroz caseiro e batata palha. Peso médio da porção, 500g." preco="28,90" />
                        <CardapioCard img={EstrogonofeFrango} titulo="Estrogonofe de frango" descricao="Popular estrogonofe de frango com milho, acompanha arroz caseiro e batata palha. Peso médio da poção, 500g." preco="26,90" />
                        <CardapioCard img={EstrogonofeLombo} titulo="Estrogonofe lombo suíno c/ creme de milho" descricao="Delicioso estrogonofe de lombo suíno com creme de milho, acompanha arroz caseiro e batata palha. Peso médio da poção, 500g." preco="26,90" />
                </section>
            </main>
        </div>
    )
}
export default Cardapio;