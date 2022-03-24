import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail"
import items from "../data/items"

let itemImported = items.products[0]


function ItemDetailContainer(){
    const [item,setItem] = useState("")
    useEffect(()=> {
        let promise = new Promise (resolve => {
            setTimeout(()=> {
                resolve (itemImported);
            }, 2000)   
        })
        promise.then((response)=>{
            setItem(response)
        })
    })

    return(
        <div className='itemDetailContainer text-center'>
                <ItemDetail item = {item}/>
        </div>
        )
}
export default ItemDetailContainer