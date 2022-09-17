const nodemailer = require('nodemailer');

const Email = (mailOptions) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    },
  })
  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
  })
}

// send email
const EmailSender = ({ name, email, message }) => {
  const mailOptions = {
    from: process.env.SEND_FROM,
    to: process.env.SEND_TO,
    subject: 'Message From Contact Page',
    html: `
      <p>Name: <b>${name}</b></p>
      <p>Email: <b>${email}</b></p>
      <p>Message: <b>${message}</b></p>
    `,
  };

  Email(mailOptions);
}

module.exports = EmailSender;
