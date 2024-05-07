import express from 'express';
import { teacherLogin, teacherSignup, verifyEmailforTeacher } from '../controllers/teacher.controller.js';

const router = express.Router();

router.post('/signup',teacherSignup)

router.get('/verifyemail/:token',verifyEmailforTeacher);

router.post('/login',teacherLogin);

export default router;