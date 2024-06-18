import { useEffect, useReducer } from "react";
import { Customers } from "../context/app-context-type";
import useFetch from "./useFetch";

type reducerAction = {
    type: string,
    payload: any;
}

const reducer = (state:Customers[], action:reducerAction) => {
    const { payload } = action;
    switch (action.type) {
        case "CUSTOMERS":
            state = payload;
            return state;
        case "CREATE_CUSTOMER":
            state = [...state, payload]
            return state;
        case "UPDATE_CUSTOMER":
            state = [...state].map(t => t?.id === payload?.id ? payload : t);
            return state;
        case "DELETE_CUSTOMER":
            state = [...state].filter(t => t?.id !== payload?.id);
            return state;
        default:
            return state;
    }
};

const useCustomers = () => {
    const [data] = useFetch('http://localhost:4000/customers', 'customers');
    const [customers, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        if(data) dispatch({ type: 'CUSTOMERS', payload: data });
    }, [data]);

    return {
        customers,
        dispatch
    }
}

export default useCustomers;