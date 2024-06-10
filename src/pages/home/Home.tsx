import React from 'react';
import Customers from "../../components/customers/Customers";
import Button from "../../components/control/button/Button";
import './home.css';

export const Home:React.FC = () => {

    return (
        <div className={'home-container'}>
            <Button title={'Add'} additionalClassName={'header-container-btn'} onClick={() => console.log('testing')} />
            <Customers />
        </div>
    )
}