import mongoose from 'mongoose';

const SeminarSchema = new mongoose.Schema(
 {
  date: {type: Date, required: true},
  timeSlot: {type: String, required: true, enum: ['2PM-5PM']},
  maxCapacity: {type: Number, default: 100},
  attendees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 },
 {timestamps: true}
);

SeminarSchema.index({date: 1, timeSlot: 1}, {unique: true});

export default mongoose.models.Seminar ||
 mongoose.model('Seminar', SeminarSchema);
