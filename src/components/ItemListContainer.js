import ItemCount from "./ItemCount.js"

let stock = 5;
let initial = 1;
function ItemListContainer({greeting, estilo}){
    return(
        <div>
            <h2 className= "text-center pb-2" style={estilo}>{greeting}</h2>
            <ul>
                <li> <ItemCount stock={stock} initial={initial} /> </li>
                <li> Producto 2 </li>
                <li> Producto 3 </li>
                <li> Producto 4 </li>
            </ul>
        </div>
        )
}
export default ItemListContainer