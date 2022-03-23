import React, { useEffect, useState } from 'react';
import Item from "./Item.js"


const ItemList = (products) => {
    let productListImported = products.products;
    const [productList,setProductList] = useState([])
    useEffect(()=> {
        let promise = new Promise (resolve => {
            setTimeout(()=> {
                resolve (productListImported);
            }, 2000)   
        })
        promise.then((response)=>{
            setProductList(response.products)
        })
    })

    return(
        <div className="productList d-flex flex-wrap">
                {productList.map((item, key) => {
                    return <Item item={item} key={key} />;
                })}
        </div>
    )
}

export default (ItemList) 