import { useEffect, useReducer, useState} from "react";
import { Customers } from "../context/app-context-type";
import useFetch from "./useFetch";

const global_URL = 'http://127.0.0.1:62341';

type reducerAction = {
    type: string,
    payload: any;
}
const reducer = (state:Customers[], action:reducerAction) => {
    const { payload } = action;
    switch (action.type) {
        case "CUSTOMERS":
            state = payload.sort((a:Customers, b:Customers) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            return state;
        case "CREATE_CUSTOMER":
            state = [...state, payload]
            return state;
        case "UPDATE_CUSTOMER":
            state = [...state].map(t => t?.id === payload?.id ? payload : t);
            return state;
        case "CHECK_CUSTOMER":
            state = [...state].map(t => t?.id === payload?.id ? {...payload, isChecked: !payload.isChecked } : t);
            return state;
        case "CHECK_ALL_CUSTOMER":
            state = [...state].map(t => ({...t, isChecked: payload }));
            return state;
        case "SORT_ALL_CUSTOMERS":
            state = [...state].sort((a:Customers ,b:Customers) => {
                if(payload === 'Newest'){
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                }
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            })
            return state;
        case "DELETE_CUSTOMER":
            state = [...state].filter(t => t?.id !== payload?.id);
            return state;
        case "DELETE_ALL_CUSTOMERS":
            state = [...state].filter(t => !payload.includes(t.id));
            return state;
        default:
            return state;
    }
};

const useCustomers = () => {
    const [customers, dispatch] = useReducer(reducer, []);
    const [data] = useFetch(`${global_URL}/customers`, 'customers');
    const [generateNewId, setGenerateNewId] = useState<number | null>(null);

    useEffect(() => {
        dispatch({ type: 'CUSTOMERS', payload: data });
    }, [data]);

    useEffect(() => {
        const sortedCustomers = customers?.sort((a, b) => a.id - b.id);
        setGenerateNewId(customers?.length >= 1 ? (sortedCustomers[sortedCustomers?.length - 1]?.id + 1) : 1)
    }, [customers])

    return {
        customers,
        dispatch,
        generateNewId,
        global_URL
    }
}

export default useCustomers;