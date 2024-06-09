import React, { FC } from 'react';
import { CustomerQuotaType } from "./customer-quota-type";
import './customerquota.css'

const CustomerQuota:FC<CustomerQuotaType> = ( { quota } ) => {
    const quotaText = `${quota}%`
    return(
        <div className={'customer-quota-container'}>
            <span style={{width: quotaText}} />
            <p style={{color: quota >= 60 ? '#fff' : ''}}>{`${quotaText}`} </p>
        </div>
    )
}

export default CustomerQuota;