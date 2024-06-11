
export const urlHeader = () => {
    let path = window.location.pathname.split('/');
    let showBtn = false;

    if(path.includes('customers') && path.includes('create')){
        showBtn = false;
    }

    if(!path.includes('create') && path.includes('customers')){
        showBtn = true;
    }

    return showBtn;
}