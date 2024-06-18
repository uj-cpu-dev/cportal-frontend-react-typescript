import React, {Dispatch, SetStateAction, ChangeEvent} from "react";

export interface ContextProps {
    children: React.ReactNode;
};

interface GlobalState {
    customers: Customers[];
    eachCustomer: Customers;
}

interface GlobalActions {
    setEachCustomer: Dispatch<SetStateAction<any[]>>
    handleInputChange: (formParameter: string) => (event: ChangeEvent<HTMLInputElement>) => void;
    resetForm: () => void;
    dispatch: any
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
    createdAt: Date,
    status: string
}

export const initialFormState = {
    address: {
        billing_address: {},
        shipping_address: {}
    },
    createdAt: new Date(),
    quota: 50
}