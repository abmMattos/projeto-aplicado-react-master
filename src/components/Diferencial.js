import TiposCard from "./TiposCard";
import velocidade from "../assets/velocidade.svg"
import bandejaDeComida from "../assets/bandeja-de-comida.svg"
import caseiro from "../assets/caseiro.svg"
import './Diferencial.css'

function Diferencial() {
    return (
        <section className="diferencial-home">
            <TiposCard img={velocidade} titulo="Velocidade no Preparo" texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus excepturi" />
            <TiposCard img={bandejaDeComida} titulo="Personalize sua marmita" texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus excepturi" />
            <TiposCard img={caseiro} titulo="Comida Caseira" texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus excepturi" />
        </section>
    )
}
export default Diferencial;