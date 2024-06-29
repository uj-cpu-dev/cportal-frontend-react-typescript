import { ChangeEvent } from "react";
import {Customers} from "../../../context/app-context-type";

export interface FormControlContainerType{
    data: Customers,
    handleInputChange: (formParameter: string) => (event: ChangeEvent<HTMLInputElement>) => void;
    handleBackClick:() => void,
}