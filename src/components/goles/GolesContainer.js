import Goleadores from "./Goleadores"
import MaximasGoleadas from "./MaximasGoleadas"
import Penales from "./Penales"
import Dobletes from "./Dobletes"
import Hattricks from "./Hattricks"
import Poker from "./Poker"

function GolesContainer(){
    return(
        <section className="gridPadreGoles">

            <Goleadores/>

            <MaximasGoleadas/>

            <Penales/>

            <Dobletes/>

            <Hattricks/>

            <Poker/>

        </section>
    )
}
export default GolesContainer