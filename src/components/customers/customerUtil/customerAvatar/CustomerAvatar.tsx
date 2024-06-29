import React, {FC} from 'react';
import './customeravatar.css'
import CameraImage from '../../../../images/camera.png'
import FileInput from "../../../control/fileInput/FileInput";
import {CustomerAvatarType} from "./customeravatar-type";
import Status from "../../../control/status/Status";
import useCustomerAvatar from "./hooks/useCustomerAvatar";

const CustomerAvatar:FC<CustomerAvatarType> = ( { isOnView, name, email, filedata, filetype} ) => {
    const {imgSrc, updatingImg, avatarClass, updateImgSrc} = useCustomerAvatar(filedata, filetype);
    const renderFileInput = () => {
        return(
            <>
                <p>Avatar</p>
                <p> Min 400x400px, PNG or JPEG </p>
                <FileInput handleInputChange={updateImgSrc}/>
            </>
        )
    }

    const renderCustomerDetails = () => {
        return (
            <>
                <h3>{name}</h3>
                <p> {email}</p>
                <Status status={'Active'}/>
            </>
        )
    }

    return (
        <div className={'customer-avatar-container'}>
            <div className={'customer-avatar'}>
                <img
                    src={imgSrc ? (updatingImg ? URL.createObjectURL(imgSrc) : imgSrc) : CameraImage}
                    alt="camera-logo"
                    className={'upload-img'}
                    style={imgSrc ? avatarClass : undefined}
                />
            </div>
            <div className={'customer-avatar-content'}>
                {isOnView ? renderCustomerDetails() : renderFileInput()}
            </div>
        </div>
    )
}

export default CustomerAvatar;
