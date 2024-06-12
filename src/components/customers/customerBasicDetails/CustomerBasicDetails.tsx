import React, { FC } from 'react';
import BasicDetails from "./basicdetails/BasicDetails";
import DeleteAccount from "./deleteaccount/DeleteAccount";
import './customerbasicdetails.css'
import CustomerDetails from "./customerdetails/CustomerDetails";
import CreditCard from '../../../images/credit-card.png'
import House from '../../../images/house.png'

const CustomerBasicDetails:FC =() => {
    return(
        <div className={'customer-basics-container'}>
            <div className={'customer-basics-content'}>
                <BasicDetails name={'John Doe'} email={'jdoe@gmail.com'} phone={'5463762340'} company={'ECI LTD'} />
                <DeleteAccount />
            </div>
            <div className={'customer-billing-container'}>
                <CustomerDetails title={"Billing details"} img={CreditCard} />
                <CustomerDetails title={"Shipping details"} img={House} />
            </div>
        </div>
    )
}

export default CustomerBasicDetails