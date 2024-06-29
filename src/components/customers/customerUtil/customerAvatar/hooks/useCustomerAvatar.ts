import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../../../context/app-context";


const useCustomerAvatar = (filedata:any, filetype:string) => {
    const [imgSrc, setImgSrc] = useState<Blob | MediaSource | any>(null);
    const [updatingImg, setUpdatingImg] = useState(false);
    const { actions} = useGlobalContext();
    const {setEachCustomer, transformImageToImageType} = actions;
    const location = useLocation();
    const isOnView = location.pathname.includes('view');
    const avatarClass = {
        width: 'inherit',
        height: 'inherit'
    }

    useEffect(() => {
        setUpdatingImg(false)
    }, [location]);

    useEffect(() => {
        if((filedata?.data?.length > 0 && filetype) || isOnView){
            setImgSrc(transformImageToImageType(filedata, filetype));
        }
    }, [filedata, filetype, isOnView]); // eslint-disable-line react-hooks/exhaustive-deps

    const updateImgSrc = (event: ChangeEvent<HTMLInputElement | any>) => {
        const file = event?.target?.files[0];
        const name = event?.target?.name;
        if(file){
            setUpdatingImg(true)
            setImgSrc(file)
            setEachCustomer((prev: any) => ({
                    ...prev,
                    filename: '',
                    filedata: '',
                    filetype: '',
                    [name]: file ? file : ''}
            ));
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

