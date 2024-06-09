import React, {FC} from 'react';
import Checkbox from "../../../control/checkbox/Checkbox";
import CustomerProfile from "./customerProfile/CustomerProfile";
import {Customers} from "../../../../context/app-context-type";
import CustomerQuota from "./customerQuota/CustomerQuota";
import './customer.css'
import Tab from "../../../control/tab/Tab";
import {formatDateString, formatPhoneNumber} from "../../../../util/formatter/formatter-helper";

const Customer:FC<Customers> = ( {name, email, quota, phone, createdAt } ) => {

    return (
        <tr>
            <td>
                <Checkbox label={''} onChange={() => console.log('testing')}/>
            </td>
            <td>
                <CustomerProfile name={name} email={email}/>
            </td>
            <td>
                <CustomerQuota quota={quota}/>
            </td>
            <td>
                <Tab title={formatPhoneNumber(phone)}/>
            </td>
            <td>
                <Tab title={formatDateString(createdAt)}/>
            </td>
            <td>
                <Tab title={'Status'}/>
            </td>
            <td>
                <Tab title={'Edit Icon'}/>
            </td>
        </tr>
    )
}

export default Customer;