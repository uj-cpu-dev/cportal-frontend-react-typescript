import React, {ChangeEvent} from 'react';
import './customers.css';
import Select from "../control/select/Select";
import CustomersList from "./customersList/CustomersList";
import Button from "../control/button/Button";
import { CustomersType } from "./customers-type";

const Customers:React.FC<CustomersType> = ( { deleteAllCustomers, customers, dispatch } ) => {

    const handleSelectOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectValue = event.target.value;
        dispatch({type: "SORT_ALL_CUSTOMERS", payload: selectValue});
    }

    const renderDeleteButton = () => {
        return (
            <Button
                disabled={false}
                title={'Delete'}
                additionalClassName={'delete-all-btn'}
                onClick={() => deleteAllCustomers()}
            />
        )
    }

    const renderCustomers = () => {
        return(
            <>
                <div className={'customers-top-container'}>
                    <h3>Customers</h3>
                    <div className={'select-delete-container'}>
                        <div>
                            <p></p>
                            {customers.filter(t => t.isChecked)?.length > 0 && renderDeleteButton()}
                        </div>
                        <Select
                            options={["Newest", "Oldest"]}
                            additionalClassName={'customer-select'}
                            onChange={handleSelectOnChange}
                        />
                    </div>
                </div>
                <CustomersList/>
            </>
        )
    }

    const renderNoCustomers = () => {
        return(
            <div>
                <h3> There are no customers in the portal, kindly add a customer </h3>
            </div>
        )
    }

    return (
        <div className={'customers-container'}>
            {customers && customers?.length > 0 ? renderCustomers() : renderNoCustomers()}
        </div>
    )
}
export default Customers;