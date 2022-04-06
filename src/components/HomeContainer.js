import reciente from "../images/reciente.jpg"
import recreaGif from "../images/gif-recrea.gif"
import deportivoGif from "../images/gif-deportivo.gif"
function HomeContainer (){

    return(
        <div className="container">
            <div className="row">
                <article className="col-6 text-center my-3">
                <h2 className="titular mt-5 mb-3">Lo más reciente</h2><img src={reciente} alt="Tomas Albarello manteniendo la posesión para Recreativo" className="bordeRedondeado"/>
                </article>
                <article className="col-2 my-5">
                <h2 className="titular">Recreativo cayó 2 por 0</h2>
                <p className="fs-5 ps-3">Con este encuentro el "Recrea" se está quedando fuera de la zona de clasificación para el ascenso, queda mucho por definirse en las últimas 3 fechas, las cuales se jugarán como si fueran finales, Vamos Recrea !</p>
                </article>

                <article className="posiciones col-4 my-5 d-flex flex-column align-items-center" >          
                    <h2 className="titular">Posiciones</h2>
                    <table className="fondo fs-6">
                        <tbody>
                        <tr><th>Posición</th><th>Equipo</th><th>Pts</th></tr>
                        <tr><td>1°</td><td>Entelequia</td><td>19</td></tr>
                        <tr><td>2°</td><td>Africa United</td><td>13</td></tr>
                        <tr><td>3°</td><td>Deportivo Cristal</td><td>13</td></tr>
                        <tr><td>4°</td><td>La Castilla</td><td>12</td></tr>
                        <tr><td>5°</td><td>Sangrión</td><td>11</td></tr>
                        <tr><td>6°</td><td>La Colonia</td><td>11</td></tr>
                        <tr><td>7°</td><td>Severino</td><td>10</td></tr>
                        <tr><td>8°</td><td>El pasaje</td><td>10</td></tr>
                        <tr><td>9°</td><td>Recreativo</td><td>10</td></tr>
                        <tr><td>10°</td><td>El Clero</td><td>9</td></tr>
                        <tr><td>11°</td><td>Un Equipo</td><td>9</td></tr>
                        <tr><td>12°</td><td>Barrilete Cósmico</td><td>8</td></tr>
                        <tr><td>13°</td><td>Play Time</td><td>6</td></tr>
                        <tr><td>14°</td><td>El Fortin</td><td>4</td></tr>
                        <tr><td>15°</td><td>La Rabona</td><td>4</td></tr>
                        <tr><td>16°</td><td>Mario Bross</td><td>1</td></tr>
                        </tbody>
                    </table>
                </article>
            </div>

            <div className="row">
            
            <article className="proximoPartido col-8">
                <div><h2 className="titularSecundario">Próximo partido</h2></div>
                <div className="vs">
                    <div><img src={recreaGif} alt="Escudo de Recreativo" className="imgEscudo"/></div>
                    <div className="fs-5"> Recreativo - VS - Deportivo Cristal </div>
                    <div><img src={deportivoGif} alt="Escudo Deportivo Cristal" className="imgEscudo"/></div>
                </div>
                <div>20 de November • 10:00hs</div> 
            </article>

            <article className="col-4 text-center">
                <h3 >Torneo Campa fútbol</h3>
                <p className="fs-6">como llegar:</p>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10819.981778569183!2d-64.22241172527474!3d-31.329137841491878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329bde87d669e3%3A0xa3bebc31e7bb60ed!2sCampa%20F%C3%BAtbol!5e0!3m2!1ses-419!2sde!4v1634347086819!5m2!1ses-419!2sde" ></iframe>
            </article>

            </div>
            
        </div>
        
    )
}

export default HomeContainer