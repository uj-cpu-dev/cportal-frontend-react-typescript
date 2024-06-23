import {ChangeEvent, Dispatch, SetStateAction} from "react";

export interface CustomerAvatarType{
    isOnView:string | undefined,
    name:string,
    email:string,
    eachCustomer:any,
    setEachCustomer: Dispatch<SetStateAction<any[]>>
}