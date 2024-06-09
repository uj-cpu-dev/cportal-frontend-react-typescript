import React, { FC } from 'react';
import './customerslist.css';
import CustomersListHeader from "../customersListHeader/CustomersListHeader";
import { useGlobalContext } from "../../../context/app-context";
import CustomersContent from "../customersContent/CustomersContent";

const CustomersList:FC = () => {
    const context = useGlobalContext();
    const { state } = context;
    const { customers} = state;

    return(
        <div className={'customers-list-container'}>
            <table>
                <thead>
                    <CustomersListHeader />
                </thead>
                <tbody>
                <CustomersContent customers={customers} />
                </tbody>
            </table>
        </div>
    )
}

export default CustomersList;