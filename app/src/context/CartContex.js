import React, { useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";

const Context = React.createContext();
// main component
const CartContext = ({ children }) => {
    const { user } = useAuthContext()
    const [cart, setCart] = useState([])
    const [cartItemTotal, setcartItemTotal] = useState(0)
    const [shippingAddress, setshippingAddress] = useState(JSON.parse(localStorage.getItem('shippingAddress')))
    const [paymentMethod, setpaymentMethod] = useState(JSON.parse(localStorage.getItem('paymentMethod')))
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
        setcartItemTotal(total)
        // localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const getUser = localStorage.getItem('user')
        if (!getUser) {
            setCart([])
        }
        // localStorage.removeCartItem('cart')
    }, [user])

    const addCartItem = (product) => {
        const sameCartItem = cart.find(item => item.product._id === product._id)
        if (sameCartItem) {
            const index = cart.indexOf(element => sameCartItem._id === element.prodcut._id)
            sameCartItem.itemTotal = sameCartItem.itemTotal + 1
            const [..._cart] = cart
            _cart[index] = sameCartItem
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

    const removeCartItem = (product) => {
        const sameCartItem = cart.find(item => item.product._id === product._id)
        if (sameCartItem && sameCartItem.itemTotal === 1) {
            const filterItem = cart.filter(item => item.product._id !== product._id)
            setCart([...filterItem])
            localStorage.setItem('cart', JSON.stringify(cart))
            return
        }

        const index = cart.indexOf(element => sameCartItem._id === element.prodcut._id)
        sameCartItem.itemTotal = sameCartItem.itemTotal - 1
        const [..._cart] = cart
        _cart[index] = sameCartItem
        setCart(_cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        return
    }

    const deleteCartItem = (product) => {
        const filterItem = cart.filter(item => item.product._id !== product._id)
        setCart([...filterItem])
        localStorage.setItem('cart', JSON.stringify(cart))
        return
    }

    const clearCart = () => {
        setCart()
        localStorage.removeCartItem('cart')
    }

    const savePaymentMethod = (values) => {
        setpaymentMethod(values)
        localStorage.setItem('paymentMethod', JSON.stringify(values))
    }

    const saveShippingAddress = (values) => {
        setshippingAddress(values)
        localStorage.setItem('shippingAddress', JSON.stringify(values))
    }

    return (
        <Context.Provider value={{
            cart,
            cartItemTotal,
            addCartItem,
            removeCartItem,
            deleteCartItem,
            clearCart,
            savePaymentMethod,
            saveShippingAddress,
            paymentMethod,
            shippingAddress
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
