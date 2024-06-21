import React, { FC } from 'react';
import BasicDetails from "./basicdetails/BasicDetails";
import DeleteAccount from "./deleteaccount/DeleteAccount";
import './customerbasicdetails.css'
import CustomerDetails from "./customerdetails/CustomerDetails";
import CreditCard from '../../../images/credit-card.png'
import House from '../../../images/house.png'
import {CustomerBasicDetailsType} from "./customerbasicdetails-type";

const CustomerBasicDetails:FC<CustomerBasicDetailsType> =( { data, updateEachCustomer } ) => {
    return(
        <div className={'customer-basics-container'}>
            <div className={'customer-basics-content'}>
                <BasicDetails name={data?.name} email={data?.email} phone={data?.phone} company={data?.company_name} />
                <DeleteAccount updateEachCustomer={updateEachCustomer} />
            </div>
            <div className={'customer-billing-container'}>
                <CustomerDetails title={"Billing details"} img={CreditCard} address={data?.address?.billing_address} />
                <CustomerDetails title={"Shipping details"} img={House} address={data?.address?.shipping_address} />
            </div>
        </div>
    )
}

export default CustomerBasicDetails