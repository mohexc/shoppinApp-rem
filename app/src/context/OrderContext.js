import React, { useState, useContext, useEffect } from "react";


const Context = React.createContext();
// main component
const OrderContext = ({ children }) => {

    const [orders, setOrders] = useState([])

    const addOrder = (item) => {
        const newOrders = [...orders, item]
        setOrders(newOrders)
    }

    const reduceOrder = (item) => {
        const oldOrder = orders
        const newOrder = oldOrder.filter(order => order._id !== item._id)
        setOrders(newOrder)
    }

    return (
        <Context.Provider value={{
            orders,
            addOrder,
            reduceOrder,
        }}>
            {children}
        </Context.Provider>
    );
};

export const useOrderContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Check OrderContext 🔥");
    }

    return context;
};

export default OrderContext;
