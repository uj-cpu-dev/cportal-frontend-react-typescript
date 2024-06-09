import React from 'react';
import Customers from "../../components/customers/Customers";
import Header from "../../components/header/Header";

export const Home:React.FC = () => {
    return (
        <div className={'home-container'}>
            <Header title={'Customers'} showButton />
            <Customers />
        </div>
    )
}