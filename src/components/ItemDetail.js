import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"
import { useState, useContext} from "react";
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

const ItemDetail = ({id,title,imgSrc,description,price,stockTotal,category,talles}) => {
    const {addItemToCart,isInCart} = useContext(CartContext)
    const [quantity,setQuantity] = useState(1);
    const [size,setSize] = useState("")
    var newStock = ""

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    if(typeof(talles) === "undefined"){}
    else{
        newStock = talles.find((talle) =>{
            return talle.sizeName === size 
        })
    }

    if (category === "pelota"){
        newStock.stock = stockTotal
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
        if (size==="" && category !== "pelota") {}
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
                        setQuantity={setQuantity}
                        />
                }
                
                <div>
                    {   isInCart(id,size)
                            ?  <><p style={{color:"green"}}> Este producto ya está en tu carrito</p>
                                <Link to= "/cart" className="AddToCartButton"> Ir al carrito</Link></>
                            : <ItemCount 
                            stock = {newStock.stock}
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