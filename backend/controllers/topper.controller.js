import Topper from "../models/topper.model.js";

// ✅ Create topper
export const createTopper = async (req, res) => {
  try {
    const topper = new Topper(req.body);
    await topper.save();
    res.status(201).json({ success: true, topper });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get all toppers
export const getToppers = async (req, res) => {
  try {
    const toppers = await Topper.find().sort({ rank: 1 });
    res.json({ success: true, toppers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get topper by ID
export const getTopperById = async (req, res) => {
  try {
    const topper = await Topper.findById(req.params.id);
    if (!topper) {
      return res.status(404).json({ success: false, message: "Topper not found" });
    }
    res.json({ success: true, topper });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update topper
export const updateTopper = async (req, res) => {
  try {
    const topper = await Topper.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!topper) {
      return res.status(404).json({ success: false, message: "Topper not found" });
    }
    res.json({ success: true, topper });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Delete topper
export const deleteTopper = async (req, res) => {
  try {
    const topper = await Topper.findByIdAndDelete(req.params.id);
    if (!topper) {
      return res.status(404).json({ success: false, message: "Topper not found" });
    }
    res.json({ success: true, message: "Topper deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
