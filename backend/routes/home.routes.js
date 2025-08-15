import express from 'express';
import { getFaculty, createFaculty } from '../controllers/faculty.controller';

const router = express.Router();

// = = = = = Faculty Members = = = = = 
router.get('/faculty',getFaculty );
router.post('/faculty',createFaculty );

export default router;