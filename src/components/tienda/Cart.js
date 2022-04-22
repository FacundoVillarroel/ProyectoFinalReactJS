import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemInCart from "./ItemInCart"

const Cart = () => {
    const {cart,emptyCart,removeItem,totalPrice} = useContext(CartContext)
    return(
        
        <>
        {   cart.length===0 ? 

                <div className="text-center">
                        <h2 className="my-5">Tu carrito esta vacio</h2>
                        <Link to="/tienda">
                            <button className="buttonReturn"> Ir a la tienda </button>
                        </Link>
                    </div>

                :

                <div className="text-center">
                    <h2 className="my-5">Carrito</h2>
                    <div className="container">
                        <div className="row gx-5 pb-3 productInCart justify-content-start">
                            <h3 className="col-3 text-start"> Nombre del producto</h3>
                            <h3 className="col-3"> Imagen </h3>
                            <h3 className="col-2"> Precio Unitario</h3>
                            <h3 className="col-2"> Cantidad </h3>
                            <h3 className="col-1"> Talle</h3>
                        </div>
                        { cart.map((item,key) => (
                            <ItemInCart key={key} item={item} removeItem={removeItem}/>
                        ))}
                        <h3>Total: ${totalPrice()}</h3>
                    </div>
                    
                    <div>
                        <button className="buttonDeleteItem m-5" onClick={emptyCart}> Vaciar Carrito</button>
                        <Link to="/checkout"><button className="buttonPay m-5"> Terminar compra </button></Link>
                    </div>
                    <Link to="/tienda">
                        <button className="buttonReturn"> Continuar comprando </button>
                    </Link>
                    
                </div>
        }
        </>
        
    )
}

export default Cart