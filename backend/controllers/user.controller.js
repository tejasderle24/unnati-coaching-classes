import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendMail } from '../utils/mailer.js';
import { otpMailTemplate, verifiedTemplate } from '../utils/templates.js';

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const otp = generateOTP();
  const otpExpiry = Date.now() + 5 * 60 * 1000;

  const user = await User.create({ name, email, password: hashedPassword, otp, otpExpiry });

  await sendMail(email, 'Verify your email', otpMailTemplate(otp));
  res.status(201).json({ message: 'OTP sent to email' });
};

export const verifyOTP = async (req, res) => {
  const { otp } = req.body;

  const user = await User.findOne({
    otp,
    otpExpiry: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  await sendMail(user.email, 'Verified Successfully', verifiedTemplate());
  res.status(200).json({ message: 'Email verified successfully' });
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.isVerified) return res.status(400).json({ message: 'Invalid credentials or unverified email' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
  res.status(200).json({ token, user: { name: user.name, email: user.email } });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const otp = generateOTP();
  const otpExpiry = Date.now() + 5 * 60 * 1000;
  user.otp = otp;
  user.otpExpiry = otpExpiry;
  await user.save();

  await sendMail(email, 'Reset Password OTP', otpMailTemplate(otp));
  res.status(200).json({ message: 'OTP sent for password reset' });
};

export const resetPassword = async (req, res) => {
  const { otp, newPassword } = req.body;

  // Find the user with a matching OTP that hasn't expired
  const user = await User.findOne({
    otp,
    otpExpiry: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  // Hash and update the password
  user.password = await bcrypt.hash(newPassword, 10);
  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  res.status(200).json({ message: 'Password reset successful' });
};


export const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token, success: true });
    } else {
      return res.status(400).json({ message: "Invalid credentials", success: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};