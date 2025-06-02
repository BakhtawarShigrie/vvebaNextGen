import {NextResponse} from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import {SignJWT} from 'jose';
import {cookies} from 'next/headers';
import bcrypt from 'bcryptjs';

export async function POST(request) {
 await dbConnect();

 try {
  const {email, password} = await request.json();

  // Find admin user
  const admin = await User.findOne({email, role: 'admin'});
  if (!admin) {
   return NextResponse.json(
    {success: false, message: 'Invalid credentials'},
    {status: 401}
   );
  }

  // Verify password
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
   return NextResponse.json(
    {success: false, message: 'Invalid credentials'},
    {status: 401}
   );
  }

  // Create JWT token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({
   id: admin._id.toString(),
   role: admin.role,
  })
   .setProtectedHeader({alg: 'HS256'})
   .setExpirationTime('8h')
   .sign(secret);

  // Set HTTP-only cookie with proper domain/path
  cookies().set('admin_token', token, {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production',
   maxAge: 8 * 60 * 60, // 8 hours
   sameSite: 'strict',
   path: '/',
   // domain: '.yourdomain.com' // Uncomment in production
  });

  return NextResponse.json({
   success: true,
   admin: {
    id: admin._id,
    name: admin.name,
    email: admin.email,
   },
  });
 } catch (error) {
  console.error('Admin Login Error:', error);
  return NextResponse.json(
   {success: false, message: 'Server error'},
   {status: 500}
  );
 }
}
