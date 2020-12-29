import React, { useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";

const Context = React.createContext();
// main component
const CartContext = ({ children }) => {
    const { user, logout } = useAuthContext()
    const [cart, setCart] = useState([])
    const [itemsTotal, setItemsTotal] = useState(0)

    useEffect(() => {
        const getCart = localStorage.getItem('cart')
        if (getCart) {
            debugger
            const _cart = JSON.parse(getCart)
            setCart([..._cart])
            return
        }
    }, [])

    useEffect(() => {
        const total = cart.reduce((total, item) => total + item.itemTotal, 0)
        setItemsTotal(total)
        // localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const getUser = localStorage.getItem('user')
        if (!getUser) {
            setCart([])
        }
        // localStorage.removeItem('cart')
    }, [user])

    const addItem = (product) => {
        const sameItem = cart.find(item => item.product._id === product._id)
        if (sameItem) {
            const index = cart.indexOf(element => sameItem._id === element.prodcut._id)
            sameItem.itemTotal = sameItem.itemTotal + 1
            const [..._cart] = cart
            _cart[index] = sameItem
            setCart(_cart)
            localStorage.setItem('cart', JSON.stringify(cart))
            return
        }
        const newItem = {
            product: product,
            itemTotal: 1
        }
        const updateCart = [...cart, newItem]
        setCart([...updateCart])
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const reduceItem = (product) => {
        const sameItem = cart.find(item => item.product._id === product._id)
        if (sameItem && sameItem.itemTotal === 1) {
            const filterItem = cart.filter(item => item.product._id !== product._id)
            setCart([...filterItem])
            localStorage.setItem('cart', JSON.stringify(cart))
            return
        }

        const index = cart.indexOf(element => sameItem._id === element.prodcut._id)
        sameItem.itemTotal = sameItem.itemTotal - 1
        const [..._cart] = cart
        _cart[index] = sameItem
        setCart(_cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        return
    }

    const deleteItem = (product) => {
        const filterItem = cart.filter(item => item.product._id !== product._id)
        setCart([...filterItem])
        localStorage.setItem('cart', JSON.stringify(cart))
        return
    }

    const clearCart = () => {
        setCart()
    }

    return (
        <Context.Provider value={{
            cart,
            itemsTotal,
            addItem,
            reduceItem,
            deleteItem,
            clearCart
        }}>
            {children}
        </Context.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Check CartContext 🔥");
    }

    return context;
};

export default CartContext;
