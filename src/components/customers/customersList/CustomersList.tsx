import React, { FC } from 'react';
import './customerslist.css';
import CustomersListHeader from "../customersListHeader/CustomersListHeader";

const CustomersList:FC = () => {
    return(
        <div className={'customers-list-container'}>
            <CustomersListHeader />
        </div>
    )
}

export default CustomersList;