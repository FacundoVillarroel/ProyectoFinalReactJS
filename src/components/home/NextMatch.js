import recreaGif from "../../images/gif-recrea.gif"
import deportivoGif from "../../images/gif-deportivo.gif"

const NextMatch = () => {
    return (
        <article className="proximoPartido col-8">
            <div><h2 className="titularSecundario">Próximo partido</h2></div>
            <div className="vs">
                <div><img src={recreaGif} alt="Escudo de Recreativo" className="imgEscudo"/></div>
                <div className="fs-5"> Recreativo - VS - Deportivo Cristal </div>
                <div><img src={deportivoGif} alt="Escudo Deportivo Cristal" className="imgEscudo"/></div>
            </div>
            <div>20 de November • 10:00hs</div> 
        </article>
    )
}

export default NextMatch