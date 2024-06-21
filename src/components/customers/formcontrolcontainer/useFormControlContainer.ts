import { useState } from "react";
import { useNavigate} from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useGlobalContext } from "../../../context/app-context";

const useFormControlContainer = () => {
    const [shouldShowShippingForm, setShouldShowShippingForm] = useState(false);
    const { state, actions} = useGlobalContext()
    const { eachCustomer} = state;
    const { dispatch, generateId} = actions;
    const navigate = useNavigate();
    const { sendRequest } = useApi();
    const payload = {
        ...eachCustomer,
        id: generateId()
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
        sendRequest(url, method, payload).then(r => callBack()).catch(e => console.log(e))
    }

    const formUtil = () => {
        if(renderButtonText() === 'Create Customer'){
            sendRequestUtil('http://localhost:4000/customers', 'POST', createCustomer)
        }

        if(renderButtonText() === 'Update Customer'){
            sendRequestUtil(`http://localhost:4000/customers/${eachCustomer?.id}`, 'PUT', updateCustomer)
        }

        navigate('/')
        return null;
    }


    return{
        shouldShowShippingForm,
        setShouldShowShippingForm,
        renderButtonText,
        formUtil
    }
}

export default useFormControlContainer;