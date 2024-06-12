import React, { FC } from 'react';
import './createcustomer.css'
import CustomerAvatar from "./customerAvatar/CustomerAvatar";
import Header from "../../header/Header";
import { urlHeader } from "../../../util/urlHeader";
import {useParams} from "react-router-dom";
import CustomerBasicDetails from "../customerBasicDetails/CustomerBasicDetails";
import FormControlContainer from "../formcontrolcontainer/FormControlContainer";

const CreateCustomer:FC = () => {
    const {id} = useParams();

    return(
        <>
            <Header showButton={urlHeader()} btnText={urlHeader() ? 'Actions': ''}/>
            <div className={'customers-container'}>
                <h3>Account Information</h3>
                <CustomerAvatar isOnView={id} name={'John Doe'} email={'jdoe@gmail.com'}/>
                {id ? <CustomerBasicDetails /> : <FormControlContainer />}
            </div>
        </>
    )
}

export default CreateCustomer;