import React, { FC } from 'react';
import Active from '../../../images/active.png';
import Blocked from '../../../images/blocked.png';
import Pending from '../../../images/pending.png';
import {StatusType} from "./status-type";
import './status.css'

const Status:FC<StatusType> = ({status}) => {
    const renderImgSrc = () => {
        let src = '';
        switch (status){
            case 'Active':
                src = Active
                break;
            case 'Blocked':
                src = Blocked
                break;
            case 'Pending':
                src = Pending
                break;
        }
        return src;
    }

    return(
        <div className={'status-container'}>
            <img src={renderImgSrc()} alt={'status-logo'} className={'status-logo'} />
            <p>{status}</p>
        </div>
    )
}

export default Status;