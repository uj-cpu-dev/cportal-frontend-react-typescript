import {Customers} from "../../../context/app-context-type";

export interface CustomerBasicDetailsType{
    data: Customers,
    updateEachCustomer:() => void
}