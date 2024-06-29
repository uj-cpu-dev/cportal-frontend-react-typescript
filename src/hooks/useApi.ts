import { useCallback, useState } from 'react';

interface FetchOptions {
    method: string;
    headers: { [key: string]: string };
    body?: string | null;
}

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const sendRequest = useCallback(async (url: string, method: string, requestData: any = null) => {
        setLoading(true);
        setError(null);

        try {
            const options: FetchOptions = {
                method: method,
                headers: {}
            };

            if (requestData) {
                options.body = requestData
            } else {
                options.body = null;
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error:", error);
            setError(error as Error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, error, sendRequest };
};

export default useApi;
