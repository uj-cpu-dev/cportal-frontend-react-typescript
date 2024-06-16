import React, { FC } from 'react';
import Form from "../form/Form";
import {FormControlType} from "./formcontrol-type";
import {formatForm} from "../../../util/formatter/formatform-helper";

const FormControl:FC<FormControlType> = ( {data, additionalClassName, formValues, formType,handleInputChange }) => {

    const constructFormInput = (value:string) => {
        if(formType === 'billing_address'){
            return formValues['address']['billing_address'][formatForm(value)]
        } else if(formType === 'shipping_address'){
            return formValues['address']['shipping_address'][formatForm(value)]
        } else {
            return formValues[formatForm(value)]
        }
    }



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
                            inputValue={constructFormInput(t)}
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

