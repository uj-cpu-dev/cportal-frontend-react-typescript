import React, {Dispatch, SetStateAction, ChangeEvent} from "react";

export interface ContextProps {
    children: React.ReactNode;
};

interface GlobalState {
    customers: Customers[];
    eachCustomer: Customers;
}

interface GlobalActions {
    setCustomers: Dispatch<SetStateAction<any[]>>
    setEachCustomer: Dispatch<SetStateAction<any[]>>
    handleInputChange: (formParameter: string) => (event: ChangeEvent<HTMLInputElement>) => void;
    resetForm: () => void
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
    createdAt: string,
    status: string
}

export const initialFormState = {
    address: {
        billing_address: {},
        shipping_address: {}
    }
}