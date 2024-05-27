import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Customers from "../../components/customers/Customers";

export const Home:React.FC = () => {
    return (
        <div className={'home-container'}>
            <div className={'container'}>
                <Navbar />
                <Customers />
            </div>
        </div>
    )
}