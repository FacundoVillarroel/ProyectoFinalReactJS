import Item from "./Item.js"
import productsList from "./items.js"

function getProducts (productsList){
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve (productsList);
        }, 2000)   
    })
}

async function prueba(){
        const response = await getProducts(productsList)
        const products = await response.products
        console.log(products);
}
prueba()


let products = productsList.products;

function ItemList (){
    return(
        <ul className="d-flex flex-wrap">
    <li> <Item item = {products[0]} /></li>
    <li> <Item item = {products[1]}/></li> 
    <li> <Item item = {products[2]}/></li>
    <li> <Item item = {products[3]}/></li>  
    <li> <Item item = {products[4]}/></li> 
    <li> <Item item = {products[5]}/></li> 
    <li> <Item item = {products[6]}/></li> 
    <li> <Item item = {products[7]}/></li> 
    <li> <Item item = {products[8]}/></li> 
    <li> <Item item = {products[9]}/></li> 
    <li> <Item item = {products[10]}/></li> 
    <li> <Item item = {products[11]}/></li> 
</ul>
    )
}
export default ItemList