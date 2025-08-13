import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  otp: String,
  otpExpiry: Date,
  isVerified: { type: Boolean, default: false },
},{timestamps:true});

export const User = mongoose.model('User', userSchema);
