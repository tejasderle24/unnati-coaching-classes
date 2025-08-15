import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
    fieldName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String,enum :["jee-main-advanced","neet","jee-crash","neet-crash"], required: true },
    message: { type: String, required: true },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;