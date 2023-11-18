"use strict";
require('dotenv').config();
const nodemailer = require("nodemailer");
const authEmail =process.env.AUTHEMAIL;
const authPass =process.env.AUTHPASS;

// async..await is not allowed in global scope, must use a wrapper
async function main(email,name) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: authEmail, // generated ethereal user
        pass: authPass, // generated ethereal password 
    },
  });

  const contenidoHTML = 
    `
    <h1>Hola ${name}</h1>
    <br>
    <h2>Gracias por contactarnos</h2>
    <br>
    <p>Pronto nos pondremos en contacto con usted</p>
    `;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Sensive', // sender address
    to: `${email}`, // list of receivers
    subject: 'Formulario de contacto recibido', // Subject line
    html: contenidoHTML // html body
  });

}

main().catch(console.error);

module.exports = main;
