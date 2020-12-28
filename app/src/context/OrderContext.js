import React, { useState, useContext, useEffect } from "react";


const Context = React.createContext();
// main component
const OrderContext = ({ children }) => {


    return (
        <Context.Provider value={{}}>
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
