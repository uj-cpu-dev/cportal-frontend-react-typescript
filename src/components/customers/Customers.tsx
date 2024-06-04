import React from 'react';
import './customers.css';
import Select from "../control/select/Select";
import CustomersList from "./customersList/CustomersList";

const Customers:React.FC = () => {
    return(
        <div className={'customers-container'}>
            <Select
                options={["Newest", "Oldest"]}
                additionalClassName={'customer-select'}
            />
            <CustomersList />
        </div>
    )
}
export default Customers;