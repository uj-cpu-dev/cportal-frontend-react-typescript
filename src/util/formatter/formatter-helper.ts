export const formatPhoneNumber = (phoneNumber:string) => {
    if(phoneNumber?.length === 10){
        const phoneStr = phoneNumber.toString();
        return phoneStr.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 -$3');
    }
    return '(000) 000 - 0000'
}
export const formatDateString = (dateString:any) => {
    const date = new Date(dateString);
    const options:any = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
    };

    return dateString ? date.toLocaleDateString('en-US', options) : new Date();
}


