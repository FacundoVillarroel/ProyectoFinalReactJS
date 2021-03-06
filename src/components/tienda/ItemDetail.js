import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"
import { useState, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import SelectSize from "./SelectSize";

const sizeOptions = [
    {value: 'XL', text: 'XL'},
    {value: 'L', text: 'L'},
    {value: 'M', text: 'M'},
    {value: 'S', text: 'S'},
    {value: 'XS', text: 'XS'},
]

const ItemDetail = ({item,id,title,imgSrc,description,price,stockTotal,category}) => {
    const {addItemToCart,isInCart} = useContext(CartContext)
    
    const [quantity,setQuantity] = useState(1);
    const [size,setSize] = useState("")

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    
    let newStock = {}
    if (category === "pelota"){
        newStock.stock = stockTotal
    } else {
        newStock.stock = item[`stock${size}`]
    }
    
    const addToCart = () => {
        const itemToAdd = {
            id,
            title,
            price,
            imgSrc,
            quantity,
            size,
            category
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
                            ?  <><p style={{color:"green", marginBottom:"2rem", fontSize:"1rem"}}> Este producto ya est?? en tu carrito</p>
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