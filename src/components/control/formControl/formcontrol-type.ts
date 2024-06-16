import {ChangeEvent, ChangeEventHandler, SyntheticEvent} from "react";

export interface FormControlType{
    data: string[],
    additionalClassName: string,
    formValues:any,
    formType:string,
    handleInputChange: (formParameter: string) => (event: ChangeEvent<HTMLInputElement>) => void;
}