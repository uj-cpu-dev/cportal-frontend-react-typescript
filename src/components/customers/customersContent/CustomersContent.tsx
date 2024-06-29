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
                    const {id, name, email, phone, createdAt, quota, company_name, address, filetype, filedata, filename, file, updatedAt, isChecked} = customer;
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
                            filedata={filedata}
                            filename={filename}
                            filetype={filetype}
                            file={file}
                            updatedAt={updatedAt}
                            isChecked={isChecked}
                        />
                    )
                })
            }
        </>
    )
}

export default CustomersContent;