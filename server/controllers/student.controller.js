import studentModel from "../models/student.model.js";
import bcrypt from "bcryptjs";
import {generateverificationToken,sendVerificationEmail} from "../utils/verifyEmail.js";
import { successFullVerification } from "../utils/emailTemplate.js";

const studentSignup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        console.log(req.body)

        if (!name || !email || !password ) {
            return res.status(400).send({message:"Please fill all the fields",success:false});
        }

        const studentExist = await studentModel.findOne({email});

        if (studentExist) {
            return res.status(400).send({message:"Student already exists",success:false});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(hashedPassword)
        const verificationToken= generateverificationToken(email);
        console.log(verificationToken)
    

        await sendVerificationEmail(email.toLowerCase(),verificationToken , name);
        

        const student = await studentModel.create({
            name,
            email,
            password:hashedPassword,
            verificationToken    
        });


        if (student) {
            return res.status(201).send({message:"Student created successfully",success:true});
        } else {
            return res.status(400).send({message:"Failed to create Student",success:false});
        }
    } catch (error) {
        return res.status(500).send({message:"Error in student Signup",success:false,error:error.message});
    }
}

const verifyEmail = async (req, res) => {
    try {
        const tokenId = req.params.token;
        const user = await studentModel.findOne({ verificationToken: tokenId });

        if (!user) {
            return res.status(404).json({ error: 'Invalid verification token.' });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        const congratulationContent = successFullVerification(user.name);

        res.send(congratulationContent);

    } catch (error) {
        res.status(500).json({ error: 'An error occurred during email verification.' });
        console.log(error);
    }
}

export {studentSignup,verifyEmail}; 

