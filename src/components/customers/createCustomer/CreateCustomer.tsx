import React, { FC } from 'react';
import Header from "../../header/Header";

const CreateCustomer:FC = () => {
    return(
        <>
            <Header title={'Create Customer'} showButton={false}/>
            <div className={'customers-container'}>
            </div>
        </>
    )
}

export default CreateCustomer;