import express from 'express';
import {
  register,
  verifyOTP,
  login,
  forgotPassword,
  resetPassword,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/verify', verifyOTP);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
