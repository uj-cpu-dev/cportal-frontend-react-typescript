import { useState } from "react";
import { useNavigate} from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useGlobalContext } from "../../../context/app-context";

const useFormControlContainer = () => {
    const [shouldShowShippingForm, setShouldShowShippingForm] = useState(false);
    const { state, actions} = useGlobalContext()
    const { eachCustomer} = state;
    const { dispatch, generateId, setEachCustomer} = actions;
    const navigate = useNavigate();
    const { sendRequest } = useApi();
    const payload:any = {
        ...eachCustomer,
        //id: generateId()
    }

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

    const createCustomer = () =>  dispatch({type: "CREATE_CUSTOMER", payload: payload})

    const updateCustomer = () => dispatch({type: "UPDATE_CUSTOMER", payload: payload})

    const sendRequestUtil = (url:string, method: string, callBack: () => void) => {
        const formData = new FormData();
        formData.append('id', method === 'POST' ? generateId().toString() : eachCustomer?.id.toString());
        for (const key in eachCustomer) {
            if(key === 'address'){
                formData.append(key, JSON.stringify(eachCustomer[key]));
            } else {
                formData.append(key, payload[key]);
            }
        }
        sendRequest(url, method, formData).then(r => callBack()).catch(e => console.log(e))
    }

    const formUtil = () => {
        if(renderButtonText() === 'Create Customer'){
            sendRequestUtil('http://localhost:4000/customers', 'POST', createCustomer)
        }

        if(renderButtonText() === 'Update Customer'){
            sendRequestUtil(`http://localhost:4000/customers/${eachCustomer?.id}`, 'PUT', updateCustomer)
        }

        navigate('/');
        return;
    }

    const updateFormAddress = (isChecked:boolean = false) => {
        if(isChecked){
           setEachCustomer((prevState:any) => ({
               ...prevState,
               address: {
                   ...prevState?.address,
                   shipping_address: {
                       street: prevState?.address?.billing_address?.street,
                       city: prevState?.address?.billing_address?.city,
                       state: prevState?.address?.billing_address?.state,
                       zipcode: prevState?.address?.billing_address?.zipcode,
                       country: prevState?.address?.billing_address?.zipcode
                   }
               }
           }))
        } else {
            setEachCustomer((prevState:any) => ({
                ...prevState,
                address: {
                    ...prevState?.address,
                    shipping_address: {}
                }
            }))
        }
        setShouldShowShippingForm(isChecked);
    }


    return{
        shouldShowShippingForm,
        setShouldShowShippingForm,
        renderButtonText,
        formUtil,
        updateFormAddress
    }
}

export default useFormControlContainer;