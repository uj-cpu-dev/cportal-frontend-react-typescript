import { useState, useEffect } from 'react';

const useFetch = (url:any, param:string) => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("Received non-JSON response");
                }

                const data = await response.json();
                setData(data[param]);
                setIsLoading(false);
                setIsError(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
                console.error("Error fetching data:", error);
            }
        };

        if(url && param)  fetchData();

    }, [url, param]);

     return [data, isLoading, isError];
}

export default useFetch;