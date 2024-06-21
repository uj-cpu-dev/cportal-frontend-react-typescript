export const formatPhoneNumber = (phoneNumber:string) => {
    if(phoneNumber?.length === 10){
        const phoneStr = phoneNumber.toString();
        return phoneStr.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 -$3');
    }
    return '(000) 000 - 0000'
}
export const formatDateString = (dateString:any) => {
    const date = new Date(dateString);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayOfWeek = days[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${dayOfWeek}, ${month} ${day}, ${year} at ${hours}:${minutes} ${period}`;
}


