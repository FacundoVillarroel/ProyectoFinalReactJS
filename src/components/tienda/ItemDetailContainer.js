import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../firebase/config"
import Loading from '../Loading';

const ItemDetailContainer = () => {
    const [item,setItem] = useState("")
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=> {
        setLoading(true)
        
        const docRef = doc(db, "Products",itemId)
        getDoc(docRef)
            .then(doc => {
                setItem ({id: doc.id, ...doc.data()})
            })
            .finally(()=>{
                setLoading(false)
            })

    },[itemId])

    
    return(
        <> 
            {
                loading 
                    ?   <Loading/> 
                    :   <div className='itemDetailContainer text-center pb-4'>
                            <h2 className='m-5'>Detalles del producto</h2>
                            <ItemDetail
                            item = {item}
                            id = {item.id}
                            title = {item.title}
                            imgSrc = {item.imgSrc}
                            description= {item.description}
                            price = {item.price}
                            stockTotal = {item.stockTotal}
                            category = {item.category}
                            />
                        </div>
            }
        </>
        )
}
export default ItemDetailContainer