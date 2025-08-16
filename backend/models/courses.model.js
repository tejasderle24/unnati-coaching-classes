import mongoose from 'mongoose';

const coursesSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true }, // e.g., "6 months"
    batchSize: {
      type: Number,
      required: true,
      min: [1, "Batch size must be at least 1"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number"],
    },
    features: {
      type: [String], // multiple features allowed
      required: true,
    },
    image: { type: String, default: "" }, // optional
    popular: { type: Boolean, default: false },
});

const Courses = mongoose.model('Courses', coursesSchema);

export default Courses;