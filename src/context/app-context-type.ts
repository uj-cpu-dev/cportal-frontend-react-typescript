import React, {Dispatch, SetStateAction, ChangeEvent} from "react";

export interface ContextProps {
    children: React.ReactNode;
};

interface GlobalState {
    customers: Customers[];
    eachCustomer: Customers;
    deleteModal: any,
}

interface GlobalActions {
    setEachCustomer: Dispatch<SetStateAction<any[]>>
    handleInputChange: (formParameter: string) => (event: ChangeEvent<HTMLInputElement>) => void;
    resetForm: () => void;
    dispatch: any,
    openDeleteModal: () => void,
    closeDeleteModal: () => void,
    generateId: () => number
}

export interface GlobalContextValue {
    state: GlobalState,
    actions: GlobalActions
}

export interface Customers {
    id: number,
    name: string,
    phone: string,
    email: string,
    quota: number,
    createdAt: string | any,
    status: string,
    address: any,
    company_name: string
}

const generateRandomQuotaNumber = (min = 50.00, max = 100.00) => {
    return (Math.random() * (max - min) + min).toFixed(2);
}

export const initialFormState = {
    address: {
        billing_address: {},
        shipping_address: {}
    },
    createdAt: new Date(),
    quota: parseInt(generateRandomQuotaNumber())
}

export const initialDeleteModalState = {
    isOpen:false,
}