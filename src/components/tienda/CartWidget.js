import {BsFillCartFill} from "react-icons/bs"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartWidget () {

    const {cartQuantity} = useContext(CartContext)
    return(
        <>
            {
            <div >
                <span className="fs-2"><BsFillCartFill/></span>
                <span>{cartQuantity() || ""}</span>
            </div>
            }
        </>
    )
}
export default CartWidget