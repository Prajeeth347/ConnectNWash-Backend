const express = require('express');
var nodemailer = require('nodemailer');

exports.sendemailnode = async(req,res) => {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'connectnwash@gmail.com',
              pass: 'Pwd Sai@3344'
            }
          });
          
          var mailOptions = {
            from: 'connectnwash@gmail.com',
            to: 'prajeeth347@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              res.status(404).json({ message: "fail", error: error });
            } else {
              console.log('Email sent: ' + info.response);
              res.status(200).json({"Status": "Email Sent"})
            }
          });
        
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}
