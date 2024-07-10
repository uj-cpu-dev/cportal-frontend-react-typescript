interface FetchOptions {
    method: string;
    headers: { [key: string]: string };
    body?: any;
}
const useDeleteSelectedCustomersApi = () => {
    const handleDeleteSelectedCustomers = async (ids: number[], url:string) => {

        try {
            const deleteOptions: FetchOptions = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify({
                    ids: ids
                })
            }
            const response = await fetch(`${url}/customers/api/deleteAll`, deleteOptions);

            if (response.status === 200) {
                console.log('Customers deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting customers:', error);
        }
    }

    return {
        handleDeleteSelectedCustomers
    }
}

export default useDeleteSelectedCustomersApi;