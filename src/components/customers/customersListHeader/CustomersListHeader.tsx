import React, { FC } from 'react';
import Checkbox from "../../control/checkbox/Checkbox";
import Tab from "../../control/tab/Tab";
import './customerslistheader.css';

const CustomersListHeader:FC = () => {
    return (
        <tr>
            <th className={'col-1'}>
                <Checkbox label={''} onChange={() => console.log('check')} isChecked={false}/>
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