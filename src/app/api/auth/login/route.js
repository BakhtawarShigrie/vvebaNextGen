
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import {SignJWT} from 'jose';
import {cookies} from 'next/headers';

export async function POST(request) {
 await dbConnect();

 try {
  const {email, password} = await request.json();

  const user = await User.findOne({email});
  if (!user) {
   return Response.json(
    {success: false, message: 'Invalid credentials'},
    {status: 401}
   );
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
   return Response.json(
    {success: false, message: 'Invalid credentials'},
    {status: 401}
   );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({id: user._id})
   .setProtectedHeader({alg: 'HS256'})
   .setExpirationTime('30d')
   .sign(secret);

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
