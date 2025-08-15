import express from 'express';
import { getFaculty, createFaculty } from '../controllers/faculty.controller';
import { createCourses, deleteCourses, getCourses, updateCourses } from '../controllers/courses.controller';

const router = express.Router();

// = = = = = Faculty Members = = = = = 
router.get('/faculty',getFaculty );
router.post('/faculty',createFaculty );

// = = = = = Courses = = = = = 
router.get('/courses',getCourses );
router.post('/courses',createCourses );
router.put('/courses/:id',updateCourses );
router.delete('/courses:id',deleteCourses );






export default router;