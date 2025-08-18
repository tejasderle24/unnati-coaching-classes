import Courses from "../models/courses.model.js";

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const course = new Courses(req.body);
    await course.save();
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Courses.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single course by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  try {
    const course = await Courses.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Courses.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
