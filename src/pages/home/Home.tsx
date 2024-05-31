import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Customers from "../../components/customers/Customers";
import Header from "../../components/header/Header";

export const Home:React.FC = () => {
    return (
        <div className={'home-container'}>
            <div className={'container'}>
                <Navbar />
                <Header />
                <Customers />
            </div>
        </div>
    )
}