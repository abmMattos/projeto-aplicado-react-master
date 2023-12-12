import linhaTituloEsquerda from "../assets/linhas-titulo-esquerda.svg";
import linhaTituloDireita from "../assets/linhas-titulo-direita.svg";
import img1 from "../assets/galeria-img1.png";
import img2 from "../assets/galeria-img2.png";
import img3 from "../assets/galeria-img3.png";
import img4 from "../assets/galeria-img4.png";
import img5 from "../assets/galeria-img5.png";
import instagram from "../assets/instagram.svg";
import "./Galeria.css";

function Galeria() {
    return (
        <section className="galeria">

            <div className="galeria-titulo">
                <div className="linhas-titulo">
                    <img src={linhaTituloEsquerda} alt="" />
                </div>
                <div>
                    <h2 className="especialidade-h2-titulo">Galeria</h2>
                </div>
                <div className="linhas-titulo">
                    <img src={linhaTituloDireita} alt="" />
                </div>
            </div>

            <div className="galeria-img">
                <img id="dois" src={img1} alt="comida 1" />
                <img src={img2} alt="comida 2" />
                <img src={img3} alt="comida 5" />
                <img id="normal" src={img4} alt="comida 3" />
                <img id="meio" src={img5} alt="comida 4" />
            </div>
            <div className="galeria-link">
                <img src={instagram} alt="instagram" />
                <a href="https://www.instagram.com/comidaria.express/" target="_blank">VER MAIS</a>
            </div>
        </section>
    )
}
export default Galeria;