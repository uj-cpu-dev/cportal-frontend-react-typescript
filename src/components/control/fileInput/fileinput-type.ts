import {ChangeEvent} from "react";

export interface FileInputType{
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}