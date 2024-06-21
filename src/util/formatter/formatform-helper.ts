
export const formatForm = (formValue:string) => {
    let value = '';
    switch(formValue) {
        case "Name*":
            value = 'name'
            break;
        case "Email Address*":
            value = 'email'
            break;
        case "Phone Number*":
            value = 'phone'
            break;
        case "Company":
            value = 'company_name'
            break;
        case "Country*":
            value = 'country'
            break;
        case "City*":
            value = 'city'
            break;
        case "State*":
            value = 'state'
            break;
        case "Zipcode":
            value = 'zipcode'
            break;
        case "Address*":
            value = 'street'
            break;
        default:
    }
    return value;
}