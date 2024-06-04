import React, { FC } from 'react';
import Checkbox from "../../control/checkbox/Checkbox";
import Tab from "../../control/tab/Tab";
import './customerslistheader.css';

const CustomersListHeader:FC = () => {
    return(
        <div className={'customers-list-header-container'}>
            <Checkbox />
            <Tab title={'Name'} />
            <Tab title={'Quota'} />
            <Tab title={'Phone Number'} />
            <Tab title={'Created at'} />
            <Tab title={'Status'} />
        </div>
    )
}

export default CustomersListHeader;