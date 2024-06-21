import {ChangeEvent} from "react";

interface DataType {
    title: string,
    selectData: string[]
}
export interface FormControlType{
    data: string[] | DataType[] ,
    additionalClassName: string,
    formValues:any,
    formType:string,
    handleInputChange: (formParameter: string) => (event: ChangeEvent<HTMLInputElement>) => void;
    inputTye: string
}