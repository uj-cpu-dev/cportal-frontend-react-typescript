import React, {
    createContext,
    FC,
    useState,
    useContext,
    ChangeEvent,
} from 'react';
import { ContextProps, GlobalContextValue, Customers, initialFormState} from "./app-context-type";
import useCustomers from "../hooks/useCustomers";


const GlobalContext = createContext<GlobalContextValue | null>(null);

const AppContext:FC<ContextProps> = ({children}) => {
    const [eachCustomer, setEachCustomer] = useState<Customers | any>(initialFormState);
    const { customers, dispatch } = useCustomers();

    const handleInputChange = (formParameter: string) => (event: ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (formParameter === 'billing_address' || formParameter === 'shipping_address') {
            setEachCustomer((prev: any) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [formParameter]: {
                        ...prev.address?.[formParameter],
                        [name]: value
                    }
                }
            }));
        } else {
            setEachCustomer((prev: any) => ({ ...prev, [name]: value }));
        }
    }

    const resetForm = () => setEachCustomer(initialFormState);

    return(
        <GlobalContext.Provider value={{
            state: {
                customers,
                eachCustomer
            },
            actions: {
                setEachCustomer,
                handleInputChange,
                resetForm,
                dispatch
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