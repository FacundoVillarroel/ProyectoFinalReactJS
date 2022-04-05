import {BsFillCartPlusFill} from "react-icons/bs"

function ItemCount ({stock,setQuantity,quantity,addToCart,category,size}){
    //Agregando al contador
    function handleClickPlus(){
        quantity < stock && setQuantity(quantity + 1)
    }
    //Restando al contador
    function handleClickMinus(){
        quantity > 0 && setQuantity(quantity - 1)
    }

    //Agregando al carrito solo en caso de no superar el stock
    

    return (
        <div className ="itemCount d-flex flex-column align-items-center">
            <h4 className="m-2">Cantidad</h4>
            <div className ="quantityButtonContainer d-flex justify-content-between">
                <button className ="quantityButton ms-2" onClick={handleClickMinus} disabled={quantity===0}> - </button>
                <p className ="mt-2"> {quantity} </p>
                <button className ="quantityButton me-2" onClick={handleClickPlus} disabled ={quantity===stock}> + </button>
            </div>
            <button className="AddToCartButton" onClick={addToCart} disabled={quantity===0 || (size ==="" && category !== "pelota")}>
                Agregar al carrito<span><BsFillCartPlusFill/></span>
                {stock === 0 ? <p className="warning"> ¡Lo sentimos, no queda Stock de este producto!</p>
                :<>{(size === "" && category !== "pelota") && <p className="warning"> ¡Debes agregar un talle!</p>}</>}
            </button>     
            
            <p>Stock disponible: {stock}</p>
        </div>
    )
}
export default ItemCount;