import { useState, useEffect } from 'react';

const useFetch = (url:any, param:string) => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

     const getData = async() => {
         setIsLoading(true);
         setIsError(false);
        try {
            const fetchData = await fetch(url);
            const data = await fetchData.json()
            setData(data[param]);
            setIsLoading(false);
            setIsError(false);
        } catch(error) {
            setIsLoading(false);
            setIsError(true);
            throw new Error(`${error}`)
        }
    }

    useEffect(() => {
       if(url) getData();
    }, [url]);

     return [data, isLoading, isError];
}

export default useFetch;