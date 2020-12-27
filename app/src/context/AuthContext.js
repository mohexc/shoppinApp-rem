import React, { useState, useContext, useEffect } from "react";


const Context = React.createContext();
// main component
const AuthContext = ({ children }) => {


    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Check AuthContext 🔥");
    }

    return context;
};

export default AuthContext;
