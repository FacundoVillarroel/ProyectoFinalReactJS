import ItemList from "./ItemList.js"
import React, {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebase/config"
import Loading from "../Loading.js";


function ItemListContainer(){
    const [productsList,setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()
    useEffect(()=> {
        setLoading(true)

        const productsRef = collection(db, "Products")
        const q = categoryId ? query (productsRef,where("category","==", categoryId)): productsRef

        getDocs(q)
            .then(resp=> {
                const items = resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
                setProductList(items)
            })
            .finally(()=>{
                setLoading(false)
            })
        
    },[categoryId])

    return(
        <>
            {
                loading 
                    ?   <Loading/>
                    :   <div className="main container pb-3">
                            <h2 className= "text-center m-5">Bienvenido/a a la tienda de Recreativo</h2>
                            <ItemList products={productsList}/>
                        </div>
            } 
        </>
        )
}
export default ItemListContainer
