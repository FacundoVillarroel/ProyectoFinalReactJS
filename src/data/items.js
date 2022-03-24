
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
    constructor (title, price,imgSrc,stock,description){
        this.id = Math.random();
        this.title = title ;
        this.price = price;
        this.imgSrc = imgSrc;
        this.stock = stock;
        this.description = description
    }
}

const conTitular = new product ("Conjunto titular",2000,imgConTitular,10, "Conjunto titular de Recreativo fútbol club");
const conSuplente = new product("Conjunto suplente",1800,imgConSuplente, 7, "Conjunto titular de Recreativo fútbol club");
const conArquero = new product ("Conjunto arquero", 1600, imgConArquero,10, "Conjunto de arquero de Recreativo fútbol club");
const conArqueroAlternativo = new product("Conjunto arquero alternativo", 1500, imgConArqAlt,5,"Conjunto arquero alternativo de Recreativo fútbol club");
const conEspecial = new product("Conjunto Especial", 1500, imgConAlt,10,"Conjunto especial de Recreativo fútbol club");
const conVeranoNegro = new product("Conjunto de verano negro", 1600, imgConVerNeg,9,"Conjunto de verano negro de Recreativo fútbol club");
const conVeranoBlanco = new product ("Conjunto de verano blanco", 1400, imgConVerBla,9,"Conjunto de verano blanco de Recreativo fútbol club");
const conInvierno = new product("Conjunto de invierno", 2000, imgConInvierno,6,"Conjunto de invierno de Recreativo fútbol club");
const buzo = new product ("Buzo", 700, imgBuzo,3, "Buzo individual de Recreativo fútbol club");
const conAlternativoBlanco = new product ("Conjunto alternativo blanco", 1400, imgConAltBla,8,"Conjunto alternativo blanco de Recreativo fútbol club");
const conAlternativoNegro = new product ("Conjunto alternativo negro", 1400, imgConAltNeg,10, "Conjunto alternativo negro de Recreativo fútbol club");
const conVarianteNegro = new product ("Conjunto variante negro", 1400, imgCongVarNeg,5,"Conjunto variante negro de Recreativo fútbol club");

const products =[conTitular,conSuplente,conArquero,conArqueroAlternativo,conEspecial,conVeranoNegro,conVeranoBlanco,conInvierno,buzo,conAlternativoBlanco,conAlternativoNegro,conVarianteNegro]
export default {products}