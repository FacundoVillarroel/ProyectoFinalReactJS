import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext ()

export const CartProvider = ({children}) => {

    /* const getStorage =() => {
        let cartInLocal = JSON.parse(localStorage.getItem("cart"));
        if (cartInLocal != null) {
            return cartInLocal; 
        } else {
            return []
        }
    }  */

    const [cart, setCart] = useState( []/* getStorage() */ )

    /* const updateStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    updateStorage(cart)  */

    const addItemToCart = (newItem) => {
        setCart( [...cart, newItem] )
    }

    const isInCart = (id,size) => {
        return cart.some(product => (product.id === id && product.size === size))
    }
    
    const emptyCart = () => {
        setCart([])
    }

    const cartQuantity = () => {
        return cart.reduce((accum, product) => accum += product.quantity, 0)
    }

    const removeItem = (id,size) => {
        setCart( cart.filter((product) => !(product.id === id && product.size === size)) )
    }
    
    const totalPrice = () => {
        return cart.reduce((accum, product) => accum += product.price * product.quantity, 0)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItemToCart,
            isInCart,
            emptyCart,
            cartQuantity,
            removeItem,
            totalPrice,
        }}> 
        {children}
        </CartContext.Provider>
    )
}