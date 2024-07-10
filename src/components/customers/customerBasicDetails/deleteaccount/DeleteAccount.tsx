import React, { FC } from 'react';
import './deleteaccount.css'
import Button from "../../../control/button/Button";
import Security from '../../../../images/security.png';
import { useGlobalContext } from "../../../../context/app-context";
import { DeleteAccountType } from "./deleteaccount-type";

const DeleteAccount:FC<DeleteAccountType> = ( { updateEachCustomer } ) => {
    const { actions} = useGlobalContext();
    const { openDeleteModal } = actions;

    const openModalAndUpdateCustomer = () => {
        openDeleteModal()
        updateEachCustomer();
    }

    return(
        <div className={'delete-account-container'}>
            <div className={'delete-account-top-container'}>
                <img src={Security} alt={'security-logo'} />
                <h3>Security</h3>
            </div>
            <Button
                title={'Delete account'}
                additionalClassName={'delete-account-btn'}
                onClick={() => openModalAndUpdateCustomer()}
                disabled={false}
            />
            <p className={'delete-text'}>A deleted customer cannot be restored. All data will be permanently removed.</p>
        </div>
    )
}

export default DeleteAccount;