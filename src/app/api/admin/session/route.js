import {NextResponse} from 'next/server';
import dbConnect from '@/lib/dbConnect';
import {jwtVerify} from 'jose';
import {cookies} from 'next/headers';

export async function GET(request) {
 await dbConnect();

 try {
  // Get the token from cookies
  const cookieStore = cookies();
  const token = cookieStore.get('admin_token')?.value;

  console.log('Token from cookies:', token); // Debugging

  if (!token) {
   console.log('No token found');
   return NextResponse.json(
    {success: false, message: 'Unauthorized - No token provided'},
    {status: 401}
   );
  }

  // Verify JWT
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const {payload} = await jwtVerify(token, secret);

  console.log('Token payload:', payload); // Debugging

  if (payload.role !== 'admin') {
   console.log('User is not admin');
   return NextResponse.json(
    {success: false, message: 'Admin access required'},
    {status: 403}
   );
  }

  return NextResponse.json({
   success: true,
   admin: {
    id: payload.id,
    role: payload.role,
   },
  });
 } catch (error) {
  console.error('Session check error:', error);
  return NextResponse.json(
   {
    success: false,
    message: 'Unauthorized - Invalid token',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined,
   },
   {status: 401}
  );
 }
}
