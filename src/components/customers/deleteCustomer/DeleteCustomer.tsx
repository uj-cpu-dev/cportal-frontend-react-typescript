import React from 'react';
import Button from "../../control/button/Button";
import './deletecustomer.css';
import { useGlobalContext } from "../../../context/app-context";
import useApi from "../../../hooks/useApi";
import { useNavigate } from "react-router-dom";

const DeleteCustomer = () => {
    const {state, actions} = useGlobalContext();
    const { sendRequest } = useApi();
    const navigate = useNavigate();
    const {deleteModal, eachCustomer, global_URL} = state;
    const {closeDeleteModal, dispatch} = actions;

    const removeCustomer = () => {
        dispatch({type: "DELETE_CUSTOMER", payload: {id: eachCustomer?.id}});
        navigate('/');
        closeDeleteModal();
    }
    const deleteCustomer = () => {
        sendRequest(`${global_URL}/customers/${eachCustomer?.id}`, 'DELETE').then(r => removeCustomer()).catch(e => console.log(e))
    }

    return(
        <>
            {
                deleteModal?.isOpen && (
                    <div className={'delete-customer-container'}>
                        <div className={'delete-overlay'}/>
                        <div className={'delete-customer-content'}>
                            <div> Delete Customer</div>
                            <span> Are you sure you want to delete this customer ?</span>
                            <div className={'delete-btn-container'}>
                                <Button title={'No'} additionalClassName={''} onClick={() => closeDeleteModal()} disabled={false}/>
                                <Button title={'Yes'} additionalClassName={'yes-btn'} onClick={() => deleteCustomer()} disabled={false}/>
                            </div>
                        </div>
                    </div>
                )

            }
        </>
    )
}

export default DeleteCustomer;