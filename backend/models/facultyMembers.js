import mongoose from 'mongoose';

const facultyMembersSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    subject: {
      type: String,
      enum: ["Math", "Physics", "Chemistry", "Biology"],
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      min: [0, "Experience must be a positive number"],
    },
    qualification: { type: String, required: true, trim: true },
    image: { type: String, default: "" }, 
},{timestamps:true});

const FacultyMembers = mongoose.model('FacultyMembers', facultyMembersSchema);

export default FacultyMembers;