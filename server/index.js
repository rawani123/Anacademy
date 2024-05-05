import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan';
import dbConnect from './config/dbConnect.js';
import studentRoutes from './routes/student.routes.js';
import teacherRoutes from './routes/teacher.routes.js';


const app = express();
dotenv.config();
dbConnect(); 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.use('/api/student', studentRoutes);
app.use('/api/teacher', teacherRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});