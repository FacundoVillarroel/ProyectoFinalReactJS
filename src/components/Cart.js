import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {BsFillTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom"

function Cart () {
    const {cart,emptyCart,removeItem,totalPrice} = useContext(CartContext)

    
    const haddlePay = ()=>{
        cart.length === 0
        ? alert("tu carrito esta vacio")
        :alert("gracias por su compra")
        emptyCart()
    }

    return(
        <div className="text-center">
            <h1 className="my-5">Carrito</h1>
            <div className="container">
                <div className="row gx-5 pb-3 productInCart justify-content-start">
                    <h3 className="col-4 text-start"> Nombre del producto</h3>
                    <h3 className="col-3"> Imagen </h3>
                    <h3 className="col-2"> Precio </h3>
                    <h3 className="col-2"> Cantidad </h3>
                    <p className="col-1"></p>
                </div>
                { cart.map((item) => (
                <div key={item.id}className="row productInCart justify-content-start">
                    <h3 className="col-4 text-start">{item.title}</h3>
                    <div className="col-3">
                        <img src={item.imgSrc} className="productImage" alt="item.title"></img>
                    </div>
                    <h4 className="col-2">{item.price}</h4>
                    <h5 className="col-2">{item.quantity}</h5>
                    <button onClick={() => removeItem(item.id)} className="col-1 buttonDeleteItem"> <BsFillTrashFill/></button>
                </div>
                ))}
                <h3>Total: ${totalPrice()}</h3>
                
            </div>
            
            <div>
                <button className="buttonDeleteItem m-5" onClick={emptyCart}> Vaciar Carrito</button>
                <button className="buttonPay m-5" onClick={haddlePay}> Terminar compra </button>
            </div>
            <Link to="/">
                <button className="buttonReturn"> Continuar comprando </button>
            </Link>
            
        </div>
    )
}

export default Cart