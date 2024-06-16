import { format, parseISO } from 'date-fns';

export const formatPhoneNumber = (phoneNumber:string) => {
    if(phoneNumber?.length === 10){
        const phoneStr = phoneNumber.toString();
        return phoneStr.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 -$3');
    }
    return '(000) 000 - 0000'
}
export const formatDateString = (dateString: string): string => {
    const date = parseISO(dateString);

    const monthDayYear = format(date, 'MMMM do, yyyy');
    const hourMinute = format(date, 'HH:mma').toLowerCase();

    return `${monthDayYear} ${hourMinute}`;
}


