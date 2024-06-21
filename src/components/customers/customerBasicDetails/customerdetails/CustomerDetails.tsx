import React, {FC} from 'react';
import './customerdetails.css';
import DetailsTab from "../../../control/detailstab/DetailsTab";
import { CustomerDetailsType } from "./customerdetails-type";

const CustomerDetails:FC<CustomerDetailsType> = ({title, img, address}) => {

    return(
        <div className={'billing-details-container'}>
            <div className={'billing-details-top-content'}>
                <img src={img} alt={'credit-card-logo'} />
                <h3> {title} </h3>
            </div>
            <div className={'billing-details-content'}>
                <DetailsTab title={'Country'} text={address?.country} />
                <DetailsTab title={'State'} text={address?.state} />
                <DetailsTab title={'City'} text={address?.city} />
                <DetailsTab title={'Address'} text={address?.street} />
                <DetailsTab title={'Tax ID'} text={'EU87956621'} />
            </div>
        </div>
    )
}

export default CustomerDetails;