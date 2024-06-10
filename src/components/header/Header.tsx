import React, { FC, useState } from 'react';
import Button from "../control/button/Button";
import './header.css';
import { HeaderType } from "./header-type";

const Header:FC<HeaderType> = ({ showButton, btnText}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return(
        <div className={'header-container'}>
            <p> Back </p>
            <div className={'header-button-side-container'}>
                {showButton && <Button onClick={() => setShowDropdown(!showDropdown)} title={btnText} additionalClassName={'header-container-btn'} />}
                {(showButton && showDropdown) && <div className={'buttons-drop-down-container'}>
                    <button className={'edit-button'}> Edit</button>
                    <button className={'delete-button'}> Delete</button>
                </div>}
            </div>
        </div>
    )
}

export default Header;