// // Download the helper library from https://www.twilio.com/docs/node/install
// // Set environment variables for your credentials
// // Read more at http://twil.io/secure
// const accountSid = "AC66d8e535e3dbffbe25075ac4a646bab6";
// const authToken = "a163762e232b6c514a5b66555abe3b35";
// const verifySid = "VAefd6a9724fe99f8bb7989dbdb59b8822";
// const client = require("twilio")(accountSid, authToken);

// client.verify.v2
//   .services(verifySid)
//   .verifications.create({ to: "+917989772884", channel: "sms" })
//   .then((verification) => console.log(verification.status))
//   .then(() => {
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     readline.question("Please enter the OTP:", (otpCode) => {
//       client.verify.v2
//         .services(verifySid)
//         .verificationChecks.create({ to: "+919642469290", code: otpCode })
//         .then((verification_check) => console.log(verification_check.status))
//         .then(() => readline.close());
//     });
//   });


const otp = Math.floor(100000 + Math.random() * 900000)

console.log(otp)
