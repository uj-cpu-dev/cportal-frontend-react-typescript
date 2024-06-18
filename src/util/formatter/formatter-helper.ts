export const formatPhoneNumber = (phoneNumber:string) => {
    if(phoneNumber?.length === 10){
        const phoneStr = phoneNumber.toString();
        return phoneStr.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 -$3');
    }
    return '(000) 000 - 0000'
}
export const formatDateString = ():string => {
    const dateString = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };

    return new Intl.DateTimeFormat('en-US', options).format(dateString || new Date());
}


