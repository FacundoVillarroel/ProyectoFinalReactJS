import {Accordion} from "react-bootstrap"
import Player from "./player"

function PlayersContainer() {
    return(
        <>
            <div>
                <h2>Plantel Actual</h2>
            </div>
            
            <Accordion defaultActiveKey={['0']} alwaysOpen bsPrefix="allPlayers">
                <Player/>
            </Accordion>
        </>
        
    )
}

export default PlayersContainer