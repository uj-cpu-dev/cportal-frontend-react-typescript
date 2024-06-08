export const formatPhoneNumber = (phoneNumber:string) => {
    const phoneStr = phoneNumber.toString();
    return phoneStr.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

export const formatDateString = (inputDate:string) => {
    const [month, day, year] = inputDate.split('/').map(Number);

    const date = new Date(year, month - 1, day);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[date.getMonth()];

    const dayFormatted = date.getDate();
    const yearFormatted = date.getFullYear();

    const hours = 23;
    const minutes = 0;
    const hoursFormatted = hours % 12 || 12;
    const minutesFormatted = String(minutes).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    return `${monthName} ${dayFormatted}, ${yearFormatted} ${hoursFormatted}:${minutesFormatted} ${amPm}`;
}


