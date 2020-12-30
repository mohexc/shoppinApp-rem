import React, { useState, useContext, useEffect } from "react";


const Context = React.createContext();
// main component
const ProductContext = ({ children }) => {

    const [prodcuts, setProdcuts] = useState()


    const getProdcuts = () => {

    }
    const getProdcutId = () => {

    }
    const updateProdcutId = () => {

    }

    const createProdcut = () => {

    }

    const deleteProdcutId = () => {

    }

    return (
        <Context.Provider value={{
            prodcuts,
            getProdcuts,
            getProdcutId,
            updateProdcutId,
            createProdcut,
            deleteProdcutId
        }}>
            {children}
        </Context.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Check ProductContext 🔥");
    }

    return context;
};

export default ProductContext;
