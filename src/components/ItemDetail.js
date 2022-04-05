import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import SelectSize from "./SelectSize";

const sizeOptions = [
    {value: 'XL', text: 'XL'},
    {value: 'L', text: 'L'},
    {value: 'M', text: 'M'},
    {value: 'S', text: 'S'},
    {value: 'XS', text: 'XS'},
]

const ItemDetail = ({id,title,imgSrc,description,price,stock,category}) => {
    const {addItemToCart,isInCart} = useContext(CartContext)
    const [quantity,setQuantity] = useState(1);
    const [size,setSize] = useState("")

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    function addToCart (){
        const itemToAdd = {
            id,
            title,
            price,
            imgSrc,
            quantity,
            size
        } 
        if (size==="" && category !== "pelota"){alert("debes elegir un talle")}
            else{
            addItemToCart(itemToAdd)
            }
    }

    return(
        <>  
            <div className="itemDetail container d-flex flex-column align-items-center">
                <h3 className="m-3">
                    {title}
                </h3>
                <img src={imgSrc} alt={title} className="productImage mt-4 mb-2"/>
                <p className="fs-6 m-3">
                    {description}
                </p >
                <h4 className="mb-4">
                    ${price}
                </h4>
                {   category !== "pelota" && <SelectSize
                        sizeOptions={sizeOptions}
                        setSize={setSize}
                        />
                }
                <div>
                    {   isInCart(id)
                            ? <Link to= "/cart" className="AddToCartButton"> Ir al carrito</Link>
                            :<ItemCount
                            stock = {stock}
                            setQuantity = {setQuantity}
                            quantity = {quantity}
                            addToCart = {addToCart}
                            category = {category}
                            size = {size}
                            />
                            }             
                </div>
                <button className="buttonReturn" onClick={handleNavigate}>Volver</button>
            </div>
        </>
    )
}

export default ItemDetail