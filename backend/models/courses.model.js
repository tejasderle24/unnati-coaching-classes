import mongoose from 'mongoose';

const coursesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    batchSize: { type: Number, required: true },
    price: { type: Number, required: true },
    features: { type: String, required: true },
    image: { type: String, required: true },
    popular: { type: Boolean, required: true },
});

const Courses = mongoose.model('Courses', coursesSchema);

export default Courses;