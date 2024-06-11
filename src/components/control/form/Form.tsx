import React, { FC } from 'react';
import {FormType} from "./form-type";

const Form:FC<FormType> = ( { additionalClassName, label } ) => {
    return(
        <div className={additionalClassName}>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={'text'} />
        </div>
    )
}

export default Form;