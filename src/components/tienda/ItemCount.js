import {BsFillCartPlusFill} from "react-icons/bs"

const ItemCount = ({stock,setQuantity,quantity,addToCart,category,size}) => {
    
    const handleClickPlus = () => {
        quantity < stock && setQuantity(quantity + 1)
    }
    const handleClickMinus = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }


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
                {stock === 0 
                    ? <p className="warning"> ¡Lo sentimos, no queda Stock de este producto!</p>
                    :<>{(size === "" && category !== "pelota") && <p className="warning"> ¡Debes elegir un talle!</p>}</>}
            </button>     
            
            <p>Stock disponible: {stock}</p>
        </div>
    )
}
export default ItemCount;