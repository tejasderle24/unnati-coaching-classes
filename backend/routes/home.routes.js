import express from 'express';
import { getFaculty, createFaculty } from '../controllers/faculty.controller.js';
import { createCourses, deleteCourses, getCourses, updateCourses } from '../controllers/courses.controller.js';
import { createGallery, deleteGallery, getGallery, updateGallery } from '../controllers/gallery.controller.js';
import { createContact, getContact } from '../controllers/contact.controller.js';
import { createEnquiry, getEnquiry } from '../controllers/Enquiry.controller.js';

const router = express.Router();

// = = = = = Faculty Members = = = = = 
router.get('/faculty',getFaculty );
router.post('/faculty',createFaculty );

// = = = = = Courses = = = = = 
router.get('/courses',getCourses );
router.post('/courses',createCourses );
router.put('/courses/:id',updateCourses );
router.delete('/courses:id',deleteCourses );

// = = = = = Gallery = = = = = 
router.get('/gallery',getGallery );
router.post('/gallery',createGallery );
router.put('/gallery/:id',updateGallery );
router.delete('/gallery:id',deleteGallery );

// = = = = = Contact = = = = = 
router.get('/contact',getContact );
router.post('/contact',createContact );

// = = = = = Enquiry = = = = = 
router.get('/enquiry',getEnquiry );
router.post('/enquiry',createEnquiry );





export default router;