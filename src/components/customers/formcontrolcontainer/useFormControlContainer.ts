import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useGlobalContext } from "../../../context/app-context";
import { Customers } from "../../../context/app-context-type";

const useFormControlContainer = () => {
    const [shouldShowShippingForm, setShouldShowShippingForm] = useState(false);
    const { state, actions} = useGlobalContext();
    const { eachCustomer, generateNewId, global_URL} = state;
    const { dispatch, setEachCustomer} = actions;
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

    const createCustomer = (customer:Customers) =>  dispatch({type: "CREATE_CUSTOMER", payload: customer});
    const updateCustomer = (customer:Customers) => dispatch({type: "UPDATE_CUSTOMER", payload: {...customer, updatedAt: new Date()}});
    const sendRequestUtil = (url:string, method: string, callBack: (customer:Customers) => void) => {
        const payload:any = {
            ...eachCustomer,
            file: eachCustomer?.file,
            id: method === 'POST' ? generateNewId : eachCustomer?.id,
        }

        const formData = new FormData();
        for (const key in payload) {
            if(key === 'address'){
                formData.append(key, JSON.stringify(payload[key]));
            } else {
                formData.append(key, payload[key]);}
        }
        sendRequest(url, method, formData).then(r => callBack(payload)).catch(e => console.log(e))
    }

    const formUtil = () => {
       if(renderButtonText() === 'Create Customer'){
            sendRequestUtil(`${global_URL}/customers`, 'POST', createCustomer)
        }

        if(renderButtonText() === 'Update Customer'){
            sendRequestUtil(`${global_URL}/customers/${eachCustomer?.id}`, 'PUT', updateCustomer)
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
                       country: prevState?.address?.billing_address?.country
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