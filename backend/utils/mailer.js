import nodemailer from 'nodemailer';
import dotenv from "dotenv"
dotenv.config()

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  
});

export const sendMail = async (to, subject, html) => {
  return transporter.sendMail({
    from: `"Auth System" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};



// console.log("EMAIL_USER:", user);
// console.log("EMAIL_PASS:", pass);
