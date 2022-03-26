import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail"
import itemsImported from "../data/items"
import { useParams } from "react-router-dom"



function ItemDetailContainer(){
    const [item,setItem] = useState("")

    const {itemId} = useParams()

    useEffect(()=> {
        let promise = new Promise (resolve => {
            setTimeout(()=> {
                resolve (itemsImported);
            }, 2000)   
        })
        promise.then((response) => {
            console.log(itemId);
            setItem( response.find((product) => product.id === `${itemId}`) )
        })
    },[itemId])

    return(
        <div className='itemDetailContainer text-center pb-4'>
                <ItemDetail item = {item}/>
        </div>
        )
}
export default ItemDetailContainer