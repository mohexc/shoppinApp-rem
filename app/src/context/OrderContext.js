import React, { useState, useEffect, useContext } from "react";


const Context = React.createContext();
// main component
const OrderContext = ({ children }) => {

    const [orders, setOrders] = useState([])
    const [ordersTotal, setOrdersTotal] = useState(0)

    useEffect(() => {
        const total = orders.reduce((total, order) => total + order.totalOrder, 0)
        setOrdersTotal(total)
    }, [orders])

    const addOrder = (item) => {
        const sameOrder = orders.find(order => order.product._id === item._id)
        if (sameOrder) {
            sameOrder.totalOrder = sameOrder.totalOrder + 1
            const filterOrder = orders.filter(order => order.product._id !== item._id)
            const updateOrders = [...filterOrder, sameOrder]
            setOrders([...updateOrders])
            return
        }
        const newOrder = {
            product: item,
            totalOrder: 1
        }
        const updateOrders = [...orders, newOrder]
        setOrders([...updateOrders])
    }

    const reduceOrder = (item) => {
        const sameOrder = orders.find(order => order.product._id === item._id)
        if (sameOrder && sameOrder.totalOrder === 1) {
            const filterOrder = orders.filter(order => order.product._id !== item._id)
            return setOrders([...filterOrder])
        }

        sameOrder.totalOrder = sameOrder.totalOrder - 1
        const filterOrder = orders.filter(order => order.product._id !== item._id)
        const updateOrders = [...filterOrder, sameOrder]
        setOrders([...updateOrders])
    }

    const deleteOrder = (item) => {
        const filterOrder = orders.filter(order => order.product._id !== item._id)
        return setOrders([...filterOrder])
    }

    return (
        <Context.Provider value={{
            orders,
            ordersTotal,
            addOrder,
            reduceOrder,
            deleteOrder,
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
