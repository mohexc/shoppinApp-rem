import React, { useState, useContext } from "react";

const Context = React.createContext();

// main component
const ThemColorContex = ({ children }) => {
    // eslint-disable-next-line 
    const [primary, setPrimary] = useState('#08c')

    return (
        <Context.Provider value={{ primary }}>
            {children}
        </Context.Provider>
    );
};

export const useThemColorContex = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Check ThemColorContex 🔥");
    }

    return context;
};

export default ThemColorContex;
