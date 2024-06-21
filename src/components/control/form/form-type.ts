import {ChangeEvent, ChangeEventHandler, SyntheticEvent} from "react";

export interface FormType{
    additionalClassName:string,
    label: string,
    inputValue: string,
    inputName: string,
    formType:string,
    handleInputChange: (formParameter: string) => (event: ChangeEvent<HTMLInputElement>) => void;
    inputTye:string,
    selectData: any

}