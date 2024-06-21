import {useCallback, useState} from 'react';

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
                headers: {
                    "Content-Type": "application/json",
                },
            };

            if (requestData) {
                options.body = JSON.stringify(requestData);
            } else {
                options.body = null;
            }

            // For DELETE requests, body should not be included
            if (method === 'DELETE') {
                delete options.body;
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            return await response.json(); // Returning result can be useful for further processing
        } catch (error) {
            console.error("Error:", error);
            setError(error as Error);
            // Optionally, rethrow the error if you want it to be handled by the caller
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, error, sendRequest };
};

export default useApi;
