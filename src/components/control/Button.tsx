import React from 'react'
import { ButtonType } from "../types/control/button-type";

const Button:React.FC<ButtonType> = ( { title, additionalClassName } ) => {
    return(
        <button className={additionalClassName}>
            {title}
        </button>
    )
}

export default Button;