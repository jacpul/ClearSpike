require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/send-email', (req, res) => {
  const userEmail = req.body.email;
  const userMsg = req.body.message;
  const userName = req.body.name;
  const userNumber = req.body.phone;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASS // Use the application-specific password here
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'lodustar@gmail.com',
    subject: 'Email: ' + userEmail + ' Name: ' + userName + ' Number: ' + userNumber,
    text: userMsg
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
