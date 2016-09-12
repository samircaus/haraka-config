var nodemailer = require('nodemailer');
var smtp = require('nodemailer-smtp-transport');

//config
var smtpConfig = {
    host: '127.0.0.1',
    port: 1025,
    secure: false,
};

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtp(smtpConfig));

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Node client" <node@localhost>', // sender address
    to: 'samir.caus@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello from the other side...', // plaintext body
    html: '<b>Hello from the other side...</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});