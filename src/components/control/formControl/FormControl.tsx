import React, { FC } from 'react';
import Form from "../form/Form";
import {FormControlType} from "./formcontrol-type";
import {formatForm} from "../../../util/formatter/formatform-helper";

const FormControl:FC<FormControlType> = ( {data, additionalClassName, formValues, formType,handleInputChange }) => {
    const constructFormInput = (value: string, formType: string) => {
        return formType === 'billing_address' || formType === 'shipping_address'
            ? formValues['address'][formType][formatForm(value)]
            : formValues[formatForm(value)];
    };

    return(
        <div className={additionalClassName}>
            {
                data &&
                data.map((t, i) => {
                    return(
                        <Form
                            key={i}
                            additionalClassName={''}
                            label={t}
                            inputValue={constructFormInput(t, formType)}
                            inputName={formatForm(t)}
                            formType={formType}
                            handleInputChange={handleInputChange}
                        />
                    )
                })
            }
        </div>
    )
}

export default FormControl;

