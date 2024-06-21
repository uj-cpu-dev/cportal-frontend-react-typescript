
export const formValidator = (formVal:any) => {
    let formCheck = false;

    if(!formVal?.name){
        formCheck = true;
    }

    if(!formVal?.email){
        formCheck = true;
    }

    if(!formVal?.phone){
        formCheck = true;
    }

    if(!formVal?.address?.billing_address?.city){
        formCheck = true;
    }

    if(!formVal?.address?.billing_address?.state){
        formCheck = true;
    }

    if(!formVal?.address?.billing_address?.country){
        formCheck = true;
    }

    if(!formVal?.address?.billing_address?.zipcode){
        formCheck = true;
    }

    if(!formVal?.address?.billing_address?.street){
        formCheck = true;
    }

    if(!formVal?.address?.shipping_address?.city){
        formCheck = true;
    }

    if(!formVal?.address?.shipping_address?.state){
        formCheck = true;
    }

    if(!formVal?.address?.shipping_address?.country){
        formCheck = true;
    }

    if(!formVal?.address?.shipping_address?.zipcode){
        formCheck = true;
    }

    if(!formVal?.address?.shipping_address?.street){
        formCheck = true;
    }

    return formCheck;
}