function ItemCount ({stock,setQuantity,quantity,addToCart}){
    //Agregando al contador
    function handleClickPlus(){
        quantity < stock && setQuantity(quantity + 1)
    }

    //Restando al contador
    function handleClickMinus(){
        quantity > 1 && setQuantity(quantity - 1)
    }

    //Agregando al carrito solo en caso de no superar el stock
    

    return (
        <div className ="itemCount d-flex flex-column align-items-center">
            <h4 className="m-3">Cantidad</h4>
            <div className ="quantityButtonContainer d-flex justify-content-between">
                <button className ="quantityButton ms-2" onClick={handleClickMinus}> - </button>
                <p className ="mt-2"> {quantity} </p>
                <button className ="quantityButton me-2" onClick={handleClickPlus}> + </button>
            </div>
            <button className="AddToCartButton" onClick={addToCart}> Agregar al carrito </button>
            <p>Stock disponible: {stock}</p>
        </div>
    )
}
export default ItemCount;