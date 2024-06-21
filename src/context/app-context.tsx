import React, {
    createContext,
    FC,
    useState,
    useContext,
    ChangeEvent
} from 'react';
import { ContextProps, GlobalContextValue, Customers, initialFormState, initialDeleteModalState} from "./app-context-type";
import useCustomers from "../hooks/useCustomers";
import useFetch from "../hooks/useFetch";


const GlobalContext = createContext<GlobalContextValue | null>(null);

const AppContext:FC<ContextProps> = ({children}) => {
    const [eachCustomer, setEachCustomer] = useState<Customers | any>(initialFormState);
    const { customers, dispatch } = useCustomers();
    const [deleteModal, setDeleteModal] = useState(initialDeleteModalState);

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

    const openDeleteModal = () => setDeleteModal((prev:any) => ({...prev, isOpen: true}));
    const closeDeleteModal = () => setDeleteModal(initialDeleteModalState);

    const generateId = () => customers[customers?.length - 1]?.id + 1 || 1;

    return(
        <GlobalContext.Provider value={{
            state: {
                customers,
                eachCustomer,
                deleteModal,
            },
            actions: {
                setEachCustomer,
                handleInputChange,
                resetForm,
                dispatch,
                openDeleteModal,
                closeDeleteModal,
                generateId
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