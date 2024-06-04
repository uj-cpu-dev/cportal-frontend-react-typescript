import React from 'react'
import Button from "../control/button/Button";
import './header.css'

const Header:React.FC = () => {
    return(
        <div className={'header-container'}>
            <h2> Customers </h2>
            <Button title={'Add'} additionalClassName={'header-container-btn'} />
        </div>
    )
}

export default Header;