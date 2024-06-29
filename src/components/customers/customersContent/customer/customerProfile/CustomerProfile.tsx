import React, {FC, useEffect, useState} from 'react';
import { CustomerProfileType } from "./customer-profile";
import './customerprofile.css'
import Avatar from '../../../../../images/avatar.png'

const CustomerProfile:FC<CustomerProfileType> = ( { name, email, filedata, filetype, transformImageToImageType, file} ) => {
    const [imgSrc, setImgSrc] = useState<Blob | MediaSource | any>(null);

    useEffect(() => {
        if(filedata?.data?.length > 0 && filetype && !file){
            setImgSrc(transformImageToImageType(filedata, filetype));
        }
        if(!filedata && !filetype && file){
            setImgSrc(URL.createObjectURL(file));
        }
    }, [filedata, filetype, file]); // eslint-disable-line react-hooks/exhaustive-deps


    return(
        <div className='customer-profile-container'>
            <img src={imgSrc ? imgSrc : Avatar} alt="profile-logo" />
            <div className='customer-profile-info'>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default CustomerProfile;