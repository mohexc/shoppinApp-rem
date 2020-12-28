import React, { useState, useEffect, useContext } from "react";

const Context = React.createContext();
// main component
const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])
    const [itemsTotal, setItemsTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((total, item) => total + item.itemTotal, 0)
        setItemsTotal(total)
    }, [cart])

    const addItem = (product) => {
        const sameItem = cart.find(item => item.product._id === product._id)
        if (sameItem) {
            sameItem.itemTotal = sameItem.itemTotal + 1
            const filterItem = cart.filter(item => item.product._id !== product._id)
            const updateCart = [...filterItem, sameItem]
            setCart([...updateCart])
            return
        }
        const newItem = {
            product: product,
            itemTotal: 1
        }
        const updateCart = [...cart, newItem]
        setCart([...updateCart])
    }

    const reduceItem = (product) => {
        const sameItem = cart.find(item => item.product._id === product._id)
        if (sameItem && sameItem.itemTotal === 1) {
            const filterItem = cart.filter(item => item.product._id !== product._id)
            return setCart([...filterItem])
        }

        sameItem.itemTotal = sameItem.itemTotal - 1
        const filterItem = cart.filter(item => item.product._id !== item._id)
        const updateCart = [...filterItem, sameItem]
        setCart([...updateCart])
    }

    const deleteItem = (product) => {
        const filterItem = cart.filter(item => item.product._id !== product._id)
        return setCart([...filterItem])
    }

    return (
        <Context.Provider value={{
            cart,
            itemsTotal,
            addItem,
            reduceItem,
            deleteItem,
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
