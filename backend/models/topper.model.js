import mongoose from "mongoose";

const topperSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rank: { type: String, required: true },
    exam: { type: String, required: true },
    college: { type: String, required: true },
    year: { type: Number, required: true },
    img: { type: String },
  },
  { timestamps: true }
);

const Topper = mongoose.model("Topper", topperSchema);

export default Topper;
