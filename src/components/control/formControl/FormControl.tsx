import React, { FC } from 'react';
import Form from "../form/Form";
import {FormControlType} from "./formcontrol-type";
import {formatForm} from "../../../util/formatter/formatform-helper";

const FormControl:FC<FormControlType> = ( {data, additionalClassName, formValues, formType,handleInputChange, inputTye }) => {
    const constructFormInput = (value: string, formType: string) => {
        return formType === 'billing_address' || formType === 'shipping_address'
            ? formValues['address'][formType][formatForm(value)]
            : formValues[formatForm(value)];
    };

    return(
        <div className={additionalClassName}>
            {
                data &&
                data.map((t:any, i) => {
                    const param = inputTye === 'input' ? t : t?.title;
                    const selectData = inputTye === 'input' ? [] : t?.selectData;
                    return(
                        <Form
                            key={i}
                            additionalClassName={''}
                            label={param}
                            inputValue={constructFormInput(param, formType)}
                            inputName={formatForm(param)}
                            formType={formType}
                            handleInputChange={handleInputChange}
                            inputTye={inputTye}
                            selectData={selectData}
                        />
                    )
                })
            }
        </div>
    )
}

export default FormControl;

