import FacultyMembers from "../models/facultyMembers.js";

// Create a new faculty member
export const createFaculty = async (req, res) => {
  try {
    const faculty = new FacultyMembers(req.body);
    await faculty.save();
    res.status(201).json({ success: true, data: faculty });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all faculty members
export const getAllFaculty = async (req, res) => {
  try {
    const faculty = await FacultyMembers.find();
    res.status(200).json({ success: true, data: faculty });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single faculty by ID
export const getFacultyById = async (req, res) => {
  try {
    const faculty = await FacultyMembers.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ success: false, message: "Faculty not found" });
    }
    res.status(200).json({ success: true, data: faculty });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update faculty by ID
export const updateFaculty = async (req, res) => {
  try {
    const faculty = await FacultyMembers.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!faculty) {
      return res.status(404).json({ success: false, message: "Faculty not found" });
    }
    res.status(200).json({ success: true, data: faculty });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete faculty by ID
export const deleteFaculty = async (req, res) => {
  try {
    const faculty = await FacultyMembers.findByIdAndDelete(req.params.id);
    if (!faculty) {
      return res.status(404).json({ success: false, message: "Faculty not found" });
    }
    res.status(200).json({ success: true, message: "Faculty deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
