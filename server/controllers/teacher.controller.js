import teacherModel from "../models/teacher.model.js";
import bcrypt from "bcryptjs";
import { generateverificationToken, sendVerificationEmail, sendVerificationEmailToTeacher } from "../utils/verifyEmail.js";
import { successFullVerification } from "../utils/emailTemplate.js";

const teacherSignup = async(req,res)=>{
    try{
        const {name,email,password,phone,address} = req.body;
        if(!name || !email || !password || !phone || !address){
            return res.status(400).send({message:"All fields are required",success:false})
        }
        // console.log(email);
        const existingTeacher = await teacherModel.findOne({email});
        if(existingTeacher){
            return res.status(400).send({message:"Teacher already exists",success:false});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const verificationToken=  generateverificationToken(email);
        console.log(verificationToken)
    

        await sendVerificationEmailToTeacher(email.toLowerCase(),verificationToken , name);
        const teacher = await teacherModel.create({
            name,
            email,
            password:hashedPassword,
            phone,
            address,
            verificationToken
        });
        if(teacher){
            return res.status(201).send({message:"Teacher created successfully",success:true});
        }
    }catch(error){
        console.log(error)
        return res.status(500).send({message:"Error in teacher signup",success:false,error:error.message});
    }
}

const verifyEmailforTeacher = async (req, res) => {
    try {
        const tokenId = req.params.token;
        const teacher = await teacherModel.findOne({ verificationToken: tokenId });

        if (!teacher) {
            return res.status(404).json({ error: 'Invalid verification token.' });
        }

        teacher.isVerified = true;
        teacher.verificationToken = null;
        
        await teacher.save();

        const congratulationContent = successFullVerification(teacher.name);

        res.send(congratulationContent);

    } catch (error) {
        res.status(500).json({ error: 'An error occurred during email verification.' });
        console.log(error);
    }
}

const teacherLogin=async(req,res)=>{
        try {
            const {email, password} = req.body;
            if(!email || !password){
                return res.status(400).send({message:"All fields are required",success:false});
            }
            const teacher = await teacherModel.findOne({email});
            if(!teacher){
                return res.status(404).send({message:"Teacher not found",success:false});
            }
            const isMatch = await bcrypt.compare(password,teacher.password);
            if(!isMatch){
                return res.status(400).send({message:"Invalid credentials",success:false});
            }
            if(!teacher.isVerified){
                return res.status(400).send({message:"Please verify your email",success:false});
            }
            return res.status(200).send({message:"Teacher logged in successfully",success:true});
        } catch (error) {
            return res.status(500).send({message:"Error in teacher login",success:false,error:error.message});
        }
}

export {teacherSignup,verifyEmailforTeacher,teacherLogin};

