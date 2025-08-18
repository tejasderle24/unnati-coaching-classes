import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"], // adjust regex as needed
    },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;