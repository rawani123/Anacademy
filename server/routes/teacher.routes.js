import express from 'express';
import { teacherSignup } from '../controllers/teacher.controller.js';

const router = express.Router();

router.post('/signup',teacherSignup)

export default router;