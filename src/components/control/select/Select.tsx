import React, { FC } from 'react';
import { SelectType } from "./select-type";
const Select:FC<SelectType> = ( { options, additionalClassName, onChange }) => {
    return(
        <select className={additionalClassName} onChange={onChange}>
            {
                options &&
                options.map((t, i) => {
                    return(
                        <option key={i} value={t}>{t}</option>
                    )
                })
            }
        </select>
    )
}
export default Select;