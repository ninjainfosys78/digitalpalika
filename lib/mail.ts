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
    const to = process.env.EMAIL_TO || 'contact@ninjainfosys.com';
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

export const buildEmailTemplate = (title: string, details: Record<string, any>) => {
  const fieldsHtml = Object.entries(details)
    .filter(([_, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
          <strong style="color: #666666; font-size: 13px; text-transform: uppercase;">${key}</strong>
          <div style="font-size: 15px; color: #111111; margin-top: 4px; word-break: break-word;">${value === true ? "Yes" : value === false ? "No" : value}</div>
        </td>
      </tr>
    `).join("");

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="background-color: #000000; padding: 32px 40px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">${title}</h1>
      </div>
      <div style="padding: 40px;">
        <p style="color: #555555; font-size: 16px; margin-top: 0; margin-bottom: 24px; line-height: 1.5;">You have received a new notification from the Ninja Infosys system.</p>
        <table style="width: 100%; border-collapse: collapse;">
          ${fieldsHtml}
        </table>
      </div>
      <div style="background-color: #fafafa; padding: 24px 40px; text-align: center; border-top: 1px solid #eeeeee;">
        <p style="color: #888888; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Ninja Infosys</p>
      </div>
    </div>
  </body>
  </html>
  `;
};
