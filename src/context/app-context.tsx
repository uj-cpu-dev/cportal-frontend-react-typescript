import React, { createContext, FC, useState, useContext } from 'react';
import { ContextProps, GlobalContextValue, customersData } from "./app-context-type";


const GlobalContext = createContext<GlobalContextValue | null>(null);

const AppContext:FC<ContextProps> = ({children}) => {
    const [customers, setCustomers] = useState(customersData);

    return(
        <GlobalContext.Provider value={{
            state: {
                customers
            },
            actions: {
                setCustomers
            }
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ():GlobalContextValue => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContext.Provider');
    }
    return context as GlobalContextValue;
}

export default AppContext;