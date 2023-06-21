const express = require('express');
const accountSid = 'AC66d8e535e3dbffbe25075ac4a646bab6';
const authToken = 'a163762e232b6c514a5b66555abe3b35';


exports.sendotp = async(req,res) => {
    const mobilenumb= req.body.contactnumb;
    const client = require("twilio")(accountSid, authToken);
    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        client.messages
            .create({  
                body: 'Your OTP is '+ otp,
                from: '+12179879846',
                to: mobilenumb
            })
            .then(message => console.log(message.sid))
            .done();
        // client.verify.v2
        // .services(verifySid)
        // .verifications.create({ to: mobilenumb, channel: "sms" })
        // .then((verification) => {})
        // .then(() => {
            
        //     client.verify.v2
        //       .services(verifySid)
        //       .verificationChecks.create({ to: mobilenumb, code: otp })
        //       .then((verification_check) => console.log(verification_check.status))
        //       .then(() => readline.close());
        //       res.status(201).json({number: mobilenumb, otp: otp})
        // });      
        res.status(201).json({number: mobilenumb, otp: otp})
        
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}
