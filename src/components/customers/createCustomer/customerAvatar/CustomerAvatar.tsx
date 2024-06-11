import React, { FC } from 'react';
import './customeravatar.css'
import CameraImage from '../../../../images/camera.png'
import FileInput from "../../../control/fileInput/FileInput";

const CustomerAvatar:FC = () => {
    return(
        <div className={'customer-avatar-container'}>
            <div className={'customer-avatar'}>
                <img src={CameraImage} alt={'camera-logo'}/>
            </div>
            <div className={'customer-avatar-content'}>
                <p>Avatar</p>
                <p> Min 400x400px, PNG or JPEG </p>
                <FileInput />
            </div>
        </div>
    )
}

export default CustomerAvatar;
