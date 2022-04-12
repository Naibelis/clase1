import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item, quantity) {
        const itemIndex = cartItems.findIndex((i) => i.item.id === item.id);
        console.log({ itemIndex, cartItems })
        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity += quantity;
            setCartItems(cartItems)
        } else {
            setCartItems([...cartItems, { item, quantity }])
        }
    }

    function removeFromCart(itemId) {
        const newCartItems = cartItems.filter((i) => i.item.id !== itemId);
        setCartItems(newCartItems);
    }

    function clear() {
        setCartItems([]);
    }

    function isInCart(itemId) {
        return cartItems.includes((i) => i.id === itemId);
    }

    return <CartContext.Provider value={{ addToCart, removeFromCart, clear, isInCart, cartItems }}>
        {children}
    </CartContext.Provider>
}