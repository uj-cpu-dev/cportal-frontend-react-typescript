import {Customers} from "../../context/app-context-type";


export interface CustomersType{
    deleteAllCustomers: () => void;
    customers: Customers[],
    dispatch:any
}