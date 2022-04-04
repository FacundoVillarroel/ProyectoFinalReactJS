
import {Accordion} from "react-bootstrap"
import {BsFileFill} from "react-icons/bs"

function Player (){

    return(
        <Accordion.Item eventKey="0" bsPrefix="player">
                    <Accordion.Header><h3>Aguado Francisco</h3></Accordion.Header>
                    <Accordion.Body>
                        <div class="contenedorDatosJugador">
                            <div class="datosJugador">
                                <div>Fecha de nacimiento </div> <div>29/04/1999</div>
                            </div>
                            <div class="datosJugador">
                                <div>Goles </div> <div> 0</div>
                            </div>
                            <div class="datosJugador">
                                <div>Tarj. <span className="yellowCard"><BsFileFill/></span> </div> <div>0</div>
                            </div>
                            <div class="datosJugador">
                                <div>Tarj. <span className="redCard"><BsFileFill/></span></div><div>0</div>
                            </div>
                            <div class="datosJugador">
                                <div>Primer gol con el Recrea </div> <div> 01.07.2017 vs OCB</div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
    )
}

export default Player