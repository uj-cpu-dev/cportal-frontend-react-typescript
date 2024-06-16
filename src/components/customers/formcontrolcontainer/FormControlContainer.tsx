import React, { useState, FC} from 'react';
import FormControl from "../../control/formControl/FormControl";
import Checkbox from "../../control/checkbox/Checkbox";
import Button from "../../control/button/Button";

const FormControlContainer:FC<{data: any, handleInputChange:any}> = ( { data, handleInputChange } ) => {
    const [shouldShowShippingForm, setShouldShowShippingForm] = useState(true);

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
                <Button title={'Create Customer'} additionalClassName={''} onClick={() => console.log('testing')} />
            </div>
        </>
    )
}

export default FormControlContainer;