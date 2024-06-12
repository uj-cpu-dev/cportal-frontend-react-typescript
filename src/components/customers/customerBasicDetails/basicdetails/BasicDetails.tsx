import React, { FC } from 'react';
import {BasicDetailsType} from "./basicdetails-type";
import './basicdetails.css'
import { formatPhoneNumber } from "../../../../util/formatter/formatter-helper";
import User from '../../../../images/user.png';
import DetailsTab from "../../../control/detailstab/DetailsTab";

const BasicDetails:FC<BasicDetailsType> = ( { name, email, phone, company } ) => {

    return(
        <div className={'basic-details-container'}>
            <div className={'basic-details-top-bar'}>
                <img src={User} alt={'user-logo'} />
                <h3>Basic details</h3>
            </div>
            <DetailsTab title={'Customer ID'} text={'USR-001'} />
            <DetailsTab title={'Name'} text={name} />
            <DetailsTab title={'Email'} text={email} />
            <DetailsTab title={'Phone'} text={formatPhoneNumber(phone)} />
            <DetailsTab title={'Company'} text={company} />
        </div>
    )
}

export default BasicDetails;