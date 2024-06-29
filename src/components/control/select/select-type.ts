import {ChangeEvent} from "react";

export interface SelectType {
    options: Array<string>,
    additionalClassName:string,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}