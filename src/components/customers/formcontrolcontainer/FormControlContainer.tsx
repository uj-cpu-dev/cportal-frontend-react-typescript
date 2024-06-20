import React, { FC } from 'react';
import FormControl from "../../control/formControl/FormControl";
import Checkbox from "../../control/checkbox/Checkbox";
import Button from "../../control/button/Button";
import useFormControlContainer from "./useFormControlContainer";
import './formcontrolcontainer.css'

const FormControlContainer:FC<{data: any, handleInputChange:any}> = ( { data, handleInputChange } ) => {
    const {
        shouldShowShippingForm,
        setShouldShowShippingForm,
        renderButtonText,
        formUtil
    } = useFormControlContainer();

    return(
        <>
            <FormControl
                data={["Name*", "Email Address*", "Phone Number*", "Company"]}
                formValues={data}
                formType={''}
                handleInputChange={handleInputChange}
                additionalClassName={'form-control-container'}/>
            <h3>Billing Information</h3>
            <FormControl
                data={["Country*", "State*", "City*", "Zipcode", "Address*", "Tax ID"]}
                formValues={data}
                formType={'billing_address'}
                handleInputChange={handleInputChange}
                additionalClassName={'form-control-container'}/>
            <h3>Shipping Information</h3>
            <div className={'same-as-billing-container'}>
                <Checkbox label={'Same as billing address'} isChecked={shouldShowShippingForm} onChange={(e) => setShouldShowShippingForm(e.target.checked)}  />
            </div>
            {shouldShowShippingForm &&
                <FormControl
                    data={["Country*", "State*", "City*", "Zipcode", "Address*", "Tax ID"]}
                    formValues={data}
                    formType={'shipping_address'}
                    handleInputChange={handleInputChange}
                    additionalClassName={'form-control-container'}/>}
            <h3>Additional Information</h3>
            <FormControl
                data={["Timezone*", "Language*", "Currency*"]}
                formValues={data}
                formType={''}
                handleInputChange={handleInputChange}
                additionalClassName={'form-control-container'}/>
            <div className={'form-footer-buttons-container'}>
                <Button title={'Cancel'} additionalClassName={''} onClick={() => console.log('testing')} />
                <Button title={renderButtonText()} additionalClassName={''} onClick={() => formUtil()} />
            </div>
        </>
    )
}

export default FormControlContainer;