import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SMTP_USER || 'technical.ninjainfosys@gmail.com',
    pass: process.env.EMAIL_SMTP_PASS || '',
  },
});

export const sendEmailNotification = async (subject: string, text: string, html: string) => {
  try {
    const to = process.env.EMAIL_TO || 'technical.ninjainfosys@gmail.com';
    const info = await transporter.sendMail({
      from: `"Ninja Infosys" <${process.env.EMAIL_SMTP_USER || 'technical.ninjainfosys@gmail.com'}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
