import Enquiry from "../models/enquiry.model.js";

// Create new enquiry
export const createEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ success: true, data: enquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all enquiries
export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single enquiry by ID
export const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found" });
    }
    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update enquiry by ID
export const updateEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found" });
    }
    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete enquiry by ID
export const deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found" });
    }
    res.status(200).json({ success: true, message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
