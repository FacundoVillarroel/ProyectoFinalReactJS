
import imgConTitular from "../images/conjuntoTitular.jpeg"
import imgConSuplente from "../images/conjuntoSuplente.jpeg"
import imgConArquero from "../images/conjuntoArquero.jpeg"
import imgConArqAlt from "../images/conjuntoArqueroAlt.jpeg"
import imgConAlt from "../images/conjuntoAlternativo.jpeg"
import imgConVerNeg from "../images/conjuntoVerano.jpeg"
import imgConVerBla from "../images/conjuntoVeranoAlt.jpeg"
import imgConInvierno from "../images/conjuntoInvierno.jpeg"
import imgBuzo from "../images/buzo.jpeg"
import imgConAltBla from "../images/conjuntoVarianteBlanco.jpeg"
import imgConAltNeg from "../images/conjuntoVarianteNegro.jpeg"
import imgCongVarNeg from "../images/conjuntoVarianteNegro2.jpeg"


class product {
    constructor (id,title, price,imgSrc,stock,description,category){
        this.id = id;
        this.title = title ;
        this.price = price;
        this.imgSrc = imgSrc;
        this.stock = stock;
        this.description = description;
        this.category = category
    }
}

const conTitular = new product ("conTitular","Conjunto titular",2000,imgConTitular,10, "Conjunto titular de Recreativo fútbol club","titular");
const conSuplente = new product("conSuplente","Conjunto suplente",1800,imgConSuplente, 7, "Conjunto titular de Recreativo fútbol club","suplente");
const conArquero = new product ("conArquero","Conjunto arquero", 1600, imgConArquero,10, "Conjunto de arquero de Recreativo fútbol club","titular");
const conArqueroAlternativo = new product("conArqueroAlternativo","Conjunto arquero alternativo", 1500, imgConArqAlt,5,"Conjunto arquero alternativo de Recreativo fútbol club","suplente");
const conEspecial = new product("conEspecial","Conjunto Especial", 1500, imgConAlt,10,"Conjunto especial de Recreativo fútbol club","suplente");
const conVeranoNegro = new product("conVeranoNegro","Conjunto de verano negro", 1600, imgConVerNeg,9,"Conjunto de verano negro de Recreativo fútbol club","deVestir");
const conVeranoBlanco = new product ("conVeranoBlanco","Conjunto de verano blanco", 1400, imgConVerBla,9,"Conjunto de verano blanco de Recreativo fútbol club","deVestir");
const conInvierno = new product("conInvierno","Conjunto de invierno", 2000, imgConInvierno,6,"Conjunto de invierno de Recreativo fútbol club","deVestir");
const buzo = new product ("buzo","Buzo", 700, imgBuzo,3, "Buzo individual de Recreativo fútbol club","deVestir");
const conAlternativoBlanco = new product ("conAlternativoBlanco","Conjunto alternativo blanco", 1400, imgConAltBla,8,"Conjunto alternativo blanco de Recreativo fútbol club","suplente");
const conAlternativoNegro = new product ("conAlternativoNegro","Conjunto alternativo negro", 1400, imgConAltNeg,10, "Conjunto alternativo negro de Recreativo fútbol club","suplente");
const conVarianteNegro = new product ("conVarianteNegro","Conjunto variante negro", 1400, imgCongVarNeg,5,"Conjunto variante negro de Recreativo fútbol club","suplente");

const products =[conTitular,conSuplente,conArquero,conArqueroAlternativo,conEspecial,conVeranoNegro,conVeranoBlanco,conInvierno,buzo,conAlternativoBlanco,conAlternativoNegro,conVarianteNegro]
export default products