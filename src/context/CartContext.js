import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext ()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItemToCart = (newItem) => {
        setCart( [...cart, newItem] )
    }

    const isInCart = (id,size) => {
        return cart.some(prod => (prod.id === id && prod.size === size))
    }
    
    const emptyCart = () => {
        setCart([])
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const removeItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }
    
    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItemToCart,
            isInCart,
            emptyCart,
            cartQuantity,
            removeItem,
            totalPrice
        }}> 
        {children}
        </CartContext.Provider>
    )
}