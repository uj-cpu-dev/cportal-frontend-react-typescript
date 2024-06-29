import React, { FC } from 'react';
import {FormType} from "./form-type";
import Select from "../select/Select";

const Form:FC<FormType> = ( { additionalClassName, label, inputValue, inputName, formType, handleInputChange, inputTye, selectData } ) => {
    return(
        <div className={additionalClassName}>
            <label htmlFor={label}>{label}</label>
            <>
                {
                    inputTye === 'input'
                        ?
                        <input id={label} type={'text'} value={inputValue || ''} name={inputName} onChange={handleInputChange(formType)}/>
                        :
                        <Select options={selectData} additionalClassName={''} onChange={() => null}/>
                }
            </>
        </div>
    )
}

export default Form;