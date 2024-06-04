import React, { FC } from 'react';
import { SelectType } from "./select-type";
const Select:FC<SelectType> = ( { options, additionalClassName }) => {
    return(
        <select className={additionalClassName}>
            {
                options &&
                options.map((t, i) => {
                    return(
                        <option key={i}>{t}</option>
                    )
                })
            }
        </select>
    )
}
export default Select;