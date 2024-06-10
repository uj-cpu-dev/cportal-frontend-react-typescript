import React, { FC, useState } from 'react';
import './createcustomer.css'
import CustomerAvatar from "./customerAvatar/CustomerAvatar";
import FormControl from "../../control/formControl/FormControl";
import Button from "../../control/button/Button";
import Checkbox from "../../control/checkbox/Checkbox";
import Header from "../../header/Header";
import { urlHeader } from "../../../util/urlHeader";

const CreateCustomer:FC = () => {
    const [shouldShowShippingForm, setShouldShowShippingForm] = useState(true);

    return(
        <>
            <Header showButton={urlHeader()} btnText={urlHeader() ? 'Actions': ''}/>
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
                    <Checkbox label={'Same as billing address'} isChecked={shouldShowShippingForm} onChange={(e) => setShouldShowShippingForm(e.target.checked)}  />
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
                   <Button title={'Cancel'} additionalClassName={''} onClick={() => console.log('testing')} />
                    <Button title={'Create Customer'} additionalClassName={''} onClick={() => console.log('testing')} />
                </div>
            </div>
        </>
    )
}

export default CreateCustomer;