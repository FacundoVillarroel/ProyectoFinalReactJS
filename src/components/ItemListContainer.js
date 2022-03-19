import ItemCount from "./ItemCount.js"
import Item from "./Item.js"
import imgConTitular from "../images/conjuntoTitular.jpeg"
import imgConSuplente from "../images/conjuntoSuplente.jpeg"
class product {
    constructor (title, price,imgSrc,stock){
        this.id = Math.random();
        this.title = title ;
        this.price = price;
        this.imgSrc = imgSrc;
        this.stock = stock;
    }
}

const conTitular = new product ("Conjunto Titular",2000,imgConTitular,10);
const conSuplente = new product("Conjunto Suplente",1800,imgConSuplente, 7);

console.log(conTitular.imgSrc);

let stock = 5;
let initial = 1;

function ItemListContainer(){
    return(
        <div>
            <h2 className= "text-center pb-2">Bienvenido/a a la tienda de Recreativo</h2>
            <ul>
                <li> <ItemCount stock={stock} initial={initial} /> </li>
                <li> <Item item = {conTitular} /></li>
                <li> <Item item = {conSuplente}/></li>
                <li> Producto 4 </li>
            </ul>
        </div>
        )
}
export default ItemListContainer