import React, { FC } from 'react';
import Form from "../form/Form";
import {FormControlType} from "./formcontrol-type";

const FormControl:FC<FormControlType> = ( {data, additionalClassName }) => {
    return(
        <div className={additionalClassName}>
            {
                data &&
                data.map((t, i) => {
                    return(
                        <Form key={i} additionalClassName={''} label={t} />
                    )
                })
            }
        </div>
    )
}

export default FormControl;

