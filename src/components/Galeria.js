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
                <div className="linhas">
                    <img src={linhaTituloEsquerda} alt="" />
                </div>
                <div>
                    <h2 className="galeria-titulo">Galeria</h2>
                </div>
                <div className="linhas">
                    <img src={linhaTituloDireita} alt="" />
                </div>
            </div>

            <div className="galeria-img">
                <div><img src={img1} alt="comida 1" /></div>
                <div><img src={img2} alt="comida 2" /></div>
                <div><img src={img3} alt="comida 5" /></div>
                <div className="mobile-hidden"><img src={img1} alt="comida 1" /></div>
                <div className="mobile-hidden"><img src={img2} alt="comida 2" /></div>
                <div className="mobile-hidden"><img src={img3} alt="comida 5" /></div>
                
            </div>
            <div className="galeria-link">
                <img src={instagram} alt="instagram" />
                <a href="https://www.instagram.com/comidaria.express/" target="_blank">VER MAIS</a>
            </div>
        </section>
    )
}
export default Galeria;