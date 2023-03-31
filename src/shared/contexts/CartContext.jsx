import { createContext, useContext, useMemo, useState } from "react"

const cartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => setCart((prevState) => [...prevState, item])
    const removeFromCart = (item) => setCart((prevState) => prevState.filter(({ cartId }) => item.cartId !== cartId))

    const value = useMemo(() => ({ cart, addToCart, removeFromCart }), [cart, addToCart, removeFromCart])

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}

export const useCart = () => useContext(cartContext)
