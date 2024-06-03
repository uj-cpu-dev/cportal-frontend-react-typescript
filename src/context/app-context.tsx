import React, { createContext, useContext, FC } from 'react';

interface contextProps {
    children: React.ReactNode;
};

const GlobalContext = createContext(null);

const AppContext:FC<contextProps> = ({children}) => {
    return(
        <GlobalContext.Provider value={null}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;