import nodemailer from "nodemailer";


const user = process.env.GMAIL;
const pass = process.env.PASS;

export const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user,
        pass
    }
})

export const mailOptions = {
    from: user,
    to: user
}