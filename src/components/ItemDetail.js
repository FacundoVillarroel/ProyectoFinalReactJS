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
const idPelota = ["Pelota1","Pelota2","Pelota3","Pelota4"]

const ItemDetail = ({id,title,imgSrc,description,price,stock}) => {
    const {addItemToCart,isInCart} = useContext(CartContext)

    const [quantity,setQuantity] = useState(1);
    const [size,setSize] = useState("")

    const isIdPelota = (id) =>{
        return idPelota.some(prod => prod === id)
    }

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    function addToCart (){
        if (size==="" && !isIdPelota(id)){alert("debes elegir un talle")}
        else {const itemToAdd = {
            id,
            title,
            price,
            imgSrc,
            quantity,
            size
        } 
        addItemToCart(itemToAdd) }
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
                {   isIdPelota(id)
                    ?   <></> 
                    :   <SelectSize
                        sizeOptions={sizeOptions}
                        setSize={setSize}s
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
                            />
                            }             
                </div>
                <button className="buttonReturn" onClick={handleNavigate}>Volver</button>
            </div>
        </>
    )
}

export default ItemDetail