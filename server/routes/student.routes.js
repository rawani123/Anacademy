import express from 'express';
import { studentLogin, studentProfile, studentSignup, verifyEmail } from '../controllers/student.controller.js';
import getToken from '../middlware/getToken.js';

const router = express.Router();  

router.get('/verifyemail/:token',verifyEmail);

router.post('/signup',studentSignup);

router.post('/login', studentLogin);

router.get('/profile',getToken,studentProfile);

export default router;