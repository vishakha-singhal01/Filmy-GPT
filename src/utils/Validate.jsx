export const checkValidateData = (email,Password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)

    if(!emailRegex) return "Please enter valid email id"
    if(!passwordRegex) return "Password not valid"

    return null;   
}