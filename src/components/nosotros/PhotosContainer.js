import foto1 from "../../images/fotos1.jpg"
import foto2 from "../../images/fotos2.jpg"
import foto3 from "../../images/fotos3.jpg"
import foto4 from "../../images/fotos4.jpg"
import foto5 from "../../images/fotos5.jpg"
import foto6 from "../../images/fotos6.jpg"
import foto7 from "../../images/fotos7.jpg"
import foto8 from "../../images/fotos8.jpg"
import foto9 from "../../images/fotos9.jpg"
import foto10 from "../../images/fotos10.jpg"
import foto11 from "../../images/fotos11.jpg"
import foto12 from "../../images/fotos12.jpg"

const PhotosContainer = () => {

    return (

        <section className="fotos container">
            <h2 className="titular">Galeria</h2>
            <div className="gridGaleria">
                <img src={foto1} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, grupo unido previo al partido"/>
                <img src={foto2} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Santiago Villaroel gambeteando"/>
                <img src={foto3} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Carranza Ezequiel festejando"/>
                <img src={foto4} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Agustin Barale pateando un tiro libre"/>
                <img src={foto5} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Ezequiel Carranza disputando la pelota"/>
                <img src={foto6} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Abrazo de gol"/>
                <img src={foto7} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Renzo Pipitone pisando la pelota"/>
                <img src={foto8} className="img-thumbnail animacionGaleria" alt="Partido de recreativo y su arquero Ferreira Cristian"/>
                <img src={foto9} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Ezequiel Salomon con la pelota"/>
                <img src={foto10} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Juan Barale defendiendo la pelota"/>
                <img src={foto11} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Maximiliano Ferreira defendiendo la pelota"/>
                <img src={foto12} className="img-thumbnail animacionGaleria" alt="Partido de recreativo, Federico Bourges pateando un tiro libre"/>
            </div>
        </section>

    )
}

export default PhotosContainer