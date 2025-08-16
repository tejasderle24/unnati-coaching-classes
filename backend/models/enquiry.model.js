import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
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
      match: [/^\d{10}$/, "Phone number must be 10 digits"], // adjust regex if needed
    },
    course: {
      type: String,
      enum: ["jee-main-advanced", "neet", "jee-crash", "neet-crash"],
      required: true,
    },
    message: { type: String, required: true, trim: true },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;