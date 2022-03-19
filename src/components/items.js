


class product {
    constructor (title, price,imgSrc,stock){
        this.id = Math.random();
        this.title = title ;
        this.price = price;
        this.imgSrc = imgSrc;
        this.stock = stock;
    }
}

const conTitular = new product ("Conjunto Titular",2000,"../images/conjuntoTitular.jpeg",10);
const conSuplente = new product("Conjunto Suplente",1800,"../images/conjuntoSuplente.jpeg", 7);

export default {conTitular, conSuplente}