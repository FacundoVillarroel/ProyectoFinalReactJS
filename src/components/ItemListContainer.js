import ItemList from "./ItemList.js"
import productsList from "../data/items.js"


function ItemListContainer(){
    return(
        <div>
            <h2 className= "text-center pb-2">Bienvenido/a a la tienda de Recreativo</h2>
                <ItemList products={productsList}/>
        </div>
        )
}
export default ItemListContainer
