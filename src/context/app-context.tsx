import React, { ChangeEvent, createContext, FC, useContext, useState } from 'react';
import {
    ContextProps,
    Customers,
    GlobalContextValue,
    initialDeleteModalState,
    initialFormState
} from "./app-context-type";
import useCustomers from "../hooks/useCustomers";
import {Buffer} from "buffer";
import useDeleteSelectedCustomersApi from "../hooks/useDeleteSelectedCustomersApi";


const GlobalContext = createContext<GlobalContextValue | null>(null);

const AppContext:FC<ContextProps> = ({children}) => {
    const [eachCustomer, setEachCustomer] = useState<Customers | any>(initialFormState);
    const { customers, dispatch, generateNewId } = useCustomers();
    const [deleteModal, setDeleteModal] = useState(initialDeleteModalState);
    const {handleDeleteSelectedCustomers} = useDeleteSelectedCustomersApi();

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
            setEachCustomer((prev: any) => ({...prev, [name]: value }));
        }
    }

    const resetForm = () => setEachCustomer(initialFormState);
    const openDeleteModal = () => setDeleteModal((prev:any) => ({...prev, isOpen: true}));
    const closeDeleteModal = () => setDeleteModal(initialDeleteModalState);

    const updateEachCustomer = (customer:Customers) => {
        if(customer){
            const address = typeof customer?.address !== 'object' ? JSON.parse(customer?.address) : customer?.address;
            const payload = {
                ...customer,
                address: address,
                file: transformImageFromBufferToFile(customer?.filedata?.data)
            }
            setEachCustomer(payload);
        }
    }

    const transformImageToImageType = (fileData:any, fileType:string) => {
        const buffer = Buffer.from(fileData);
        const blob = new Blob([buffer], { type: fileType });
        return URL.createObjectURL(blob)
    }

    const deleteAllCustomers = () => {
        const ids = customers?.filter(t => t?.isChecked)?.map(t => t?.id);
        handleDeleteSelectedCustomers(ids)
            .then(r =>
            dispatch({type: "DELETE_ALL_CUSTOMERS", payload: ids}))
            .catch(e => console.log(e))
    }

    const transformImageFromBufferToFile  = (data:number[]) => {
        const uint8Array = new Uint8Array(data);
        const blob = new Blob([uint8Array], { type: 'image/png' });
        return new File([blob], 'image.png', {type: 'image/png', lastModified: new Date().getTime()});
    }

    return(
        <GlobalContext.Provider value={{
            state: {
                customers,
                eachCustomer,
                deleteModal,
                generateNewId,
            },
            actions: {
                setEachCustomer,
                handleInputChange,
                resetForm,
                dispatch,
                openDeleteModal,
                closeDeleteModal,
                updateEachCustomer,
                transformImageToImageType,
                deleteAllCustomers,
                transformImageFromBufferToFile
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