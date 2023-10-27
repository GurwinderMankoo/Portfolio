export const emailRegx = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/


export function errorHandler(value: string | boolean, name: string) {
    if(typeof value === "string" && value.trim() === ""){
        return `This field is required`
    } else if(typeof value === "string" && name === 'email' && !emailRegx.test(value)){
        return 'Please enter a valid email'
    } else if(typeof value === "string" && name === 'subject' && value.length <=6) {
        return 'Subject should have atleast 7 charcters or long'
    } else if(typeof value === "string" && name === 'message' && value.length <=10) {
        return 'Subject should have atleast 10 charcters or long'
    } else {
        return ''
    }
}