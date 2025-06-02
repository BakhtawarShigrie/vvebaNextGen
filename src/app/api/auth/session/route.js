

import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import {jwtVerify} from 'jose';
import {cookies} from 'next/headers';

export async function GET() {
 await dbConnect();

 try {
  const token = cookies().get('token')?.value;
  if (!token) {
   return Response.json(
    {success: false, message: 'Unauthorized'},
    {status: 401}
   );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const {payload} = await jwtVerify(token, secret);

  const user = await User.findById(payload.id).select('-password');
  if (!user) {
   return Response.json(
    {success: false, message: 'User not found'},
    {status: 404}
   );
  }

  return Response.json({success: true, user});
 } catch (error) {
  return Response.json(
   {success: false, message: 'Unauthorized'},
   {status: 401}
  );
 }
}
