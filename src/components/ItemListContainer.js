import ItemList from "./ItemList.js"
import productsListImported from "../data/items.js"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

function ItemListContainer(){
    const [productsList,setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()
    useEffect(()=> {
        setLoading(true)

        let promise = new Promise (resolve => {
            setTimeout(()=> {
                resolve (productsListImported);
            }, 2000)   
        })
        promise.then ((response) =>{
            if (categoryId) {
                setProductList( response.filter( (prod) => prod.category === categoryId ) )
            } else {
                setProductList( response )
            }
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    },[categoryId])

    return(
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    :   <div className="main container pb-3">
                            <h2 className= "text-center pb-2">Bienvenido/a a la tienda de Recreativo</h2>
                            <ItemList products={productsList}/>
                        </div>
            } 
        </>
        )
}
export default ItemListContainer
