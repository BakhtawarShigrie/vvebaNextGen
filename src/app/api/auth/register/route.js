

import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import {SignJWT} from 'jose';
import {cookies} from 'next/headers';

await dbConnect();
export async function POST(request) {
    const reqBody = await request.json();

 try {
  const {name, email, phone, cnic, password} = reqBody;

  // Check if user exists
  const existingUser = await User.findOne({$or: [{email}, {cnic}]});
  if (existingUser) {
   return Response.json(
    {
     success: false,
     message: 'User already exists with this email or CNIC',
    },
    {status: 400}
   );
  }

  // Create new user
  const user = new User({name, email, phone, cnic, password});
  await user.save();

  // Create token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({id: user._id})
   .setProtectedHeader({alg: 'HS256'})
   .setExpirationTime('30d')
   .sign(secret);

  // Set cookie
  cookies().set('token', token, {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production',
   maxAge: 30 * 24 * 60 * 60,
   sameSite: 'strict',
   path: '/',
  });

  return Response.json({
   success: true,
   user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
   },
  });
 } catch (error) {
  return Response.json(
   {success: false, message: 'Server error'},
   {status: 500}
  );
 }
}
