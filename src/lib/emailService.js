import nodemailer from 'nodemailer';


// Send Password email
export async function sendOTPEmail(email, otp) {
 // Create transporter (configure with your email service)
 const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
   user: process.env.EMAIL_USER, // vvebanextgen@gmail.com
   pass: process.env.EMAIL_PASS, // lnrq ffld bnju yvfn
  },
 });

 // Email options
 const mailOptions = {
  from: process.env.EMAIL_FROM,
  to: email,
  text: `Your OTP is: ${otp}\n\n For email varification.`,
  subject: 'Verify Your Email',
  html: `
       <div>
         <h2>Email Verification</h2>
         <p>Your OTP code is: <strong>${otp}</strong></p>
         <p>This code will expire in 15 minutes.</p>
       </div>
     `,
 };

 // Send email
 await transporter.sendMail(mailOptions);
}
