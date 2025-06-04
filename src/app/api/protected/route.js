import {NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req) {
 const authHeader = req.headers.get('authorization');

 if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return NextResponse.json({message: 'Unauthorized'}, {status: 401});
 }

 const token = authHeader.split(' ')[1];

 try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Role-based access control
  if (decoded.role !== 'admin') {
   return NextResponse.json(
    {message: 'Forbidden - Admin access required'},
    {status: 403}
   );
  }

  return NextResponse.json(
   {
    message: 'Protected data',
    user: decoded,
   },
   {status: 200}
  );
 } catch (error) {
  console.error(error);
  return NextResponse.json({message: 'Invalid token'}, {status: 401});
 }
}
