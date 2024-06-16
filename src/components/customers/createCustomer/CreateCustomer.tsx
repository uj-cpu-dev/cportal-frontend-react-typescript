import React, { FC } from 'react';
import './createcustomer.css'
import CustomerAvatar from "./customerAvatar/CustomerAvatar";
import Header from "../../header/Header";
import { urlHeader } from "../../../util/urlHeader";
import {useParams} from "react-router-dom";
import CustomerBasicDetails from "../customerBasicDetails/CustomerBasicDetails";
import FormControlContainer from "../formcontrolcontainer/FormControlContainer";
import useFetch from "../../../hooks/useFetch";
import {useGlobalContext} from "../../../context/app-context";

const CreateCustomer:FC = () => {
    const {id} = useParams();
    const shouldFetchData = id && `http://localhost:4000/customers/${id}`;
    const [data] = useFetch(shouldFetchData, 'data');
    const {state, actions} = useGlobalContext();
    const { eachCustomer} = state;
    const { setEachCustomer, handleInputChange} = actions;

    const updateEachCustomer = () => data && setEachCustomer(data?.customer);

    return(
        <>
            <Header showButton={urlHeader()} btnText={urlHeader() ? 'Actions': ''} onEditClick={updateEachCustomer}/>
            <div className={'customers-container'}>
                <h3>Account Information</h3>
                <CustomerAvatar isOnView={id} name={data?.customer?.name || ''} email={data?.customer?.email || ''}/>
                {id ? <CustomerBasicDetails data={data?.customer} /> : <FormControlContainer data={eachCustomer} handleInputChange={handleInputChange} />}
            </div>
        </>
    )
}

export default CreateCustomer;