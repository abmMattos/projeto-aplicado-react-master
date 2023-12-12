import './SobreNosHome.css';
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';

function SobreNosHome(props) {
    if (props.pagina == "home") {
        return (
            <section>
                <div className="sobrenos">
                    <div className="sobrenos-principal">
                        <div className='titulo-sobrenos'>
                            <div className="linhas-titulo">
                                <img src={linhaTituloEsquerda} alt="" />
                            </div>
                            <div>
                                <h2 className="sobrenos-titulo"> {props.titulo} <span className="titulo-amarelo">{props.tituloAmarelo}</span></h2>
                            </div>
                            <div className="linhas-titulo">
                                <img src={linhaTituloDireita} alt="" />
                            </div>
                        </div>
                        <p className="sobrenos-texto">{props.texto} </p>
                        <div><a className="sobrenos-texto botao-ver" href="">{props.botao}</a></div>

                    </div>
                    <div className="sobrenos-imgs">
                        <img className="sobrenos-img" src={props.img1} alt="" />
                    </div>
                    <div>
                        <img className="sobrenos-img" src={props.img2} alt="" />
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div className="sobrenos">
                    <div className="sobrenos-principal">
                        <div className='titulo-sobrenos'>
                            <div className="linhas-titulo">
                                <img src={linhaTituloEsquerda} alt="" />
                            </div>
                            <div>
                                <h2 className="sobrenos-titulo"> {props.titulo} <span className="titulo-amarelo">{props.tituloAmarelo}</span></h2>
                            </div>
                            <div className="linhas-titulo">
                                <img src={linhaTituloDireita} alt="" />
                            </div>
                        </div>
                        <p className="sobrenos-texto">{props.texto}</p>
                    </div>
                    <div className="sobrenos-imgs">
                        <img className="sobrenos-img" src={props.img1} alt="" />
                    </div>
                    <div>
                        <img className="sobrenos-img" src={props.img2} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}
export default SobreNosHome;