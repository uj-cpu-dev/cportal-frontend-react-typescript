import React from 'react';
import Customers from "../../components/customers/Customers";
import Button from "../../components/control/button/Button";
import './home.css';
import { Link } from "react-router-dom";
import {useGlobalContext} from "../../context/app-context";

export const Home:React.FC = () => {
    const { state, actions} = useGlobalContext();
    const {customers} = state;
    const { resetForm, deleteAllCustomers, dispatch } = actions;

    return (
        <div className={'home-container'}>
            <Link to={'/customers/create'}>
                <Button
                    title={'Add'}
                    additionalClassName={'header-container-btn'}
                    onClick={() => resetForm()}
                    disabled={false}
                />
            </Link>
            <Customers
                deleteAllCustomers={deleteAllCustomers}
                customers={customers}
                dispatch={dispatch}
            />
        </div>
    )
}