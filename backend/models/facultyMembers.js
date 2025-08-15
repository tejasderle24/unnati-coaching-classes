import mongoose from 'mongoose';

const facultyMembersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: {type:String, enum:["MAth","Physices","Chem","Bio"]},
    experience: {type:Number, required:true},
    qualification: { type: String, required: true },
    image: { type: String, required: true }
},{timestamps:true});

const FacultyMembers = mongoose.model('FacultyMembers', facultyMembersSchema);

export default FacultyMembers;