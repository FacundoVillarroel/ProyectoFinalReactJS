import {Accordion, Container} from "react-bootstrap"
import {BsFileFill} from "react-icons/bs"

function Player ({player}){

let imgPlayer = `jugadorImagen${player.id}`

    return(
        <Container>
            <Accordion.Item eventKey={player.id} bsPrefix="player">
                <Accordion.Header><div className={imgPlayer}></div><h3>{player.name}</h3></Accordion.Header>
                <Accordion.Body>
                    <div className="playerDataContainer">
                        <div className="playerData">
                            <div>Fecha de nacimiento </div> <div>{player.birth}</div>
                        </div>
                        <div className="playerData">
                            <div>Goles </div> <div> {player.goles}</div>
                        </div>
                        <div className="playerData">
                            <div>Tarj. <span className="yellowCard"><BsFileFill/></span> </div> <div>{player.yellowCard}</div>
                        </div>
                        <div className="playerData">
                            <div>Tarj. <span className="redCard"><BsFileFill/></span></div><div>{player.redCard}</div>
                        </div>
                        <div className="playerData">
                            <div>Primer gol con el Recrea </div> <div> {player.firstGol}</div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Container>
        
    )
}

export default Player