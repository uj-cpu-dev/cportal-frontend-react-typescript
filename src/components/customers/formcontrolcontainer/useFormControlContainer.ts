import { useState } from "react";
import { useNavigate} from "react-router-dom";
import useApi from "../../../hooks/useApi";

const useFormControlContainer = (dispatch: any, data:any) => {
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

    const updateCustomer = () => dispatch({type: "UPDATE_CUSTOMER", payload: data})

    const sendRequestUtil = (url:string, method: string, callBack: () => void) => {
        sendRequest(url, method, {
            ...data,
            id: 2,
        }).then(r => callBack()).catch(e => console.log(e))
    }

    const formUtil = () => {
        if(renderButtonText() === 'Create Customer'){
            sendRequestUtil('http://localhost:4000/customers', 'POST', createCustomer)
        }

        if(renderButtonText() === 'Update Customer'){
            sendRequestUtil(`http://localhost:4000/customers/${2}`, 'PUT', updateCustomer)
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