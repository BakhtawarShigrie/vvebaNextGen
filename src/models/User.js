// models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
 {
  name: {
   type: String,
   required: true,
  },
  email: {
   type: String,
   required: true,
   unique: true,
  },
  password: {
   type: String,
   required: true,
  },
  phone: {
   type: String,
   required: true,
  },
  cnic: {
   type: String,
   required: true,
  },
  role: {
   type: String,
   enum: ['user', 'admin'],
   default: 'user',
  },
  isVerified: {
   type: Boolean,
   default: false,
  },
  otp: {
   type: String,
  },
  otpExpires: {
   type: Date,
  },
 },
 {timestamps: true}
);

// Hash password before saving
userSchema.pre('save', async function (next) {
 if (!this.isModified('password')) return next();
 this.password = await bcrypt.hash(this.password, 10);
 next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
 return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model('User', userSchema);
