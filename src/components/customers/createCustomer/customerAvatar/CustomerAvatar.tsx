import React, { FC } from 'react';
import './customeravatar.css'
import CameraImage from '../../../../images/camera.png'
import FileInput from "../../../control/fileInput/FileInput";
import {CustomerAvatarType} from "./customeravatar-type";

const CustomerAvatar:FC<CustomerAvatarType> = ( { isOnView, name, email } ) => {

    const renderFileInput = () => {
        return(
            <>
                <p>Avatar</p>
                <p> Min 400x400px, PNG or JPEG </p>
                <FileInput/>
            </>
        )
    }

    const renderCustomerDetails = () => {
        return (
            <>
                <h3>{name}</h3>
                <p> {email}</p>
            </>
        )
    }

    return (
        <div className={'customer-avatar-container'}>
        <div className={'customer-avatar'}>
                <img src={CameraImage} alt={'camera-logo'}/>
            </div>
            <div className={'customer-avatar-content'}>
                {isOnView ? renderCustomerDetails() : renderFileInput()}
            </div>
        </div>
    )
}

export default CustomerAvatar;
