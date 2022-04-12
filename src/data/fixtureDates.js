import gifRecrea from "../images/gif-recrea.gif"
import gifPasaje from "../images/gif-pasaje.gif"
import gifAfrica from "../images/gif-africa.gif"
import gifCastilla from "../images/gif-castilla.gif"
import gifFortin from "../images/gif-fortin.gif"
import gifRabona from "../images/gif-rabona.gif"
import gifSangrion from "../images/gif-sangrion.gif"
import gifEntelequia from "../images/gif-entelequia.gif"
import gifDeportivo from "../images/gif-deportivo.gif"
import gifBarrilete from "../images/gif-barrilete.gif"
import gifSeverino from "../images/gif-severino.gif"

class date {
    constructor (name,gifLocal,localTeam,score,visitTeam,gifVisit){
        this.name= name;
        this.gifLocal= gifLocal;
        this.localTeam= localTeam;
        this.score= score;
        this.visitTeam= visitTeam;
        this.gifVisit=gifVisit
    }
}

const date1 = new date ("Fecha 1", gifRecrea,"Recreativo","1 - 0","El Pasaje",gifPasaje)
const date2 = new date ("Fecha 2",gifAfrica,"Africa United","2 - 0","Recreativo",gifRecrea)
const date3 = new date ("Fecha 3",gifRecrea,"Recreativo","3 - 3","La Castilla",gifCastilla)
const date4 = new date ("Fecha 4",gifFortin,"El Fortin","0 - 2","Recreativo",gifRecrea)
const date5 = new date ("Fecha 5",gifRecrea,"Recreativo","2 - 1","La Rabona",gifRabona)
const date6 = new date ("Fecha 6",gifRecrea,"Recreativo","0 - 5","Sangrión",gifSangrion)
const date7 = new date ("Fecha 7",gifEntelequia,"Entelequia","2 - 0", "Recreativo",gifRecrea)
const date8 = new date ("Fecha 8",gifRecrea,"Recreativo","vs","Deportivo Cristal",gifDeportivo)
const date9 = new date ("Fecha 9",gifBarrilete,"Barrilete Cósmico","vs","Recreativo",gifRecrea)
const date10 = new date ("Fecha 10",gifRecrea,"Recreativo","vs","Severino",gifSeverino)


const dates = [date1,date2,date3,date4,date5,date6,date7,date8,date9,date10,]
export default dates