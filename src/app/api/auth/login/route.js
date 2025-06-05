import {NextResponse} from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

export async function POST(req) {
 try {
  await dbConnect();

  const {email, password} = await req.json();

  const user = await User.findOne({email});
  if (!user) {
   return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
   return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
  }

  if (!user.isVerified) {
   return NextResponse.json(
    {message: 'Please verify your email first'},
    {status: 401}
   );
  }

  const token = jwt.sign(
   {userId: user._id, role: user.role},
   process.env.JWT_SECRET,
   {expiresIn: '1d'}
  );

  return NextResponse.json(
   {
    token,
    user: {
     id: user._id,
     name: user.name,
     email: user.email,
     phone: user.phone,
     cnic: user.cnic,
     role: user.role,
    },
   },
   {status: 200}
  );
 } catch (error) {
  console.error(error);
  return NextResponse.json({message: 'Server error'}, {status: 500});
 }
}
