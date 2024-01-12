import TiposCard from "./TiposCard";
import velocidade from "../assets/velocidade.svg"
import bandejaDeComida from "../assets/bandeja-de-comida.svg"
import caseiro from "../assets/caseiro.svg"
import './Diferencial.css'

function Diferencial() {
    return (
        <section className="diferencial-home">
            <TiposCard img={velocidade} titulo="Velocidade no Preparo" texto="Na Comidaria Express, destacamos a rapidez na preparação de refeições deliciosas, mantendo a qualidade. Experimente a conveniência sem abrir mão do sabor." />
            <TiposCard img={bandejaDeComida} titulo="Personalize sua Marmita" texto="Experimente a praticidade e sabor das nossas marmitas personalizadas, cuidadosamente adaptadas ao seu gosto e estilo de vida. Descubra a agilidade de refeições sob medida, sem comprometer o sabor." />
            <TiposCard img={caseiro} titulo="Comida Caseira" texto="Na Comidaria Express, desfrute da autenticidade e sabor excepcional da nossa comida caseira, preparada com ingredientes frescos e receitas tradicionais. Descubra o prazer de uma experiência culinária única e reconfortante conosco." />
        </section>
    )
}
export default Diferencial;