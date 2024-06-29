import React, { FC, useState } from 'react';
import Checkbox from "../../control/checkbox/Checkbox";
import Tab from "../../control/tab/Tab";
import './customerslistheader.css';
import {CustomerListHeaderType} from "./customerlistheader-type";

const CustomersListHeader:FC<CustomerListHeaderType> = ( { dispatch }) => {
    const [checkAll, setCheckAll] = useState(false);

    const checkOrUnCheckAllCustomers = (e:any) => {
        setCheckAll(e.target.checked);
        dispatch({type: "CHECK_ALL_CUSTOMER", payload: e.target.checked})
    }

    return (
        <tr>
            <th className={'col-1'}>
                <Checkbox label={''} onChange={checkOrUnCheckAllCustomers} isChecked={checkAll}/>
            </th>
            <th className={'col-2'}>
                <Tab title={'Name'}/>
            </th>
            <th className={'col-3'}>
                <Tab title={'Quota'}/>
            </th>
            <th className={'col-4'}>
                <Tab title={'Phone Number'}/>
            </th>
            <th className={'col-5'}>
                <Tab title={'Created at'}/>
            </th>
            <th className={'col-5'}>
                <Tab title={'Updated at'}/>
            </th>
            <th className={'col-6'}>
                <Tab title={'Status'}/>
            </th>
            <th className={'col-7'}>
                <Tab title={''}/>
            </th>
        </tr>
    )
}

export default CustomersListHeader;