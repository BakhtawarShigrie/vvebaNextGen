import dbConnect from '@/lib/dbConnect';
import Seminar from '@/models/Seminar';
import Booking from '@/models/Booking';
import mongoose from 'mongoose';
import {NextResponse} from 'next/server';

await dbConnect();

// Get seminars for the next 30 days
export async function GET() {
 try {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30);

  const seminars = await Seminar.find({
   date: {$gte: startDate, $lte: endDate},
  }).populate('attendees', 'name email');

  return NextResponse.json({success: true, data: seminars});
 } catch (error) {
  console.error('GET error:', error);
  return NextResponse.json(
   {success: false, message: 'Server error'},
   {status: 500}
  );
 }
}

// Book a seminar
export async function POST(request) {
 try {
  await dbConnect();

  const body = await request.json();
  const {userId, date, timeSlot} = body;

  if (!userId || !date || !timeSlot) {
   return NextResponse.json(
    {success: false, message: 'Missing userId, date, or timeSlot'},
    {status: 400}
   );
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
   // Check or create seminar
   let seminar = await Seminar.findOne({date: new Date(date), timeSlot}, null, {
    session,
   });

   if (!seminar) {
    seminar = new Seminar({
     date: new Date(date),
     timeSlot,
    });
    await seminar.save({session});
   }

   // Already booked?
   const existingBooking = await Booking.findOne(
    {user: userId, seminar: seminar._id},
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

   // Check seminar capacity
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