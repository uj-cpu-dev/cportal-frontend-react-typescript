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
import {useGlobalContext} from "../../../../context/app-context";

const Customer:FC<Customers> = ( props ) => {
    const {id, name, email, quota, phone, createdAt, status } = props;
    const {actions} = useGlobalContext();
    const {updateEachCustomer} = actions;

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
                    <img src={EditIcon} alt={'edit-icon-logo'} className={'edit-icon-logo'} onClick={() => updateEachCustomer(props)} />
                </Link>
            </td>
        </tr>
    )
}

export default Customer;