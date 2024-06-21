import React, {FC} from 'react';
import Checkbox from "../../../control/checkbox/Checkbox";
import CustomerProfile from "./customerProfile/CustomerProfile";
import {Customers} from "../../../../context/app-context-type";
import CustomerQuota from "./customerQuota/CustomerQuota";
import './customer.css'
import Tab from "../../../control/tab/Tab";
import {formatDateString, formatPhoneNumber} from "../../../../util/formatter/formatter-helper";
import {Link} from "react-router-dom";
import EditIcon from '../../../../images/edit.png';
import Status from "../../../control/status/Status";

const Customer:FC<Customers> = ( {id, name, email, quota, phone, createdAt, status } ) => {

    return (
        <tr>
            <td>
                <Checkbox label={''} isChecked={false} onChange={() => console.log('testing')} />
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
                <Tab title={formatDateString(createdAt) || ''}/>
            </td>
            <td>
                <Status status={status} />
            </td>
            <td>
                <Link to={`customers/${id}`} className={'edit-button'}>
                    <img src={EditIcon} alt={'edit-icon-logo'} className={'edit-icon-logo'} />
                </Link>
            </td>
        </tr>
    )
}

export default Customer;