import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import {NextResponse} from 'next/server';

export async function POST(request) {
 try {
  await dbConnect();

  const body = await request.json();
  const {userId, otp} = body;

  const user = await User.findById(userId);
  if (!user) {
   return NextResponse.json({message: 'User not found'}, {status: 404});
  }

  if (user.isVerified) {
   return NextResponse.json({message: 'User already verified'}, {status: 400});
  }

  if (user.otp !== otp || new Date() > new Date(user.otpExpires)) {
   return NextResponse.json({message: 'Invalid or expired OTP'}, {status: 400});
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();

  return NextResponse.json(
   {message: 'Email verified successfully'},
   {status: 200}
  );
 } catch (error) {
  console.error(error);
  return NextResponse.json({message: 'Server error'}, {status: 500});
 }
}
