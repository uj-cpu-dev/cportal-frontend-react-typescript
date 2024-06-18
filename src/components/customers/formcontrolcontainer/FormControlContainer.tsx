import React, { useState, FC} from 'react';
import FormControl from "../../control/formControl/FormControl";
import Checkbox from "../../control/checkbox/Checkbox";
import Button from "../../control/button/Button";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";

const FormControlContainer:FC<{data: any, handleInputChange:any, dispatch:any}> = ( { data, handleInputChange, dispatch } ) => {
    const [shouldShowShippingForm, setShouldShowShippingForm] = useState(true);
    const navigate = useNavigate();
    const { sendRequest } = useApi();

    const renderButtonText = () => {
        const url =  window.location.pathname;
        let btnText = '';
        if(url.includes('create')){
            btnText = 'Create Customer'
        }

        if(url.includes('edit')){
            btnText = 'Update Customer'
        }

        return btnText;
    }

    const createCustomer = () =>  dispatch({type: "CREATE_CUSTOMER", payload: data})

    const formUtil = () => {
        if(renderButtonText() === 'Create Customer'){
            sendRequest('http://localhost:4000/customers', 'POST', data)
                .then(r => createCustomer())
                .catch(e => console.log(e))
        }

        if(renderButtonText() === 'Update Customer'){
            dispatch({type: "UPDATE_CUSTOMER", payload: data})
        }

        navigate('/')
        return null;
    }


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