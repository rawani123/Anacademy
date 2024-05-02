import express from 'express';
import { studentSignup, verifyEmail } from '../controllers/student.controller.js';

const router = express.Router();  

router.get('/verifyemail/:token',verifyEmail);

router.post('/signup',studentSignup);

export default router;