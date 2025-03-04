import nodemailer from 'nodemailer';
import { getEmailTemplate } from './email-template';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendResponseEmail = async (
  senderEmail: string,
  senderName: string,
  recipientName: string,
  response: "accepted" | "rejected"
) => {
  const { subject, html } = getEmailTemplate(recipientName, senderName, response);

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: senderEmail,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}; 