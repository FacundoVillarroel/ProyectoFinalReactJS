import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getProducts } from '../helper/getProducts';



function ItemDetailContainer(){
    const [item,setItem] = useState("")
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=> {
        setLoading(true)
        getProducts()
            .then((response) => {
                console.log(itemId);
                setItem( response.find((product) => product.id === `${itemId}`) )
            })
            .finally(() => {
                setLoading(false)
        })
    },[itemId])

    return(
        <>
            {
                loading 
                    ?   <h2>Loading...</h2> 
                    :   <div className='itemDetailContainer text-center pb-4'>
                            <h2 className='m-5'>Detalles del producto</h2>
                            <ItemDetail item = {item}/>
                        </div>
            }
        </>
        )
}
export default ItemDetailContainer