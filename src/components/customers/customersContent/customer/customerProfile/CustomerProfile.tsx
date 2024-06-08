import React, { FC } from 'react';
import { CustomerProfileType } from "./customer-profile";
import './customerprofile.css'

const CustomerProfile:FC<CustomerProfileType> = ( { name, email} ) => {
    return(
        <div className='customer-profile-container'>
            <img src="" alt="profile-logo" />
            <div className='customer-profile-info'>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default CustomerProfile;