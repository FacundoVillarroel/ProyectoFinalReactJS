import {Accordion} from "react-bootstrap"
import Player from "./player"
import allPlayers from "../data/players"

function PlayersContainer() {
    return(
        <>
            <div>
                <h2 className="text-center my-5">Plantel Actual</h2>
            </div>
            
            <Accordion defaultActiveKey={['0']} alwaysOpen bsPrefix="allPlayers">
                {allPlayers.map((player, key) =>{
                    return(<Player player={player} key={key}/>)
                })}
            </Accordion>
        </>
        
    )
}

export default PlayersContainer