import React, { FC } from 'react';
import { CheckboxType } from "./checkbox-type";

const Checkbox:FC<CheckboxType> = ({label, onChange}) => {
    return(
        <>
            <input id={label} type="checkbox" onChange={onChange}/>
            <label htmlFor={label}>{label}</label>
        </>
    )
}

export default Checkbox;