import MostRecent from "./MostRecent"
import Positions from "./Positions"
import NextMatch from "./NextMatch"
import Maps from "./Maps"
function HomeContainer (){

    return(
        <div className="container">
            
            <div className="row">
                <MostRecent/>
                <Positions/>
            </div>

            <div className="row">
            <NextMatch/>
            <Maps/>
            </div>

        </div>
        
    )
}

export default HomeContainer