import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now }, // auto set current date
    description: { type: String, required: true, trim: true },
    images: {
      type: [String], // supports multiple image URLs
      required: true,
    },
    category: {
      type: String,
      enum: ["events", "seminars", "awards"],
      required: true,
      trim: true,
    },
},{timestamps:true});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;