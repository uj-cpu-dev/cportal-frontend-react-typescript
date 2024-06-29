import React, {FC} from 'react';
import './customerslist.css';
import CustomersListHeader from "../customersListHeader/CustomersListHeader";
import { useGlobalContext } from "../../../context/app-context";
import CustomersContent from "../customersContent/CustomersContent";

const CustomersList:FC = () => {
    const context = useGlobalContext();
    const { state, actions } = context;
    const { customers} = state;
    const { dispatch } = actions;

    return(
        <div className={'customers-list-container'}>
            <table>
                <thead>
                    <CustomersListHeader dispatch={dispatch} />
                </thead>
                <tbody>
                <CustomersContent customers={customers} />
                </tbody>
            </table>
        </div>
    )
}

export default CustomersList;