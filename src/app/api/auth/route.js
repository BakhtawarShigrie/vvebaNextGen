import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/Booking';
import {NextResponse} from 'next/server';

export async function GET(request) {
 try {
  await dbConnect();
  // Get query parameters for filtering
  const {searchParams} = new URL(request.url);
  const date = searchParams.get('date');
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;

  // Build query
  const query = {};
  if (date) {
   const startDate = new Date(date);
   const endDate = new Date(date);
   endDate.setDate(endDate.getDate() + 1);

   query['seminar.date'] = {
    $gte: startDate,
    $lt: endDate,
   };
  }

  // Get bookings with populated user and seminar data
  const bookings = await Booking.find(query)
   .populate({
    path: 'user',
    select: 'name email phone cnic',
   })
   .populate({
    path: 'seminar',
    select: 'date timeSlot',
   })
   .sort({'seminar.date': 1})
   .skip((page - 1) * limit)
   .limit(limit);

  // Get total count for pagination
  const total = await Booking.countDocuments(query);

  return NextResponse.json({
   success: true,
   data: bookings,
   pagination: {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
   },
  });
 } catch (error) {
  console.error('Admin API Error:', error);
  return NextResponse.json(
   {success: false, message: 'Server error'},
   {status: 500}
  );
 }
}
