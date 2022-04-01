import cart from "../images/shoppingCart.png"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget () {

    const {cartQuantity} = useContext(CartContext)

    return(
        <div>
            <img src={cart} className="cartLogo" alt ="carrito de compras"/>
            <span>{cartQuantity()}</span>
        </div>
        
    )
}
export default CartWidget