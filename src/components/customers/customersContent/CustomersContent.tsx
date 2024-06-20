import React, {FC} from 'react';
import {CustomersContentType} from "./customers-content-type";
import './customerscontent.css'
import Customer from "./customer/Customer";

const CustomersContent: FC<CustomersContentType> = ({customers}) => {
    return (
        <>
            {
                customers &&
                customers?.map(customer => {
                    const {id, name, email, phone, createdAt, quota, company_name, address} = customer;
                    return (
                        <Customer
                            key={id}
                            id={id}
                            name={name}
                            email={email}
                            phone={phone}
                            createdAt={createdAt}
                            quota={quota}
                            status={'Active'}
                            company_name={company_name}
                            address={address}
                        />
                    )
                })
            }
        </>
    )
}

export default CustomersContent;