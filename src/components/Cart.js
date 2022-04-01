import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function Cart () {
    const {cart,emptyCart,removeItem,totalPrice} = useContext(CartContext)

    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate(-1)
    }

    return(
        <div className="text-center">
            <h1 className="my-5 text-center">Carrito</h1>
            <div>
                { cart.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.imgSrc} className="productImage" alt="item.title"></img>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}> delete item</button>
                </div>
                ))}
                <button className="btn btn-danger" onClick={emptyCart}> Vaciar Carrito</button>
            </div>

            <h3>tu precio final es de ${totalPrice()}</h3>
            
            <button className="buttonReturn" onClick={handleNavigate}> Volver </button>
        </div>
    )
}

export default Cart