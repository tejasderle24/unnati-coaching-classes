import Gallery from "../models/gallery.model.js";

// Create a new gallery entry
export const createGallery = async (req, res) => {
  try {
    const gallery = new Gallery(req.body);
    await gallery.save();
    res.status(201).json({ success: true, data: gallery });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all gallery entries
export const getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: galleries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single gallery by ID
export const getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery entry not found" });
    }
    res.status(200).json({ success: true, data: gallery });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update gallery by ID
export const updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!gallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery entry not found" });
    }
    res.status(200).json({ success: true, data: gallery });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete gallery by ID
export const deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!gallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery entry not found" });
    }
    res.status(200).json({ success: true, message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
