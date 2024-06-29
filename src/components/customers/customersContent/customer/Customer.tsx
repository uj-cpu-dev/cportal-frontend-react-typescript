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
    const {id, name, email, quota, phone, createdAt, status, filedata, filetype, filename, file, updatedAt, isChecked } = props;
    const {actions} = useGlobalContext();
    const {updateEachCustomer, transformImageToImageType, dispatch} = actions;

    return (
        <tr>
            <td>
                <Checkbox label={''} isChecked={isChecked} onChange={() => dispatch({type: "CHECK_CUSTOMER", payload: props})}/>
            </td>
            <td>
                <CustomerProfile
                    name={name} email={email}
                    filetype={filetype}
                    filename={filename}
                    filedata={filedata}
                    transformImageToImageType={transformImageToImageType}
                    file={file}
                />
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
                <Tab title={formatDateString(updatedAt) || ''}/>
            </td>
            <td>
                <Status status={status}/>
            </td>
            <td>
                <Link to={`customers/view/${id}`} className={'edit-button'}>
                    <img src={EditIcon} alt={'edit-icon-logo'} className={'edit-icon-logo'}
                         onClick={() => updateEachCustomer(props)}/>
                </Link>
            </td>
        </tr>
    )
}

export default Customer;