import React from 'react';
import './customers.css';
import Select from "../control/select/Select";
import CustomersList from "./customersList/CustomersList";

const Customers:React.FC = () => {
    return(
        <div className={'customers-container'}>
            <div className={'customers-top-container'}>
                <h3>Customers</h3>
                <Select
                    options={["Newest", "Oldest"]}
                    additionalClassName={'customer-select'}
                />
            </div>
            <CustomersList />
        </div>
    )
}
export default Customers;