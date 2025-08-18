import express from 'express';
import { createFaculty, deleteFaculty, updateFaculty, getFacultyById, getAllFaculty } from '../controllers/faculty.controller.js';
import { createCourse, deleteCourse,  getAllCourses, getCourseById, updateCourse } from '../controllers/courses.controller.js';
import { createGallery, deleteGallery, getAllGalleries, getGalleryById, updateGallery } from '../controllers/gallery.controller.js';
import { createContact, deleteContact, getAllContacts, getContactById, updateContact } from '../controllers/contact.controller.js';
import { createEnquiry, deleteEnquiry, getAllEnquiries, getEnquiryById, updateEnquiry, } from '../controllers/Enquiry.controller.js';

const router = express.Router();

// = = = = = Faculty Members = = = = = 
router.get('/faculty', getAllFaculty);
router.post('/faculty', createFaculty);
router.get('/faculty/:id', getFacultyById);
router.put('/faculty/:id', updateFaculty);
router.delete('/faculty/:id', deleteFaculty);

// = = = = = Courses = = = = = 
router.post("/courses", createCourse);        // Create course
router.get("/courses", getAllCourses);        // Get all courses
router.get("/courses/:id", getCourseById);     // Get single course
router.put("/courses/:id", updateCourse);      // Update course
router.delete("/courses/:id", deleteCourse);   // Delete course


// = = = = = Gallery = = = = = 
router.post("/gallery", createGallery);        // Create
router.get("/gallery", getAllGalleries);       // Read all
router.get("/gallery/:id", getGalleryById);     // Read single
router.put("/gallery/:id", updateGallery);      // Update
router.delete("/gallery/:id", deleteGallery);

// = = = = = Contact = = = = = 
router.post("/contact", createContact);        // Submit a contact form
router.get("/contact", getAllContacts);        // Get all contact messages
router.get("/contact/:id", getContactById);     // Get one message
router.put("/contact/:id", updateContact);      // Update message (optional)
router.delete("/contact/:id", deleteContact);   // Delete message

// = = = = = Enquiry = = = = = 
router.post("/enquiry", createEnquiry);       // Create
router.get("/enquiry", getAllEnquiries);      // Read all
router.get("/enquiry/:id", getEnquiryById);    // Read single
router.put("/enquiry/:id", updateEnquiry);     // Update
router.delete("/enquiry/:id", deleteEnquiry);  // Delete





export default router;