import React, { useState, useContext, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { useCartContext } from "./CartContex";
import configValue from '../utils/configValue'

const Context = React.createContext();
// main component
const OrderContext = ({ children }) => {
    const { user } = useAuthContext()
    const { cart } = useCartContext()
    const [order, setOrder] = useState()

    const createOrder = (values) => {
        try {
            const { data } = await axios.post(`/api/orders`, values, configValue('authConfig'))

            return { complete: true, message: "Create Order Sucssess", data }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            return { complete: false, message }
        }
    }
    const getOrderDetails = () => {
        try {

        }
        catch (error) {

        }
    }
    const payOrder = () => {
        try {

        }
        catch (error) {

        }
    }
    const deliverOrder = () => {
        try {

        }
        catch (error) {

        }
    }
    const listMyOrders = () => {
        try {

        }
        catch (error) {

        }
    }
    const listOrders = () => {
        try {

        }
        catch (error) {

        }
    }

    return (
        <Context.Provider value={{
            order,
            createOrder,
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
