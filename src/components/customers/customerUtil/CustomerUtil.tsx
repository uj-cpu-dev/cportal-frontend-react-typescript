import React, { FC } from 'react';
import './customerutil.css';
import CustomerAvatar from "./customerAvatar/CustomerAvatar";
import Header from "../../header/Header";
import { urlHeader } from "../../../util/urlHeader";
import {useParams} from "react-router-dom";
import CustomerBasicDetails from "../customerBasicDetails/CustomerBasicDetails";
import FormControlContainer from "../formcontrolcontainer/FormControlContainer";
import useFetch from "../../../hooks/useFetch";
import { useGlobalContext } from "../../../context/app-context";
import DeleteCustomer from "../deleteCustomer/DeleteCustomer";

const CustomerUtil:FC = () => {
    const {id} = useParams();
    const shouldFetchData = id && `http://localhost:4000/customers/${id}`;
    const [data] = useFetch(shouldFetchData, 'data');
    const {state, actions} = useGlobalContext();
    const { eachCustomer} = state;
    const { setEachCustomer, handleInputChange, dispatch, openDeleteModal} = actions;

    const updateEachCustomer = () => data && setEachCustomer(data?.customer);

    return(
        <>
            <Header
                showButton={urlHeader()}
                btnText={urlHeader() ? 'Actions': ''}
                onEditClick={updateEachCustomer}
                openDeleteModal={openDeleteModal}
            />
            <div className={'customers-container'}>
                <h3>Account Information</h3>
                <CustomerAvatar isOnView={id} name={data?.customer?.name || ''} email={data?.customer?.email || ''}/>
                {   id ?
                    <CustomerBasicDetails
                        data={data?.customer}
                        updateEachCustomer={updateEachCustomer}
                    />
                    :
                    <FormControlContainer
                        data={eachCustomer}
                        handleInputChange={handleInputChange}
                    />
                }
            </div>
            <DeleteCustomer />
        </>
    )
}

export default CustomerUtil;