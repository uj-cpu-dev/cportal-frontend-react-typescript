import React, { FC, useEffect } from 'react';
import './customerutil.css';
import CustomerAvatar from "./customerAvatar/CustomerAvatar";
import Header from "../../header/Header";
import { urlHeader } from "../../../util/urlHeader";
import {useLocation, useNavigate, useParams} from "react-router-dom";
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
    const { eachCustomer, customers} = state;
    const { updateEachCustomer, handleInputChange, openDeleteModal } = actions;
    const navigate = useNavigate();
    const location = useLocation();
    const shouldShowBasicDetailsOrForm = location.pathname.includes('view');

    const handleBackClick = () => {
        updateEachCustomer(data?.customer);
        navigate(-1);
    }
    const handleOnEditClick = () => updateEachCustomer(data?.customer);

    useEffect(() => {
        updateEachCustomer(data?.customer);
    }, [customers]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <Header
                showButton={urlHeader() && shouldShowBasicDetailsOrForm}
                btnText={urlHeader() ? 'Actions': ''}
                onEditClick={handleOnEditClick}
                openDeleteModal={openDeleteModal}
                handleBackClick={handleBackClick}
                id={id}
            />
            <div className={'customers-container'}>
                <h3>Account Information</h3>
                <CustomerAvatar
                    isOnView={shouldShowBasicDetailsOrForm}
                    name={data?.customer?.name || ''}
                    email={data?.customer?.email || ''}
                    filetype={data?.customer?.filetype || ''}
                    filedata={data?.customer?.filedata || ''}
                />
                {shouldShowBasicDetailsOrForm ?
                    <CustomerBasicDetails
                        data={data?.customer}
                        updateEachCustomer={handleOnEditClick}
                    />
                    :
                    <FormControlContainer
                        data={eachCustomer}
                        handleInputChange={handleInputChange}
                        handleBackClick={handleBackClick}
                    />
                }
            </div>
            <DeleteCustomer />
        </>
    )
}

export default CustomerUtil;