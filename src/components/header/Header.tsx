import React, { FC } from 'react';
import Button from "../control/button/Button";
import './header.css';
import { HeaderType } from "./header-type";

const Header:FC<HeaderType> = ({ showButton, title}) => {
    return(
        <div className={'header-container'}>
            <h2> {title} </h2>
            {showButton && <Button title={'Add'} additionalClassName={'header-container-btn'} />}
        </div>
    )
}

export default Header;