import EspecialidadesCard from "./EspecialidadesCard";
import img1 from "../assets/img1-especialidade.png";
import { Link } from 'react-router-dom';
import linhaTituloEsquerda from "../assets/linhas-titulo-esquerda.svg";
import linhaTituloDireita from "../assets/linhas-titulo-direita.svg";
import img2 from "../assets/img2-especialidade.png";
import img3 from "../assets/img3-especialidade.png";
import img5 from "../assets/img5-especialidade.png";
import img6 from "../assets/img6-especialidade.png";
import "./Especialidades.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Especialidades() {
  const data = [
    {
      titulo: "Massas e Caldos",
      texto: "A partir de R$15,90",
      image: img1,
    },
    {
      titulo: "Yakisoba",
      texto: "A partir de R$23,90",
      image: img2,
    },
    {
      titulo: "Parmegiana & Strognoff",
      texto: "A partir de R$26,90",
      image: img3,
    },
    {
      titulo: "Marmitas",
      texto: "A partir de R$19,90",
      image: img5,
    },
    {
      titulo: "Caseiros Executivos",
      texto: "A partir de R$21,90",
      image: img6,
    },
    
  ];

  return (
    <section className="titulo-especialidade-home especialidades-bg">
      <div className="especialidade-organizacao">
        <div className="titulo-especialidades">
          <div className="linhas-titulo">
            <img src={linhaTituloEsquerda} alt="" />
          </div>
          <div>
            <h2 className="especialidades-titulo">
              Nossas{" "}
              <span className="especialidades-titulo titulo-amarelo">
                Especialidades
              </span>
            </h2>
          </div>
          <div className="linhas-titulo">
            <img src={linhaTituloDireita} alt="" />
          </div>
        </div>

        <Swiper id="carousel"
          spaceBetween={20}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          
        >
          {data.map((item) => (
            <SwiperSlide>
              <EspecialidadesCard
                titulo={item.titulo}
                texto={item.texto}
                img={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div><Link to="/cardapio" className="botao-ver">CARDÁPIO </Link></div>
      </div>
    </section>
  );
}
export default Especialidades;
