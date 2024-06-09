import React, { FC, useState } from 'react';
import Header from "../../header/Header";
import './createcustomer.css'
import CustomerAvatar from "./customerAvatar/CustomerAvatar";
import FormControl from "../../control/formControl/FormControl";
import Button from "../../control/button/Button";
import Checkbox from "../../control/checkbox/Checkbox";

const CreateCustomer:FC = () => {
    const [shouldShowShippingForm, setShouldShowShippingForm] = useState(false);

    const renderShippingForm = (e:any) => {
        setShouldShowShippingForm(e.target.checked)
    }

    return(
        <>
            <Header title={'Create Customer'} showButton={false}/>
            <div className={'customers-container'}>
                <h3>Account Information</h3>
                <CustomerAvatar/>
                <FormControl
                    data={["Name*", "Email Address*", "Phone Number*", "Company"]}
                    additionalClassName={'form-control-container'}/>
                <h3>Billing Information</h3>
                <FormControl
                    data={["Country*", "State*", "City*", "Zipcode", "Address*", "Tax ID"]}
                    additionalClassName={'form-control-container'}/>
                <h3>Shipping Information</h3>
                <div className={'same-as-billing-container'}>
                    <Checkbox label={'Same as billing address'} onChange={(e) => renderShippingForm(e)}  />
                </div>
                {shouldShowShippingForm &&
                    <FormControl
                        data={["Country*", "State*", "City*", "Zipcode", "Address*", "Tax ID"]}
                        additionalClassName={'form-control-container'}/>}
                <h3>Additional Information</h3>
                <FormControl
                    data={["Timezone*", "Language*", "Currency*"]}
                    additionalClassName={'form-control-container'}/>
                <div className={'form-footer-buttons-container'}>
                   <Button title={'Cancel'} additionalClassName={''} />
                    <Button title={'Create Customer'} additionalClassName={''} />
                </div>
            </div>
        </>
    )
}

export default CreateCustomer;