import React from 'react';
import { ButtonType } from "./button-type";

const Button:React.FC<ButtonType> = ( { title, additionalClassName, onClick, disabled } ) => {
    return(
        <button
            className={additionalClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}

export default Button;