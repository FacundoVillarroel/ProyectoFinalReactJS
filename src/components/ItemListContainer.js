import ItemCount from "./ItemCount.js"
import ItemList from "./ItemList.js"
import productsList from "./items.js"


let stock = 5;
let initial = 1;

function ItemListContainer(){
    return(
        <div>
            <h2 className= "text-center pb-2">Bienvenido/a a la tienda de Recreativo</h2>
                <ItemList products={productsList}/>
            <ItemCount stock={stock} initial={initial} /> 
        </div>
        )
}
export default ItemListContainer
