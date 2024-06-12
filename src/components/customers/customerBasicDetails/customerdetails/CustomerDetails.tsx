import React, {FC} from 'react';
import './customerdetails.css';
import DetailsTab from "../../../control/detailstab/DetailsTab";
import { CustomerDetailsType } from "./customerdetails-type";

const CustomerDetails:FC<CustomerDetailsType> = ({title, img}) => {

    return(
        <div className={'billing-details-container'}>
            <div className={'billing-details-top-content'}>
                <img src={img} alt={'credit-card-logo'} />
                <h3> {title} </h3>
            </div>
            <div className={'billing-details-content'}>
                <DetailsTab title={'Country'} text={'United States'} />
                <DetailsTab title={'Country'} text={'United States'} />
                <DetailsTab title={'Country'} text={'United States'} />
                <DetailsTab title={'Country'} text={'United States'} />
                <DetailsTab title={'Country'} text={'United States'} />
            </div>
        </div>
    )
}

export default CustomerDetails;