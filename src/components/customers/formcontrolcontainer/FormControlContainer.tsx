import React, { FC } from 'react';
import FormControl from "../../control/formControl/FormControl";
import Checkbox from "../../control/checkbox/Checkbox";
import Button from "../../control/button/Button";
import useFormControlContainer from "./useFormControlContainer";
import './formcontrolcontainer.css'
import { formValidator } from "../../../util/formvalidator";
import { FormControlContainerType } from "./formcontrolcontainer-type";

const FormControlContainer:FC<FormControlContainerType> = ( { data, handleInputChange, handleBackClick } ) => {
    const {
        shouldShowShippingForm,
        renderButtonText,
        formUtil,
        updateFormAddress
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
                <Checkbox label={'Same as billing address'} isChecked={shouldShowShippingForm} onChange={(e) => updateFormAddress(e.target.checked)}  />
            </div>
            <FormControl
                data={["Country*", "State*", "City*", "Zipcode", "Address*", "Tax ID"]}
                formValues={data}
                formType={'shipping_address'}
                handleInputChange={handleInputChange}
                additionalClassName={'form-control-container'}/>
            <h3>Additional Information</h3>
            <FormControl
                data={["Timezone*", "Language*", "Currency*"]}
                formValues={data}
                formType={''}
                handleInputChange={handleInputChange}
                additionalClassName={'form-control-container'}/>
            <div className={'form-footer-buttons-container'}>
                <Button
                    title={'Cancel'}
                    additionalClassName={''}
                    onClick={() => () => handleBackClick()}
                    disabled={false}
                />
                <Button
                    title={renderButtonText()}
                    additionalClassName={`${formValidator(data) ? 'disabled-btn' : ''}`}
                    onClick={() => formUtil()}
                    disabled={formValidator(data)}
                />
            </div>
        </>
    )
}

export default FormControlContainer;