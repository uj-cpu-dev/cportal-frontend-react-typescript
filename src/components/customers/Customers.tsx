import React from 'react';
import './customers.css'
import Select from "../control/select/Select";

const Customers:React.FC = () => {
    return(
        <div className={'customers-container'}>
            <Select
                options={["Newest", "Oldest"]}
                additionalClassName={'customer-select'}
            />
        </div>
    )
}
export default Customers;