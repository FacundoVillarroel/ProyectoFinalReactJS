
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
import imgBall1 from "../images/ball1.png"
import imgBall2 from "../images/ball2.png"
import imgBall3 from "../images/ball3.png"
import imgBall4 from "../images/ball4.png"

class product {
    constructor (id,title, price,imgSrc,xl,l,m,s,xs,description,category){
        this.id = id;
        this.title = title ;
        this.price = price;
        this.imgSrc = imgSrc;
        this.stockTotal = xl+l+m+s+xs;
        this.description = description;
        this.category = category
        this.talles =[
            {sizeName:"XL",  stock:xl},
            {sizeName:"L",  stock:l},
            {sizeName:"M",  stock:m},
            {sizeName:"S",  stock:s},
            {sizeName:"XS",  stock:xs},
            {sizeName:"",  stock:""}
            ]
        
    }
}

const conTitular = new product ("conTitular","Conjunto titular",2000,imgConTitular,2,5,6,3,0, "Conjunto titular de Recreativo fútbol club","titular");
const conSuplente = new product("conSuplente","Conjunto suplente",1800,imgConSuplente,3,8,2,5,5, "Conjunto titular de Recreativo fútbol club","suplente");
const conArquero = new product ("conArquero","Conjunto arquero", 1600, imgConArquero,1,5,4,6,5, "Conjunto de arquero de Recreativo fútbol club","titular");
const conArqueroAlternativo = new product("conArqueroAlternativo","Conjunto arquero alternativo", 1500, imgConArqAlt,0,6,4,5,2,"Conjunto arquero alternativo de Recreativo fútbol club","suplente");
const conEspecial = new product("conEspecial","Conjunto Especial", 1500, imgConAlt,1,5,6,5,4,"Conjunto especial de Recreativo fútbol club","suplente");
const conVeranoNegro = new product("conVeranoNegro","Conjunto de verano negro", 1600, imgConVerNeg,5,10,8,9,6,"Conjunto de verano negro de Recreativo fútbol club","deVestir");
const conVeranoBlanco = new product ("conVeranoBlanco","Conjunto de verano blanco", 1400, imgConVerBla,4,5,4,1,2,"Conjunto de verano blanco de Recreativo fútbol club","deVestir");
const conInvierno = new product("conInvierno","Conjunto de invierno", 2000, imgConInvierno,6,5,5,4,3,"Conjunto de invierno de Recreativo fútbol club","deVestir");
const buzo = new product ("buzo","Buzo", 700, imgBuzo,0,3,4,5,0, "Buzo individual de Recreativo fútbol club","deVestir");
const conAlternativoBlanco = new product ("conAlternativoBlanco","Conjunto alternativo blanco", 1400, imgConAltBla,1,5,4,5,3,"Conjunto alternativo blanco de Recreativo fútbol club","suplente");
const conAlternativoNegro = new product ("conAlternativoNegro","Conjunto alternativo negro", 1400, imgConAltNeg,4,5,5,5,1, "Conjunto alternativo negro de Recreativo fútbol club","suplente");
const conVarianteNegro = new product ("conVarianteNegro","Conjunto variante negro", 1400, imgCongVarNeg,1,5,6,9,3,"Conjunto variante negro de Recreativo fútbol club","suplente");
const ball1 = new product ("Pelota1", "Pelota Kappa Recreativo", 800, imgBall1, 20,0,0,0,0, "Pelota de fútbol kappa original con los colores de Recreativo fútbol club","pelota")
const ball2 = new product ("Pelota2", "Pelota Kappa Tournament", 700, imgBall2, 15,0,0,0,0, "Pelota de fútbol kappa original","pelota")
const ball3 = new product ("Pelota3", "Pelota Kappa Roja", 600, imgBall3, 15,0,0,0,0, "Pelota de fútbol kappa original","pelota")
const ball4 = new product ("Pelota4", "Pelota Kappa Negra", 600, imgBall4, 15,0,0,0,0, "Pelota de fútbol kappa original","pelota")


const products =[conTitular,conSuplente,conArquero,conArqueroAlternativo,conEspecial,conVeranoNegro,conVeranoBlanco,conInvierno,buzo,conAlternativoBlanco,conAlternativoNegro,conVarianteNegro,ball1,ball2,ball3,ball4]
export default products