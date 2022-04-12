import dates from "../../data/fixtureDates"
import FixtureDate from "./FixtureDate";

function FixtureContainer () {

    return (
        <main className="fixture">

            <h2 className="titular">Torneo Campa Fútbol 2021</h2>

            <FixtureDate dates = {dates}/>

                    
        </main>
    )
}

export default FixtureContainer