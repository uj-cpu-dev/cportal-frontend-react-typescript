import React, { Dispatch, SetStateAction } from "react";

export interface ContextProps {
    children: React.ReactNode;
};

interface GlobalState {
    customers: Customers[];
}

interface GlobalActions {
    setCustomers: Dispatch<SetStateAction<any[]>>
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
    status: boolean
}

export const customersData:Customers[] = [{
    id: 1,
    name: 'John Doe',
    phone: '5147897780',
    email: 'jdoe@gmail.com',
    quota: 50,
    createdAt: '10/04/2021',
    status: true
},
    {
        id: 2,
        name: 'Jane Doe',
        phone: '5147897780',
        email: 'jdoe@gmail.com',
        quota: 50,
        createdAt: '10/04/2021',
        status: true
    }
]