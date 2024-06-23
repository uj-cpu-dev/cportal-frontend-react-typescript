import {ChangeEvent, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Buffer} from "buffer";


const useCustomerAvatar = (eachCustomer:any = {}, setEachCustomer:any) => {
    const [imgSrc, setImgSrc] = useState<Blob | MediaSource | any>(null);
    const [updatingImg, setUpdatingImg] = useState(false);
    const location = useLocation();
    const avatarClass = {
        width: 'inherit',
        height: 'inherit'
    }

    useEffect(() => {
        setUpdatingImg(false)
    }, [location]);

    useEffect(() => {
        if(eachCustomer?.filedata && eachCustomer?.filetype){
            const buffer = Buffer.from(eachCustomer?.filedata);

            const blob = new Blob([buffer], { type: eachCustomer?.filetype });

            const objectURL = URL.createObjectURL(blob);

            setImgSrc(objectURL);
        }
    }, [eachCustomer?.filedata, eachCustomer?.filetype]);
    const updateImgSrc = (event: ChangeEvent<HTMLInputElement | any>) => {
        const file = event?.target?.files[0];
        const name = event?.target?.name;
        if(file){
            setUpdatingImg(true)
            setImgSrc(file)
            setEachCustomer((prev: any) => ({ ...prev, [name]: file ? file : ''}));
        }
    }

    return{
        avatarClass,
        imgSrc,
        updateImgSrc,
        updatingImg
    }
}

export default useCustomerAvatar;

