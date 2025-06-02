import dbConnect from '@/lib/dbConnect';
import Seminar from '@/models/Seminar';
import Booking from '@/models/Booking';
import mongoose from 'mongoose';
import {jwtVerify} from 'jose';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

await dbConnect();

export async function GET() {

 try {
  const token = cookies().get('token')?.value;
  if (!token) {
   return NextResponse.json(
    {success: false, message: 'Unauthorized'},
    {status: 401}
   );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  await jwtVerify(token, secret);

  // Get seminars for next 30 days
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30);

  const seminars = await Seminar.find({
   date: {$gte: startDate, $lte: endDate},
  }).populate('attendees', 'name email');

  return NextResponse.json({success: true, data: seminars});
 } catch (error) {
  return NextResponse.json(
   {success: false, message: 'Server error'},
   {status: 500}
  );
 }
}

export async function POST(request) {
 try {
  await dbConnect();

  // Authentication check
  const token = cookies().get('token')?.value;
  if (!token) {
   return NextResponse.json(
    {success: false, message: 'Unauthorized'},
    {status: 401}
   );
  }

  // Verify JWT
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const {payload} = await jwtVerify(token, secret);

  // Convert payload.id to proper ObjectId
  let userId;
  try {
   // Handle both string and buffer cases
   if (typeof payload.id === 'string') {
    userId = new mongoose.Types.ObjectId(payload.id);
   } else if (payload.id?.buffer) {
    userId = new mongoose.Types.ObjectId(
     Buffer.from(Object.values(payload.id.buffer))
    );
   } else {
    throw new Error('Invalid user ID format');
   }
  } catch (error) {
   return NextResponse.json(
    {success: false, message: 'Invalid user ID format'},
    {status: 400}
   );
  }

  // Parse request body
  const body = await request.json();
  if (!body.date || !body.timeSlot) {
   return NextResponse.json(
    {success: false, message: 'Missing date or timeSlot'},
    {status: 400}
   );
  }

  // Start transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
   // Check if seminar exists or create new one
   let seminar = await Seminar.findOne(
    {date: new Date(body.date), timeSlot: body.timeSlot},
    null,
    {session}
   );

   if (!seminar) {
    seminar = new Seminar({
     date: new Date(body.date),
     timeSlot: body.timeSlot,
    });
    await seminar.save({session});
   }

   // Check if user already booked
   const existingBooking = await Booking.findOne(
    {
     user: userId,
     seminar: seminar._id,
    },
    null,
    {session}
   );

   if (existingBooking) {
    await session.abortTransaction();
    return NextResponse.json(
     {success: false, message: 'You have already booked this seminar'},
     {status: 400}
    );
   }

   // Check capacity
   if (seminar.attendees.length >= seminar.maxCapacity) {
    await session.abortTransaction();
    return NextResponse.json(
     {success: false, message: 'Seminar is fully booked'},
     {status: 400}
    );
   }

   // Create booking
   const booking = new Booking({
    user: userId,
    seminar: seminar._id,
   });
   await booking.save({session});

   // Add user to seminar attendees
   seminar.attendees.push(userId);
   await seminar.save({session});

   await session.commitTransaction();

   return NextResponse.json({
    success: true,
    data: {
     bookingId: booking._id,
     seminarId: seminar._id,
     date: seminar.date,
     timeSlot: seminar.timeSlot,
    },
   });
  } catch (error) {
   await session.abortTransaction();
   console.error('Transaction error:', error);
   return NextResponse.json(
    {success: false, message: 'Transaction failed', error: error.message},
    {status: 500}
   );
  } finally {
   session.endSession();
  }
 } catch (error) {
  console.error('API Error:', error);
  return NextResponse.json(
   {
    success: false,
    message: 'Server error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined,
   },
   {status: 500}
  );
 }
}