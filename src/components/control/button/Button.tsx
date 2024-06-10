import React from 'react';
import { ButtonType } from "./button-type";

const Button:React.FC<ButtonType> = ( { title, additionalClassName, onClick } ) => {
    return(
        <button className={additionalClassName} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;