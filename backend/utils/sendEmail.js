const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_APP_PASS,
  },
});

const sendEmail = async (to, message) => {
  await transporter.sendMail({
    from: `Nikhith from Zerodha <${process.env.EMAIL}>`,
    to,
    subject: "Email Verification OTP",
    html: message,
  });
};

module.exports = sendEmail;
