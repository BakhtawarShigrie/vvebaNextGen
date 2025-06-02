import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
 {
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  seminar: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Seminar',
   required: true,
  },
  status: {
   type: String,
   enum: ['confirmed', 'cancelled'],
   default: 'confirmed',
  },
 },
 {timestamps: true}
);

export default mongoose.models.Booking ||
 mongoose.model('Booking', BookingSchema);
