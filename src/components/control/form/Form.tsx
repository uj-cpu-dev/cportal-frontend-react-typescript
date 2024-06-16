import React, { FC } from 'react';
import {FormType} from "./form-type";

const Form:FC<FormType> = ( { additionalClassName, label, inputValue, inputName, formType, handleInputChange } ) => {
    return(
        <div className={additionalClassName}>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={'text'} value={inputValue || ''} name={inputName} onChange={handleInputChange(formType)} />
        </div>
    )
}

export default Form;