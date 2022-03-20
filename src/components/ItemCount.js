import React, {useState} from "react";

function ItemCount ({stock,initial}){
    let [count,setCount] = useState(initial);

    //Agregando al contador
    function clickPlus(){
        if (count < stock){
            setCount (count +1)
        }
    }

    //Restando al contador
    function clickMinus(){
        if (count >1){
            setCount (count -1)
        }
    }

    //Agregando al carrito solo en caso de no superar el stock
    function addToCart (){
        if (count <= stock){
        alert("agregado al carrito",count);
        setCount(initial)
        }
        else {
            alert("no hay stock disponible");
        }
    }

    return (
        <div className ="itemCount d-flex flex-column align-items-center">
            <h4>Nombre del producto</h4>
            <div className ="quantityButtonContainer d-flex justify-content-between">
                <button className ="quantityButton ms-2" onClick={clickMinus}> - </button>
                <p className ="mt-2"> {count} </p>
                <button className ="quantityButton me-2" onClick={clickPlus}> + </button>
            </div>
            <button className="AddToCartButton" onClick={addToCart}> Agregar al carrito </button>
            <p>Stock disponible: {stock}</p>
        </div>
    )
}
export default ItemCount;