import React from 'react';
import Customers from "../../components/customers/Customers";
import Button from "../../components/control/button/Button";
import './home.css';
import { Link } from "react-router-dom";

export const Home:React.FC = () => {

    return (
        <div className={'home-container'}>
            <Link to={'/customers/create'}>
                <Button title={'Add'} additionalClassName={'header-container-btn'} onClick={() => console.log('testing')} />
            </Link>
            <Customers />
        </div>
    )
}