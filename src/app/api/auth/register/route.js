import {sendOTPEmail} from '@/lib/emailService';
import {NextResponse} from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import {v4 as uuidv4} from 'uuid';

// Enable only POST method
export async function POST(req) {
 try {
  await dbConnect();

  const body = await req.json();
  const {name, email, password, role = 'user'} = body;

  // Check if user already exists
  const existingUser = await User.findOne({email});
  if (existingUser) {
   return NextResponse.json({message: 'User already exists'}, {status: 400});
  }

  // Generate OTP
  const otp = uuidv4().substring(0, 6);
  const otpExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

  // Create user
  const user = new User({
   name,
   email,
   password,
   role,
   otp,
   otpExpires,
  });

  await user.save();

  

  const mailOptions = {
   from: process.env.EMAIL_USER,
   to: email,
   subject: 'Verify Your Email',
   html: `
        <div>
          <h2>Email Verification</h2>
          <p>Your OTP code is: <strong>${otp}</strong></p>
          <p>This code will expire in 15 minutes.</p>
        </div>
      `,
  };
  sendOTPEmail(email, otp);

  return NextResponse.json(
   {
    message:
     'User registered successfully. Please check your email for verification.',
    userId: user._id,
   },
   {status: 201}
  );
 } catch (error) {
  console.error(error);
  return NextResponse.json({message: 'Server error'}, {status: 500});
 }
}
