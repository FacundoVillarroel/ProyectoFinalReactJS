import reciente from "../../images/reciente.jpg"

function MostRecent () {
    return(
        <>
            <div className="col-6 text-center my-3">
                <h2 className="titular mt-5 mb-3">Lo más reciente</h2><img src={reciente} alt="Tomas Albarello manteniendo la posesión para Recreativo" className="bordeRedondeado"/>
                </div>
                <div className="col-2 my-5">
                <h2 className="titular">Recreativo cayó 2 por 0</h2>
                <p className="fs-5 ps-3">Con este encuentro el "Recrea" se está quedando fuera de la zona de clasificación para el ascenso, queda mucho por definirse en las últimas 3 fechas, las cuales se jugarán como si fueran finales, Vamos Recrea !</p>
            </div>
        </>
    )
}

export default MostRecent