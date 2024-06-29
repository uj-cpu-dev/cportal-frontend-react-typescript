import React, { FC } from 'react';
import { CheckboxType } from "./checkbox-type";

const Checkbox:FC<CheckboxType> = ({label, onChange, isChecked}) => {
    return(
        <>
            <input
                id={label}
                type="checkbox"
                checked={isChecked || false}
                onChange={(e) => onChange(e)}
            />
            <label htmlFor={label}>{label}</label>
        </>
    )
}

export default Checkbox;