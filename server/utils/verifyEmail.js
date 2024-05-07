import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { gmailContent, gmailContentforTeacher } from './emailTemplate.js';

const SECRET_KEY = 'adnagnangnkdag'

export const generateverificationToken = (email) => {
  return jwt.sign({ email: email },SECRET_KEY, { expiresIn: '1d' })
}

export const sendVerificationEmail = async (recipientEmail, verificationToken, username) => {
  try {
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
          }

      })

      const emailcontent = gmailContent(verificationToken,username);

      await transporter.sendMail({
          from: process.env.EMAIL,
          to: recipientEmail,
          subject: 'Email Verification',
          html: emailcontent
      })

      console.log("Verification email has been sent");

  } catch (error) {
      console.error('Error sending verification email:', error);
  }
}

export const sendVerificationEmailToTeacher = async (recipientEmail, verificationToken, username) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
  
        })
  
        const emailcontent = gmailContentforTeacher(verificationToken,username);
  
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Email Verification',
            html: emailcontent
        })
  
        console.log("Verification email has been sent");
  
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
  }